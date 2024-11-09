interface IProps {
  imageUrl: string
  online?: boolean
  profile?: boolean
}

const Avatar = (props: IProps) => {
  const { imageUrl, online, profile } = props
  const onlineClass = online === true ? 'online' : online === false ? 'offline' : ''

  const sizeClass = profile ? 'w-50' : 'w-10'

  return (
    <>
      {imageUrl && (
        <div className={`chat-image avatar ${onlineClass}`}>
          <div className={`rounded-full ${sizeClass}`}>
            <img src={imageUrl} />
          </div>
        </div>
      )}

      {!imageUrl && (
        <div className={`chat-image avatar placeholder ${onlineClass}`}>
          <div className={`bg-gray-400 text-gray-800 rounded-full ${sizeClass}`}>
            <span className='text-xl'>{'N'.substring(0, 1)}</span>
          </div>
        </div>
      )}
    </>
  )
}

export default Avatar
