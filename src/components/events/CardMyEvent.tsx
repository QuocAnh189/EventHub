//hooks
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

//components
import CircularProgress from '@mui/material/CircularProgress'
import ConfirmDialog from '@components/Dialog'
import Checkbox from '@mui/material/Checkbox'
import Spring from '@components/Spring'
import { toast } from 'react-toastify'

//icons
import { HiPencilAlt, HiTrash } from 'react-icons/hi'
import { FaCalendarAlt } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'

//interfaces
import { IEvent } from '@interfaces/contents/event.interface'

//util
import dayjs from 'dayjs'

//redux
import { useDeleteEventMutation, useRestoreEventMutation } from '@redux/apis/event.api'

//i18n
import { withTranslation } from 'react-i18next'

interface Props {
  t: any
  event: IEvent
  checkedAll: boolean
  eventIds: string[]
  onChecked: (id: string) => void
  refect: any
  index: number
}

const CardMyEvent = (props: Props) => {
  const { t, checkedAll, event, onChecked, eventIds, refect, index } = props
  const navigate = useNavigate()

  const [restoreEvent, { isLoading: loadingRestore }] = useRestoreEventMutation()
  // const [trashEvent, { isLoading: loadingTrash }] = useMoveEventTrashMutation()
  const [deleteEvent, { isLoading: loadingDelete }] = useDeleteEventMutation()
  const [openDialog, setOpenDialog] = useState<boolean>(false)
  const [select, setSelect] = useState<boolean>(checkedAll)

  const handleChange = () => {
    setSelect(!select)
    onChecked(event.id!)
  }

  const handleEditEvent = () => {
    navigate(`update-event/${event.id}`)
  }

  const handleRestoreEvent = async () => {
    try {
      const result = await restoreEvent([event.id!]).unwrap()

      if (result) {
        toast.success('Restore Event successfully')
        refect()
      }
    } catch (e) {
      console.log(e)
    }
  }

  const handleDelete = () => {
    setOpenDialog(true)
  }

  const handleTrashEvent = async () => {
    // try {
    //   const result = await trashEvent([event.id!]).unwrap()
    //   if (result) {
    //     toast.success('Move event to trash successfully')
    //     refect()
    //     setOpenDialog(false)
    //   }
    // } catch (e) {
    //   console.log(e)
    // }
  }

  const handleDeleteEvent = async () => {
    try {
      const result = await deleteEvent(event.id!).unwrap()
      if (result) {
        toast.success('Delete event successfully')
        refect()
        setOpenDialog(false)
      }
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Spring type='slideUp' index={index}>
      <div className='card flex flex-row w-full h-[200px] rounded-lg shadow-2xl transition-transform hover:scale-[1.005] dark:bg-gray-800'>
        <div className='relative flex w-[400px] h-full items-center justify-between max-md:hidden'>
          <img
            loading='lazy'
            className='w-full h-full rounded-l-lg object-cover transition duration-700 hover:skew-x-2 hover:scale-110'
            src={
              event.coverImage
                ? event.coverImage
                : 'https://res.cloudinary.com/dadvtny30/image/upload/v1712409123/eventhub/event/w3xvrrue35iu1gncudsa.jpg'
            }
            alt=''
          />
        </div>

        <div className='w-full h-full flex flex-col justify-between px-5 py-4'>
          <div>
            <p className='h4 mb-4 line-clamp-1 text-2xl truncate text-ellipsis w-[300px] font-bold tracking-tight text-gray-900 dark:text-white max-md:text-base'>
              {event.name}
            </p>
            <div className='flex items-center gap-2 opacity-70 text-gray'>
              <FaCalendarAlt />
              <span className='h6'>{dayjs(event.startTime).format('DD/MM/YYYY dddd - hh:mm A').toString()}</span>
            </div>
            <div className='flex items-center gap-2 opacity-70 text-gray mt-4'>
              <IoLocationSharp />
              <span className='h6'>{event.location}</span>
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <Checkbox checked={eventIds.includes(event.id!)} onChange={handleChange} sx={{ color: 'var(--header)' }} />
            <div className='w-full justify-end flex gap-4 pt-2'>
              <button
                onClick={event.isTrash ? handleRestoreEvent : handleEditEvent}
                className='flex items-center justify-center rounded-lg bg-blue px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                {event.isTrash ? (
                  loadingRestore ? (
                    <CircularProgress size={24} />
                  ) : (
                    t('management.button_restore')
                  )
                ) : (
                  t('management.button_edit')
                )}
                <HiPencilAlt className='ml-2 h-6 w-6 text-white' />
              </button>

              <button
                onClick={handleDelete}
                className='flex items-center justify-center rounded-lg bg-yellow px-3 py-2 text-center text-sm font-medium text-header hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'
              >
                <span className='text-black'>
                  {event.isTrash ? t('management.button_delete') : t('management.button_trash')}
                </span>
                <HiTrash className='ml-1 h-6 w-6 text-black' />
              </button>
            </div>
          </div>
        </div>
      </div>

      {openDialog && (
        <ConfirmDialog
          title='Delete Event'
          description={`Are you sure want to ${event.isTrash ? 'Delete' : 'Trash'} this event`}
          open={openDialog}
          setOpen={(value) => {
            setOpenDialog(value)
          }}
          action={event.isTrash ? 'Delete' : 'Trash'}
          onHandle={event.isTrash ? handleDeleteEvent : handleTrashEvent}
          disabled={loadingDelete}
        />
      )}
    </Spring>
  )
}

export default withTranslation('my_event')(CardMyEvent)
