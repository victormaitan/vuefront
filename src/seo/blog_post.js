import omitDeepLodash from 'omit-deep-lodash'
import PostGql from '~/graphql/seo/blog_post.graphql'
export default async ({ client }) => {
  let result = []
  try {
    let res = await client.query({ query: PostGql })
    res = omitDeepLodash(res, '__typename')
    result = res.data.postsList.content
  } catch (e) {}

  return result
}