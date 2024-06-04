import type {
  DatabaseObjectResponse,
  PageObjectResponse,
  TextRichTextItemResponse,
} from '@notionhq/client/build/src/api-endpoints'

/**
 * api로 부터 받아오는 노션 page response
 * property들은 노션 데이터베이스 schema를 따른다.
 */
export interface QueryPageResponse extends Omit<PageObjectResponse, 'properties'> {
  properties: {
    id: {
      type: 'unique_id'
      unique_id: {
        prefix: string | null
        /** 데이터베이스 상에서 자동으로 부여되는 ID */
        number: number
      }
      id: string
    }
    name: {
      type: 'title'
      title: Array<TextRichTextItemResponse>
      id: string
    }
    description: {
      type: 'rich_text'
      rich_text: Array<TextRichTextItemResponse>
      id: string
    }
    tags: {
      type: 'multi_select'
      multi_select: Array<{
        id: string
        name: string
        color:
          | 'default'
          | 'gray'
          | 'brown'
          | 'orange'
          | 'yellow'
          | 'green'
          | 'blue'
          | 'purple'
          | 'pink'
          | 'red'
      }>
      id: string
    }
    featured: {
      type: 'checkbox'
      checkbox: boolean
      id: string
    }
    createdAt: {
      type: 'date'
      date: {
        start: string
        end: string | null
      } | null
      id: string
    }
    updatedAt: {
      type: 'last_edited_time'
      last_edited_time: string
      id: string
    }
    thumbnail: {
      type: 'files'
      files: Array<{
        id: string
        file: {
          url: string
          expiry_time: string
        }
        name: string
        type?: 'file'
      }>
    }
    releasable: { type: 'checkbox'; checkbox: boolean; id: string }
  }
}

export interface DataBaseMetaDataResponse extends Omit<DatabaseObjectResponse, 'properties'> {
  properties: {
    tags: {
      type: 'multi_select'
      multi_select: {
        options: Array<{
          id: string
          name: string
          description: string | null
        }>
      }
      id: string
      name: string
    }
  }
}

/** 주요 게시글 */
export interface FeaturedArticle {
  /** notion database id property */
  id: number
  /** 게시글 제목 */
  title: string
  /** 게시글 description */
  description: string
  /** 게시글 생성 일자*/
  createdAt: Date
  /** 게시글 썸네일 url */
  thumbnailUrl: string
  /** queried notion page id */
  pageId: string
}

export interface FeaturedArticleWithBlur extends FeaturedArticle {
  /** blurData url */
  blurDataUrl: string
}

/** 게시글 태그 */
export interface ArticleTag {
  id: string
  name: string
}

/** 모든 게시글 항목에 있는 게시글 */
export interface AllArticle {
  /** notion database id property */
  id: number
  /** 게시글 제목 */
  title: string
  /** 게시글 태그 목록 */
  tagList: ArticleTag[]
  /** 게시글 생성 일자*/
  createdAt: Date
  /** 게시글 썸네일 url */
  thumbnailUrl: string
  /** queried notion page id */
  pageId: string
}

export interface AllArticleWithBlur extends AllArticle {
  /** blurData url */
  blurDataUrl: string
}
