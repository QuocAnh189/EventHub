//hooks
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

//components
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Divider from '@mui/material/Divider'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import CategoryItem from './CategoryItem'

//interface
import { ICategory } from '@interfaces/contents'

//redux
import { useAppSelector } from '@hooks/useRedux'

//i18
import { withTranslation } from 'react-i18next'

//interface
import { IParamsEvent } from '@type/event.type'
import { EEventStatus } from '@constants/enum.constant'
import RatingStars from '@ui/RatingStars'

interface Props {
  t: any
  params: IParamsEvent
  setParams: Dispatch<SetStateAction<IParamsEvent>>
}

const SidebarExploreResponsive = (props: Props) => {
  const { t, params, setParams } = props

  const categories = useAppSelector((state) => state.persistedReducer.category.categories)

  const [categorySelect, setCategorySelect] = useState<string[]>([])

  const handleSelectCategory = (id: string) => {
    if (categorySelect?.includes(id)) {
      const newCategoryIdsSelect = categorySelect.filter((item) => item !== id)
      setCategorySelect(newCategoryIdsSelect)
    } else {
      setCategorySelect([...categorySelect, id])
    }
  }

  useEffect(() => {
    setParams({ ...params, categoryIds: categorySelect })
  }, [categorySelect.length])

  return (
    <div className='hidden mdl:flex flex-col gap-6 px-6'>
      <div className='flex flex-col gap-2'>
        <div className='flex items-center justify-between'>
          <h1 className='text-black text-xl font-semibold text-header'>{t('sidebar.rate.label')}</h1>
        </div>
        <RadioGroup
          aria-labelledby='demo-radio-buttons-group-label'
          onChange={(e: any) => {
            setParams({ ...params, minRate: e.target.value })
          }}
        >
          {[5, 4, 3, 2, 1].map((rate, index) => (
            <FormControlLabel
              key={`rate-${index}`}
              sx={{ color: 'var(--header)' }}
              value={rate}
              control={<Radio sx={{ color: 'var(--header)' }} />}
              label={
                <div className='flex items-center gap-1'>
                  <RatingStars value={rate} />
                  <p>({`>=${rate} ${t('sidebar.rate.star')}`})</p>
                </div>
              }
            />
          ))}
        </RadioGroup>
      </div>

      <div className='flex flex-col gap-2'>
        <div className='flex items-center justify-between'>
          <h1 className='text-black text-xl font-semibold text-header'>{t('sidebar.status.label')}</h1>
        </div>
        <RadioGroup
          aria-labelledby='demo-radio-buttons-group-label'
          defaultValue='female'
          name='radio-buttons-group'
          onChange={(e: any) => {
            setParams({ ...params, status: e.target.value })
          }}
        >
          <FormControlLabel
            sx={{ color: 'var(--header)' }}
            value={EEventStatus.All}
            control={<Radio sx={{ color: 'var(--header)' }} />}
            label={t('sidebar.status.all')}
          />
          <FormControlLabel
            sx={{ color: 'var(--header)' }}
            value={EEventStatus.Upcoming}
            control={<Radio sx={{ color: 'var(--header)' }} />}
            label={t('sidebar.status.upcoming')}
          />
          <FormControlLabel
            sx={{ color: 'var(--header)' }}
            value={EEventStatus.Opening}
            control={<Radio sx={{ color: 'var(--header)' }} />}
            label={t('sidebar.status.opening')}
          />
          <FormControlLabel
            sx={{ color: 'var(--header)' }}
            value={EEventStatus.Closed}
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
