import Link from 'next/link'
import type { ContentTag } from '@lib/content'

interface Props {
  tags: ContentTag[]
}

const Tags: React.FC<Props> = ({ tags }) => {
  return (
    <>
      {tags.map(({ name, slug }) => (
        <Link key={`tags-${slug}`} href={`/blog/tags/${slug}`}>
          <a className="inline-block text-gray-100 dark:text-gray-700 bg-gray-700 dark:bg-gray-300 rounded px-4 py-2 text-xs mr-2 mb-2">
            {name}
          </a>
        </Link>
      ))}
    </>
  )
}

export default Tags
