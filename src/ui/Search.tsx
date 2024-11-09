import { useNavigate } from 'react-router-dom'
//hooks
import { useState } from 'react'

//i18n
import { useTranslation, withTranslation } from 'react-i18next'

interface Props {
  placeholder?: string
  wrapperClass?: string
  onChange?: (query: string) => void
  query?: string
  setQuery?: (value: string) => void
}
const Search = (props: Props) => {
  const navigate = useNavigate()
  const { t } = useTranslation()

  const { placeholder = t('header.search'), wrapperClass, onChange } = props

  const [query, setQuery] = useState<string>('')

  const handleSearchQueryEvent = () => {
    if (onChange) {
      onChange(query)
    }
    navigate('explore', {
      state: { query: query }
    })
  }

  return (
    <div className={`relative ${wrapperClass || ''}`}>
      <input
        className='field-input !pr-[60px]'
        type='search'
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type='button' className='field-btn icon' aria-label='Search' onClick={handleSearchQueryEvent}>
        <i className='icon-magnifying-glass-solid' />
      </button>
    </div>
  )
}

export default withTranslation('common')(Search)
