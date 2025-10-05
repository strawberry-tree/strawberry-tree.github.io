import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="mr-2 rounded-full border border-primary-500 px-3 py-1 text-xs font-medium text-primary-500 transition-colors hover:bg-primary-500 hover:text-white dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-400"
    >
      {text}
    </Link>
  )
}

export default Tag
