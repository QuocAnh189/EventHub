// styling
import styled from 'styled-components/macro'

// components
import Rating from '@mui/material/Rating'
import { ReactComponent as StarFilled } from '@assets/images/icons/star_solid.svg'
import { ReactComponent as StarEmpty } from '@assets/images/icons/star_regular.svg'

const StyledRating = styled(Rating)`
  gap: 15px;

  .MuiRating-iconFilled,
  .MuiRating-iconEmpty {
    background: transparent;
    width: 18px;
    height: 18px;
    color: var(--yellow);
  }
`

const RatingStars = ({ rating = 0, readOnly = true, ...props }) => {
  return (
    <StyledRating
      readOnly={readOnly}
      value={rating}
      precision={0.5}
      emptyIcon={<StarEmpty />}
      icon={<StarFilled />}
      {...props}
    />
  )
}

export default RatingStars
