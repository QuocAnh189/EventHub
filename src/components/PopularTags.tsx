const PopularTags = () => {
  return (
    <div className='flex flex-col gap-2.5 lg:gap-5'>
      <h5 className='lg:text-right'>Popular Tags:</h5>
      <div className='flex flex-wrap gap-2.5'>
        <button className='btn btn--outline blue size-sm'>Top Rated</button>
        <button className='btn btn--outline blue size-sm'>New In</button>
        <button className='btn btn--outline blue size-sm'>Best Sellers</button>
        <button className='btn btn--outline blue size-sm'>A-Z</button>
        <button className='btn btn--outline blue size-sm'>Reviews</button>
      </div>
    </div>
  )
}

export default PopularTags
