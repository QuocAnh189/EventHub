// components
import { Helmet } from 'react-helmet'

interface Props {
  title: string
}

const DocumentTitle = (props: Props) => {
  const { title } = props

  return (
    <Helmet>
      <title>{title} | Event Hub</title>
    </Helmet>
  )
}

export default DocumentTitle
