// components
import LinearProgress from '@mui/material/LinearProgress'

// hooks
import { useTheme } from '@contexts/theme.context'
import { useState, useEffect } from 'react'

// utils
import PropTypes from 'prop-types'
import { memo } from 'react'
import { rgba } from 'polished'

const ProgressBar = ({ value = 0, color, ...props }: any) => {
  const [hex, setHex] = useState('#fff')
  const { theme } = useTheme()

  const getHex = () => {
    const colorHEX = getComputedStyle(document.documentElement).getPropertyValue(`--${color}`)
    setHex(colorHEX)
  }

  useEffect(() => {
    getHex()
  }, [theme])

  return (
    <LinearProgress
      variant='determinate'
      aria-label={`${value.toFixed(0)}%`}
      value={value}
      sx={{
        height: 16,
        borderRadius: 8,
        backgroundColor: 'var(--highlight)',
        border: `1px solid var(--${theme === 'light' ? 'border' : 'highlight'})`,
        '& .MuiLinearProgress-bar': {
          backgroundColor: `var(--${color})`,
          borderRadius: 8,
          filter: `drop-shadow(0 2px 4px ${rgba(hex, 0.85)})`,
          transform: value === 0 ? 'translateX(-110%) !important' : 'none'
        }
      }}
      {...props}
    />
  )
}

ProgressBar.propTypes = {
  value: PropTypes.number,
  color: PropTypes.oneOf(['accent', 'red', 'green', 'yellow', 'header'])
}

export default memo(ProgressBar)
