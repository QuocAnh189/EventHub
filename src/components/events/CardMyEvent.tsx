//hooks
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

//components
import Loading from '@components/Loading'
import ConfirmDialog from '@components/Dialog'
import Checkbox from '@mui/material/Checkbox'
import Spring from '@components/Spring'
import { toast } from 'react-toastify'

//icons
import { HiPencilAlt, HiTrash } from 'react-icons/hi'
import { FaCalendarAlt } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'

//interfaces
import { IMyEvent } from '@interfaces/contents/event.interface'

//utils
import formatDate from '@utils/dayjs'

//redux
import { useDeleteEventMutation } from '@redux/apis/event.api'

//i18n
import { withTranslation } from 'react-i18next'
import ModalApplyCoupon from '@pages/events/components/ModalApplyCoupon'

interface Props {
  t: any
  event: IMyEvent
  eventIds: string[]
  onChecked: (id: string) => void
  index: number
  onRestore?: (id: string) => void
  loadingRestore?: boolean
}

const CardMyEvent = (props: Props) => {
  const { t, event, onChecked, eventIds, index, onRestore, loadingRestore } = props
  const navigate = useNavigate()

  const [modalCoupons, setModalCoupons] = useState<boolean>(false)
  const [openDialog, setOpenDialog] = useState<boolean>(false)
  const [TrashEvent, { isLoading: loadingTrash }] = useDeleteEventMutation()

  const handleChange = () => {
    onChecked(event.id!)
  }

  const handleEditEvent = () => {
    navigate(`/organization/update-event/${event.id}`)
  }

  const handleTrashEvent = async () => {
    try {
      const result = await TrashEvent(event.id).unwrap()
      if (result) {
        toast.success('Move event to trash successfully')
        setOpenDialog(false)
      }
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Spring type='slideUp' index={index}>
      <div className='card flex flex-row w-full h-[200px] rounded-lg shadow-2xl transition-transform hover:scale-[1.005] dark:bg-gray-800'>
        <div className='relative flex w-[400px] h-full items-center justify-between'>
          <img
            loading='lazy'
            className='w-full h-full rounded-l-lg object-cover transition duration-700 hover:skew-x-2 hover:scale-110'
            src={
              event.coverImageUrl
                ? event.coverImageUrl
                : 'https://res.cloudinary.com/dadvtny30/image/upload/v1712409123/eventhub/event/w3xvrrue35iu1gncudsa.jpg'
            }
            alt=''
          />
        </div>

        <div className='relative w-full h-full flex flex-col justify-between px-5 pt-2 pb-4'>
          {!event.deletedAt && (
            <button
              className='absolute text-btn right-0 -top-2'
              onClick={() => {
                setModalCoupons(true)
              }}
            >
              {t('management.apply_coupons')}
            </button>
          )}
          <div>
            <p className='h4 mb-4 line-clamp-1 text-2xl truncate text-ellipsis w-[300px] font-bold tracking-tight text-gray-900 dark:text-white max-md:text-base'>
              {event.name}
            </p>
            <div className='flex items-center gap-2 opacity-70 text-gray'>
              <FaCalendarAlt />
              <span className='h6'>{formatDate(event.startTime)}</span>
            </div>
            <div className='flex items-center gap-2 opacity-70 text-gray mt-4'>
              <IoLocationSharp />
              <span className='h6 line-clamp-1'>{event.location}</span>
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <Checkbox checked={eventIds.includes(event.id!)} onChange={handleChange} sx={{ color: 'var(--header)' }} />
            <div className='w-full justify-end flex gap-4 pt-2'>
              <button
                onClick={event.deletedAt ? () => onRestore && onRestore(event.id)! : handleEditEvent}
                className='flex items-center justify-center rounded-lg bg-blue px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                {event.deletedAt ? (
                  loadingRestore ? (
                    <Loading />
                  ) : (
                    t('management.button_restore')
                  )
                ) : (
                  t('management.button_edit')
                )}
                <HiPencilAlt className='ml-2 h-6 w-6 text-white' />
              </button>

              {!event.deletedAt && (
                <button
                  onClick={() => {
                    setOpenDialog(true)
                  }}
                  className='flex items-center justify-center rounded-lg bg-yellow px-3 py-2 text-center text-sm font-medium text-header hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'
                >
                  <span className='text-black'>{t('management.button_trash')}</span>
                  <HiTrash className='ml-1 h-6 w-6 text-black' />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {modalCoupons && (
        <ModalApplyCoupon
          modalOpen={modalCoupons}
          setModalOpen={setModalCoupons}
          couponsIds={event.coupons.map((item) => item.id)}
          eventId={event.id}
        />
      )}

      {openDialog && (
        <ConfirmDialog
          title='Delete Event'
          description={`Are you sure want to Trash this event`}
          open={openDialog}
          setOpen={(value) => {
            setOpenDialog(value)
          }}
          action={event.deletedAt ? 'Delete' : 'Trash'}
          onHandle={handleTrashEvent}
          disabled={loadingTrash}
        />
      )}
    </Spring>
  )
}

export default withTranslation('my_event')(CardMyEvent)
