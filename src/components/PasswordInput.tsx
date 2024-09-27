//hooks
import { useState, useEffect } from 'react'

//utils
import classNames from 'classnames'

interface Props {
  id: string
  value: string
  label: string
  innerRef: any
  isInvalid?: any
  onChange?: () => void
}

const PasswordInput = (props: Props) => {
  const { innerRef, value, id, label, isInvalid } = props
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const togglePasswordVisibility = (e: any) => {
    e.preventDefault()
    setIsPasswordVisible(!isPasswordVisible)
  }

  useEffect(() => {
    value === '' && setIsPasswordVisible(false)
  }, [value])

  return (
    <div className='field-wrapper'>
      <label className='field-label' htmlFor={id}>
        {label}
      </label>
      <div className='relative'>
        <input
          // id={id}
          className={classNames('field-input !pr-10', { 'field-input--error': isInvalid })}
          type={isPasswordVisible ? 'text' : 'password'}
          ref={innerRef}
          {...props}
        />
        <button className='field-btn' onClick={togglePasswordVisibility} aria-label='Toggle password visibility'>
          <i className={`icon icon-eye${isPasswordVisible ? '-slash-regular' : '-regular'}`} />
        </button>
      </div>
    </div>
  )
}

export default PasswordInput
