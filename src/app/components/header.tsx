import Link from "next/link";
import { baseUrl } from "../sitemap";

export default function Header() {
  return (
    <header className="mb-8">
      <Link
        key={baseUrl}
        href={'/'}
        className="transition-all hover:text-neutral-800 align-middle relative text-3xl font-semibold text-gray-500"
      >
        楠 / NaN
      </Link>      
    </header>
  )
}
