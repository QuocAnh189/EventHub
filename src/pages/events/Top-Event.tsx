//components
import PageHeader from '@layouts/components/PageHeader'
import TopSalesByCategories from '@widgets/TopSalesByCategories'
import TopRetail from '@widgets/TopRetail'
import TopEventsByCategories from '@widgets/TopEventsList'

//i18n
import { withTranslation } from 'react-i18next'

const TopEvent = ({ t }: any) => {
  const categories = [
    {
      color: '#F27BBD',
      iconImage:
        'https://res.cloudinary.com/dadvtny30/image/upload/v1713505725/eventhub/category/hhganbll8tt2wofqdsn2.png',
      id: '99221b77-a6b9-4593-81ba-2fb14bdb7d1a',
      name: 'Music'
    },
    {
      color: '#A3FFD6',
      iconImage:
        'https://res.cloudinary.com/dadvtny30/image/upload/v1713505724/eventhub/category/dze7rcjxmhbiyuxp0nms.png',
      id: 'b57547e1-86e2-4133-a196-5904f80cf673',
      name: 'Food & Drink'
    },
    {
      color: '#F3D0D7',
      iconImage:
        'https://res.cloudinary.com/dadvtny30/image/upload/v1713505724/eventhub/category/ltf9kjwcm9flsr9kava1.png',
      id: 'acf0ac38-4e32-4456-b519-0ac009e4da1a',
      name: 'Fashion'
    },
    {
      color: '#EE4266',
      iconImage:
        'https://res.cloudinary.com/dadvtny30/image/upload/v1713505726/eventhub/category/zs0q5wmitcvihqjgm0ov.png',
      id: '8ab53d26-742c-4515-8a8f-a5e2a5b86403',
      name: 'Music'
    }
  ]

  return (
    <div>
      <PageHeader title={t('header.title')} />
      <div className='widgets-grid grid-cols-1 lg:!gap-10 xl:mb-[50px]'>
        <div
          className='widgets-grid grid-cols-1 xl:grid-cols-[minmax(0,330px)_minmax(0,1fr)]
                    2xl:grid-cols-6'
        >
          <TopSalesByCategories label={t('top_event_category.label')} categories={categories} />
          <TopRetail categories={categories} />
        </div>
        <div className='widgets-grid grid-cols-1 lg:grid-cols-2'>
          <TopEventsByCategories category={categories[0]} />
          <TopEventsByCategories category={categories[1]} />
        </div>
        <div className='widgets-grid grid-cols-1 lg:grid-cols-2'>
          <TopEventsByCategories category={categories[2]} />
          <TopEventsByCategories category={categories[3]} />
        </div>
      </div>
    </div>
  )
}

export default withTranslation('top_event')(TopEvent)
