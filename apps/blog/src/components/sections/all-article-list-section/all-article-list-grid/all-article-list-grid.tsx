import * as styles from './all-article-list-grid.css'
import { Grid } from '@sxungchxn/dev-ui'
import { fetchAllArticleList } from '@/api/fetcher'
import { AllArticleList } from '@/components/sections/all-article-list-section/all-article-list-grid/all-article-list'
import { AllArticleMoreLoadButton } from '@/components/sections/all-article-list-section/all-article-more-load-button/all-article-more-load-button'

export const AllArticleListGrid = async () => {
  const allArticleList = await fetchAllArticleList()
  return (
    <>
      <Grid
        as="ul"
        marginTop="48px"
        width="100%"
        columns={2}
        className={styles.list}
        columnGap="24px"
        rowGap="48px"
      >
        <AllArticleList allArticleList={allArticleList} />
      </Grid>
      <AllArticleMoreLoadButton allArticleList={allArticleList} />
    </>
  )
}
