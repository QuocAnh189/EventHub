//hooks
import { useEffect, useState } from 'react'

//components
import PaymentAccountModal from '@components/payment/PaymentAccountModal'
import PaymentAccountsList from '@components/payment/PaymentAccountsList'
import { Spin } from 'antd'

//redux
import { useAppSelector } from '@hooks/useRedux'
import { useGetPaymentAccountsQuery } from '@redux/apis/user.api'

//interface
import { IPaymentAccount } from '@interfaces/contents/payment.interface'

const PaymentAccounts = () => {
  const user = useAppSelector((state) => state.persistedReducer.user.user)

  const { data, isLoading, refetch } = useGetPaymentAccountsQuery(user?.id!)

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const [selectedAccount, setSelectedAccount] = useState<IPaymentAccount>()

  useEffect(() => {
    refetch()
  }, [])

  return (
    <>
      <div className='col-span-2'>
        {isLoading ? (
          <Spin spinning={isLoading} />
        ) : (
          data?.items && (
            <PaymentAccountsList
              accounts={data?.items || []}
              isLoading={isLoading}
              onClick={(method: any) => {
                setSelectedAccount(method)
                setIsOpenModal(true)
              }}
            />
          )
        )}
      </div>
      {isOpenModal && selectedAccount && (
        <PaymentAccountModal isModalOpen={isOpenModal} setIsModalOpen={setIsOpenModal} account={selectedAccount} />
      )}
    </>
  )
}

export default PaymentAccounts
