import { EPaymentStatus } from '@constants/enum.constant'
import { useAcceptOrderMutation, useRejectOrderMutation, useUpdateOrderStatusMutation } from '@redux/apis/payment.api'

import { Button, Modal, Select, notification } from 'antd'
import { IPayment } from '@interfaces/contents/payment.interface'
import { Dispatch, SetStateAction, useState } from 'react'

export interface IStatusModalProps {
  isModalOpen: boolean
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
  order: IPayment
}

export function StatusModal({ isModalOpen, setIsModalOpen, order }: IStatusModalProps) {
  const [selectedValue, setSelectedValue] = useState<string>(order.status)

  const [acceptOrder, { isLoading: acceptOrderLoading }] = useAcceptOrderMutation()
  const [rejectOrder, { isLoading: rejectOrderLoading }] = useRejectOrderMutation()
  const [updateOrderStatus, { isLoading: updateOrderStatusLoading }] = useUpdateOrderStatusMutation()

  async function handleUpdateOrderStatus() {
    try {
      if (selectedValue === EPaymentStatus.PAID) {
        await acceptOrder({ paymentId: order.id }).unwrap()
      } else if (selectedValue === EPaymentStatus.REJECTED) {
        await rejectOrder({ paymentId: order.id }).unwrap()
      } else {
        await updateOrderStatus({ paymentId: order.id, status: selectedValue as EPaymentStatus }).unwrap()
      }

      notification.success({
        message: 'Update order status successfully!'
      })
      setIsModalOpen(false)
    } catch (error: any) {
      console.log('🚀 ~ handleUpdateOrderStatus ~ error:', error)
      notification.error({
        message: 'Failed to update order status'
      })
    }
  }

  return (
    <Modal
      title='Update order status'
      onCancel={() => setIsModalOpen(false)}
      open={isModalOpen}
      footer={[null, null]}
      destroyOnClose={true}
    >
      <div className='my-8'>
        <Select
          defaultValue={order.status}
          onChange={(value) => setSelectedValue(value)}
          className='w-full'
          size='large'
        >
          <Select.Option value={EPaymentStatus.PAID}>{EPaymentStatus.PAID}</Select.Option>
          <Select.Option value={EPaymentStatus.FAILED}>{EPaymentStatus.FAILED}</Select.Option>
          <Select.Option value={EPaymentStatus.REJECTED}>{EPaymentStatus.REJECTED}</Select.Option>
          <Select.Option value={EPaymentStatus.PENDING}>{EPaymentStatus.PENDING}</Select.Option>
        </Select>
      </div>
      <div className='flex justify-end gap-3'>
        <Button onClick={() => setIsModalOpen(false)}>Cancel</Button>
        <Button
          htmlType='submit'
          onClick={() => handleUpdateOrderStatus()}
          type='primary'
          loading={acceptOrderLoading || rejectOrderLoading || updateOrderStatusLoading}
        >
          Update
        </Button>
      </div>
    </Modal>
  )
}
