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
  QueryPageResponse,
} from '@/api/types'
import { getPlaiceholder } from 'plaiceholder'
import { isNil } from '@/utils/is-nil'

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
    convertedFeaturedArticleList.map(async ({ thumbnailUrl, ...rest }) => ({
      ...rest,
      thumbnailUrl,
      blurDataUrl: await fetchBlurDataUrl(thumbnailUrl),
    })),
  )
})

export const fetchArticleTagList = cache(async () => {
  const metaDataResponse = await notion.databases.retrieve({
    database_id: process.env.NOTION_DATABASE_ID!,
  })

  return new NotionDataBaseMetaDataAdapter(metaDataResponse as unknown as DataBaseMetaDataResponse)
    .convertToTagList()
    .sort((tag1, tag2) => (tag1.name > tag2.name ? 1 : -1))
})

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
    convertedAllArticleList.map(async ({ thumbnailUrl, ...rest }) => ({
      ...rest,
      thumbnailUrl,
      blurDataUrl: await fetchBlurDataUrl(thumbnailUrl),
    })),
  )
})

export const fetchArticlePageHeaderData = async (
  pageId: string,
): Promise<ArticlePageHeaderDataWithBlur> => {
  const pageResponse = await notion.pages.retrieve({
    page_id: pageId,
  })

  const convertedArticlePageHeaderData = new NotionPageAdapter(
    pageResponse as QueryPageResponse,
  ).convertToArticlePageHeaderData()
  return {
    ...convertedArticlePageHeaderData,
    blurDataUrl: await fetchBlurDataUrl(convertedArticlePageHeaderData.thumbnailUrl),
  }
}

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

  const prevArticlePageData = isNil(prevArticleId)
    ? undefined
    : await notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID!,
        filter: {
          and: [
            {
              property: 'id',
              number: {
                equals: prevArticleId,
              },
            },
          ],
        },
      })

  const nextArticlePageData = isNil(nextArticleId)
    ? undefined
    : await notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID!,
        filter: {
          and: [
            {
              property: 'id',
              number: {
                equals: nextArticleId,
              },
            },
          ],
        },
      })

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

export const fetchArticlePageContent = async (pageId: string) => {
  const mdBlocks = await n2m.pageToMarkdown(pageId)
  return n2m.toMarkdownString(mdBlocks)
}
