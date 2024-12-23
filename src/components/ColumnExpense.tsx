//hook
import { useState } from 'react'

//component
import Spring from './Spring'
import CardExpense from './CardExpense'
import ModalUpdateExpense from '@pages/events/components/ModalUpdateExpense'
import { toast } from 'react-toastify'
import ConfirmDialog from './Dialog'
import Loading from './Loading'

//icon
import AddCardIcon from '@mui/icons-material/AddCard'
import CloseIcon from '@mui/icons-material/Close'
import { BiEdit } from 'react-icons/bi'
import { MdDelete } from 'react-icons/md'

//utils
import classNames from 'classnames'

//interface
import { IExpense, ISubExpense } from '@interfaces/contents/expense.interface'

//redux
import { useCreateSubExpenseMutation, useDeleteExpenseMutation } from '@redux/apis/expense.api'
import { ICreatedSubExpensePayload } from '@dtos/expense.dto'

//i18n
import { withTranslation } from 'react-i18next'

interface IProps {
  t: any
  index: number
  expense: IExpense
}
const ColumnExpense = (props: IProps) => {
  const { t, index, expense } = props

  const [name, setName] = useState<string>('')
  const [price, setPrice] = useState<number>(0)
  const [openDialog, setOpenDialog] = useState<boolean>(false)
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [openNewCardForm, setOpenNewCardForm] = useState<boolean>(false)
  const toggleOpenNewCardForm = () => setOpenNewCardForm(!openNewCardForm)

  const [DeleteExpense, { isLoading: loadingDelete }] = useDeleteExpenseMutation()
  const [CreateExpense, { isLoading: loadingCreate }] = useCreateSubExpenseMutation()

  const handleDeleteExpense = async () => {
    try {
      const result = await DeleteExpense(expense.id).unwrap()
      if (result) {
        toast.success('Delete expense successfully')
        setOpenDialog(false)
      }
    } catch (error) {
      console.error(error)
      toast.success('Something went wrong')
    }
  }

  const handleCreateExpense = async () => {
    const data: ICreatedSubExpensePayload = {
      name,
      expenseId: expense.id,
      price
    }
    try {
      const result = await CreateExpense(data).unwrap()
      if (result) {
        toast.success('Create expense successfully')
        setOpenNewCardForm(false)
      }
    } catch (error) {
      console.error(error)
      toast.success('Something went wrong')
    }
  }

  return (
    <Spring type='fade-up' index={index} className='min-w-[400px] h-auto bg-[#ebecf0] ml-2 rounded-6 rounded-xl'>
      <div className='flex h-[50px] p-4 items-center justify-between'>
        <div className='flex items-center gap-2'>
          <h5 className='h5 text-primary'>{expense.title}</h5>
          <button
            onClick={() => {
              setModalOpen(true)
            }}
          >
            <BiEdit size={20} />
          </button>
          <button
            onClick={() => {
              setOpenDialog(true)
            }}
          >
            <MdDelete size={20} color='red' />
          </button>
        </div>
        <h6 className='h6 text-error'>{expense.total.toFixed(2)} VND</h6>
      </div>

      <div className='flex flex-col overflow-x-hidden overflow-y-auto gap-2 mx-[5px] px-[5px] pr-[5px]'>
        {expense.subExpenses.map((item: ISubExpense, index: number) => (
          <CardExpense key={index} sub_expense={item} />
        ))}
      </div>

      <div className='w-full h-[56px] p-2 flex items-center justify-between'>
        {!openNewCardForm ? (
          <div className='h-full flex items-center justify-between'>
            <button
              className='flex item center hover:bg-primary-200 text-primary p-2 gap-2 rounded-lg'
              onClick={toggleOpenNewCardForm}
            >
              <AddCardIcon />
              {t('add_new_sub_expense')}
            </button>
          </div>
        ) : (
          <div className='h-full flex items-center gap-1'>
            <input
              className={classNames('field-input', { 'field-input--error': false })}
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t('sub_expense_placeholder')}
            />
            <input
              className={classNames('field-input', { 'field-input--error': false })}
              id='price'
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              placeholder='Enter price'
            />
            <div className='flex items-center gap-1'>
              <button className='btn btn-primary' disabled={false} onClick={handleCreateExpense}>
                {loadingCreate ? <Loading /> : 'Add'}
              </button>
              <CloseIcon fontSize='small' className='cursor-pointer text-primary' onClick={toggleOpenNewCardForm} />
            </div>
          </div>
        )}
      </div>

      {modalOpen && <ModalUpdateExpense modalOpen={modalOpen} setModalOpen={setModalOpen} expense={expense} />}
      <ConfirmDialog
        title='Delete Expense'
        description={`Are you sure want to delete this expense`}
        open={openDialog}
        setOpen={(value) => {
          setOpenDialog(value)
        }}
        action='Delete'
        onHandle={handleDeleteExpense}
        disabled={loadingDelete}
      />
    </Spring>
  )
}

export default withTranslation('my_expense_detail')(ColumnExpense)
