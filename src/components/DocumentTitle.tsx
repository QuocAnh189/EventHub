// components
import { Helmet } from 'react-helmet'

interface Props {
  title: string
}

export const DocumentTitle = (props: Props) => {
  const { title } = props

  return (
    <Helmet>
      <title>{title} | Event Hub</title>
    </Helmet>
  )
}
