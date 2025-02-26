//hooks
import { useState } from 'react'
import useMeasure from 'react-use-measure'

//components
import Spring from './Spring'
import { TruncatedText } from '@layouts/components/navbar/TruncatedText'
import ModalUpdateCoupon from '@pages/coupon/components/ModalUpdate'
import ConfirmDialog from './Dialog'

//interface
import { ICoupon } from '@interfaces/contents/coupon.interface'

//i18n
import { withTranslation } from 'react-i18next'
import formatDate from '@utils/dayjs'

interface IProps {
  t: any
  coupon: ICoupon
  index: number
  onDelete: (id: string) => void
  isDeleteLoading: boolean
}

const CouponCard = (props: IProps) => {
  const { t, coupon, index, onDelete, isDeleteLoading } = props

  const [openDialog, setOpenDialog] = useState<boolean>(false)
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [descriptionRef, { width: descriptionWidth }] = useMeasure()

  return (
    <>
      <Spring className='card flex flex-col gap-4 !pt-5 !px-5 min-h-[182px]' type='slideUp' index={index}>
        <div className='flex flex-1 justify-between items-start'>
          <div className='flex flex-1 items-start gap-3'>
            <div
              className='w-11 h-11 rounded-lg bg-white border border-solid border-input-border flex
                         justify-center items-center'
            >
              <img className='h-9 w-auto' src={coupon.coverImageUrl} alt={coupon.name} />
            </div>
            <div>
              <h6 className='h6 max-w-[165px] w-full leading-[1.4] truncate'>{coupon.name}</h6>
              <p className='text-sm text-input-text'>{formatDate(coupon.expireDate)}</p>
            </div>
          </div>
          <div className='flex items-center justify-center bg-green w-12 h-12 rounded-full'>
            <p className='text-white font-bold'>{coupon.percentageValue}%</p>
          </div>
        </div>
        <p className='text-sm flex-1 max-w-[300px]' ref={descriptionRef}>
          <TruncatedText text={coupon.description} width={descriptionWidth} lines={2} />
        </p>
        <div className='flex items-center justify-between'>
          <button className='text-btn' onClick={() => setModalOpen(true)}>
            {t('card.view_edit')}
          </button>
          <button onClick={() => setOpenDialog(true)} className='text-btn text-error'>
            {t('card.delete')}
          </button>
        </div>
      </Spring>
      {modalOpen && <ModalUpdateCoupon modalOpen={modalOpen} setModalOpen={setModalOpen} coupon={coupon} />}
      {openDialog && (
        <ConfirmDialog
          title='Delete Coupon'
          description={`Are you sure want to delete this coupon`}
          open={openDialog}
          setOpen={(value) => {
            setOpenDialog(value)
          }}
          action='Delete'
          onHandle={() => {
            setOpenDialog(false)
            onDelete(coupon.id)
          }}
          disabled={isDeleteLoading}
        />
      )}
    </>
  )
}

export default withTranslation('coupon')(CouponCard)
