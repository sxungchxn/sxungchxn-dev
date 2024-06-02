import { Grid } from '@sxungchxn/dev-ui'
import { fetchAllArticleList } from '@/api/fetcher'
import * as styles from './all-article-list.css'
import { AllArticleListItem } from '@/components/sections/all-article-list-section/all-article-list/all-article-list-item'

export const AllArticleList = async () => {
  const allArticleList = await fetchAllArticleList()

  return (
    <Grid
      as="ul"
      marginTop="48px"
      width="100%"
      columns={2}
      className={styles.list}
      columnGap="24px"
      rowGap="48px"
    >
      {allArticleList.map(allArticle => (
        <AllArticleListItem key={allArticle.id} article={allArticle} />
      ))}
    </Grid>
  )
}
