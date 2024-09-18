//interface
import { ICategory } from 'interfaces/contents/category.interface'

interface Props {
  category: ICategory
}

const CategoryHeader = (props: Props) => {
  const { category } = props

  return (
    <div className='flex items-center gap-4'>
      <div style={{ backgroundColor: category.color }} className={`badge-icon badge-icon--sm bg-blue-500`}>
        <img className='w-4/5 h4/5' src={category.iconImage} />
      </div>
      <h5>{category.name}</h5>
    </div>
  )
}

export default CategoryHeader
