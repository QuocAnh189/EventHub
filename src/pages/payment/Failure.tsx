const Failure = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-slate-400'>
      <div className='w-4/5 h-4/5 md:w-2/5 md:h-[400px] flex flex-col justify-center items-center relative text-white bg-white gap-4 rounded-xl'>
        <div className='absolute top-0 translate-y-[-50%] flex items-center justify-center w-44 h-24 bg-red rounded-full'>
          <h1 className='h1'>OOPS!</h1>
        </div>
        <h1 className='h2 text-red text-center'> Your payment failed. </h1>
        <p className='h6 text-center'>Some thing went wrong. Please try again later. </p>
        <button className='btn bg-red text-white'> Try Again </button>
      </div>
    </div>
  )
}

export default Failure
