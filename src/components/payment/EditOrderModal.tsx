import { Dispatch, SetStateAction, useEffect, useRef } from 'react'

//components
import { Button, Form, Input, Modal, notification } from 'antd'

//type vs interface
import { UpdateOrderPayload } from '@type/payment.type'
import { IPayment } from 'interfaces/contents/payment.interface'

//redux
import { useUpdatePaymentMutation } from '@redux/apis/payment.api'

export interface IEditOrderModalProps {
  isModalOpen: boolean
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
  order: IPayment
}

export interface UpdateOrderForm {
  customerName: string
  customerEmail: string
  customerPhone: string
}

const EditOrderModal = ({ isModalOpen, setIsModalOpen, order }: IEditOrderModalProps) => {
  const [updatePayment, { isLoading: updatePaymentLoading }] = useUpdatePaymentMutation()

  const [form] = Form.useForm<UpdateOrderForm>()

  const handleInitializeForm = useRef<(() => Promise<void>) | null>(null)

  useEffect(() => {
    handleInitializeForm.current = async () => {
      form.setFieldsValue({
        customerEmail: order.customerEmail,
        customerName: order.customerName,
        customerPhone: order.customerPhone
      })
    }
    handleInitializeForm.current()
    ;() => handleInitializeForm.current
  }, [form, order])

  async function handleUpdateOrder() {
    try {
      await form.validateFields()

      const values = form.getFieldsValue()
      const payload: UpdateOrderPayload = { ...values, paymentId: order.id }

      await updatePayment(payload).unwrap()

      notification.success({
        message: 'Update order successfully!'
      })
      setIsModalOpen(false)
    } catch (error: any) {
      console.log('🚀 ~ handleUpdateOrder ~ error:', error)
      notification.error({
        message: 'Failed to update order'
      })
    }
  }

  return (
    <Modal
      title='Update order'
      onCancel={() => setIsModalOpen(false)}
      open={isModalOpen}
      footer={[null, null]}
      destroyOnClose={true}
      afterClose={form.resetFields}
    >
      <Form form={form} size='large' autoComplete='off' labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>
        <Form.Item
          name='customerName'
          label={<span className='font-medium'>Name</span>}
          rules={[{ required: true, message: 'CustomerName is required' }]}
        >
          <Input placeholder='Enter your fullname' />
        </Form.Item>
        <Form.Item
          name='customerEmail'
          label={<span className='font-medium'>Email</span>}
          rules={[
            { required: true, message: 'CustomerEmail is required' },
            { type: 'email', message: 'Email is invalid format' }
          ]}
        >
          <Input placeholder='Enter your email address' />
        </Form.Item>
        <Form.Item
          name='customerPhone'
          label={<span className='font-medium'>Phone</span>}
          rules={[{ required: true, message: 'CustomerPhone is required' }]}
        >
          <Input placeholder='Enter your phone number' />
        </Form.Item>
        <div className='flex justify-end gap-3'>
          <Button htmlType='button' onClick={() => setIsModalOpen(false)}>
            Cancel
          </Button>
          <Button htmlType='submit' onClick={() => handleUpdateOrder()} type='primary' loading={updatePaymentLoading}>
            Update
          </Button>
        </div>
      </Form>
    </Modal>
  )
}

export default EditOrderModal
