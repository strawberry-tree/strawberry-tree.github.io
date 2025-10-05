import { ReactNode } from 'react'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Project } from 'contentlayer/generated'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import Tag from '@/components/Tag'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'

interface LayoutProps {
  content: CoreContent<Project>
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
  children: ReactNode
}

export default function ProjectLayout({ content, next, prev, children }: LayoutProps) {
  const { path, title, description, period, team, tags, github, demo, links } = content
  const basePath = path.split('/')[0]

  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <article>
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          <header className="pt-6 xl:pb-6">
            <div className="space-y-4">
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
              <dl className="space-y-2">
                <div className="flex items-center space-x-2 text-base font-medium text-gray-500 dark:text-gray-400">
                  <dt>기간:</dt>
                  <dd>{period}</dd>
                  {team && (
                    <>
                      <span>|</span>
                      <dd>{team}</dd>
                    </>
                  )}
                </div>
              </dl>
              <p className="text-lg text-gray-600 dark:text-gray-400">{description}</p>
              {tags && tags.length > 0 && (
                <div className="flex flex-wrap gap-y-2">
                  {tags.map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </div>
              )}
              {(github || demo || links) && (
                <div className="flex flex-wrap gap-3">
                  {github && (
                    <Link
                      href={github}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      GitHub →
                    </Link>
                  )}
                  {demo && (
                    <Link
                      href={typeof demo === 'string' ? demo : demo.url}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      {typeof demo === 'string' ? 'Demo' : demo.text} →
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
              <div className="prose dark:prose-invert max-w-none pt-10 pb-8">{children}</div>
            </div>
            <footer>
              <div className="divide-gray-200 text-sm leading-5 font-medium dark:divide-gray-700">
                {(next || prev) && (
                  <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
                    {prev && prev.path && (
                      <div>
                        <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                          Previous Project
                        </h2>
                        <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                          <Link href={`/${prev.path}`}>{prev.title}</Link>
                        </div>
                      </div>
                    )}
                    {next && next.path && (
                      <div>
                        <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                          Next Project
                        </h2>
                        <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                          <Link href={`/${next.path}`}>{next.title}</Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="pt-4 xl:pt-8">
                <Link
                  href={`/${basePath}`}
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                  aria-label="Back to projects"
                >
                  &larr; Back to projects
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
