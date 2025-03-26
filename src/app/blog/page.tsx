import Link from 'next/link'
export default async function BlogPage () {
  const mockData = [
    {
      id: 1,
      title: '文章1',
      slug: 'article-1'
    },
    {
      id: 2,
      title: '文章2',
      slug: 'article-2'
    }

  ]
  const posts = mockData
  return (
    <div>
      <h1>博客文章列表</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}