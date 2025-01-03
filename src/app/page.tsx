import { BlogPosts } from '@/app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        {`NaN写字的地方`}
      </h1>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
