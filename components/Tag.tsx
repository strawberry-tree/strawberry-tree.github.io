interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <span className="mr-2 rounded-full border border-primary-500 px-3 py-1 text-xs font-medium text-primary-500 dark:border-primary-400 dark:text-primary-400">
      {text}
    </span>
  )
}

export default Tag
