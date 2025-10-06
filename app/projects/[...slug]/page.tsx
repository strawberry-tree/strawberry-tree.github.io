import { components } from '@/components/MDXComponents'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { sortPosts, coreContent, allCoreContent } from 'pliny/utils/contentlayer'
import { allProjects } from 'contentlayer/generated'
import type { Project } from 'contentlayer/generated'
import ProjectLayout from '@/layouts/ProjectLayout'
import { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'
import { notFound } from 'next/navigation'

const defaultLayout = 'ProjectLayout'

export async function generateMetadata(props: {
  params: Promise<{ slug: string[] }>
}): Promise<Metadata | undefined> {
  const params = await props.params
  const slug = decodeURI(params.slug.join('/'))
  const project = allProjects.find((p) => p.slug === slug)

  if (!project) {
    return
  }

  let imageList = [siteMetadata.socialBanner]
  if (project.images) {
    imageList = typeof project.images === 'string' ? [project.images] : project.images
  }
  const ogImages = imageList.map((img) => {
    return {
      url: img && img.includes('http') ? img : siteMetadata.siteUrl + img,
    }
  })

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      siteName: siteMetadata.title,
      locale: 'ko_KR',
      type: 'article',
      url: './',
      images: ogImages,
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.description,
      images: imageList,
    },
  }
}

export const generateStaticParams = async () => {
  return allProjects.map((p) => ({ slug: p.slug.split('/').map((name) => decodeURI(name)) }))
}

export default async function Page(props: { params: Promise<{ slug: string[] }> }) {
  const params = await props.params
  const slug = decodeURI(params.slug.join('/'))
  const sortedProjects = allCoreContent(
    allProjects
      .filter((p) => p.draft !== true)
      .sort((a, b) => new Date(b.endDate).getTime() - new Date(a.endDate).getTime())
  )
  const projectIndex = sortedProjects.findIndex((p) => p.slug === slug)

  if (projectIndex === -1) {
    return notFound()
  }

  const prev = sortedProjects[projectIndex + 1]
  const next = sortedProjects[projectIndex - 1]
  const project = allProjects.find((p) => p.slug === slug) as Project

  if (project.draft === true) {
    return notFound()
  }

  const mainContent = coreContent(project)

  return (
    <ProjectLayout content={mainContent} next={next} prev={prev}>
      <MDXLayoutRenderer code={project.body.code} components={components} toc={project.toc} />
    </ProjectLayout>
  )
}
