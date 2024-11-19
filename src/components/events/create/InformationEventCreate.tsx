//hooks
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

//form
import { Control, useFieldArray, UseFormRegister, UseFormWatch, UseFormSetValue } from 'react-hook-form'

//component
import TextField from '@mui/material/TextField'
// import InputLabel from '@mui/material/InputLabel'
// import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import InputAdornment from '@mui/material/InputAdornment'
// import CategoryItem from '@components/CategoryItem'
import { toast } from 'react-toastify'

//constant
import { EVENT_CATEGORIES, IOptionSelect } from '@constants/options.constant'

//icon
import { MdDateRange } from 'react-icons/md'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { CiCircleRemove } from 'react-icons/ci'

//constant
import { EEventStyle } from '@constants/enum.constant'

//interface & type
// import { ICategory } from '@interfaces/contents/category.interface'
import { ICreateEventPayload } from '@type/event.type'

//redux
import { useAppSelector } from '@hooks/useRedux'

//i18n
import { withTranslation } from 'react-i18next'
import Select from '@ui/Select'

interface Props {
  t: any
  create: boolean
  register: UseFormRegister<ICreateEventPayload>
  setValue: UseFormSetValue<ICreateEventPayload>
  watch: UseFormWatch<ICreateEventPayload>
  control: Control<ICreateEventPayload, any>
  setActive: (value: number) => void
}

