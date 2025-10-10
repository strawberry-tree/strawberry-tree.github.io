// 기존 코드 (주석처리)
// import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
// import { allBlogs } from 'contentlayer/generated'
// import Main from './Main'

// export default async function Page() {
//   const sortedPosts = sortPosts(allBlogs)
//   const posts = allCoreContent(sortedPosts)
//   return <Main posts={posts} />
// }

// 새로운 코드
import Main from './Main'

export default async function Page() {
  return <Main />
}
