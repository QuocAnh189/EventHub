//component
import Spring from '@components/Spring'

//interface
import { IUserInvitation } from '@interfaces/systems'

//assets
import defaultAvatar from '@assets/images/common/user_default.png'

//redux
import { useCheckInvitationQuery } from '@redux/apis/user.api'

interface IProps {
  index: number
  checked: boolean
  user: IUserInvitation
  text_invited?: string
  onChange: (id: any) => void
}
const InvitationUserItem = (props: IProps) => {
  const { index, user, checked, onChange, text_invited } = props

  const { data: isInvitation } = useCheckInvitationQuery(user.id!)

  return (
    <Spring type='slideUp' index={index} className='card flex flex-row items-center justify-between'>
      <div className='flex items-center gap-4'>
        <img className='avatar w-20 rounded-lg' src={user.avatarUrl ? user.avatarUrl : defaultAvatar} />
        <div>
          <h5 className='h5 text-lg'>{user.userName}</h5>
          <p className='text-sm text-muted'>{user.email}i</p>
        </div>
      </div>
      {isInvitation ? (
        <button disabled className='btn w-20'>
          <span className='text-black'>{text_invited}</span>
        </button>
      ) : (
        <input onChange={() => onChange(user.id)} checked={checked} type='checkbox' className='w-4 h-4' />
      )}
    </Spring>
  )
}

export default InvitationUserItem
