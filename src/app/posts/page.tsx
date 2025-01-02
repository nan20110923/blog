import { BlogPosts } from '@/app/components/posts'

export const metadata = {
  title: 'Posts',
  description: 'Read my post.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">文章</h1>
      <BlogPosts />
    </section>
  )
}
