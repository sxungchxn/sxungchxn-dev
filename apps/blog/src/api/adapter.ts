import type {
  AllArticle,
  ArticleTag,
  DataBaseMetaDataResponse,
  FeaturedArticle,
  QueryPageResponse,
} from '@/api/types'

export class NotionPageListAdapter {
  private pageList: Array<QueryPageResponse>

  constructor(pageList: Array<QueryPageResponse>) {
    this.pageList = pageList
  }

  convertToFeaturedArticleList(): FeaturedArticle[] {
    return this.pageList.map(
      ({
        id: pageId,
        properties: { id, name, description, createdAt, thumbnail },
        created_time,
      }) => ({
        id: id.unique_id.number,
        title: name.title?.[0]?.plain_text ?? '',
        description: description.rich_text?.[0]?.plain_text ?? '',
        createdAt: new Date(createdAt.date?.start ?? created_time),
        thumbnailUrl: thumbnail.files?.[0]?.file.url ?? '기본 이미지 url',
        pageId,
      }),
    )
  }

  convertToAllArticleList(): AllArticle[] {
    return this.pageList.map(
      ({ id: pageId, properties: { id, name, createdAt, tags, thumbnail }, created_time }) => ({
        id: id.unique_id.number,
        title: name.title?.[0]?.plain_text ?? '',
        tagList: tags.multi_select.map(({ id, name }) => ({ id, name })),
        createdAt: new Date(createdAt.date?.start ?? created_time),
        thumbnailUrl: thumbnail.files?.[0]?.file.url ?? '기본 이미지 url',
        pageId,
      }),
    )
  }
}

export class NotionDataBaseMetaDataAdapter {
  private metaData: DataBaseMetaDataResponse

  constructor(metaData: DataBaseMetaDataResponse) {
    this.metaData = metaData
  }

  convertToTagList(): ArticleTag[] {
    return this.metaData.properties.tags.multi_select.options
  }
}
