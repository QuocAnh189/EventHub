//hook
import { useState } from 'react'
import { useParams } from 'react-router-dom'

//components
import ProtectedLayout from '@layouts/protected'
import PageHeader from '@layouts/components/PageHeader'
import ColumnExpense from '@components/ColumnExpense'
import Loader from '@components/Loader'
import Loading from '@components/Loading'

//icon
import { MdOutlineNoteAdd } from 'react-icons/md'
import { IoMdClose } from 'react-icons/io'

//redux
import { useGetExpensesByEventQuery } from '@redux/apis/expense.api'
import { useCreateExpenseMutation } from '@redux/apis/expense.api'

//interface
import { IExpense } from '@interfaces/contents/expense.interface'
import { toast } from 'react-toastify'

//dto
import { ICreateExpensePayload } from '@dtos/expense.dto'

//utils
import classNames from 'classnames'

//i18n
import { withTranslation } from 'react-i18next'

const MyExpenseDetail = ({ t }: any) => {
  const params = useParams()

  const [title, setTitle] = useState<string>('')
  const { data, isFetching } = useGetExpensesByEventQuery({ eventId: params.id!, params: {} })
  const [CreateExpense, { isLoading }] = useCreateExpenseMutation()

  const [openNewColumnForm, setOpenNewColumnForm] = useState<boolean>(false)
  const toggleOpenNewColumnForm = () => setOpenNewColumnForm(!openNewColumnForm)

  const handleCreateExpense = async () => {
    const data: ICreateExpensePayload = {
      title: title,
      eventId: params.id!,
      total: 0
    }
    try {
      const result = await CreateExpense(data).unwrap()
      if (result) {
        toggleOpenNewColumnForm()
        toast.success('Create expense success')
      } else {
        toast.error('Create expense failed')
      }
    } catch (err) {
      toast.error('Create expense failed')
      console.log(err)
    }
  }

  return (
    <ProtectedLayout>
      <PageHeader title={t('header.title')} />
      <div className='flex w-full h-screen'>
        <div className='flex w-full overflow-scroll bg-inherit'>
          {isFetching && <Loader />}
          {data?.items.map((expense: IExpense, index) => (
            <ColumnExpense key={`expense-${index}`} expense={expense} index={index} />
          ))}
          {!openNewColumnForm ? (
            <div className='min-w-[300px] mx-2 rounded-6 h-fit-content' onClick={toggleOpenNewColumnForm}>
              <button className='flex items-center w-full btn btn-primary'>
                <MdOutlineNoteAdd size={20} />
                {t('add_new_expense')}
              </button>
            </div>
          ) : (
            <div className='min-w-[250px] mx-2 p-1 rounded-6 h-fit-content bg-white3d'>
              <input
                className={classNames('field-input', { 'field-input--error': false })}
                id='title'
                value={title}
                placeholder={t('expense_placeholder')}
                onChange={(e) => setTitle(e.target.value)}
              />
              <div className='flex items-center justify-between mt-4'>
                <button onClick={handleCreateExpense} className='flex w-4/5 h-[40px] items-center btn btn-primary'>
                  <MdOutlineNoteAdd size={20} />
                  {isLoading ? <Loading /> : t('add_new_expense')}
                </button>
                <IoMdClose size={20} onClick={toggleOpenNewColumnForm} color='black' className='cursor-pointer' />
              </div>
            </div>
          )}
        </div>
      </div>
    </ProtectedLayout>
  )
}

export default withTranslation('my_expense_detail')(MyExpenseDetail)
