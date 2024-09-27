//hooks
import useMeasure from 'react-use-measure'
import { useState, useEffect } from 'react'

//components
import MessageItem from './MessageItem'
import FilterItem from '@ui/FilterItem'
import DrawerBase from '@ui/DrawerBase'

//constants
import { MESSAGE_OPTIONS } from '@constants/options.constant'

//utils
import dayjs from 'dayjs'

//data placeholder
import messages from '@db/messages'

//i18n
import { withTranslation } from 'react-i18next'

const step = 6

interface Props {
  t: any
  open: boolean
  onOpen: () => void
  onClose: () => void
}

const MessagesPanel = (props: Props) => {
  const { t, open, onOpen, onClose } = props
  const [headerRef, { height: headerHeight }] = useMeasure()
  const [footerRef, { height: footerHeight }] = useMeasure()
  const [filter, setFilter] = useState<any>('all')
  const [displayed, setDisplayed] = useState(step)

  const latestMessages = messages.filter((message: any) => dayjs(message.createdAt).isAfter(dayjs().subtract(1, 'day')))
  const archivedMessages = messages.filter((message: any) => message.archived)

  useEffect(() => {
    setFilter('all')
    setDisplayed(step)
  }, [open])

  const handleLoadMore = () => {
    setDisplayed(displayed + step)
  }

  const getQty = (category: any) => {
    if (category === 'all') return messages.length
    if (category === 'latest') return latestMessages.length
    if (category === 'archived') return archivedMessages.length
  }

  const filteredData = () => {
    if (filter === 'all') return messages
    if (filter === 'latest') return latestMessages
    if (filter === 'archived') return archivedMessages
  }

  const sortedData = () => filteredData()?.sort((a: any, b: any) => dayjs(b.createdAt).diff(dayjs(a.createdAt)))

  return (
    <DrawerBase open={open} onOpen={onOpen} onClose={onClose} anchor='right'>
      <div className='py-8 px-[30px] pb-4' ref={headerRef}>
        <div className='flex justify-between items-center'>
          <h5>{t('message.title')}</h5>
          <button
            className='text-accent text-lg transition hover:text-red'
            onClick={onClose}
            aria-label='Close messages panel'
          >
            <i className='icon-circle-xmark-regular' />
          </button>
        </div>
        <div className='flex mt-[18px]'>
          {MESSAGE_OPTIONS.map((item, index) => (
            <FilterItem
              key={index}
              type='message'
              text={item.label!}
              value={item.value}
              active={filter}
              qty={getQty(item.value)!}
              onClick={() => setFilter(item.value)}
            />
          ))}
        </div>
      </div>
      <div
        className='h-full overflow-y-auto flex-1'
        style={{ height: `calc(100vh - ${headerHeight + footerHeight}px)` }}
      >
        {sortedData()
          ?.slice(0, displayed)
          .map((message: any, index: any) => (
            <MessageItem key={`${message.id}-${filter}`} message={message} index={index} />
          ))}
      </div>
      <div className='p-[30px]' ref={footerRef}>
        <button className='btn btn--secondary w-full' onClick={handleLoadMore} disabled={true}>
          Load More
        </button>
      </div>
    </DrawerBase>
  )
}

export default withTranslation('common')(MessagesPanel)
