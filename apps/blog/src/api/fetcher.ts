import 'server-only'
import { cache } from 'react'
import { notion } from '@/api/notion'
import { NotionDataBaseMetaDataAdapter, NotionPageListAdapter } from '@/api/adapter'
import type { DataBaseMetaDataResponse, QueryPageResponse } from '@/api/types'

export const fetchFeaturedArticleList = cache(async () => {
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

  return new NotionPageListAdapter(
    queryResponse.results as Array<QueryPageResponse>,
  ).convertToFeaturedArticleList()
})

export const fetchArticleTagList = cache(async () => {
  const metaDataResponse = await notion.databases.retrieve({
    database_id: process.env.NOTION_DATABASE_ID!,
  })

  return new NotionDataBaseMetaDataAdapter(metaDataResponse as unknown as DataBaseMetaDataResponse)
    .convertToTagList()
    .sort((tag1, tag2) => (tag1.name > tag2.name ? 1 : -1))
})

export const fetchAllArticleList = cache(async () => {
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

  return new NotionPageListAdapter(
    queryResponse.results as Array<QueryPageResponse>,
  ).convertToAllArticleList()
})