const InformationEvent = (props: Props) => {
  const { t, create, setActive, register, watch, control, setValue } = props
  const navigate = useNavigate()

  const categoriesStore = useAppSelector((state) => state.persistedReducer.category.categories)

  const [enableCheckError, setEnableCheckError] = useState<boolean>(false)

  const {
    fields: reasons,
    append: appendReasons,
    remove: removeReasons
  } = useFieldArray({
    control,
    name: 'reasons'
  })

  const {
    fields: categories,
    append: appendCategory,
    remove: removeCategory
  } = useFieldArray({
    control,
    name: 'categoryIds'
  })

  const handleNextStep = () => {
    setEnableCheckError(true)
    if (
      watch().name &&
      watch().categoryIds.length &&
      watch().eventCycleType &&
      watch().startTime &&
      watch().endTime &&
      watch().location &&
      watch().description
    ) {
      setActive(1)
    } else {
      toast.error('Please enter full information')
    }
  }

  return (
    <div className='relative lg:pl-24 items-center pt-10 pb-20 space-y-10 min-h-screen'>
      <div className='w-full flex flex-col mdl:flex-row items-center gap-2'>
        <div className='w-4/5 mdl:w-[200px] flex mdl:justify-end gap-2'>
          <p className='font-semibold text-md text-right text-header'>{t('information.event_detail.event_title')}</p>
          <span className='text-red'>*</span>
        </div>
        <FormControl className='w-4/5 mdl:w-[600px] text-header'>
          <TextField
            sx={{
              '& label': { color: 'var(--header)' },
              '& .MuiOutlinedInput-input': {
                color: 'var(--header)'
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'var(--header)'
                },
                '&:hover fieldset': {
                  borderColor: 'var(--header)'
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'var(--header)'
                }
              }
            }}
            error={enableCheckError ? (watch().name ? false : true) : false}
            {...register('name', { required: true })}
            name='name'
            label={t('information.event_detail.event_title_placeholder')}
            size='small'
            className='text-header'
          />
        </FormControl>
      </div>

      <div className='w-full flex flex-col mdl:flex-row items-center gap-2'>
        <div className='w-4/5 mdl:w-[200px] flex mdl:justify-end gap-2'>
          <p className='font-semibold text-md text-right text-header'>{t('information.event_detail.event_category')}</p>
          <span className='text-red'>*</span>
        </div>
        <FormControl className='w-4/5 mdl:w-[600px] text-header'>
          <Select
            placeholder={t('information.event_detail.event_category_placeholder')}
            id='category'
            options={EVENT_CATEGORIES || categoriesStore}
            onChange={(e: IOptionSelect) => {
              console.log(e, appendCategory, removeCategory, categories)
            }}
          />
        </FormControl>
      </div>

      <div className='w-full flex flex-col mdl:flex-row items-center gap-2'>
        <div className='w-4/5 mdl:w-[200px] flex mdl:justify-end gap-2'>
          <p className='font-semibold text-md text-right text-header'>
            {t('information.event_detail.event_type.title')}
          </p>
          <span className='text-red'>*</span>
        </div>
        <FormControl className='w-4/5 mdl:w-[600px] text-header'>
          <RadioGroup
            {...register('eventCycleType')}
            row
            aria-labelledby='demo-row-radio-buttons-group-label'
            name='row-radio-buttons-group'
            value={watch().eventCycleType}
            onChange={(e: any) => {
              setValue('eventCycleType', e.target.value)
            }}
          >
            <FormControlLabel
              value={EEventStyle.SINGLE}
              control={<Radio sx={{ color: 'var(--header)' }} />}
              label={t('information.event_detail.event_type.label_one')}
              sx={{ color: 'var(--header)' }}
            />
            <FormControlLabel
              value={EEventStyle.RECURRING}
              control={<Radio sx={{ color: 'var(--header)' }} />}
              label={t('information.event_detail.event_type.label_two')}
              sx={{ color: 'var(--header)' }}
            />
          </RadioGroup>
        </FormControl>
      </div>

      <div className='w-full flex flex-col items-center gap-2'>
        <div className='w-4/5 mdl:pl-20'>
          <p className='font-semibold text-2xl text-header'>{t('information.event_datetime.title')}</p>
        </div>
        <div className='w-full flex flex-col mdl:flex-row items-center gap-2'>
          <div className='w-4/5 mdl:w-[200px] flex mdl:justify-end gap-2'>
            <p className='font-semibold text-md text-header'>
              {t('information.event_datetime.session.title')} <span className='text-red'>*</span>
            </p>
          </div>
          <div className='w-4/5 mdl:w-[600px] text-header space-y-2 mdl:space-y-0 mdl:space-x-8'>
            <FormControl>
              <FormLabel sx={{ fontWeight: 'bold' }}>
                <p className='text-header'>{t('information.event_datetime.session.label_one')}</p>
              </FormLabel>
              <TextField
                {...register('startTime')}
                error={enableCheckError ? (watch().startTime ? false : true) : false}
                sx={{
                  width: '250px',
                  '& .MuiOutlinedInput-input': {
                    color: 'var(--header)'
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'var(--header)'
                    },
                    '&:hover fieldset': {
                      borderColor: 'var(--header)'
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'var(--header)'
                    }
                  }
                }}
                size='small'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <MdDateRange color='var(--header)' />
                    </InputAdornment>
                  )
                }}
                type='datetime-local'
              />
            </FormControl>
            <FormControl>
              <FormLabel sx={{ fontWeight: 'bold' }}>
                <p className='text-header'>{t('information.event_datetime.session.label_two')}</p>
              </FormLabel>
              <TextField
                sx={{
                  width: '250px',
                  '& .MuiOutlinedInput-input': {
                    color: 'var(--header)'
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'var(--header)'
                    },
                    '&:hover fieldset': {
                      borderColor: 'var(--header)'
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'var(--header)'
                    }
                  }
                }}
                {...register('endTime')}
                error={enableCheckError ? (watch().endTime ? false : true) : false}
                size='small'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <MdDateRange color='var(--header)' />
                    </InputAdornment>
                  )
                }}
                type='datetime-local'
              />
            </FormControl>
          </div>
        </div>
      </div>

      <div className='w-full flex flex-col items-center gap-2'>
        <div className='w-4/5 mdl:pl-20'>
          <p className='font-semibold text-2xl text-header'>{t('information.location.title')}</p>
        </div>
        <div className='w-full flex flex-col mdl:flex-row items-center gap-2'>
          <div className='w-4/5 mdl:w-[200px] flex mdl:justify-end gap-2'>
            <p className='font-semibold text-md text-right text-header'>{t('information.location.label')}</p>
            <span className='text-red'>*</span>
          </div>
          <FormControl className='w-4/5 mdl:w-[600px] text-header'>
            <TextField
              sx={{
                '& label': { color: 'var(--header)' },
                '& .MuiOutlinedInput-input': {
                  color: 'var(--header)'
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'var(--header)'
                  },
                  '&:hover fieldset': {
                    borderColor: 'var(--header)'
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'var(--header)'
                  }
                }
              }}
              {...register('location')}
              error={enableCheckError ? (watch().location ? false : true) : false}
              id='outlined-basic'
              label={t('information.location.placeholder')}
              size='small'
            />
          </FormControl>
        </div>
      </div>

      <div className='w-full flex flex-col items-center gap-2'>
        <div className='w-4/5 mdl:pl-20'>
          <p className='font-semibold text-2xl text-header'>{t('information.description.title')}</p>
        </div>
        <div className='w-full flex flex-col mdl:flex-row items-center gap-2'>
          <div className='w-4/5 mdl:w-[200px] flex mdl:justify-end gap-2'>
            <p className='font-semibold text-md text-right text-header'>
              {t('information.description.label')} <span className='text-red'>*</span>
            </p>
          </div>
          <FormControl className='w-4/5 mdl:w-[600px] text-header'>
            <TextField
              sx={{
                '& label': { color: 'var(--header)' },
                '& .MuiOutlinedInput-input': {
                  color: 'var(--header)'
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'var(--header)'
                  },
                  '&:hover fieldset': {
                    borderColor: 'var(--header)'
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'var(--header)'
                  }
                }
              }}
              error={enableCheckError ? (watch().description ? false : true) : false}
              {...register('description')}
              multiline={true}
              rows={4}
              id='outlined-basic'
              label={t('information.description.placeholder')}
            />
          </FormControl>
        </div>
      </div>

      <div className='w-full flex flex-col items-center gap-2'>
        <div className='w-4/5 mdl:pl-20 flex flex-row gap-2 items-center'>
          <p className='font-semibold text-2xl text-header'>{t('information.reason.title')}</p>
          <button
            className='btn'
            onClick={() => {
              appendReasons('')
            }}
          >
            <IoMdAddCircleOutline color='var(--header)' size={30} />
          </button>
        </div>
        <div className='w-full flex flex-col mdl:flex-row items-center gap-2'>
          <div className='w-4/5 mdl:w-[200px] flex mdl:justify-end gap-2'>
            <p className='font-semibold text-md text-right text-header'>{t('information.reason.label')}</p>
          </div>

          {reasons?.map((field: any, index: number) => (
            <FormControl key={field.id} className='w-4/5 mdl:w-[600px] text-header'>
              <TextField
                sx={{
                  '& label': { color: 'var(--header)' },
                  '& .MuiOutlinedInput-input': {
                    color: 'var(--header)'
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'var(--header)'
                    },
                    '&:hover fieldset': {
                      borderColor: 'var(--header)'
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'var(--header)'
                    }
                  }
                }}
                {...register(`reasons.${index}`)}
                id='outlined-basic'
                label={`${t('information.reason.placeholder')} ${index + 1}`}
                size='small'
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end' className='hover:cursor-pointer'>
                      <CiCircleRemove
                        color='var(--header)'
                        size={32}
                        onClick={() => {
                          removeReasons(index)
                        }}
                      />
                    </InputAdornment>
                  )
                }}
              />
            </FormControl>
          ))}
        </div>
      </div>

      <div className='absolute flex items-center gap-4 right-8'>
        <button
          className='btn bg-textGray hover:text-white'
          onClick={() => {
            create ? setActive(-1) : navigate(-1)
          }}
        >
          {t('button_back')}
        </button>
        <button className='btn btn-primary' onClick={handleNextStep}>
          {t('button_continue')}
        </button>
      </div>
    </div>
  )
}

export default withTranslation('create_event')(InformationEvent)
