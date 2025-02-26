//hooks
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

//icon
import { CheckIcon } from '@heroicons/react/20/solid'

//redux
import { useAppSelector } from '@hooks/useRedux'

const Success = () => {
  const dataCheckout = useAppSelector((state) => state.persistedReducer.payment.sessionCheckout)

  useEffect(() => {
    if (dataCheckout) {
      fetch(`${import.meta.env.VITE_API_URL!}/payments/checkout`, {
        headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('token')!)?.accessToken}` },
        method: 'POST',
        body: JSON.stringify(dataCheckout)
      }).catch((err) => {
        console.log(err)
      })
    }
  }, [])

  return (
    <div className='w-full h-screen flex justify-center items-center bg-slate-400'>
      <div className='w-4/5 h-4/5 md:w-2/5 md:h-[400px] flex flex-col justify-center items-center relative text-white bg-white gap-4 rounded-xl'>
        <div className='absolute top-0 translate-y-[-50%] flex items-center justify-center w-24 h-24 bg-green rounded-full'>
          <CheckIcon width={60} />
        </div>
        <h1 className='h2 text-green text-center'> Your payment was successfully. </h1>
        <p className='h6 text-center'>
          Thank you for your payment. we will <br />
          be in contact with more details shortly{' '}
        </p>
        <NavLink to='/organization/ticket' className='w-full flex justify-center items-center'>
          <button className='btn bg-green text-white'> Tickets </button>
        </NavLink>
      </div>
    </div>
  )
}

export default Success
