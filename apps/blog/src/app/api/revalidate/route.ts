import { revalidatePath, revalidateTag } from 'next/cache'
import type { NextRequest } from 'next/server'
import { ARTICLE_CONTENT, ARTICLE_FOOTER, ARTICLE_HEADER } from '@/constants/cache-key'

export const maxDuration = 60

export async function POST(request: NextRequest) {
  const { revalidateKey, pageId } = (await request.json()) as {
    revalidateKey: string
    pageId: string
  }

  if (pageId && revalidateKey === process.env.REVALIDATE_KEY) {
    revalidateTag(ARTICLE_HEADER(pageId))
    revalidateTag(ARTICLE_CONTENT(pageId))
    revalidateTag(ARTICLE_FOOTER(pageId))
    revalidatePath('/blog', 'page')

    return Response.json({
      revalidated: true,
      now: Date.now(),
      revalidatedPath: `/blog/${pageId}`,
    })
  }

  return Response.json({
    revalidated: false,
    now: Date.now(),
    message: 'Failed to revalidate. Check revalidate key or pageId.',
  })
}
