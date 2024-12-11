//hooks
import { useAppDispatch, useAppSelector } from '@hooks/useRedux'
import { SubmitHandler, useForm } from 'react-hook-form'

//components
import PageHeader from '@layouts/components/PageHeader'
import UserProfileCard from '@widgets/UserProfileCard'
import UserProfileDetails from '@widgets/UserProfileDetails'
import UserProfilePanel from '@widgets/UserProfilePanel'
import UserProfileInfo from '@widgets/UserProfileInfo'
import { toast } from 'react-toastify'

//layout
import ProtectedLayout from '@layouts/protected'

//redux
import { useUpdateUserMutation } from '@redux/apis/user.api'
import { setUser } from '@redux/slices/user.slice'

//util
import dayjs from 'dayjs'

//interface
import { IUser } from '@interfaces/systems/user.interface'

//i18n
import { withTranslation } from 'react-i18next'

const Profile = ({ t }: any) => {
  const dispatch = useAppDispatch()

  const user: IUser = useAppSelector((state) => state.persistedReducer.user.user)

  const [UpdateUser, { isLoading }] = useUpdateUserMutation()

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    watch
  } = useForm<IUser>({
    defaultValues: {
      id: user.id,
      avatarUrl: user.avatarUrl,
      email: user.email,
      userName: user.userName,
      fullName: user.fullName,
      phoneNumber: user.phoneNumber,
      gender: user.gender,
      dob: dayjs(user.dob).format('YYYY-MM-DD'),
      bio: user.bio
    }
  })

  const onSubmit: SubmitHandler<IUser> = async (data: any) => {
    const formData = new FormData()

    for (const key in data) {
      formData.append(key, data[key])
    }

    try {
      const result = await UpdateUser({ userId: user?.id!, data: formData }).unwrap()
      if (result) {
        dispatch(setUser(result))
        toast.success('Profile updated successfully')
      }
    } catch (err) {
      console.log(err)
      toast.error('Some thing is wrong')
    }
  }

  return (
    <ProtectedLayout>
      <PageHeader title={t('header profile.title')} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='widgets-grid md:!grid-cols-2 xl:!grid-cols-[340px,_minmax(0,1fr)]'
      >
        <div className='widgets-grid md:!grid-cols-2 md:col-span-2 xl:!grid-cols-1 xl:col-span-1'>
          <UserProfileCard avatar={watch().avatarUrl} setValue={setValue} fullName={user.fullName} roles={user.roles} />
          <div className='widgets-grid'>
            <UserProfilePanel />
            <UserProfileInfo />
          </div>
        </div>
        <UserProfileDetails
          register={register}
          watch={watch}
          setValue={setValue}
          control={control}
          errors={errors}
          isLoading={isLoading}
          roles={user.roles}
        />
      </form>
    </ProtectedLayout>
  )
}

export default withTranslation('profile')(Profile)
