import { Dispatch, SetStateAction, useEffect, useRef } from 'react'
import { validator } from '@utils/validate-image'

//components
import { Button, Form, Input, Modal, Typography, Upload, message, notification } from 'antd'
import { RcFile, UploadChangeParam, UploadFile } from 'antd/es/upload'
import PaymentMethodsList from './PaymentMethodsList'

//icon
import { AiOutlineUpload } from 'react-icons/ai'

//util
import { URLtoFile } from '@utils/url-to-upload-file'

//i18
import { withTranslation } from 'react-i18next'

//interface vs type
import { IPaymentAccount } from 'interfaces/contents/payment.interface'

//redux
import { useAppSelector } from '@hooks/useRedux'
import { useGetPaymentMethodsQuery } from '@redux/apis/payment.api'
import { useDeletePaymentAccountMutation, useUpdatePaymentAccountMutation } from '@redux/apis/user.api'

export interface IPaymentAccountModalProps {
  t: any
  isModalOpen: boolean
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
  account: IPaymentAccount
}

export interface CreatePaymentAccountForm {
  methodId: string
  paymentAccountNumber: string
  paymentAccountQRCode: UploadFile
  checkoutContent: string
}

const PaymentAccountModal = ({ t, isModalOpen, setIsModalOpen, account }: IPaymentAccountModalProps) => {
  const user = useAppSelector((state) => state.persistedReducer.user.user)

  const { data: methods, isLoading: getMethodsLoading } = useGetPaymentMethodsQuery()
  const [updatePaymentAccount, { isLoading: updatePaymentAccountLoading }] = useUpdatePaymentAccountMutation()
  const [deletePaymentAccount, { isLoading: deletePaymentAccountLoading }] = useDeletePaymentAccountMutation()

  const [form] = Form.useForm<CreatePaymentAccountForm>()

  const qrCode = Form.useWatch('paymentAccountQRCode', form)
  const methodId = Form.useWatch('methodId', form)

  const handleInitializeForm = useRef<(() => Promise<void>) | null>(null)

  useEffect(() => {
    handleInitializeForm.current = async () => {
      const QRCodeFile = await URLtoFile(account.paymentAccountQRCode!)
      form.setFieldsValue({
        methodId: account.methodId,
        paymentAccountNumber: account.paymentAccountNumber,
        checkoutContent: account.checkoutContent,
        paymentAccountQRCode: QRCodeFile
      })
    }
    handleInitializeForm.current()
    ;() => handleInitializeForm.current
  }, [form, account])

  async function onChangeQRCode(param: UploadChangeParam) {
    const { file } = param
    form.setFieldValue('paymentAccountQRCode', file)
  }

  const beforeUploadFile = (file: RcFile) => {
    const errs = validator(file)
    errs.map((msg) => message.error(msg))

    return errs && errs.length > 0 ? false : true
  }

  async function handleUpdatePaymentAccount() {
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

      await updatePaymentAccount({ accountId: account.id, userId: user?.id!, data: payloadForm }).unwrap()

      notification.success({
        message: 'Update payment account successfully!'
      })
      setIsModalOpen(false)
    } catch (error: any) {
      console.log('🚀 ~ handleUpdatePaymentAccount ~ error:', error)
      notification.error({
        message: 'Failed to update payment account'
      })
    }
  }

  async function handleDeletePaymentAccount() {
    try {
      await deletePaymentAccount({ accountId: account.id, userId: user?.id! }).unwrap()

      notification.success({
        message: 'Delete payment account successfully!'
      })
      setIsModalOpen(false)
    } catch (error: any) {
      console.log('🚀 ~ handleDeletePaymentAccount ~ error:', error)
      notification.error({
        message: 'Failed to delete payment account'
      })
    }
  }

  return (
    <Modal
      title={t('modal.title_modal_update')}
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
        <Form.Item
          name='paymentAccountQRCode'
          required={false}
          label={<span className='font-medium'>{t('modal.qr_code')}</span>}
        >
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
                  <Typography.Text> {t('modal.image_qrcode')}</Typography.Text>
                </div>
              )}
            </Upload>
          </div>
        </Form.Item>
        <div className='flex justify-between'>
          <div>
            <Button type='primary' danger onClick={handleDeletePaymentAccount} loading={deletePaymentAccountLoading}>
              {t('modal.btn_delete')}
            </Button>
          </div>
          <div className='flex gap-3'>
            <Button onClick={() => setIsModalOpen(false)}>{t('modal.btn_cancel')}</Button>
            <Button
              htmlType='submit'
              onClick={handleUpdatePaymentAccount}
              type='primary'
              loading={updatePaymentAccountLoading}
            >
              {t('modal.btn_update')}
            </Button>
          </div>
        </div>
      </Form>
    </Modal>
  )
}

export default withTranslation('payment')(PaymentAccountModal)
