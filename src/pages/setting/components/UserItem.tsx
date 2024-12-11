// hooks
import { useSubmenu } from '@hooks/useSubmenu'

//component
import Spring from '@components/Spring'
import Submenu from '@ui/Submenu'
import SubmenuTrigger from '@ui/SubmenuTrigger'

//interface
import { IUserFollower } from '@interfaces/systems'

//assets
import defaultAvatar from '@assets/images/common/user_default.png'

interface Props {
  index: number
  user: IUserFollower
  following?: boolean
}
const UserItem = (props: Props) => {
  const { index, user, following } = props

  const { anchorEl, open, handleClick, handleClose } = useSubmenu()
  return (
    <Spring type='slideUp' index={index} className='card flex flex-row items-center justify-between'>
      <div className='flex items-center gap-4'>
        <img className='avatar w-20 rounded-lg' src={user.avatarUrl ? user.avatarUrl : defaultAvatar} />
        <div>
          <h5 className='h5 text-lg'>{user.userName}</h5>
          <p className='text-sm text-muted'>{user.email}i</p>
        </div>
      </div>
      <div>
        <SubmenuTrigger onClick={handleClick} />
        <Submenu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <div className='py-5 pl-6 pr-8'>
            <div className='flex flex-col gap-3'>
              <button className='menu-btn subheading-2'>
                <span className='icon-wrapper'>
                  <i className='icon icon-user' />
                </span>
                View Profile
              </button>
              {following && (
                <button className='menu-btn subheading-2'>
                  <span className='icon-wrapper'>
                    <i className='icon icon-user' />
                  </span>
                  Unfollow
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
