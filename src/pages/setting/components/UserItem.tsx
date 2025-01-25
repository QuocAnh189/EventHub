// hooks
import { useSubmenu } from '@hooks/useSubmenu'
import { useNavigate } from 'react-router-dom'

//component
import Spring from '@components/Spring'
import Submenu from '@ui/Submenu'
import Loading from '@components/Loading'
import SubmenuTrigger from '@ui/SubmenuTrigger'

//interface
import { IUserFollower } from '@interfaces/systems'

//assets
import defaultAvatar from '@assets/images/common/user_default.png'

//redux
import { useUnFollowUserMutation } from '@redux/apis/user.api'
import { toast } from 'react-toastify'

interface Props {
  index: number
  user: IUserFollower
  following?: boolean
  view_profile_text: string
  un_follower_text?: string
}
const UserItem = (props: Props) => {
  const { index, user, following, view_profile_text, un_follower_text } = props

  const navigate = useNavigate()

  const [UnfollowUser, { isLoading }] = useUnFollowUserMutation()

  const handleUnfollowUser = async () => {
    try {
      const result = await UnfollowUser(user.id!).unwrap()

      if (result) {
        toast.success('UnFollow successfully')
      }
    } catch (e) {
      console.log(e)
      toast.error('Something went wrong')
    }
  }

  const { anchorEl, open, handleClick, handleClose } = useSubmenu()
  return (
    <Spring type='slideUp' index={index} className='card flex flex-row items-center justify-between'>
      <div className='flex items-center gap-4'>
        <img className='avatar w-20 rounded-lg' src={user.avatarUrl ? user.avatarUrl : defaultAvatar} />
        <div>
          <h5 className='h5 text-lg'>{user.userName}</h5>
          <p className='text-sm text-muted text-header'>{user.email}i</p>
        </div>
      </div>
      <div>
        <SubmenuTrigger onClick={handleClick} />
        <Submenu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <div className='py-5 pl-6 pr-8'>
            <div className='flex flex-col gap-3'>
              <button
                onClick={() => {
                  navigate(`/organization/profile/${user.id}`)
                }}
                className='menu-btn subheading-2'
              >
                <span className='icon-wrapper'>
                  <i className='icon icon-user' />
                </span>
                {view_profile_text}
              </button>
              {following && (
                <button onClick={handleUnfollowUser} className='menu-btn subheading-2'>
                  <span className='icon-wrapper'>
                    <i className='icon icon-user' />
                  </span>
                  {isLoading ? <Loading /> : un_follower_text}
                </button>
              )}
            </div>
          </div>
        </Submenu>
      </div>
    </Spring>
  )
}

export default UserItem
