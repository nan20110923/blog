"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = {
  '/': {
    name: '主页',
  },
  '/posts': {
    name: '文章',
  },
}

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <hr className='border-t border-gray-200'/>
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              const pathname = usePathname()
              const isActive = path === pathname
              return (
                <Link
                  key={path}
                  href={path}
                  className={`transition-all hover:text-neutral-800 flex align-middle relative py-1 px-3 m-1 text-sm text-gray-500 ${isActive ? 'text-neutral-800 font-bold' : ''}`}
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
      <hr className='border-t border-gray-200'/>
    </aside>
  )
}
