//hook
import { useState } from 'react'

//components
import Loading from './Loading'
import Spring from './Spring'
import { toast } from 'react-toastify'
import ModalUpdateSubExpense from '@pages/events/components/ModalUpdateSubExpense'

//interface
import { ISubExpense } from '@interfaces/contents/expense.interface'

//icons
import { BiEdit } from 'react-icons/bi'
import { MdDelete } from 'react-icons/md'

//redux
import { useDeleteSubExpenseMutation } from '@redux/apis/expense.api'

interface IProps {
  sub_expense: ISubExpense
}

const CardExpense = (props: IProps) => {
  const { sub_expense } = props

  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [DeleteSubExpense, { isLoading }] = useDeleteSubExpenseMutation()

  const handleDeleteExpense = async () => {
    try {
      const result = await DeleteSubExpense({ expenseId: sub_expense.expenseId, subExpenseId: sub_expense.id }).unwrap()
      if (result) {
        console.log(result)
        toast.success('Delete expense successfully')
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Spring className='flex bg-white rounded-xl p-3 justify-between'>
      <div className='flex items-center justify-between w-4/5'>
        <h6>{sub_expense.name}</h6>
        <p>{sub_expense.price}</p>
      </div>
      <div className='flex items-center gap-2'>
        <button
          onClick={() => {
            console.log(sub_expense)
            setModalOpen(true)
          }}
        >
          <BiEdit size={20} />
        </button>
        <button onClick={handleDeleteExpense}>{isLoading ? <Loading /> : <MdDelete size={20} color='red' />}</button>
      </div>
      {modalOpen && (
        <ModalUpdateSubExpense modalOpen={modalOpen} setModalOpen={setModalOpen} sub_expense={sub_expense} />
      )}
    </Spring>
  )
}

export default CardExpense
