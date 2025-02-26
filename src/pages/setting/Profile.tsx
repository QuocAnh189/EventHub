//hooks
import { useState, useEffect } from 'react'
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
import { useUpdateUserMutation, useGetProfileQuery } from '@redux/apis/user.api'
import { setUser } from '@redux/slices/user.slice'

//utils
import formatDate from '@utils/dayjs'

//interface
import { IUser } from '@interfaces/systems/user.interface'
import { IUpdateUserProfilePayload } from '@dtos/user.dto'

//i18n
import { withTranslation } from 'react-i18next'

const Profile = ({ t }: any) => {
  const dispatch = useAppDispatch()

  const user: IUser = useAppSelector((state) => state.persistedReducer.user.user)

  const { data: profile } = useGetProfileQuery()

  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [UpdateUser, { isLoading }] = useUpdateUserMutation()

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    watch
  } = useForm<IUpdateUserProfilePayload>()

  useEffect(() => {
    setValue('id', user?.id)
    setValue('avatarUrl', user?.avatarUrl)
    setValue('email', user?.email)
    setValue('avatar', null)
    setValue('userName', user?.userName)
    setValue('fullName', user?.fullName)
    setValue('phoneNumber', user?.phoneNumber)
    setValue('gender', user.gender)
    setValue('dob', user?.dob ? formatDate(user?.dob, 'YYYY-MM-DD') : '')
    setValue('bio', user?.bio)
  }, [profile])

  const onSubmit: SubmitHandler<IUpdateUserProfilePayload> = async (data: IUpdateUserProfilePayload) => {
    const formData = new FormData()

    for (const key in data) {
      formData.append(key, data[key as keyof IUpdateUserProfilePayload] as string)
    }

    try {
      const result = await UpdateUser({ userId: user?.id!, formData: formData }).unwrap()
      if (result) {
        toast.success('updated successfully')
        setValue('avatar', null)
        dispatch(setUser(result))
      }
    } catch (err) {
      console.log(err)
      toast.error('some thing is wrong')
    }
  }

  return (
    <ProtectedLayout>
      <PageHeader title={t('header profile.title')} />
      {profile && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='widgets-grid md:!grid-cols-2 xl:!grid-cols-[340px,_minmax(0,1fr)]'
        >
          <div className='widgets-grid md:!grid-cols-2 md:col-span-2 xl:!grid-cols-1 xl:col-span-1'>
            <UserProfileCard
              avatarUrl={watch().avatarUrl}
              avatar={watch().avatar}
              setValue={setValue}
              fullName={user.fullName}
              roles={user.roles}
            />
            <div className='widgets-grid'>
              <UserProfilePanel />
              <UserProfileInfo
                email={watch().email}
                totalEvent={profile.totalEvent}
                totalFollower={profile.totalFollower}
                totalFollowing={profile.totalFollowing}
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
      )}
      {modalOpen && <ModalChangePassword modalOpen={modalOpen} setModalOpen={setModalOpen} />}
    </ProtectedLayout>
  )
}

export default withTranslation('profile')(Profile)
