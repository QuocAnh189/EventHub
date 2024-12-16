//components
import Spring from '@components/Spring'

// //assets
// import userDefault from '@assets/images/common/user_default.png'

//i18n
import { withTranslation } from 'react-i18next'

//intreface
import { IRole } from '@interfaces/systems'

interface IProps {
  avatarUrl: string
  fullName: string
  roles: IRole[]
}
const UserInformationCard = (props: IProps) => {
  const { avatarUrl, fullName, roles } = props

  return (
    <Spring className='relative card flex flex-col items-center gap-2 justify-center'>
      <div className='relative mb-3.5'>
        <img
          loading='lazy'
          className='relative rounded-full w-[110px] h-[110px]'
          src={
            avatarUrl
              ? avatarUrl
              : 'https://res.cloudinary.com/dadvtny30/image/upload/v1723965932/portfolio/hlwrv0ifi9kogw6nktpc.png'
          }
          alt=''
        />
      </div>
      <h4>{fullName}</h4>
      <span className='badge badge--square bg-red min-w-[96px] mt-2.5 text-white'>
        {roles?.map((role: IRole) => role.name).join(', ') || 'Admin'}
      </span>
    </Spring>
  )
}

export default withTranslation('profile')(UserInformationCard)
