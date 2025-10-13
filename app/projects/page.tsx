import { allProjects } from 'contentlayer/generated'
import { allCoreContent } from 'pliny/utils/contentlayer'
import Link from '@/components/Link'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

function sortProjects<T extends { endDate?: string }>(projects: T[]): T[] {
  return projects.sort((a, b) => {
    const endA = a.endDate || ''
    const endB = b.endDate || ''
    return endB.localeCompare(endA)
  })
}

export default function Projects() {
  const projects = allCoreContent(sortProjects(allProjects)).filter((p) => p.draft !== true)

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100 print:hidden">
            Projects
          </h1>
          <h1 className="print: mb-2 hidden text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100 print:block">
            송상록
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400 print:hidden">
            지금까지 진행했던 프로젝트를 모아둔 포트폴리오입니다.
          </p>
          <a
            href="mailto:drinkingstraw33@gmail.com"
            className="text-primary-600 dark:text-primary-400 hidden underline print:block"
          >
            drinkingstraw33@gmail.com
          </a>
          <p className="hidden text-lg leading-7 font-bold text-gray-500 dark:text-gray-400 print:block">
            PDF보단{' '}
            <a
              href="https://strawberry-tree.github.io/projects"
              className="text-primary-600 dark:text-primary-400 underline"
            >
              포트폴리오 사이트
            </a>
            의 이용을 추천드립니다.
          </p>
        </div>
        <div className="container py-12 print:w-full print:max-w-full print:px-0 print:pt-0">
          <div className="space-y-8">
            {projects.map((project) => {
              const imgSrc = Array.isArray(project.images) ? project.images[0] : project.images
              return (
                <Link href={`/projects/${project.slug}`} key={project.slug} className="block">
                  <article
                    key={project.slug}
                    className="print:grid-cols-[3fr_6fr]dark:border-gray-700 grid transform grid-cols-1 gap-6 rounded-lg border border-gray-200 p-6 transition-all duration-300 hover:scale-105 hover:border-gray-400 hover:shadow-lg md:grid-cols-[3fr_6fr] dark:hover:border-gray-500 print:grid-cols-[3fr_6fr] print:gap-4"
                  >
                    {imgSrc && (
                      <div>
                        <Image
                          src={imgSrc}
                          alt={project.title}
                          width={400}
                          height={300}
                          quality={95}
                          className="h-full w-full rounded-lg border border-gray-300 object-cover dark:border-gray-700"
                        />
                      </div>
                    )}
                    <div>
                      <h2 className="text-2xl leading-8 font-bold tracking-tight">
                        <div className="text-gray-900 dark:text-gray-100">{project.title}</div>
                      </h2>
                      <div className="mt-2 flex flex-wrap gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <span>{project.period}</span>
                        {project.team && (
                          <>
                            <span>•</span>
                            <span className="print:hidden">{project.team}</span>

                            <span className="hidden print:inline">{project.pages}</span>
                          </>
                        )}
                      </div>
                      <div className="mt-3 flex flex-wrap gap-y-2">
                        {project.tags?.map((tag) => (
                          <Tag key={tag} text={tag} />
                        ))}
                      </div>
                      <p className="mt-3 text-gray-600 dark:text-gray-400">{project.description}</p>
                    </div>
                  </article>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
