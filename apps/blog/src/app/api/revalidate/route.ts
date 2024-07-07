import { revalidatePath } from 'next/cache'
import type { NextRequest } from 'next/server'

export function GET(request: NextRequest) {
  const pageId = request.nextUrl.searchParams.get('pageId')
  if (pageId) {
    revalidatePath('/blog', 'page')
    revalidatePath(`/blog/${pageId}`, 'page')
    return Response.json({
      revalidated: true,
      now: Date.now(),
    })
  }

  return Response.json({
    revalidated: false,
    now: Date.now(),
    message: 'Missing path to revalidate',
  })
}
