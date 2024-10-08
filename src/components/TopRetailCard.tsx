//components
import Spring from './Spring'

//interface
import { ICategory } from 'interfaces/contents/category.interface'

interface Props {
  category: ICategory
}

const TopRetailCard = (props: Props) => {
  const { category } = props

  return (
    <Spring className='card'>
      <div style={{ backgroundColor: category.color }} className={`h-[157px] flex justify-center items-center mb-6`}>
        <img className='max-w-[120px]' src={category.iconImageUrl} alt='img_default' />
      </div>
      <div className='flex gap-5'>
        <div className='w-full flex flex-col items-center'>
          <span className='label-text truncate'>{category.name}</span>
          <span className='h5'>$256k</span>
        </div>
      </div>
    </Spring>
  )
}

export default TopRetailCard
