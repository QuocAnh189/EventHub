// components
import Spring from '@components/Spring'
import LabeledProgressBar from '@components/LabeledProgressBar'

// utils
import { ICategory } from 'interfaces/contents/category'

interface IProps {
  categories: ICategory[]
}

const TopSalesByCategories = (props: IProps) => {
  const { categories } = props
  return (
    <Spring className='card flex flex-col gap-2.5 2xl:col-span-2'>
      <h5>Top Events by Categories</h5>
      <div className='flex flex-col gap-[17px]'>
        {categories?.map((category, index) => (
          <LabeledProgressBar
            key={`category-${index}`}
            wrapperClass='!gap-0'
            label={category.name}
            color={category.color}
            value={70}
            displayValue={'Event'}
          />
        ))}
      </div>
    </Spring>
  )
}

export default TopSalesByCategories
