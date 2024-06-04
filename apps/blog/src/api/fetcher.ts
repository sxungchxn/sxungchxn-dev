import 'server-only'
import { cache } from 'react'
import { notion } from '@/api/notion'
import { NotionDataBaseMetaDataAdapter, NotionPageListAdapter } from '@/api/adapter'
import type {
  AllArticleWithBlur,
  DataBaseMetaDataResponse,
  FeaturedArticleWithBlur,
  QueryPageResponse,
} from '@/api/types'
import { getPlaiceholder } from 'plaiceholder'

export const fetchBlurDataUrl = async (thumbnailUrl: string) => {
  try {
    const buffer = await fetch(thumbnailUrl, {
      cache: 'no-cache',
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
