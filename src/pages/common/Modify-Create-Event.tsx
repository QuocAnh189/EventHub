//hook
import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

//components
import PageHeader from '@layouts/components/PageHeader'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import InformationEventCreate from '@components/events/create/InformationEventCreate'
import BannerEventCreate from '@components/events/create/BannerEventCreate'
import TicketEventCreate from '@components/events/create/TicketEventCreate'
import ReviewEventCreate from '@components/events/create/ReviewEventCreate'
import DownloadSampleCSV from '@components/DownloadCSV'
import { toast } from 'react-toastify'

//interface & type
import { ICreateEventPayload, InitCreateEventPayload } from '@dtos/event.dto'
import { IEvent } from '@interfaces/contents/event.interface'

//icons
import { IoCreate } from 'react-icons/io5'
import { BiImport } from 'react-icons/bi'

//file
import readXlsxFile from 'read-excel-file'

//redux
import { useCreateEventMutation, useUpdateEventMutation } from '@redux/apis/event.api'
import { useAppSelector } from '@hooks/useRedux'

//util
// import { URLtoFile } from '@utils/url_to_file'

//i18n
import { withTranslation } from 'react-i18next'

//data
import createdSampleData from '@data/created_sample'

//interface
import { IUser } from '@interfaces/systems'

const CREATE_STEP = ['Information', 'Banner Image', 'Set Ticket', 'Review']

interface Props {
  t: any
  title: string
  create?: boolean
  event?: IEvent
}

