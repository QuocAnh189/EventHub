import { useAppSelector } from '@hooks/useRedux'
import { useGetPaymentMethodsQuery } from '@redux/apis/payment.api'
import { useCreatePaymentAccountMutation } from '@redux/apis/user.api'
import { validator } from '@utils/validate-image'
import { Button, Form, Input, Modal, Typography, Upload, message, notification } from 'antd'
import { RcFile, UploadChangeParam, UploadFile } from 'antd/es/upload'
import { useState } from 'react'
import { AiOutlinePlus, AiOutlineUpload } from 'react-icons/ai'
import PaymentMethodsList from './PaymentMethodsList'
import { withTranslation } from 'react-i18next'

export interface CreatePaymentAccountForm {
  methodId: string
  paymentAccountNumber: string
  paymentAccountQRCode: UploadFile
  checkoutContent: string
}

const AddPaymentAccountModal = ({ t }: any) => {
  const user = useAppSelector((state) => state.persistedReducer.user.user)

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const { data: methods, isLoading: getMethodsLoading } = useGetPaymentMethodsQuery()
  const [createPaymentAccount, { isLoading: createPaymentAccountLoading }] = useCreatePaymentAccountMutation()

  const [form] = Form.useForm<CreatePaymentAccountForm>()

  const qrCode = Form.useWatch('paymentAccountQRCode', form)
  const methodId = Form.useWatch('methodId', form)

  async function onChangeQRCode(param: UploadChangeParam) {
    const { file } = param
    form.setFieldValue('paymentAccountQRCode', file)
  }

  const beforeUploadFile = (file: RcFile) => {
    const errs = validator(file)
    errs.map((msg) => message.error(msg))

    return errs && errs.length > 0 ? false : true
  }

  async function handleCreatePaymentAccount() {
    try {
      await form.validateFields()

      const values = form.getFieldsValue()
      const { checkoutContent, methodId, paymentAccountNumber, paymentAccountQRCode } = values

      const payloadForm = new FormData()

      for (const [key, value] of Object.entries({
        checkoutContent,
        methodId,
        paymentAccountNumber,
        userId: user?.id!
      })) {
        payloadForm.append(key, value)
      }
      if (paymentAccountQRCode) payloadForm.append('paymentAccountQRCode', paymentAccountQRCode.originFileObj!)

      await createPaymentAccount({ userId: user?.id!, data: payloadForm }).unwrap()

      notification.success({
        message: 'Create new payment account successfully!'
      })
      setIsModalOpen(false)
    } catch (error: any) {
      console.log('🚀 ~ handleCreatePaymentAccount ~ error:', error)
      notification.error({
        message: 'Failed to create payment account'
      })
    }
  }

  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
        className='flex flex-col items-center justify-center px-6 border-2 border-dashed rounded-lg cursor-pointer hover:bg-neutral-100 text-neutral-500'
      >
        <AiOutlinePlus size={70} />
        <span className='font-medium'>{t('btn_add')}</span>
      </div>
      <Modal
        title={t('modal.title_modal_create')}
        onCancel={() => setIsModalOpen(false)}
        open={isModalOpen}
        footer={[null, null]}
        destroyOnClose={true}
        afterClose={form.resetFields}
      >
        <Form form={form} size='large' autoComplete='off' labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>
          <Form.Item
            name='methodId'
            label={<span className='font-medium'>{t('modal.payment_method')}</span>}
            rules={[{ required: true, message: 'PaymentMethod is required' }]}
          >
            <PaymentMethodsList
              methods={methods || []}
              selectedItemId={methodId}
              isLoading={getMethodsLoading}
              onClick={(method) => form.setFieldValue('methodId', method.id)}
            />
          </Form.Item>
          <Form.Item
            name='paymentAccountNumber'
            label={<span className='font-medium'>{t('modal.account_number')}</span>}
            rules={[{ required: true, message: 'PaymentAccountNumber is required' }]}
          >
            <Input placeholder='Enter your payment account number' />
          </Form.Item>
          <Form.Item
            name='checkoutContent'
            label={<span className='font-medium'>{t('modal.transfer_content')}</span>}
            rules={[{ required: true, message: 'TransferContent is required' }]}
          >
            <Input placeholder="Enter your account's required transfer content" />
          </Form.Item>
          <Form.Item name='paymentAccountQRCode' required={false} label={<span className='font-medium'>QR Code</span>}>
            <div className='flex items-center justify-center'>
              <Upload
                beforeUpload={beforeUploadFile}
                onChange={onChangeQRCode}
                listType='picture-card'
                className='qrcode-upload'
                multiple={false}
                showUploadList={false}
              >
                {qrCode ? (
                  <div className='w-full h-full'>
                    <img
                      src={qrCode.originFileObj ? URL.createObjectURL(qrCode.originFileObj) : ''}
                      alt='avatar'
                      className='object-cover w-full h-full'
                      onLoad={(url) => URL.revokeObjectURL(url.currentTarget.currentSrc)}
                    />
                  </div>
                ) : (
                  <div className='flex flex-col items-center'>
                    <AiOutlineUpload />
                    <Typography.Text>{t('modal.image_qrcode')}</Typography.Text>
                  </div>
                )}
              </Upload>
            </div>
          </Form.Item>
          <div className='flex justify-end gap-3'>
            <Button onClick={() => setIsModalOpen(false)}>{t('modal.btn_cancle')}</Button>
            <Button
              htmlType='submit'
              onClick={() => handleCreatePaymentAccount()}
              type='primary'
              loading={createPaymentAccountLoading}
            >
              {t('modal.btn_create')}
            </Button>
          </div>
        </Form>
      </Modal>
    </>
  )
}

export default withTranslation('payment')(AddPaymentAccountModal)
