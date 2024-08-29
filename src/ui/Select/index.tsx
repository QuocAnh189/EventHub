// styled components
import { BasicSelect, MinimalSelect } from './styles'

// hooks
import { useState } from 'react'

// utils
import { components } from 'react-select'
import { memo } from 'react'

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

const SelectComponent = (props: Props) => {
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
    return (
      <components.Control className={`${variant === 'basic' ? 'field-input' : ''}`} {...props}>
        {children}
        <i className='icon icon-caret-down-solid' />
      </components.Control>
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
      Control
    }
  }

  return variant === 'basic' ? <BasicSelect {...selectProps} /> : <MinimalSelect {...selectProps} />
}

export const Select = memo(SelectComponent)
