// hooks
import { UseFormSetValue } from 'react-hook-form'

//component
import MediaDropPlaceholder from '@ui/MediaDropPlaceholder'
import { toast } from 'react-toastify'

//icon
import { BiTrash } from 'react-icons/bi'

//interface & type
import { ICreateEventPayload } from '@type/event.type'

//i18n
import { withTranslation } from 'react-i18next'

interface Props {
  t: any
  coverImage: any
  subImage: any[]
  setActive: (value: number) => void
  setValue: UseFormSetValue<ICreateEventPayload>
}
const BannerEvent = (props: Props) => {
  const { t, setActive, setValue, coverImage, subImage } = props

  const convertCoverImageToBase64 = (e: any) => {
    const image = e.target.files[0]

    setValue('coverImage', image)
  }

  const convertSubImageToBase64 = (e: any, index: number) => {
    const newSubImage: any = [...subImage]
    newSubImage[index] = e.target.files[0]
    setValue('eventSubImages', newSubImage)
  }

  const handleNextStep = () => {
    if (coverImage && subImage.some((image) => image)) {
      setActive(2)
    } else {
      toast.error('Please choose image for event')
    }
  }

  return (
    <div className='w-full relative pt-10 pb-20 px-40 space-y-10 min-h-screen'>
      <h1 className='text-header font-semibold text-2xl'>{t('banner.cover_image')}</h1>
      <div className='flex flex-col items-center gap-8'>
        <div className='relative lg:w-4/5 h-[300px] flex items-center justify-center text-white rounded-xl media-dropzone 2xl:col-span-2'>
          <img
            loading='lazy'
            className={`absolute h-full w-full rounded-[8px] outline-none opacity-${coverImage ? '1' : '0'}`}
            src={coverImage ? URL.createObjectURL(coverImage) : ''}
          />
          <input
            aria-label=''
            title=''
            accept='image/*'
            type='file'
            className='h-full w-full bg-transparent rounded-xl hover:cursor-pointer z-[999] outline-none opacity-0'
            onChange={convertCoverImageToBase64}
            alt='No avatar'
            onClick={(event: any) => (event.target.value = null)}
          />
          {!coverImage ? (
            <div className='absolute'>
              <MediaDropPlaceholder text='CoverImage' />
            </div>
          ) : (
            <div className='absolute z-[1000] hover:cursor-pointer right-4 bottom-4'>
              <BiTrash
                size={32}
                onClick={() => {
                  URL.revokeObjectURL(coverImage)
                  setValue('coverImage', '')
                }}
                color={coverImage ? 'white' : '#333'}
              />
            </div>
          )}
        </div>

        <h1 className='text-header font-semibold text-2xl'>{t('banner.subs_image')}</h1>
        <div className='w-full flex flex-wrap justify-around gap-4'>
          {[0, 1, 2, 3].map((_, index) => (
            <div key={`subimage-${index}`} className='relative w-[200px] border-[2px] media-dropzone'>
              <img
                loading='lazy'
                className={`absolute h-full w-full rounded-[6px] outline-none opacity-${subImage[index] ? '1' : '0'}`}
                src={subImage[index] ? URL.createObjectURL(subImage[index]) : ''}
                alt=''
              />
              <input
                title=''
                accept='image/*'
                type='file'
                className={`h-full w-full bg-transparent rounded-xl hover:cursor-pointer z-[999] outline-none opacity-0`}
                onChange={(e) => convertSubImageToBase64(e, index)}
                alt='No avatar'
                onClick={(event: any) => (event.target.value = null)}
              />
              {!subImage[index] ? (
                <div className='absolute'>
                  <MediaDropPlaceholder text='CoverImage' />
                </div>
              ) : (
                <div className='absolute z-[1000] hover:cursor-pointer right-4 bottom-4'>
                  <BiTrash
                    size={32}
                    onClick={() => {
                      const newsubImage: any = [...subImage]
                      newsubImage[index] = ''
                      setValue('eventSubImages', newsubImage)
                    }}
                    color={subImage[index] ? 'white' : '#333'}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className='absolute flex items-center gap-4 right-8'>
        <button
          className='btn bg-textGray hover:text-white'
          onClick={() => {
            setActive(0)
          }}
        >
          {t('button_back')}
        </button>
        <button className=' btn btn-primary ' onClick={handleNextStep}>
          {t('button_continue')}
        </button>
      </div>
    </div>
  )
}

export default withTranslation('create_event')(BannerEvent)
