import 'server-only'
import { Client } from '@notionhq/client'

export const notion = new Client({
  auth: process.env.NOTION_SECRET_ID!,
})
