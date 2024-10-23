import { useRef, useEffect } from 'react'

const NewMessageInput = ({ value, onChange, onSend }: any) => {
  const input: any = useRef(null)

  const onInputKeyDown = (ev: any) => {
    if (ev.key === 'Enter' && !ev.shiftKey) {
      ev.preventDefault()
      onSend()
    }
  }

  const onChangeEvent = (ev: any) => {
    setTimeout(() => {
      adjustHeight()
    }, 10)
    onChange(ev)
  }

  const adjustHeight = () => {
    setTimeout(() => {
      input.current.style.height = 'auto'
      input.current.style.height = input.current.scrollHeight + 1 + 'px'
    }, 100)
  }

  useEffect(() => {
    adjustHeight()
  }, [value])

  return (
    <input
      ref={input}
      value={value}
      // rows={1}
      placeholder='Type a message'
      onKeyDown={onInputKeyDown}
      onChange={(ev) => onChangeEvent(ev)}
      className='input w-full resize-r-none resize-none overflow-y-auto max-h-40 focus:outline-none'
      name=''
      id=''
    ></input>
  )
}

export default NewMessageInput
