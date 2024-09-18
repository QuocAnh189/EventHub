//components
import Spring from '@components/Spring'
import LabeledProgressBar from '@components/LabeledProgressBar'

//utils
import { commaFormatter, getPercentage } from '@utils/helpers'

//i18n
import { withTranslation } from 'react-i18next'

const data = [
  { label: '18-25', value: 6680 },
  { label: '25-45', value: 15234 },
  { label: '45-65', value: 2034 },
  { label: 'over 65', value: 792 }
]

const DemographicSegmentation = ({ t }: any) => {
  return (
    <Spring className='card flex flex-col gap-10 xl:col-span-2 text-header'>
      <div className='flex flex-col gap-6'>
        <h5 className='max-w-[250px] xs:max-w-[unset]'>{t('demographic.title')}</h5>
        <div className='flex flex-col gap-5'>
          {data.map((item, index: number) => (
            <LabeledProgressBar
              key={index}
              label={`${t('demographic.age')} ${item.label}`}
              value={getPercentage(data, item.value)}
              displayValue={commaFormatter(item.value)}
              color='header'
            />
          ))}
        </div>
      </div>
      <div className='flex flex-col gap-6'>
        <h5 className='max-w-[250px] xs:max-w-[unset]'>{t('demographic.segmentation_by_gender.title')}</h5>
        <div>
          <div className='flex gap-7 mb-2.5 md:gap-14'>
            <div className='flex flex-col gap-3'>
              <div className='badge-icon badge-icon--sm bg-accent'>
                <i className='icon-venus-regular text-lg' />
              </div>
              <span className='h5'>65%</span>
            </div>
            <div className='flex flex-col gap-3'>
              <div className='badge-icon badge-icon--sm bg-accent'>
                <i className='icon-mars-regular text-lg' />
              </div>
              <span className='h5'>32%</span>
            </div>
            <div className='flex flex-col gap-3'>
              <div className='badge-icon badge-icon--sm bg-accent'>
                <i className='icon-genderless-regular text-lg' />
              </div>
              <span className='h5'>3%</span>
            </div>
          </div>
          <p className='text-sm max-w-[400px]'>{t('demographic.segmentation_by_gender.description')}</p>
        </div>
      </div>
    </Spring>
  )
}

export default withTranslation('customer')(DemographicSegmentation)
