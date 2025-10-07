interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <span className="border-primary-500 text-primary-500 dark:border-primary-400 dark:text-primary-400 mr-2 inline-block rounded-full border px-3 py-1 text-sm font-medium whitespace-nowrap print:px-1.5 print:py-0.5 print:text-xs">
      {text}
    </span>
  )
}

export default Tag
