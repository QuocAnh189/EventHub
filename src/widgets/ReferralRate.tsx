// components
import Spring from '@components/Spring'
import LabeledProgressBar from '@components/LabeledProgressBar'

const data = [
  { label: 'Referral Program Budget', value: 27 },
  { label: 'Referral Rate by 100 Purchased', value: 67 },
  { label: 'Referral Rate by Campaign', value: 52 }
]

interface Props {
  title: string
}

const ReferralRate = (props: Props) => {
  const { title } = props

  return (
    <Spring className='card !pt-[20px] !pb-[34px] md:col-span-2 lg:col-span-1 2xl:col-span-1'>
      <h4 className='mb-[22px]'>{title}</h4>
      <div className='flex flex-col gap-5 md:gap-[30px]'>
        {data.map((item, index) => (
          <LabeledProgressBar
            key={index}
            label={item.label}
            value={item.value}
            displayValue={`${item.value}%`}
            wrapperClass='!gap-2.5'
            color='header'
          />
        ))}
      </div>
    </Spring>
  )
}

export default ReferralRate
