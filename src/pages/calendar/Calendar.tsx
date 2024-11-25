//hook
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

//components
import PageHeader from '@layouts/components/PageHeader'
import Box from '@mui/material/Box'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'

//i18n
import { withTranslation } from 'react-i18next'
import ProtectedLayout from '@layouts/protected'

//redux
import { useGetEventsQuery } from '@redux/apis/event.api'

//constant
import { EEventStatus } from '@constants/enum.constant'

//utils
import dayjs from 'dayjs'

//data
import calendar_event from '@db/calendar'
import events_data from '@db/event'

const Calendar = ({ t }: any) => {
  const navigate = useNavigate()
  const { data: events } = useGetEventsQuery({ takeAll: false, type: EEventStatus.UPCOMING, size: 6 })

  const [eventCalendar, setEvenCalendar] = useState([])
  const handleEventClick = (selected: any) => {
    navigate(`/organization/event/${selected.event._def.publicId}`, {
      state: { event: events_data.find((item: any) => item.id === selected.event._def.publicId) }
    })
  }

  useEffect(() => {
    if (events) {
      const formatEvents = events?.items.map((item: any) => {
        return {
          id: item.id,
          title: item.name,
          coverImage: item.coverImage,
          date: dayjs(item.startTime).format('YYYY-MM-DD').toString(),
          status: item.status
        }
      })
      setEvenCalendar(formatEvents)
    }
  }, [events])

  return (
    <ProtectedLayout>
      <Box m='20px'>
        <PageHeader title={t('header.title')} />
        <Box sx={{ color: 'var(--header)' }} display='flex' justifyContent='space-between'>
          <Box flex='1 1 100%' ml='15px'>
            <FullCalendar
              height='75vh'
              plugins={[timeGridPlugin, dayGridPlugin, interactionPlugin, listPlugin]}
              headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,listMonth'
              }}
              initialView='dayGridMonth'
              editable={true}
              selectable={true}
              selectMirror={true}
              dayMaxEvents={true}
              eventClick={handleEventClick}
              eventContent={renderEventContent}
              // initialEvents={calendar_event}
              events={calendar_event || eventCalendar}
            />
          </Box>
        </Box>
        <div className='flex items-center gap-8 mt-8 px-'>
          <div className='flex items-center gap-2'>
            <span className='w-4 h-4 bg-red rounded-lg'></span>
            <p className='h5 text-header'>{t('status.closed')}</p>
          </div>

          <div className='flex items-center gap-2'>
            <span className='w-4 h-4 bg-yellow rounded-lg'></span>
            <p className='h5 text-header'>{t('status.happening')}</p>
          </div>

          <div className='flex items-center gap-2'>
            <span className='w-4 h-4 bg-green rounded-lg'></span>
            <p className='h5 text-header'>{t('status.upcoming')}</p>
          </div>
        </div>
      </Box>
    </ProtectedLayout>
  )
}

function renderEventContent(eventInfo: any) {
  const statusEvent = (status: EEventStatus) => {
    switch (status) {
      case EEventStatus.CLOSED:
        return '#ff5470'
      case EEventStatus.OPENING:
        return '#FFE31A'
      case EEventStatus.UPCOMING:
        return '#00ba9d'
      default:
        break
    }
  }

  return (
    <div
      style={{ backgroundColor: statusEvent(eventInfo.event._def.extendedProps.status) }}
      className='flex items-center gap-2'
    >
      <img src={eventInfo.event._def.extendedProps.coverImage} className='w-10 h-10 rounded-md' />
      <p className='text-header truncate'>{eventInfo.event.title}</p>
    </div>
  )
}

export default withTranslation('calendar')(Calendar)
