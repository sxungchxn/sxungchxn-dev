import 'server-only'
import { Client } from '@notionhq/client'
import { NotionToMarkdown } from 'notion-to-md'

export const notion = new Client({
  auth: process.env.NOTION_SECRET_ID!,
})

export const n2m = new NotionToMarkdown({
  notionClient: notion,
  config: {
    parseChildPages: false,
  },
})
