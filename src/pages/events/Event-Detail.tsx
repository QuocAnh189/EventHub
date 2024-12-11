//hooks
import { useState } from 'react'
import { useParams } from 'react-router-dom'

//components
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import Comments from '@components/Comments'
// import LocationEvent from '@components/Location'
import Information from '@components/Information'
import EventsRelate from './components/EventRelate'
import Payment from './components/Payment'
import Loader from '@components/Loader'
import ConfirmDialog from '@components/Dialog'

//redux
import { useGetEventByIdQuery, useFavouriteEventMutation, useUnfavouriteEventMutation } from '@redux/apis/event.api'
import { useAppSelector } from '@hooks/useRedux'

//icons
import { IoShareSocialOutline, IoLocationOutline } from 'react-icons/io5'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { IoMdTime } from 'react-icons/io'
import { FaHeart } from 'react-icons/fa6'
import { LuClipboardType } from 'react-icons/lu'

//util
import dayjs from 'dayjs'

const EventDetail = () => {
  const params = useParams()

  const user = useAppSelector((state) => state.persistedReducer.user.user)
  const { data: event, isFetching } = useGetEventByIdQuery(params.id!)

  // useEffect(() => {
  //   refetch()
  // }, [])

  const [likeEvent] = useFavouriteEventMutation()
  const [unlikeEvent] = useUnfavouriteEventMutation()

  const [favourite, setFavourite] = useState(false)

  const [value, setValue] = useState<string>('1')
  const [openDialog, setOpenDialog] = useState<boolean>(false)

  const handleChange = (_event: any, newValue: string) => {
    setValue(newValue)
  }

  // useEffect(() => {
  //   setFavourite(event?.isFavourite)
  // }, [event?.isFavourite])

  const handleLikeEvent = async () => {
    setFavourite(!favourite)
    try {
      const result = favourite
        ? await unlikeEvent({ eventId: event?.id!, userId: user?.id! })
        : await likeEvent({ eventId: event?.id!, userId: user?.id! })

      if (result) {
        console.log(result)
      }
    } catch (e) {
      console.log(e)
    }
  }

  if (isFetching) {
    return <Loader />
  }

  return (
    <div className='w-full'>
      <div className='px-12 mdl:px-24 flex flex-col gap-6'>
        <div className='h-[500px]'>
          <img
            src={
              event?.coverImageUrl
                ? event.coverImageUrl
                : 'https://res.cloudinary.com/dadvtny30/image/upload/v1712409118/eventhub/event/infflklkudlatzvf8gsz.jpg'
            }
            alt=''
            loading='lazy'
            className='object-cover w-full h-full rounded-xl'
          />
        </div>
        <div className='flex items-center justify-between w-full'>
          <h1 className='h1 text-header'>{event?.name}</h1>
          <div className='flex items-center gap-2'>
            <button onClick={handleLikeEvent}>
              <FaHeart color={favourite ? 'red' : 'gray'} size='36px' />
            </button>
            <button>
              <IoShareSocialOutline color='gray' size='36px' />
            </button>
          </div>
        </div>
        <div className='flex flex-col mdl:flex-row justify-between'>
          <div className='flex flex-col w-full gap-4'>
            <div className='flex flex-col gap-y-3'>
              <h4 className='h4 text-header'>Date and Time</h4>
              <div className='flex items-center gap-1'>
                <FaRegCalendarAlt color='gray' size='24px' />
                <p className='text-header'>{dayjs(event?.startTime).format('dddd, D MMMM YYYY').toString()}</p>
              </div>
              <div className='flex items-center gap-1'>
                <IoMdTime color='gray' size='24px' />
                <p className='text-header'>
                  {dayjs(event?.startTime).format('hh:mm A YYYY/MM/DD')?.toString()} -{' '}
                  {dayjs(event?.endTime).format('hh:mm A YYYY/MM/DD')?.toString()}
                </p>
              </div>
              <div className='flex items-center gap-1'>
                <LuClipboardType color='gray' size='24px' />
                <p className='text-header'>{event?.eventCycleType}</p>
              </div>
            </div>

            <div className='flex flex-col gap-2'>
              <h4 className='h4 text-header'>Location</h4>
              <div className='flex gap-1'>
                <IoLocationOutline color='gray' size='24px' />
                <p className='max-w-[500px] text-header'>{event?.location}</p>
              </div>
              <iframe
                className='rounded-sm sml:w-4/5'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.231240416691!2d106.80047917509012!3d10.870008889284525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527587e9ad5bf%3A0xafa66f9c8be3c91!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2jhu4cgVGjDtG5nIHRpbiAtIMSQSFFHIFRQLkhDTQ!5e0!3m2!1svi!2s!4v1715500492989!5m2!1svi!2s'
                height='400'
                loading='lazy'
              />
            </div>
          </div>

          <Payment ticketTypes={null} />
        </div>
      </div>

      <div className='flex flex-col items-center gap-6 mt-4'>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: '#3D56F0' }}>
            <Tabs textColor='inherit' value={value} onChange={handleChange} aria-label='lab API tabs example'>
              <Tab label='Information' value='1' sx={{ color: 'var(--header)' }} />
              <Tab label='Reviews' value='2' sx={{ color: 'var(--header)' }} />
            </Tabs>
          </Box>
          <TabPanel value='1' sx={{ width: '100%' }}>
            <Information event={event!} />
          </TabPanel>
          <TabPanel value='2' sx={{ width: '100%' }}>
            <Comments eventId={event?.id!} ownerId={event?.creator.id!} />
          </TabPanel>
        </TabContext>
      </div>

      <EventsRelate categoryId={event?.categories[0].id!} />

      {openDialog && (
        <ConfirmDialog
          title='Buy Ticket'
          description='Sorry, The minimum number of tickets must be 0'
          open={openDialog}
          setOpen={(value: any) => {
            setOpenDialog(value)
          }}
          action='Ok'
        />
      )}
    </div>
  )
}

export default EventDetail
