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
  const { name, occupation, email, github, linkedin, links } = content

  return (
    <SectionContainer>
      <ScrollTop />
      <article>
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          <header className="pt-6 xl:pb-6">
            <div className="space-y-4">
              <div>
                <PageTitle>{name}</PageTitle>
              </div>
              <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">{occupation}</p>
              {email && (
                <p className="text-base">
                  <a
                    href={`mailto:${email}`}
                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 underline"
                  >
                    {email}
                  </a>
                </p>
              )}
              {(github || linkedin || links) && (
                <div className="flex flex-wrap gap-4">
                  {github && (
                    <Link
                      href={github}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      GitHub →
                    </Link>
                  )}
                  {linkedin && (
                    <Link
                      href={linkedin}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
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
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      >
                        {link.text} →
                      </Link>
                    ))}
                </div>
              )}
            </div>
          </header>
          <div className="grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8 xl:divide-y-0 dark:divide-gray-700">
            <div className="divide-y divide-gray-200 xl:col-span-3 xl:row-span-2 xl:pb-0 dark:divide-gray-700">
              <div className="prose prose-lg dark:prose-invert max-w-none pt-10 pb-8 [&_ul]:marker:text-primary-500 [&_a]:text-primary-500 [&_a:hover]:text-primary-600 dark:[&_a]:text-primary-400 dark:[&_a:hover]:text-primary-300">
                {children}
              </div>
            </div>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
