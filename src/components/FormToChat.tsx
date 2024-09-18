//hook
import { useContext } from 'react'

//component
import FormControl from '@mui/material/FormControl'

//context
import { AppSocketContext } from '@contexts/socket.context'

//util
import classNames from 'classnames'

interface Props {
  userId: string
  eventId: string
  hostId: string
  eventName: string
  userEmail: string
  userFullName: string
}

const FormToChat = (props: Props) => {
  const { userId, eventId, hostId, eventName, userEmail, userFullName } = props

  const { handleJoinChatRoom } = useContext(AppSocketContext)

  return (
    <div className='flex px-[100px] gap-8'>
      <div className='flex flex-col flex-auto gap-5 p-8 rounded-md shadow-xl bg-body'>
        <h1 className='text-2xl font-bold text-header'>Conversation</h1>
        <p className='text-header'>
          If you have any questions or problems related to this event.
          <br />
          Do not hesitate to contact me.
        </p>
        <FormControl>
          <div className='flex flex-col gap-3'>
            <div className='flex items-center gap-4 text-header'>
              <div className='field-wrapper'>
                <label className='field-label' htmlFor='qty'>
                  Name
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
                  Email
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
                Event
              </label>
              <input readOnly className={classNames('field-input')} id='qty' value={eventName} />
            </div>
          </div>
        </FormControl>
        <button
          onClick={() => handleJoinChatRoom && handleJoinChatRoom({ eventId, hostId, userId })}
          className='btn btn-primary w-40 hover:bg-primary-500'
        >
          Start Chat
        </button>
      </div>
    </div>
  )
}

export default FormToChat
