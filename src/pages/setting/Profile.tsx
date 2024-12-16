//hooks
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '@hooks/useRedux'
import { SubmitHandler, useForm } from 'react-hook-form'

//components
import PageHeader from '@layouts/components/PageHeader'
import UserProfileCard from '@widgets/UserProfileCard'
import UserProfileDetails from '@widgets/UserProfileDetails'
import UserProfilePanel from '@widgets/UserProfilePanel'
import UserProfileInfo from '@widgets/UserProfileInfo'
import ModalChangePassword from './components/ModalChangePassword'
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
import { IUpdateUserProfilePayload } from '@dtos/user.dto'

//i18n
import { withTranslation } from 'react-i18next'

const Profile = ({ t }: any) => {
  const dispatch = useAppDispatch()

  const user: IUser = useAppSelector((state) => state.persistedReducer.user.user)

  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [UpdateUser, { isLoading }] = useUpdateUserMutation()

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    watch
  } = useForm<IUpdateUserProfilePayload>({
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

  const onSubmit: SubmitHandler<IUpdateUserProfilePayload> = async (data: IUpdateUserProfilePayload) => {
    const formData = new FormData()

    for (const key in data) {
      formData.append(key, data[key as keyof IUpdateUserProfilePayload] as string)
    }

    try {
      const result = await UpdateUser({ userId: user?.id!, formData: formData }).unwrap()
      if (result) {
        toast.success('Profile updated successfully')
        dispatch(setUser(result))
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
            <UserProfileInfo
              email={user.email}
              totalEvent={user.totalEvent}
              totalFollower={user.totalFollower}
              totalFollowing={user.totalFollowing}
            />
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
          setModalOpen={setModalOpen}
        />
      </form>
      <ModalChangePassword modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </ProtectedLayout>
  )
}

export default withTranslation('profile')(Profile)
