import type { ReactElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { fromHtmlIsomorphic } from 'hast-util-from-html-isomorphic'

export const convertToHastNode = (jsxNode: ReactElement) => {
  return fromHtmlIsomorphic(renderToStaticMarkup(jsxNode), {
    fragment: true,
  }).children
}
