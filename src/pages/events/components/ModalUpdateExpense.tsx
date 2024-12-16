//hooks
import { useState } from 'react'

//components
import ModalBase from '@ui/ModalBase'
import Loading from '@components/Loading'
import { toast } from 'react-toastify'

//util
import classNames from 'classnames'

//interface
import { IExpense } from '@interfaces/contents/expense.interface'
import { IUpdateExpensePayload } from '@dtos/expense.dto'

//redux
import { useUpdateExpenseMutation } from '@redux/apis/expense.api'

interface IProps {
  modalOpen: boolean
  setModalOpen: (value: boolean) => void
  expense: IExpense
}

const ModalUpdateExpense = (props: IProps) => {
  const { modalOpen, setModalOpen, expense } = props

  const [title, setTitle] = useState(expense.title)
  const [UpdateExpense, { isLoading }] = useUpdateExpenseMutation()

  const handleUpdateExpense = async () => {
    const data: IUpdateExpensePayload = {
      id: expense.id,
      title: title,
      eventId: expense.eventId,
      total: expense.total
    }
    try {
      const result = await UpdateExpense(data).unwrap()
      if (result) {
        console.log(result)
        toast.success('Expense updated successfully')
        setModalOpen(false)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <ModalBase open={modalOpen} onClose={() => setModalOpen(false)}>
      <div className='card relative no-hover flex flex-col w-full max-w-[400px] will-change-transform'>
        <button
          type='button'
          className='absolute top-5 right-5 icon text-[18px] transition hover:text-red'
          onClick={() => setModalOpen(false)}
          aria-label='Close'
        >
          <i className='icon-circle-xmark-regular' />
        </button>
        <h6 className='h6'>Update Expense</h6>
        <div className='flex flex-col gap-4 mt-4'>
          <div className='field-wrapper'>
            <label className='field-label' htmlFor='title'>
              Title
            </label>
            <input
              className={classNames('field-input', { 'field-input--error': false })}
              id='title'
              value={title}
              placeholder='Enter title'
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <button onClick={handleUpdateExpense} className='btn btn-primary hover:bg-primary-300'>
            {isLoading ? <Loading /> : 'Update'}
          </button>
        </div>
      </div>
    </ModalBase>
  )
}

export default ModalUpdateExpense
