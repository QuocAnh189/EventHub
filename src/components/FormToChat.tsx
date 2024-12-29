//hooks
// import { useContext } from 'react'

//context
// import { AppSocketContext } from '@contexts/socket.context'

//util
import classNames from 'classnames'

//i18n
import { withTranslation } from 'react-i18next'

//redux
import { useAppSelector } from '@hooks/useRedux'
interface IProps {
  t: any
  userId: string
  eventId: string
  hostId: string
  eventName: string
  userEmail: string
  userFullName: string
}

const FormToChat = (props: IProps) => {
  const { t, userId, eventId, hostId, eventName, userEmail, userFullName } = props

  // const { handleJoinChatRoom } = useContext(AppSocketContext)

  const socket = useAppSelector((state) => state.socket.socket)

  const handleChatRoom = () => {
    console.log(userId, eventId, hostId)
    socket.emit('message', 'Chat room created')
  }

  return (
    <div className='flex px-[100px] gap-8'>
      <div className='flex flex-col flex-auto gap-5 p-8 rounded-md shadow-xl bg-body'>
        <h1 className='text-2xl font-bold text-header'>{t('conversation.title')}</h1>
        <p className='h6 text-header'>
          {t('conversation.description_one')}
          <br />
          {t('conversation.description_two')}
        </p>
        <div className='flex flex-col gap-3'>
          <div className='flex items-center gap-4 text-header'>
            <div className='field-wrapper'>
              <label className='field-label' htmlFor='qty'>
                {t('conversation.name_label')}
              </label>
              <input
                readOnly
                className={classNames('field-input')}
                id='qty'
                placeholder='Enter name'
                value={userFullName}
              />
            </div>
            <div className='field-wrapper'>
              <label className='field-label' htmlFor='qty'>
                {t('conversation.email_label')}
              </label>
              <input
                readOnly
                className={classNames('field-input')}
                id='qty'
                placeholder='Enter email'
                value={userEmail}
              />
            </div>
          </div>
          <div className='field-wrapper'>
            <label className='field-label' htmlFor='qty'>
              {t('conversation.event_label')}
            </label>
            <input readOnly className={classNames('field-input')} id='qty' value={eventName} />
          </div>
        </div>
        <button
          onClick={handleChatRoom}
          // onClick={() => handleJoinChatRoom && handleJoinChatRoom({ eventId, hostId, userId })}
          className='btn btn-primary w-40 hover:bg-primary-500'
        >
          {t('conversation.start_chat')}
        </button>
      </div>
    </div>
  )
}

export default withTranslation('event_detail')(FormToChat)
