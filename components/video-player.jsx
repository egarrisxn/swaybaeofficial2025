import {VideoDialog} from './ui/video-dialog'

export function VideoPlayer() {
  return (
    <div className='relative'>
      <VideoDialog
        className='block'
        animationStyle='from-center'
        videoSrc='https://www.youtube-nocookie.com/embed/CxDM2AicCME?si=AjzmdEHuw8ZOXTEW'
        thumbnailSrc='/images/sway-yt.webp'
        thumbnailAlt='Alt Video'
      />
    </div>
  )
}
