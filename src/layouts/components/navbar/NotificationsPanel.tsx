// hooks
import { useState, useEffect } from 'react'
import useMeasure from 'react-use-measure'

// components
import NotificationItem from './NotificationItem'

import { FilterItem, DrawerBase } from '@ui/index'

// constants
import { NOTIFICATION_OPTIONS } from '@constants/options.constant'

// data placeholder
import notifications from '@db/notifications'

//i18
import { withTranslation } from 'react-i18next'

const step = 6

interface INotificationsPanelProps {
  t: any
  open: boolean
  onOpen: () => void
  onClose: () => void
}

const NotificationsPanel = (props: INotificationsPanelProps) => {
  const { t, open, onOpen, onClose } = props

  const [headerRef, { height: headerHeight }] = useMeasure()
  const [footerRef, { height: footerHeight }] = useMeasure()
  const [filter, setFilter] = useState('all')
  const [displayed, setDisplayed] = useState(step)

  useEffect(() => {
    setFilter('all')
    setDisplayed(step)
  }, [open])

  const handleLoadMore = () => {
    setDisplayed(displayed + step)
  }

  const getQty = (category: any) => {
    if (category === 'all') return notifications.length
    return notifications.filter(
      (notification: any) => notification.category === category
    ).length
  }

  const filteredData = () => {
    return notifications.filter((notification: any) =>
      filter === 'all' ? true : notification.category === filter
    )
  }

  return (
    <DrawerBase anchor='right' open={open} onClose={onClose} onOpen={onOpen}>
      <div className='pt-[30px] px-[30px] pb-4' ref={headerRef}>
        <div className='flex justify-between items-center'>
          <h5>{t('notification.title')}</h5>
          <button
            className='text-accent text-lg transition hover:text-red'
            onClick={onClose}
            aria-label='Close notifications panel'
          >
            <i className='icon-circle-xmark-regular' />
          </button>
        </div>
        <div className='flex mt-5'>
          {NOTIFICATION_OPTIONS.map((item: any, index: any) => (
            <FilterItem
              type='notification'
              key={index}
              text={item.label}
              value={item.value}
              active={filter}
              qty={getQty(item.value)}
              onClick={() => setFilter(item.value)}
            />
          ))}
        </div>
      </div>
      <div
        className='h-full overflow-y-auto flex-1'
        style={{ height: `calc(100vh - ${headerHeight + footerHeight}px)` }}
      >
        {filteredData()
          .slice(0, displayed)
          .sort((a: any, b: any) => b.timestamp - a.timestamp)
          .map((notification: any, index: any) => (
            <NotificationItem
              key={`${filter}-${index}`}
              notification={notification}
              index={index}
            />
          ))}
      </div>
      <div className='p-[30px]' ref={footerRef}>
        <button
          className='btn btn--secondary w-full'
          onClick={handleLoadMore}
          disabled={displayed >= filteredData().length}
        >
          Load More
        </button>
      </div>
    </DrawerBase>
  )
}

export default withTranslation('common')(NotificationsPanel)
