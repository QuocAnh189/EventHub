/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useContext } from 'react'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'

//components
import NewMessageInput from './NewMessageInput'
import AttachmentPreview from './AttachmentPreview'
import CustomAudioPlayer from './CustomAudioPlayer'
import AudioRecorder from './AudioRecorder'

//icons
import {
  PaperClipIcon,
  PhotoIcon,
  FaceSmileIcon,
  HandThumbUpIcon,
  PaperAirplaneIcon,
  XCircleIcon
} from '@heroicons/react/20/solid'
import EmojiPicker from 'emoji-picker-react'

//util
import { isAudio, isImage } from '@utils/helpers'

//i18n
import { withTranslation } from 'react-i18next'

//redux
import { useAppSelector } from '@hooks/useRedux'
import { useAddMessageToConversationMutation } from '@redux/apis/conversation.api'

//context
import { AppSocketContext } from '@contexts/socket_io.context'
import Loading from '@components/Loading'

interface IProps {
  t: any
  conversationId: string
  receiverId: string
}
const MessageInput = (props: IProps) => {
  const { t, conversationId, receiverId } = props
  const { SocketSendMessage } = useContext(AppSocketContext)

  const socket = useAppSelector((state) => state.socket.socket)
  const userId = useAppSelector((state) => state.persistedReducer.user.user.id)

  const [newMessage, setNewMessage] = useState('')
  const [inputErrorMessage, setInputErrorMessage] = useState('')
  const [chosenFiles, setChosenFiles] = useState([])
  const [uploadProgress, setUploadProgress] = useState(0)

  const [AddMessage, { isLoading }] = useAddMessageToConversationMutation()

  const onFileChange = () => {
    setInputErrorMessage('')
    setUploadProgress(0)
  }

  const onSendClick = async () => {
    const formData = new FormData()
    formData.append('conversationId', conversationId)
    formData.append('senderId', userId)
    formData.append('receiverId', receiverId)
    formData.append('content', newMessage)

    try {
      const result = await AddMessage(formData).unwrap()
      if (result) {
        if (socket && SocketSendMessage) {
          SocketSendMessage(socket, userId, conversationId, newMessage)
          setNewMessage('')
        }
      }
    } catch (e) {
      console.log(e)
    }
  }

  const onLikeClick = () => {}

  const recordedAudioReady = () => {}

  return (
    <div className='flex flex-wrap items-start border-t border-slate-700 py-3'>
      <div className='order-1 flex xs:flex-none xs:order-1 p-2'>
        <button className='p-1 text-gray-400 hover:text-gray-300 relative'>
          <PaperClipIcon className='w-6 h-6' />
          <input
            type='file'
            multiple
            onChange={onFileChange}
            className='absolute left-0 top-0 right-0 bottom-0 z-20 opacity-0 cursor-pointer'
          />
        </button>

        <button className='p-1 text-gray-400 hover:text-gray-300 relative'>
          <PhotoIcon className='w-6 h-6' />
          <input
            type='file'
            multiple
            onChange={onFileChange}
            className='absolute left-0 top-0 right-0 bottom-0 z-20 opacity-0 cursor-pointer'
          />
        </button>
        <AudioRecorder fileReady={recordedAudioReady} />
      </div>
      <div className='order-2 px-2 xs:p-0 min-w-[220px] basic-full xs:basic-0 xs:order-2 flex-1 relative'>
        <div className='flex h-full'>
          <NewMessageInput
            placeholder={t('box_message.right.placeholder')}
            value={newMessage}
            onSend={onSendClick}
            onChange={(e: any) => setNewMessage(e.target.value)}
          />
          <button onClick={onSendClick} className='btn btn-info rounded-l-none'>
            {isLoading ? (
              <Loading />
            ) : (
              <>
                <PaperAirplaneIcon className='w-4 h-4' />
                <span className='hidden sm:inline'>{t('box_message.right.send')}</span>
              </>
            )}
          </button>
        </div>
        {!!uploadProgress && (
          <progress className='progress progress-info w-full' value={uploadProgress} max='100'></progress>
        )}

        {inputErrorMessage && <div className='text-red-400 text-xs'>{inputErrorMessage}</div>}

        <div className='flex flex-wrap gap-1 mt-2'>
          {chosenFiles.map((file: any, index) => (
            <div
              key={index}
              className={`relative flex justify-between cursor-pointer ` + (!isImage(file.file) ? 'w-[240px]' : '')}
            >
              {isImage(file.file) && <img src={file.url} alt='' className='w-16 h-16 object-cover' />}

              {isAudio(file.file) && <CustomAudioPlayer file={file} showVolume={false} />}

              {!isAudio(file.file) && !isImage(file.file) && <AttachmentPreview file={file} />}

              <button
                onClick={() => {
                  setChosenFiles(chosenFiles.filter((f: any) => f.file.name !== file.file.name))
                }}
                className='absolute w-6 h-6 rounded-full bg-gray-800 -right-2 -top-2 text-gray-300 hover:text-gray-100 z-10'
              >
                <XCircleIcon />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className='order-3 xs:order-3 p-2 flex'>
        <Popover className='relative'>
          <PopoverButton className='p-1 text-gray-400 hover:text-gray-300'>
            <FaceSmileIcon className='w-6 h-6' />
          </PopoverButton>
          <PopoverPanel className='absolute z-10 right-0 bottom-full'>
            <EmojiPicker onEmojiClick={(ev: any) => setNewMessage(newMessage + ev.emoji)}></EmojiPicker>
          </PopoverPanel>
        </Popover>
        <button onClick={onLikeClick} className='p-1 text-gray-400 hover:text-gray-300'>
          <HandThumbUpIcon className='w-6 h-6' />
        </button>
      </div>
    </div>
  )
}

export default withTranslation('common')(MessageInput)
