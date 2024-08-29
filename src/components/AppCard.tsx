// components
import { Spring } from './Spring'
import Switch from '@ui/Switch'
import { TruncatedText } from '@layouts/components/navbar/TruncatedText'

// hooks
import useMeasure from 'react-use-measure'

export const AppCard = ({ app, index }: any) => {
  const [titleRef, { width: titleWidth }] = useMeasure()
  const [descriptionRef, { width: descriptionWidth }] = useMeasure()

  return (
    <Spring className='card flex flex-col gap-4 !pt-5 !px-5 min-h-[182px]' type='slideUp' index={index}>
      <div className='flex flex-1 justify-between items-start'>
        <div className='flex flex-1 items-start gap-3'>
          <div
            className='w-11 h-11 rounded-lg bg-white border border-solid border-input-border flex
                         justify-center items-center'
          >
            <img
              className='h-9 w-auto'
              src='https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg'
              alt={app.name}
            />
          </div>
          <h6 className='max-w-[165px] w-full leading-[1.4]' ref={titleRef}>
            <TruncatedText text={app.name} width={titleWidth} />
          </h6>
        </div>
        <Switch id={app.id} defaultChecked />
      </div>
      <p className='text-sm flex-1 max-w-[300px]' ref={descriptionRef}>
        <TruncatedText text={app.description} width={descriptionWidth} />
      </p>
      <button className='text-btn'>View settings</button>
    </Spring>
  )
}
