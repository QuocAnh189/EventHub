//hooks
import { useState } from 'react'
import useMeasure from 'react-use-measure'

//components
import DrawerBase from '@ui/DrawerBase'
import InvitationItem from './InvitationItem'

//i18n
import { withTranslation } from 'react-i18next'

//redux
import { useGetInvitationsQuery } from '@redux/apis/user.api'
import { IInvitation } from '@interfaces/systems/invitation.interface'

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
  const [displayed, setDisplayed] = useState(step)

  const [params, setParams] = useState({ pageSize: 6 })
  const { data } = useGetInvitationsQuery(params)

  const handleLoadMore = () => {
    setDisplayed(displayed + step)
    setParams({ pageSize: params.pageSize + 6 })
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
        {data?.items.map((invitation: IInvitation, index: number) => (
          <InvitationItem key={`invitation-${index}`} invitation={invitation} index={index} onClose={onClose} />
        ))}
      </div>
      <div className='p-[30px]' ref={footerRef}>
        <button
          className='btn btn-primary w-full'
          onClick={handleLoadMore}
          disabled={data?.items.length === data?.metadata.totalCount}
        >
          {t('invitation.load_more')}
        </button>
      </div>
    </DrawerBase>
  )
}

export default withTranslation('common')(InvitationsPanel)
