/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef, useState } from 'react'

//icons
import { PauseCircleIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const CustomAudioPlayer = ({ file, showVolume = true }: any) => {
  const audioRef: any = useRef()
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(1)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  const togglePlayPause = () => {
    setIsPlaying
    setVolume
    setDuration
    setCurrentTime
  }

  const handleVolumeChange = () => {}

  const handleTimeUpdate = () => {}

  const handleLoadedMetadata = () => {}

  const handleSeekChange = () => {}

  return (
    <div className='w-full flex items-center gap-2 py-2 px-3 rounded-md bg-slate-800'>
      <audio
        ref={audioRef}
        src={file.url}
        controls
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        className='hidden'
      />
      <button onClick={togglePlayPause}>
        {isPlaying && <PauseCircleIcon className='w-6 text-gray-400' />}
        {!isPlaying && <PlayCircleIcon className='w-6 text-gray-400' />}
      </button>

      {showVolume && <input type='range' min='0' max='1' step='0.01' value={volume} onChange={handleVolumeChange} />}
      <input
        type='range'
        className='flex-1'
        min='0'
        max={duration}
        step='0.01'
        value={currentTime}
        onChange={handleSeekChange}
      />
    </div>
  )
}

export default CustomAudioPlayer
