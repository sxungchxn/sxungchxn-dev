import 'server-only'
import { cache } from 'react'
import { notion } from '@/api/notion'
import { NotionPageListAdapter } from '@/api/adapter'
import type { QueryPageResponse } from '@/api/types'

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
