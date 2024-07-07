import { revalidatePath, revalidateTag } from 'next/cache'
import type { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  const { revalidateKey, pageId } = (await request.json()) as {
    revalidateKey: string
    pageId: string
  }

  if (pageId && revalidateKey === process.env.REVALIDATE_KEY) {
    revalidateTag(`${pageId}_header`)
    revalidateTag(`${pageId}_content`)
    revalidateTag(`${pageId}_footer`)
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
