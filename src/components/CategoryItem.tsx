//interface
import { ICategory } from 'interfaces/contents/category.interface'

//i18n
import { withTranslation } from 'react-i18next'

interface Props {
  t: any
  category: ICategory
}

const CategoryItem = (props: Props) => {
  const { t, category } = props

  return (
    <div className='flex flex-row items-center gap-2'>
      <div
        style={{ backgroundColor: category.color }}
        className={`w-[30px] h-[30px] rounded-lg bg-[${category.color}] flex items-center justify-center`}
      >
        <img loading='lazy' className='w-[20px] h-[20px]' src={category.iconImageUrl} />
      </div>
      <p className='text-header'>{t(`category.${category.name}`)}</p>
    </div>
  )
}

export default withTranslation('common')(CategoryItem)
