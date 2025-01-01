import Link from 'next/link'
import {Badge} from '@/components/ui/badge'

export default function TagBadge({tag, clickable = true, noColor = false}) {
  const {title, color} = tag

  const tagContent = (
    <Badge
      variant='outline'
      style={{
        backgroundColor: noColor ? 'transparent' : color,
      }}
    >
      {title}
    </Badge>
  )

  return clickable ? <Link href={`/blog/tag/${tag.tagSlug}`}>{tagContent}</Link> : tagContent
}
