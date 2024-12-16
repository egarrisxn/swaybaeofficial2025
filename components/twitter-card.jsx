'use client'
import {useTweet} from 'react-tweet'
import {TweetCard, TweetNotFound, TweetSkeleton} from '@/components/ui/tweet-card'

export const TwitterCard = ({
  id,
  apiUrl,
  fallback = <TweetSkeleton />,
  components,
  fetchOptions,
  onError,
  ...props
}) => {
  const {data, error, isLoading} = useTweet(id, apiUrl, fetchOptions)

  if (isLoading) return fallback
  if (error || !data) {
    const NotFound = components?.TweetNotFound || TweetNotFound
    return <NotFound error={onError ? onError(error) : error} />
  }

  return <TweetCard tweet={data} components={components} {...props} />
}
