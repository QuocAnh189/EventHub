//i18n
import { withTranslation } from 'react-i18next'

const AboutUs = ({ t }: any) => {
  return (
    <div className='container pt-14 text-header'>
      <div className='py-10'>
        <h1 className='h1 my-8 border-l-8 py-2 pl-2  text-primary'>{t('about_us.title')}</h1>
        <h6 className='text-justify'>{t('about_us.description_one')}</h6>
        <br />
        <h6 className='text-justify'>{t('about_us.description_two')}</h6>
      </div>
      <div className='flex w-full items-center justify-center'>
        <iframe
          className='rounded-sm sml:w-4/5'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.231240416691!2d106.80047917509012!3d10.870008889284525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527587e9ad5bf%3A0xafa66f9c8be3c91!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2jhu4cgVGjDtG5nIHRpbiAtIMSQSFFHIFRQLkhDTQ!5e0!3m2!1svi!2s!4v1715500492989!5m2!1svi!2s'
          width='600'
          height='450'
          loading='lazy'
        />
      </div>
    </div>
  )
}

export default withTranslation('home')(AboutUs)
