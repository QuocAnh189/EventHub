//i18n
import { withTranslation } from 'react-i18next'

const TranslatedAboutUs = ({ t }: any) => {
  return (
    <div className='container pt-14 text-header'>
      <div className='py-10'>
        <h1 className='my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold'>{t('about us.title')}</h1>
        <p className='text-justify'>{t('about us.description_one')}</p>
        <br />
        <p className='text-justify'>{t('about us.description_two')}</p>
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

export const AboutUs = withTranslation('home')(TranslatedAboutUs)
