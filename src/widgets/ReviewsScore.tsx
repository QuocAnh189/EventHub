//components
import Spring from '@components/Spring'
import RatingStars from '@ui/RatingStars'
import Counter from '@components/Counter'

//i18n
import { withTranslation } from 'react-i18next'

interface Props {
  t: any
  score: number
}

const ReviewsScore = (props: Props) => {
  const { t, score } = props

  return (
    <Spring className='card flex flex-col items-start md:items-center md:!pt-11'>
      <RatingStars value={score} />
      <Counter className='h2 md:!text-[32px] my-[17px]' num={score} decimals={1} />
      <span className='h6'>{t('middle.review_score')}</span>
    </Spring>
  )
}

export default withTranslation('review')(ReviewsScore)