const ModifyEvent = (props: Props) => {
  const { t, title, create, event } = props

  const user: IUser = useAppSelector((state) => state.persistedReducer.user.user)

  const [createEvent, { isLoading: loadingCreateEvent }] = useCreateEventMutation()
  const [updateEvent, { isLoading: loadingUpdateEvent }] = useUpdateEventMutation()

  const [active, setActive] = useState<number>(create ? -1 : 0)

  const {
    control,
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors }
  } = useForm<any>({
    defaultValues: event ? { ...event, creatorId: user?.id } : { ...InitCreateEventPayload, userId: user?.id }
  })

  // useEffect(() => {
  //   if (event) {
  //     const ConvertToFile = async () => {
  //       try {
  //         const fileCoverImage = event.coverImage ? await URLtoFile(event?.coverImage) : ''
  //         const fileSubImageOne = event?.subImages[0] ? await URLtoFile(event?.subImages[0]) : ''
  //         const fileSubImageTwo = event?.subImages[1] ? await URLtoFile(event?.subImages[1]) : ''
  //         const fileSubImageThree = event?.subImages[2] ? await URLtoFile(event?.subImages[2]) : ''
  //         const fileSubImageFour = event?.subImages[3] ? await URLtoFile(event?.subImages[3]) : ''

  //         setValue('coverImage', fileCoverImage)
  //         setValue('eventSubImages', [fileSubImageOne, fileSubImageTwo, fileSubImageThree, fileSubImageFour])
  //       } catch (e) {
  //         console.log(e)
  //       }
  //     }
  //     ConvertToFile()
  //   }
  // }, [event])

  useEffect(() => {
    const messages = Object.values(errors)
    messages.map((message: any) => toast.error(message.message))
  }, [errors])

  const onSubmit: SubmitHandler<ICreateEventPayload> = async (data: ICreateEventPayload) => {
    const formData: any = new FormData()

    for (const key in data) {
      if (key === 'ticketTypeItems' || key === 'categoryIds' || key === 'subImageItems' || key === 'reasonItems') {
        if (key === 'ticketTypeItems') {
          data[key].forEach((item: any) => formData.append(key, JSON.stringify(item)))
        } else {
          data[key].forEach((item: any) => formData.append(key, item))
        }
      } else {
        formData.append(key, data[key as keyof ICreateEventPayload])
      }
    }

    try {
      const result = create ? await createEvent(formData).unwrap() : await updateEvent(formData).unwrap()
      if (result) {
        toast.success(`${create ? 'Create' : 'Update'} event successfully`)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleFileImport = async (e: any) => {
    e.preventDefault()
    readXlsxFile(e.target.files[0])
      .then((rows: any) => {
        setValue('userId', user.id)
        setValue('name', rows[1][0].toString())
        setValue('eventCycleType', rows[1][1].toString())
        setValue('startTime', rows[1][2].toString())
        setValue('endTime', rows[1][3].toString())
        setValue('location', rows[1][4].toString())
        setValue('description', rows[1][5].toString())
        setValue('reasonItems', JSON.parse(rows[1][6].toString()))
        setValue('eventPaymentType', rows[1][7].toString())
        setValue('ticketTypeItems', JSON.parse(rows[1][8].toString()))
        setValue('isPrivate', JSON.parse(rows[1][9].toString()))
        setValue('categoryIds', [])
        setValue('coverImage', null)
        setValue('subImageItems', [])
      })
      .then(() => {
        setActive(0)
      })
  }

  if (active === -1 && create) {
    return (
      <div className='min-h-screen'>
        <PageHeader title={title} />
        <div className='w-full flex mt-40 justify-center gap-12'>
          <div className='card'>
            <button
              onClick={() => {
                setActive(0)
                reset()
              }}
              className='w-[300px] h-[200px] rounded-lg flex flex-col items-center justify-center gap-2 hover:cursor-pointer'
            >
              <IoCreate size={42} color='var(--header)' />
              <p className='h4 font-bold text-header'>{t('option_one.title')}</p>
              <p className='h6 text-center px-4 text-header'>{t('option_one.description')}</p>
            </button>
          </div>
          <div className='card flex items-center justify-center'>
            <input
              className='h-full w-full opacity-0 z-[1] hover:cursor-pointer'
              type='file'
              accept='.xlsx, .xls'
              onChange={(e) => handleFileImport(e)}
              onAbort={(e) => console.log(e)}
              onClick={(event: any) => (event.target.value = null)}
            />
            <div className='absolute z-[0] h-full w-full rounded-lg flex flex-col items-center justify-center gap-2'>
              <BiImport size={42} color='var(--header)' />
              <p className='h4 font-bold text-header'>{t('option_two.title')}</p>
              <p className='h6 text-center text-header z-[10]'>{t('option_two.description')}</p>
            </div>
            <button
              onClick={() => {
                DownloadSampleCSV({ data: createdSampleData })
              }}
              className='text-primary hover:underline z-[2] pt-2'
            >
              {t('option_two.example_file')}
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='min-h-screen'>
      <PageHeader title={title} />
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={active} alternativeLabel>
          {CREATE_STEP.map((label: string, index: number) => (
            <Step key={`step-${index}`}>
              <StepLabel>
                <p className='h5 text-header'>{label}</p>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      <form onSubmit={handleSubmit(onSubmit)}>
        {active === 0 && (
          <InformationEventCreate
            register={register}
            errors={errors}
            setValue={setValue}
            watch={watch}
            control={control}
            setActive={(value) => {
              setActive(value)
            }}
            create={create!}
          />
        )}

        {active === 1 && (
          <BannerEventCreate
            coverImage={watch().coverImage}
            subImage={watch().subImageItems}
            setValue={setValue}
            setActive={(value) => {
              setActive(value)
            }}
          />
        )}

        {active === 2 && (
          <TicketEventCreate
            register={register}
            eventTicketType={watch().eventPaymentType}
            control={control}
            setValue={setValue}
            setActive={(value) => {
              setActive(value)
            }}
            ticketTypes={watch().ticketTypeItems}
          />
        )}

        {active === 3 && (
          <ReviewEventCreate
            watch={watch}
            setValue={setValue}
            setActive={(value) => {
              setActive(value)
            }}
            disabled={create ? loadingCreateEvent : loadingUpdateEvent}
            create={create!}
          />
        )}
      </form>
    </div>
  )
}

export default withTranslation('create_event')(ModifyEvent)
