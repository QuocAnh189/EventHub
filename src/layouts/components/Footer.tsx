//images
import logoText_Img from '@assets/images/common/logo_text.png'

//i18
import { withTranslation } from 'react-i18next'

const Footer = ({ t }: any) => {
  return (
    <footer className='w-full text-body-text bg-black px-8 py-12'>
      <div className='w-full flex flex-col items-center gap-4 lg:flex-row justify-between'>
        <div className='w-full flex flex-col justify-between'>
          <div className='flex items-center gap-2'>
            <img loading='lazy' src={logoText_Img} alt='Logo' className='w-[140px] h-[60px] object-contain' />
          </div>
          <p className='text-gray500 text-sm max-w-80'>{t('footer.left.description')}</p>
          <div className='flex items-center gap-3'>
            <button>
              <p className='text-sm font-semibold'>(219) 555-014</p>
              <div className='w-full bg-primary h-[2px]' />
            </button>
            <span className='text-gray500'>{t('footer.left.or')}</span>
            <button>
              <p className=' text-sm font-semibold'>eventhub@gm.uit.edu.vn</p>
              <div className='w-full bg-primary h-[2px]' />
            </button>
          </div>
        </div>
        <div className='w-full flex flex-col gap-4 justify-between sm:flex-row mdl:gap-20'>
          <div className='flex flex-col text-gray500 gap-1 items-center sm:items-start'>
            <p className='text-special pb-2 font-semibold'>{t('footer.right.box_one.title')}</p>
            <p className='hover:underline hover:cursor-pointer'>{t('footer.right.box_one.sub_one')}</p>
            <p className='hover:underline hover:cursor-pointer'>{t('footer.right.box_one.sub_two')}</p>
            <p className='hover:underline hover:cursor-pointer'>{t('footer.right.box_one.sub_three')}</p>
            <p className='hover:underline hover:cursor-pointer'>{t('footer.right.box_one.sub_four')}</p>
          </div>
          <div className='flex flex-col text-gray500 gap-1 items-center sm:items-start'>
            <p className='text-special pb-2 font-semibold'>{t('footer.right.box_two.title')}</p>
            <p className='hover:underline hover:cursor-pointer'>{t('footer.right.box_two.sub_one')}</p>
            <p className='hover:underline hover:cursor-pointer'>{t('footer.right.box_two.sub_two')}</p>
            <p className='hover:underline hover:cursor-pointer'>{t('footer.right.box_two.sub_three')}</p>
            <p className='hover:underline hover:cursor-pointer'>{t('footer.right.box_two.sub_four')}</p>
          </div>
          <div className='flex flex-col text-gray500 gap-1 items-center sm:items-start'>
            <p className='text-special pb-2 font-semibold'>{t('footer.right.box_three.title')}</p>
            <p className='hover:underline hover:cursor-pointer'>{t('footer.right.box_three.sub_one')}</p>
            <p className='hover:underline hover:cursor-pointer'>{t('footer.right.box_three.sub_two')}</p>
            <p className='hover:underline hover:cursor-pointer'>{t('footer.right.box_three.sub_three')}</p>
            <p className='hover:underline hover:cursor-pointer'>{t('footer.right.box_three.sub_four')}</p>
          </div>
          <div className='flex flex-col text-gray500 gap-1 items-center sm:items-start'>
            <p className='text-special pb-2 font-semibold'>{t('footer.right.box_four.title')}</p>
            <p className='hover:underline hover:cursor-pointer'>{t('footer.right.box_four.sub_one')}</p>
            <p className='hover:underline hover:cursor-pointer'>{t('footer.right.box_four.sub_two')}</p>
            <p className='hover:underline hover:cursor-pointer'>{t('footer.right.box_four.sub_three')}</p>
            <p className='hover:underline hover:cursor-pointer'>{t('footer.right.box_four.sub_four')}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default withTranslation('common')(Footer)
