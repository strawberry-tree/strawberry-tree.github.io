// 기존 코드 (주석처리)
// import { Authors, allAuthors } from 'contentlayer/generated'
// import { MDXLayoutRenderer } from 'pliny/mdx-components'
// import AuthorLayout from '@/layouts/AuthorLayout'
// import { coreContent } from 'pliny/utils/contentlayer'
// import { genPageMetadata } from 'app/seo'

// export const metadata = genPageMetadata({ title: 'About' })

// export default function Page() {
//   const author = allAuthors.find((p) => p.slug === 'default') as Authors
//   const mainContent = coreContent(author)

//   return (
//     <>
//       <AuthorLayout content={mainContent}>
//         <MDXLayoutRenderer code={author.body.code} />
//       </AuthorLayout>
//     </>
//   )
// }

// 새로운 코드

import { memo } from 'react'
import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import MainTitle from '@/components/MainTitle'

// 버튼과 소셜 링크를 메모이제이션
const NavigationSection = memo(function NavigationSection() {
  return (
    <>
      {/* 메인 네비게이션 링크 */}
      <div className="flex flex-col flex-wrap items-center justify-center gap-6 pt-8 md:flex-row">
        <Link
          href="https://drive.google.com/file/d/1IRW920OLYh4dVG_UhIj7atZKL_Ttn-mR/view?usp=sharing"
          className="group from-primary-500 to-primary-600 relative overflow-hidden rounded-xl bg-gradient-to-r px-10 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          <span className="relative z-10 flex items-center gap-2 text-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                clipRule="evenodd"
              />
            </svg>
            CV
          </span>
          <div className="from-primary-600 to-primary-700 absolute inset-0 -z-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </Link>
        <Link
          href="/projects"
          className="group border-primary-500 text-primary-500 dark:text-primary-400 relative overflow-hidden rounded-xl border-2 bg-transparent px-10 py-4 font-semibold shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          <span className="relative z-10 flex items-center gap-2 text-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
            </svg>
            포트폴리오
          </span>
          <div className="bg-primary-500 absolute inset-0 -z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
        </Link>
      </div>

      {/* 소셜 링크 */}
      <div className="flex flex-wrap items-center justify-center gap-6 pt-8">
        <a
          href={siteMetadata.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary-500 dark:hover:text-primary-400 flex items-center gap-2 text-gray-600 transition-colors dark:text-gray-400"
          aria-label="GitHub"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-6 w-6 fill-current"
          >
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          <span className="font-medium">GitHub</span>
        </a>
        <a
          href="https://velog.io/@strawberry-tree"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary-500 dark:hover:text-primary-400 flex items-center gap-2 text-gray-600 transition-colors dark:text-gray-400"
          aria-label="Velog"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path d="M19.5 3h-15A1.5 1.5 0 003 4.5v15A1.5 1.5 0 004.5 21h15a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0019.5 3zm-9 12H9V9h1.5v6zm3 0H12V9h1.5v6zm3 0H15V9h1.5v6z" />
          </svg>
          <span className="font-medium">Velog</span>
        </a>
        <a
          href={`mailto:${siteMetadata.email}`}
          className="hover:text-primary-500 dark:hover:text-primary-400 flex items-center gap-2 text-gray-600 transition-colors dark:text-gray-400"
          aria-label="Email"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-6 w-6 fill-current"
          >
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
          <span className="font-medium">Email</span>
        </a>
      </div>
    </>
  )
})

export default function Main() {
  return (
    <div className="flex min-h-[calc(100vh-12rem)] flex-col items-center justify-center">
      <div className="space-y-8 text-center">
        <MainTitle />
        <NavigationSection />
      </div>
    </div>
  )
}
