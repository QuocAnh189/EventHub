//components
import Spring from '@components/Spring'
import LabeledProgressBar from '@components/LabeledProgressBar'

//interface
import { ICategory } from 'interfaces/contents/category.interface'

interface Props {
  label: string
  categories: ICategory[]
}

const TopSalesByCategories = (props: Props) => {
  const { label, categories } = props
  return (
    <Spring className='card flex flex-col gap-2.5 2xl:col-span-2'>
      <h5>{label}</h5>
      <div className='flex flex-col gap-[17px]'>
        {categories?.map((category, index: number) => (
          <LabeledProgressBar
            key={`category-${index}`}
            wrapperClass='!gap-0'
            label={category.name}
            color='red'
            value={70}
            displayValue={'80'}
          />
        ))}
      </div>
    </Spring>
  )
}

export default TopSalesByCategories
