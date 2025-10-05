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
  const projects = allCoreContent(sortProjects(allProjects))

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            현재까지 진행했던 프로젝트들입니다.
          </p>
        </div>
        <div className="container py-12">
          <div className="space-y-8">
            {projects.map((project) => {
              const imgSrc = Array.isArray(project.images) ? project.images[0] : project.images
              return (
                <article
                  key={project.slug}
                  className="flex flex-col space-y-1 rounded-lg border border-gray-200 p-6 md:flex-row md:space-y-0 md:space-x-6 dark:border-gray-700"
                >
                  {imgSrc && (
                    <div className="flex-shrink-0">
                      <Link href={`/projects/${project.slug}`}>
                        <Image
                          src={imgSrc}
                          alt={project.title}
                          width={400}
                          height={300}
                          quality={95}
                          className="rounded-lg object-cover"
                        />
                      </Link>
                    </div>
                  )}
                  <div className="flex-1">
                    <h2 className="text-2xl leading-8 font-bold tracking-tight">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="text-gray-900 dark:text-gray-100"
                      >
                        {project.title}
                      </Link>
                    </h2>
                    <div className="mt-2 flex flex-wrap gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <span>{project.period}</span>
                      {project.team && (
                        <>
                          <span>•</span>
                          <span>{project.team}</span>
                        </>
                      )}
                    </div>
                    <div className="mt-3 flex flex-wrap gap-y-2">
                      {project.tags?.map((tag) => <Tag key={tag} text={tag} />)}
                    </div>
                    <p className="mt-3 text-gray-600 dark:text-gray-400">{project.description}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
