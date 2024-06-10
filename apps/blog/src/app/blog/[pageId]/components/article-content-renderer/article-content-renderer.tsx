'use client'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import remarkToc from 'remark-toc'
import rehypeHighlight from 'rehype-highlight'
import remarkRehype from 'remark-rehype'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import 'highlight.js/styles/base16/dracula.min.css'
import { Box, Icon, type LayoutProps, Text } from '@sxungchxn/dev-ui'
import {
  CodeBlock,
  BlockQuote,
  Paragraph,
  Heading,
  List,
  Anchor,
  Divider,
  Table,
  Th,
  Td,
} from '@/app/blog/[pageId]/components/article-content-renderer/components'
import * as styles from './article-content-renderer.css'
import { IconHash } from '@sxungchxn/dev-icons'
import { convertToHastNode } from '@/utils/convert-to-hast-node'

export interface ArticleContentRendererProps extends LayoutProps {
  content: string
}

export const ArticleContentRenderer = ({
  content,
  ...layoutProps
}: ArticleContentRendererProps) => {
  return (
    <Box {...layoutProps} position="relative" maxWidth="100%" className={styles.wrapper}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm, [remarkToc, { tight: false, heading: '목차' }], remarkRehype]}
        rehypePlugins={[
          rehypeRaw,
          rehypeHighlight,
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              content: convertToHastNode(
                <Icon source={IconHash} size={24} color="textSecondary" marginRight="8px" />,
              ),
            },
          ],
        ]}
        components={{
          h1: props => <Heading as="h1" {...props} />,
          h2: props => <Heading as="h2" {...props} />,
          h3: props => <Heading as="h3" {...props} />,
          h4: props => <Heading as="h4" {...props} />,
          hr: Divider,
          img: props => (
            <Box
              asChild
              display="flex"
              position="relative"
              justifyContent="center"
              alignItems="center"
              marginX="auto"
              marginY="24px"
              borderRadius="8px"
              maxWidth="100%"
            >
              <img {...props} />
            </Box>
          ),
          ul: props => <List as="ul" {...props} />,
          ol: props => <List as="ol" {...props} />,
          li: ({ children }) => (
            <Text as="li" variant="body2" color="textPrimary">
              {children}
            </Text>
          ),
          a: Anchor,
          p: Paragraph,
          blockquote: BlockQuote,
          code: CodeBlock,
          table: Table,
          th: Th,
          td: Td,
        }}
      >
        {content}
      </ReactMarkdown>
    </Box>
  )
}
