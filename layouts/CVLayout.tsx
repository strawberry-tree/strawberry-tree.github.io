import { ReactNode } from 'react'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { CV } from 'contentlayer/generated'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import ScrollTop from '@/components/ScrollTop'
import Link from '@/components/Link'

interface LayoutProps {
  content: CoreContent<CV>
  children: ReactNode
}

export default function CVLayout({ content, children }: LayoutProps) {
  const { name, occupation, email, phone, github, linkedin, links } = content

  return (
    <SectionContainer>
      <ScrollTop />
      <article>
        <div>
          <header className="pt-6">
            <div className="space-y-4 print:space-y-1">
              <div>
                <PageTitle>{name}</PageTitle>
              </div>
              <p className="text-lg leading-4 text-gray-500 dark:text-gray-400">{occupation}</p>
              {(email || phone) && (
                <div className="flex flex-wrap items-center gap-2 text-base">
                  {email && (
                    <a
                      href={`mailto:${email}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 underline"
                    >
                      {email}
                    </a>
                  )}
                  {email && phone && <span className="text-gray-400">|</span>}
                  {phone && (
                    <a
                      href={`tel:${phone}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 underline"
                    >
                      {phone}
                    </a>
                  )}
                </div>
              )}
              {(github || linkedin || links) && (
                <div className="flex flex-wrap gap-4">
                  {github && (
                    <Link
                      href={github}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 print:underline"
                    >
                      GitHub →
                    </Link>
                  )}
                  {linkedin && (
                    <Link
                      href={linkedin}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 print:underline"
                    >
                      LinkedIn →
                    </Link>
                  )}
                  {links &&
                    Array.isArray(links) &&
                    links.map((link, index) => (
                      <Link
                        key={index}
                        href={link.url}
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 print:underline"
                      >
                        {link.text} →
                      </Link>
                    ))}
                </div>
              )}
              <div className="mt-3 hidden text-sm text-gray-500 italic print:block">
                <span className="text-primary-500 underline">분홍색 밑줄</span>을 클릭하면 세부
                내용을 확인하실 수 있습니다.
              </div>
            </div>
          </header>
          <div className="grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8 xl:divide-y-0 dark:divide-gray-700">
            <div className="divide-y divide-gray-200 xl:col-span-3 xl:row-span-2 xl:pb-0 dark:divide-gray-700">
              <div className="prose prose-lg dark:prose-invert [&_ul]:marker:text-primary-500 [&_a]:text-primary-500 [&_a:hover]:text-primary-600 dark:[&_a]:text-primary-400 dark:[&_a:hover]:text-primary-300 max-w-none pt-10 pb-8">
                {children}
              </div>
            </div>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
