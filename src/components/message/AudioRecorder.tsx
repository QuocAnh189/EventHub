import { useState } from 'react'

//icons
import { MicrophoneIcon, StopCircleIcon } from '@heroicons/react/20/solid'

const AudioRecorder = ({ fileReady }: any) => {
  const [mediaRecorder, setMediaRecorder] = useState<any>(null)
  const [recording, setRecording] = useState(false)

  const onMicrophoneClick = async () => {
    if (recording) {
      setRecording(false)
      if (mediaRecorder) {
        mediaRecorder.stop()
        setMediaRecorder(null)
      }
      return
    }
    setRecording(true)

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const newMediaRecorder = new MediaRecorder(stream)
      const chunks: any = []
      newMediaRecorder.addEventListener('dataavailable', (event) => {
        chunks.push(event.data)
      })
      newMediaRecorder.addEventListener('stop', () => {
        const audioBlob = new Blob(chunks, {
          type: 'audio/ogg; codecs=opus'
        })
        const audioFile = new File([audioBlob], 'recorded_audio.ogg', {
          type: 'audio/ogg; codecs=opus'
        })
        const url = URL.createObjectURL(audioFile)
        fileReady(audioFile, url)
      })
      newMediaRecorder.start()
      setMediaRecorder(newMediaRecorder)
    } catch (error: any) {
      console.log(error)
      setRecording(false)
    }
  }

  return (
    <button onClick={onMicrophoneClick} className='p-1 text-gray-400 hover:text-gray-200'>
      {recording && <StopCircleIcon className='w-6 text-red-600' />}
      {!recording && <MicrophoneIcon className='w-6' />}
    </button>
  )
}

export default AudioRecorder
