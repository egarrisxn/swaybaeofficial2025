import Image from 'next/image'
import {enrichTweet} from 'react-tweet'
import {FaXTwitter} from 'react-icons/fa6'
import {RiVerifiedBadgeFill} from 'react-icons/ri'
import {cn} from '@/lib/utils'

const Twitter = ({className, ...props}) => <FaXTwitter className={className} {...props} />

const Verified = ({className, ...props}) => <RiVerifiedBadgeFill className={className} {...props} />

export const truncate = (str, length) => {
  if (!str || str.length <= length) return str
  return `${str.slice(0, length - 3)}...`
}

const Skeleton = ({className, ...props}) => {
  return <div className={cn('rounded-md bg-primary/10', className)} {...props} />
}

export const TweetSkeleton = ({className, ...props}) => (
  <div
    className={cn(
      'flex size-full max-h-max min-w-72 flex-col gap-2 rounded-lg border p-4',
      className,
    )}
    {...props}
  >
    <div className='flex flex-row gap-2'>
      <Skeleton className='size-10 shrink-0 rounded-full' />
      <Skeleton className='h-10 w-full' />
    </div>
    <Skeleton className='h-20 w-full' />
  </div>
)

export const TweetNotFound = ({className, ...props}) => (
  <div
    className={cn(
      'flex size-full flex-col items-center justify-center gap-2 rounded-lg border p-4',
      className,
    )}
    {...props}
  >
    <h3>Tweet not found</h3>
  </div>
)

export const TweetHeader = ({tweet}) => (
  <div className='flex flex-row justify-between tracking-tight'>
    <div className='flex items-center space-x-2'>
      <a href={tweet.user.url} target='_blank' rel='noreferrer'>
        <Image
          title={`Profile picture of ${tweet.user.name}`}
          alt={tweet.user.screen_name}
          height={48}
          width={48}
          src={tweet.user.profile_image_url_https}
          className='overflow-hidden rounded-full border border-transparent'
        />
      </a>
      <div>
        <a
          href={tweet.user.url}
          target='_blank'
          rel='noreferrer'
          className='flex items-center whitespace-nowrap font-semibold'
        >
          {truncate(tweet.user.name, 20)}
          {tweet.user.verified ||
            (tweet.user.is_blue_verified && (
              <Verified className='ml-1 inline size-4 text-blue-500' />
            ))}
        </a>
        <div className='flex items-center space-x-1'>
          <a
            href={tweet.user.url}
            target='_blank'
            rel='noreferrer'
            className='text-sm text-gray-500 transition-all duration-75'
          >
            @{truncate(tweet.user.screen_name, 16)}
          </a>
        </div>
      </div>
    </div>
    <a href={tweet.url} target='_blank' rel='noreferrer'>
      <span className='sr-only'>Link to tweet</span>
      <Twitter className='size-5 items-start transition-all ease-in-out hover:scale-105' />
    </a>
  </div>
)

export const TweetBody = ({tweet}) => (
  <div className='break-words leading-normal tracking-tighter'>
    {tweet.entities.map((entity, idx) => {
      switch (entity.type) {
        case 'url':
        case 'symbol':
        case 'hashtag':
        case 'mention':
          return (
            <a
              key={idx}
              href={entity.href}
              target='_blank'
              rel='noopener noreferrer'
              className='text-sm font-normal text-gray-500'
            >
              <span>{entity.text}</span>
            </a>
          )
        case 'text':
          return (
            <span
              key={idx}
              className='text-sm font-normal'
              dangerouslySetInnerHTML={{__html: entity.text}}
            />
          )
      }
    })}
  </div>
)

export const TweetMedia = ({tweet}) => (
  <div className='flex flex-1 items-center justify-center'>
    {tweet.video && (
      <video
        poster={tweet.video.poster}
        autoPlay
        loop
        muted
        playsInline
        className='rounded-xl border shadow-sm'
      >
        <source src={tweet.video.variants[0].src} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    )}
    {tweet.photos && (
      <div className='relative flex transform-gpu snap-x snap-mandatory gap-4 overflow-x-auto'>
        <div className='shrink-0 snap-center sm:w-2' />
        {tweet.photos.map((photo) => (
          <Image
            key={photo.url}
            src={photo.url}
            title={'Photo by ' + tweet.user.name}
            alt={tweet.text}
            width={400}
            height={256}
            className='h-64 w-5/6 shrink-0 snap-center snap-always rounded-xl border object-cover shadow-sm'
          />
        ))}
        <div className='shrink-0 snap-center sm:w-2' />
      </div>
    )}
    {!tweet.video &&
      !tweet.photos &&
      tweet?.card?.binding_values?.thumbnail_image_large?.image_value.url && (
        <Image
          src={tweet.card.binding_values.thumbnail_image_large.image_value.url}
          alt='alt text'
          width={400}
          height={256}
          className='h-64 rounded-xl border object-cover shadow-sm'
        />
      )}
  </div>
)

export const TweetCard = ({tweet, components, className, ...props}) => {
  const enrichedTweet = enrichTweet(tweet)
  return (
    <div
      className={cn(
        'relative flex size-full max-w-lg flex-col gap-1 overflow-hidden rounded-lg border bg-white p-8 shadow-md backdrop-blur-md sm:max-w-xl lg:max-w-lg lg:p-4 xl:p-8 dark:bg-gradient-to-b dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900',
        className,
      )}
      {...props}
    >
      <TweetHeader tweet={enrichedTweet} />
      <TweetBody tweet={enrichedTweet} />
      <TweetMedia tweet={enrichedTweet} />
    </div>
  )
}
