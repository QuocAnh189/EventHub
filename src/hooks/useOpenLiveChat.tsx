//hooks
import { useEffect } from 'react'
import { useAnimate } from 'framer-motion'

function useOpenLiveChatAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    // animate('.arrow', { rotate: isOpen ? 180 : 0 }, { duration: 0.2 })
    animate(
      ' .main',
      {
        clipPath: isOpen ? 'inset(0% 0% 0% 0% round 10px)' : 'inset(90% 0% 10% 100% round 10px)',
        transform: 'translateX(-15%) translateY(-40%)'
      },
      {
        type: 'spring',
        bounce: 0,
        duration: 0.4
      }
    )
  }, [isOpen])

  return scope
}

export default useOpenLiveChatAnimation
