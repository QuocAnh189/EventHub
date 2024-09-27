//hooks
import { useState } from 'react'

//styled components
import { BasicSelect, MinimalSelect } from './styles'

//utils
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

const Select = (props: Props) => {
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
      <components.Control className={`${variant === 'basic' ? 'field-input gap-2' : ''}`} {...props}>
        {children}
        <i className='icon icon-caret-down-solid' />
      </components.Control>
    )
  }

  const Option = (props: any) => {
    const backgroundColor = props.data.backgroundColor

    return (
      <components.Option {...props}>
        {props.data.icon ? (
          <div className='flex items-center justify-center gap-2 text-header'>
            <img src={props.data.icon} alt={props.data.label} className={`w-5 h-5 p-1`} style={{ backgroundColor }} />
            {props.data.label}
          </div>
        ) : (
          <p className='text-header'>{props.data.label}</p>
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

export default memo(Select)
