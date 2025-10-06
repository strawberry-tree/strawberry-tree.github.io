import { components } from '@/components/MDXComponents'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { coreContent } from 'pliny/utils/contentlayer'
import { allCVs } from 'contentlayer/generated'
import type { CV } from 'contentlayer/generated'
import CVLayout from '@/layouts/CVLayout'
import { genPageMetadata } from 'app/seo'
import { notFound } from 'next/navigation'

export const metadata = genPageMetadata({ title: 'CV' })

export default function CVPage() {
  const cv = allCVs[0] as CV

  if (!cv) {
    return notFound()
  }

  const mainContent = coreContent(cv)

  return (
    <CVLayout content={mainContent}>
      <MDXLayoutRenderer code={cv.body.code} components={components} toc={cv.toc} />
    </CVLayout>
  )
}
