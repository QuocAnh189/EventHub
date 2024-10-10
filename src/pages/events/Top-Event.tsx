//components
import PageHeader from '@layouts/components/PageHeader'
import TopSalesByCategories from '@widgets/TopSalesByCategories'
import TopRetail from '@widgets/TopRetail'
import TopEventsByCategories from '@widgets/TopEventsList'

//i18n
import { withTranslation } from 'react-i18next'
import { ICategory } from '@interfaces/contents'

const TopEvent = ({ t }: any) => {
  const categories: ICategory[] = [
    {
      id: 'b57547e1-86e2-4133-a196-5904f80cf672',
      name: 'Music',
      iconImageUrl:
        'https://res.cloudinary.com/dadvtny30/image/upload/v1713505725/eventhub/category/hhganbll8tt2wofqdsn2.png',
      iconImageFileName: '',
      color: '#F27BBD',
      isDeleted: false,
      deletedAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 'b57547e1-86e2-4133-a196-5904f80cf673',
      name: 'Food & Drink',
      iconImageUrl:
        'https://res.cloudinary.com/dadvtny30/image/upload/v1713505724/eventhub/category/dze7rcjxmhbiyuxp0nms.png',
      iconImageFileName: '',
      color: '#A3FFD6',
      isDeleted: false,
      deletedAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 'acf0ac38-4e32-4456-b519-0ac009e4da1a',
      name: 'Fashion',
      color: '#F3D0D7',
      iconImageUrl:
        'https://res.cloudinary.com/dadvtny30/image/upload/v1713505724/eventhub/category/ltf9kjwcm9flsr9kava1.png',
      iconImageFileName: '',
      isDeleted: false,
      deletedAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '8ab53d26-742c-4515-8a8f-a5e2a5b86403',
      name: 'Music',
      color: '#EE4266',
      iconImageUrl:
        'https://res.cloudinary.com/dadvtny30/image/upload/v1713505726/eventhub/category/zs0q5wmitcvihqjgm0ov.png',
      iconImageFileName: '',
      isDeleted: false,
      deletedAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
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
