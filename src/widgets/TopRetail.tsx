//components
import TopRetailCard from '@components/TopRetailCard'

//interface
import { ICategory } from 'interfaces/contents/category.interface'

interface Props {
  categories: ICategory[]
}

const TopRetail = (props: Props) => {
  const { categories } = props
  return (
    <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-[26px] lg:grid-cols-4 2xl:col-span-4'>
      {categories.map((category, index) => (
        <TopRetailCard key={`category-${index}`} category={category} />
      ))}
    </div>
  )
}

export default TopRetail
