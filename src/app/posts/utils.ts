import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remarkGfm from 'remark-gfm'
import { bundleMDX } from 'mdx-bundler'

function getMDXFiles(dir: fs.PathLike) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
}

async function readMDXFile(filePath: fs.PathOrFileDescriptor) {
  const rawContent = fs.readFileSync(filePath, 'utf-8')
  const { code } = await bundleMDX({
    source: rawContent,
    mdxOptions: (options) => {
      options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkGfm]
      return options
    },
  })
  return {
    code,
    frontmatter: matter(rawContent),
  }
}

async function getMDXData(dir: fs.PathLike) {
  const mdxFiles = getMDXFiles(dir)
  return Promise.all(mdxFiles.map(async (file) => {
    const { code, frontmatter } = await readMDXFile(path.join(dir.toString(), file))
    const slug = path.basename(file, path.extname(file))

    return {
      metadata: frontmatter.data,
      slug,
      code,
    }
  }))
}

export async function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), 'static', 'posts'))
}

export function formatDate(date: string, includeRelative = false, includeYear = false) {
  const currentDate = new Date()
  if (!date.includes('T')) {
    date = `${date}T00:00:00`
  }
  const targetDate = new Date(date)

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear()
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth()
  const daysAgo = currentDate.getDate() - targetDate.getDate()

  const fullDate = targetDate.toLocaleString('en-us', {
    month: '2-digit',
    day: '2-digit',
    year: includeYear ? 'numeric' : undefined,
  })

  if (!includeRelative) {
    return fullDate
  }

  let formattedDate = ''

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`
  } else {
    formattedDate = 'Today'
  }

  return `${fullDate} (${formattedDate})`
}
