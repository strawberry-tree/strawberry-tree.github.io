interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <span className="bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300 mr-2 inline-block rounded-full border px-3 py-1 text-sm font-medium whitespace-nowrap print:px-1.5 print:py-0.5 print:text-xs">
      {text}
    </span>
  )
}

export default Tag
