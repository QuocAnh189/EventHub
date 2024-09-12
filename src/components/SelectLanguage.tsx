import { memo } from 'react'

// styled components
import { BasicSelect, MinimalSelect } from '@ui/Select/styles'

// hooks
import { useState } from 'react'

// utils
import { components } from 'react-select'

//interface
import { IOptionSelect } from '@constants/options.constant'

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
}

const SelectLanguage = (props: Props) => {
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
    isDisable
  } = props
  const [uniqueId] = useState(() => 'select_' + Math.random().toFixed(5).slice(2))

  // custom dropdown indicator
  const Control = ({ children, ...props }: any) => {
    const icon = props.options.find((option: IOptionSelect) => option.value === value.value)?.icon

    return (
      <div className='w-[160px]'>
        <components.Control className={`${variant === 'basic' ? 'field-input flex justify-between' : ''}`} {...props}>
          <div className='flex items-center justify-center gap-2'>
            <img className='rounded-full w-5' src={icon} alt='' />
            {children}
          </div>

          <i className='icon icon-caret-down-solid' />
        </components.Control>
      </div>
    )
  }

  const Option = (props: any) => {
    // const backgroundColor = props.data.backgroundColor

    return (
      <components.Option {...props}>
        <div className='group flex items-center gap-2.5 w-fit'>
          <img className='rounded-full w-5' src={props.data.icon} alt={props.data.label} />
          <span className={`text-sm font-medium transition group-hover:text-accent`}>{props.data.label}</span>
        </div>
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

export default memo(SelectLanguage)
