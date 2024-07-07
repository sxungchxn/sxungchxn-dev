import 'server-only'
import { cache } from 'react'
import { n2m, notion } from '@/api/clients'
import {
  NotionDataBaseMetaDataAdapter,
  NotionPageAdapter,
  NotionPageListAdapter,
} from '@/api/adapter'
import type {
  AllArticleWithBlur,
  ArticlePageFooterData,
  ArticlePageHeaderDataWithBlur,
  DataBaseMetaDataResponse,
  FeaturedArticleWithBlur,
  FileImageBlock,
  QueryPageResponse,
} from '@/api/types'
import { getPlaiceholder } from 'plaiceholder'
import { isNil } from '@/utils/is-nil'
import { cloudinaryApi } from '@/api/cloudinary'
import type {
  GetBlockResponse,
  ImageBlockObjectResponse,
  ListBlockChildrenResponse,
} from '@notionhq/client/build/src/api-endpoints'

/**
 * thumbnailUrl을 blurdataUrl로 변환하는 함수
 */
export const fetchBlurDataUrl = async (thumbnailUrl: string) => {
  try {
    const buffer = await fetch(thumbnailUrl, {
      cache: process.env.NODE_ENV === 'development' ? 'no-cache' : 'default',
    }).then(async res => Buffer.from(await res.arrayBuffer()))
    const { base64 } = await getPlaiceholder(buffer)
    return base64
  } catch (err) {
    return thumbnailUrl
  }
}

/**
 * featured article 목록을 조회해오는 함수
 */
export const fetchFeaturedArticleList = cache(async (): Promise<FeaturedArticleWithBlur[]> => {
  const queryResponse = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    filter: {
      and: [
        {
          property: 'releasable',
          checkbox: {
            equals: true,
          },
        },
        {
          property: 'featured',
          checkbox: {
            equals: true,
          },
        },
      ],
    },
    sorts: [
      {
        property: 'createdAt',
        direction: 'descending',
      },
    ],
  })

  const convertedFeaturedArticleList = new NotionPageListAdapter(
    queryResponse.results as Array<QueryPageResponse>,
  ).convertToFeaturedArticleList()

  return Promise.all(
    convertedFeaturedArticleList.map(async ({ thumbnailUrl, pageId, ...rest }) => ({
      ...rest,
      pageId,
      thumbnailUrl: await cloudinaryApi.convertToPermanentImage(
        thumbnailUrl,
        `${pageId}_thumbnail`,
      ),
      blurDataUrl: await fetchBlurDataUrl(thumbnailUrl),
    })),
  )
})

/**
 * article tag 목록을 조회해오는 함수
 */
export const fetchArticleTagList = cache(async () => {
  const metaDataResponse = await notion.databases.retrieve({
    database_id: process.env.NOTION_DATABASE_ID!,
  })

  return new NotionDataBaseMetaDataAdapter(metaDataResponse as unknown as DataBaseMetaDataResponse)
    .convertToTagList()
    .sort((tag1, tag2) => (tag1.name > tag2.name ? 1 : -1))
})

/**
 * 전체 아티클들의 목록을 조회해오는 함수
 */
export const fetchAllArticleList = cache(async (): Promise<AllArticleWithBlur[]> => {
  const queryResponse = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    filter: {
      and: [
        {
          property: 'releasable',
          checkbox: {
            equals: true,
          },
        },
      ],
    },
    sorts: [
      {
        property: 'createdAt',
        direction: 'descending',
      },
    ],
  })

  const convertedAllArticleList = new NotionPageListAdapter(
    queryResponse.results as Array<QueryPageResponse>,
  ).convertToAllArticleList()

  return Promise.all(
    convertedAllArticleList.map(async ({ thumbnailUrl, pageId, ...rest }) => {
      const convertedThumbnailUrl = await cloudinaryApi.convertToPermanentImage(
        thumbnailUrl,
        `${pageId}_thumbnail`,
      )

      return {
        ...rest,
        pageId,
        thumbnailUrl: convertedThumbnailUrl,
        blurDataUrl: await fetchBlurDataUrl(convertedThumbnailUrl),
      }
    }),
  )
})

/**
 * 해당 아티클 페이지의 header 부분의 데이터를 불러오는 함수
 */
