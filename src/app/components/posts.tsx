import Link from 'next/link'
import { formatDate, getBlogPosts } from '@/app/posts/utils'

export async function BlogPosts() {
  const allBlogs = await getBlogPosts()

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <div className="flex flex-col mb-4 w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
            <p className="text-neutral-600 tabular-nums">
              {formatDate(post.metadata.publishedAt, false)}
            </p>
            <a className="post text-neutral-900 tracking-tight" href={`/posts/${post.slug}`}>
              {post.metadata.title}
            </a>
          </div>
        ))}
    </div>
  )
}
