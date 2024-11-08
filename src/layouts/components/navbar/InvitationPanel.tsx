//hooks
import { useState, useEffect } from 'react'
import useMeasure from 'react-use-measure'

//components
import DrawerBase from '@ui/DrawerBase'

//data placeholder
import invitations from '@db/invitation'

//i18n
import { withTranslation } from 'react-i18next'
import InvitationItem from './InvitationItem'

const step = 6

interface Props {
  t: any
  open: boolean
  onOpen: () => void
  onClose: () => void
}

const InvitationsPanel = (props: Props) => {
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

  return (
    <DrawerBase anchor='right' open={open} onClose={onClose} onOpen={onOpen}>
      <div className='pt-[30px] px-[30px] pb-4' ref={headerRef}>
        <div className='flex justify-between items-center'>
          <h5>{t('invitation.title')}</h5>
          <button
            className='text-accent text-lg transition hover:text-red'
            onClick={onClose}
            aria-label='Close invitations panel'
          >
            <i className='icon-circle-xmark-regular' />
          </button>
        </div>
      </div>
      <div
        className='h-full overflow-y-auto flex-1'
        style={{ height: `calc(100vh - ${headerHeight + footerHeight}px)` }}
      >
        {invitations.map((invitation, index) => (
          <InvitationItem key={`${filter}-${index}`} invitation={invitation} index={index} />
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

export default withTranslation('common')(InvitationsPanel)