export const fetchArticlePageHeaderData = async (
  pageId: string,
): Promise<ArticlePageHeaderDataWithBlur> => {
  const pageResponse = await notion.pages.retrieve({
    page_id: pageId,
  })

  const { thumbnailUrl, ...rest } = new NotionPageAdapter(
    pageResponse as QueryPageResponse,
  ).convertToArticlePageHeaderData()

  const convertedThumbnailUrl = await cloudinaryApi.convertToPermanentImage(
    thumbnailUrl,
    `${pageId}_thumbnail`,
  )

  return {
    ...rest,
    thumbnailUrl: convertedThumbnailUrl,
    blurDataUrl: await fetchBlurDataUrl(convertedThumbnailUrl),
  }
}

/**
 * 해당 아티클 페이지의 footer 부분의 데이터를 불러오는 함수
 */
export const fetchArticlePageFooterData = async (
  pageId: string,
): Promise<ArticlePageFooterData> => {
  const {
    properties: {
      prevArticleId: { number: prevArticleId },
      nextArticleId: { number: nextArticleId },
    },
  } = (await notion.pages.retrieve({
    page_id: pageId,
  })) as QueryPageResponse

  const [prevArticlePageData, nextArticlePageData] = await Promise.all(
    [prevArticleId, nextArticleId].map(articleId => {
      if (isNil(articleId)) {
        return undefined
      }
      return notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID!,
        filter: {
          and: [
            {
              property: 'id',
              number: {
                equals: articleId,
              },
            },
          ],
        },
      })
    }),
  )

  return {
    prevArticle: prevArticlePageData
      ? new NotionPageAdapter(
          prevArticlePageData?.results[0] as QueryPageResponse,
        ).convertToArticleLinkerData()
      : undefined,
    nextArticle: nextArticlePageData
      ? new NotionPageAdapter(
          nextArticlePageData?.results[0] as QueryPageResponse,
        ).convertToArticleLinkerData()
      : undefined,
  }
}

/**
 * 해당 아티클 페이지의 모든 block들을 불러오는 함수
 */
export const fetchAllBlocksInPage = cache(
  async (blockOrPageId: string): Promise<GetBlockResponse[]> => {
    let hasMore = true
    let nextCursor: string | null = null
    const blocks: GetBlockResponse[] = []
    while (hasMore) {
      const result: ListBlockChildrenResponse = await notion.blocks.children.list({
        block_id: blockOrPageId,
        start_cursor: nextCursor ?? undefined,
      })

      blocks.push(...result.results)
      hasMore = result.has_more
      nextCursor = result.next_cursor

      if (hasMore) {
        console.log('load more blocks in page...')
      }
    }

    // nested block(ex - toggle block) 불러오기
    const childBlocks = await Promise.all(
      blocks
        .filter(block => 'has_children' in block && block.has_children)
        .map(async block => {
          const childBlocks = await fetchAllBlocksInPage(block.id)
          return childBlocks
        }),
    )

    return [...blocks, ...childBlocks.flat()]
  },
)

/**
 * 해당 아티클 페이지의 모든 image block들을 불러오는 함수
 */
export const fetchAllImageBlocksInPage = cache(async (pageId: string) => {
  const allBlocks = await fetchAllBlocksInPage(pageId)
  return allBlocks.filter(
    block => 'type' in block && block.type === 'image',
  ) as ImageBlockObjectResponse[]
})

/**
 * 페이지 내의 image 블락들을 불러들여 파싱 진행
 */
export const updateImageBlocks = async (pageId: string) => {
  const allImageBlocks = await fetchAllImageBlocksInPage(pageId)

  for (const [index, imageBlock] of allImageBlocks.entries()) {
    const { image, id: blockId } = imageBlock
    // notion에 직접 업로드된 이미지 파일들만 cloudinary에 업로드하여 변환
    if ('type' in image && image.type === 'file') {
      const convertedImageUrl = await cloudinaryApi.convertToPermanentImage(
        (image as FileImageBlock).file.url,
        `${pageId}_imageblock_${index + 1}`,
      )
      await notion.blocks.update({
        block_id: blockId,
        image: {
          external: {
            url: convertedImageUrl,
          },
        },
      })
    }
  }
}

/**
 * 해당 아티클 페이지의 content 부분의 데이터를 불러오는 함수
 */
export const fetchArticlePageContent = async (pageId: string) => {
  await updateImageBlocks(pageId)

  const mdBlocks = await n2m.pageToMarkdown(pageId)
  return n2m.toMarkdownString(mdBlocks)
}
