//hook
import { useEffect, useState } from 'react'
import { UseFormSetValue, UseFormWatch } from 'react-hook-form'

//component
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import Divider from '@mui/material/Divider'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import CategoryItem from './CategoryItem'

//interface
import { ICategory } from '@interfaces/contents'

//redux
import { useAppSelector } from '@hooks/useRedux'
import { IParamsEvent } from '@type/event.type'

//i18
import { withTranslation } from 'react-i18next'

interface Props {
  t: any
  watch: UseFormWatch<IParamsEvent>
  setValue: UseFormSetValue<IParamsEvent>
}

const SidebarExploreResponsive = (props: Props) => {
  const { t, watch, setValue } = props

  const categories = useAppSelector((state) => state.persistedReducer.category.categories)

  const [categorySelect, setCategorySelect] = useState<string[]>([])

  const handleSelectCategory = (id: string) => {
    if (categorySelect?.includes(id)) {
      const newCategorySelect = categorySelect.filter((item) => item !== id)
      setCategorySelect(newCategorySelect)
    } else {
      setCategorySelect([...categorySelect, id])
    }
  }

  useEffect(() => {
    setValue('categoryIds', categorySelect)
  }, [categorySelect.length])

  return (
    <div className='hidden mdl:flex flex-col gap-6 px-6'>
      <div className='flex flex-col gap-2'>
        <div className='flex items-center justify-between'>
          <h1 className='text-black text-xl font-semibold text-header'>{t('sidebar.rate.label')}</h1>
        </div>
        <FormGroup
          aria-labelledby='demo-radio-buttons-group-label'
          defaultValue='female'
          onChange={(e: any) => {
            if (watch().rates?.includes(e.target.value)) {
              const newAverage = watch().rates?.filter((item) => item !== e.target.value)
              setValue('rates', newAverage)
            } else {
              setValue('rates', [...watch().rates!, e.target.value])
            }
          }}
        >
          {[5, 4, 3, 2, 1].map((rate, index) => (
            <FormControlLabel
              key={`rate-${index}`}
              sx={{ color: 'var(--header)' }}
              value={rate}
              control={<Checkbox sx={{ color: 'var(--header)' }} />}
              label={
                <div className='flex items-center gap-1'>
                  {[1, 2, 3, 4, 5].map((item, index) => (
                    <i key={`rate-${index}`} className={`icon-star-solid text-${item <= rate ? 'yellow' : 'gray'}`} />
                  ))}
                  <p>
                    ({rate} {t('sidebar.rate.star')})
                  </p>
                </div>
              }
            />
          ))}
        </FormGroup>
      </div>

      <div className='flex flex-col gap-2'>
        <div className='flex items-center justify-between'>
          <h1 className='text-black text-xl font-semibold text-header'>{t('sidebar.status.label')}</h1>
        </div>
        <RadioGroup
          aria-labelledby='demo-radio-buttons-group-label'
          defaultValue='female'
          name='radio-buttons-group'
          value={watch().type}
          onChange={(e: any) => {
            setValue('type', e.target.value)
          }}
        >
          <FormControlLabel
            sx={{ color: 'var(--header)' }}
            value='ALL'
            control={<Radio sx={{ color: 'var(--header)' }} />}
            label={t('sidebar.status.all')}
          />
          <FormControlLabel
            sx={{ color: 'var(--header)' }}
            value='UPCOMING'
            control={<Radio sx={{ color: 'var(--header)' }} />}
            label={t('sidebar.status.upcoming')}
          />
          <FormControlLabel
            sx={{ color: 'var(--header)' }}
            value='OPENING'
            control={<Radio sx={{ color: 'var(--header)' }} />}
            label={t('sidebar.status.opening')}
          />
          <FormControlLabel
            sx={{ color: 'var(--header)' }}
            value='CLOSED'
            control={<Radio sx={{ color: 'var(--header)' }} />}
            label={t('sidebar.status.closed')}
          />
        </RadioGroup>
      </div>
      <Divider color='#808080' />
      <div className='flex flex-col gap-2'>
        <div className='flex items-center justify-between'>
          <h1 className='text-black text-xl font-semibold text-header'>{t('sidebar.category.label')}</h1>
        </div>
        <div className='space-y-2'>
          {categories.map((category: ICategory, index: number) => (
            <div key={`category-${index}`} className='flex flex-row items-center'>
              <Checkbox
                checked={categorySelect.includes(category.id!)}
                onChange={() => {
                  handleSelectCategory(category.id!)
                }}
                name='antoine'
                sx={{ pl: '0px', color: 'var(--header)' }}
              />
              <CategoryItem category={category} />
            </div>
          ))}
        </div>
      </div>
      <Divider color='#808080' />
    </div>
  )
}

export default withTranslation('explore')(SidebarExploreResponsive)
