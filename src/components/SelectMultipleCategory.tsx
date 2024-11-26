//hooks
import { useState } from 'react'

//styled components
import { BasicSelect, MinimalSelect } from '@ui/Select/styles'

//utils
import { components } from 'react-select'
import { memo } from 'react'

//assets
import image_default from '@assets/images/common/image_default.jpg'

interface Props {
  id?: any
  options?: any
  value?: any
  onChange?: any
  variant?: any
  placeholder?: any
  isSearchable?: any
  innerRef?: any
  isInvalid?: any
  isDisable?: any
  categoryIds: any[]
  removeCategory: (id: string) => void
}

const SelectMultipleCategory = (props: Props) => {
  const {
    id,
    options,
    value,
    onChange,
    variant = 'basic',
    placeholder,
    isSearchable,
    innerRef,
    isInvalid,
    isDisable,
    categoryIds,
    removeCategory
  } = props
  const [uniqueId] = useState(() => 'select_' + Math.random().toFixed(5).slice(2))

  // custom dropdown indicator
  const Control = ({ children, ...props }: any) => {
    const selectedCategories = props.options.filter((category: any) => categoryIds.includes(category.id))

    return (
      <components.Control className={`${variant === 'basic' ? 'field-input gap-2' : ''}`} {...props}>
        <div className='flex items-center gap-4'>
          {selectedCategories.map((category: any) => (
            <div className='relative flex items-center justify-center gap-2 bg-primary-400 text-white p-1 rounded-md'>
              <button
                type='button'
                className='absolute top-1 right-[2px] icon text-[18px] transition hover:text-red'
                onClick={() => {
                  console.log(category.id)
                  removeCategory(category.id)
                }}
                aria-label='Close'
              >
                <i className='icon-circle-xmark-regular' />
              </button>
              <img
                style={{ backgroundColor: category.color }}
                className='w-5 p-[2px]'
                src={category.iconImageUrl}
                alt=''
              />
              {category.name}
              {children}
            </div>
          ))}
        </div>
        {children}
        <i className='icon icon-caret-down-solid' />
      </components.Control>
    )
  }

  const Option = (props: any) => {
    const backgroundColor = props.data.color

    return (
      <components.Option {...props}>
        {props.data.iconImageUrl ? (
          <div className='flex items-center justify-center gap-2 text-header'>
            <img
              src={props.data.iconImageUrl ? props.data.iconImageUrl : image_default}
              alt={props.data.name}
              className={`w-8 h-8 p-1`}
              style={{ backgroundColor }}
            />
            {props.data.name}
          </div>
        ) : (
          <p className='text-header'>{props.data.name}</p>
        )}
      </components.Option>
    )
  }

  // select props
  const selectProps = {
    classNamePrefix: `select`,
    className: `${isInvalid ? 'is-invalid' : ''}`,
    id: id || uniqueId,
    isSearchable: isSearchable || false,
    isDisabled: isDisable || false,
    options,
    value,
    onChange,
    placeholder,
    openMenuOnFocus: true,
    blurInputOnSelect: true,
    ref: innerRef,
    defaultValue: '',
    onMenuClose: () => {
      const menuEl = document.querySelector(`#${id || uniqueId} .select__menu`)
      const containerEl = menuEl?.parentElement
      const clonedMenuEl: any = menuEl?.cloneNode(true)

      if (!clonedMenuEl) return

      clonedMenuEl?.classList.add('close')
      clonedMenuEl.addEventListener('animationend', () => {
        containerEl?.removeChild(clonedMenuEl)
      })

      containerEl?.appendChild(clonedMenuEl)
    },
    components: {
      Control,
      Option
    }
  }

  return variant === 'basic' ? <BasicSelect {...selectProps} /> : <MinimalSelect {...selectProps} />
}

export default memo(SelectMultipleCategory)
