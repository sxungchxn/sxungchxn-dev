'use client'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import rehypeHighlight from 'rehype-highlight'
import remarkRehype from 'remark-rehype'
import 'highlight.js/styles/base16/dracula.min.css'
import { Box, type LayoutProps, Text } from '@sxungchxn/dev-ui'
import * as styles from './article-content-renderer.css'
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
        remarkPlugins={[remarkGfm, remarkRehype]}
        rehypePlugins={[rehypeRaw, rehypeHighlight]}
        components={{
          h1: props => <Heading as="h1" {...props} />,
          h2: props => <Heading as="h2" {...props} />,
          h3: props => <Heading as="h3" {...props} />,
          h4: props => <Heading as="h4" {...props} />,
          hr: Divider,
          img: props => (
            <Box
              display="flex"
              position="relative"
              justifyContent="center"
              alignItems="center"
              marginX="auto"
              marginY="24px"
              borderRadius="8px"
              maxWidth="100%"
              asChild
            >
              <img {...props} />
            </Box>
          ),
          ul: props => <List as="ul" {...props} />,
          ol: props => <List as="ol" {...props} />,
          li: ({ children }) => (
            <Text as="li" variant="body1" color="textPrimary">
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
