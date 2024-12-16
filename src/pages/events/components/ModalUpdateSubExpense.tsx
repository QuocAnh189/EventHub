//hooks
import { useState } from 'react'

//components
import ModalBase from '@ui/ModalBase'
import Loading from '@components/Loading'
import { toast } from 'react-toastify'

//util
import classNames from 'classnames'

//interface
import { ISubExpense } from '@interfaces/contents/expense.interface'
import { IUpdateSubExpensePayload } from '@dtos/expense.dto'

//redux
import { useUpdateSubExpenseMutation } from '@redux/apis/expense.api'

interface IProps {
  modalOpen: boolean
  setModalOpen: (value: boolean) => void
  sub_expense: ISubExpense
}

const ModalUpdateSubExpense = (props: IProps) => {
  const { modalOpen, setModalOpen, sub_expense } = props

  const [name, setName] = useState(sub_expense.name)
  const [price, setPrice] = useState(sub_expense.price)
  const [UpdateSubExpense, { isLoading }] = useUpdateSubExpenseMutation()

  const handleUpdateExpense = async () => {
    const data: IUpdateSubExpensePayload = {
      id: sub_expense.id,
      expenseId: sub_expense.expenseId,
      name,
      price
    }
    try {
      const result = await UpdateSubExpense(data).unwrap()
      if (result) {
        console.log(result)
        toast.success('Sub expense updated successfully')
        setModalOpen(false)
      }
    } catch (error) {
      console.error(error)
      toast.error('Something went wrong')
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
              id='name'
              value={name}
              placeholder='Enter name'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='field-wrapper'>
            <label className='field-label' htmlFor='title'>
              Price
            </label>
            <input
              className={classNames('field-input', { 'field-input--error': false })}
              id='price'
              value={price}
              placeholder='Enter price'
              onChange={(e) => setPrice(Number(e.target.value))}
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

export default ModalUpdateSubExpense
