function GitLogo() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
       <image href="/github.svg" width="12" height="12" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="mb-4 mt-4">
      <hr/>
      <div className="mt-4 flex space-x-0 text-neutral-600 flex-row space-x-4 items-center">
        <p className="text-xs">
          © 2011 - {new Date().getFullYear()}
        </p>
        <a rel="noopener noreferrer" target="_blank" href="https://github.com/nan20110923">
          <GitLogo/>
        </a>
      </div>
    </footer>
  )
}
