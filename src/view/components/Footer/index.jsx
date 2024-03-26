import instagram from '../../../assets/instagram.svg';
import tiktok from '../../../assets/tiktok.svg';

export function Footer() {
  return (
    <div className="flex justify-around items-center py-4 shadow-lg-up">
      <div className='flex gap-3'>
        <a href="http://tiktok.com/@cosi_ifal" target='_blank'>
          <img
            src={tiktok}
            alt="tiktok"
            className='max-w-6 md:max-w-8'
          />
        </a>
        <a href="https://www.instagram.com/cosi_ifal/" target='_blank'>
          <img
            src={instagram}
            alt="Instagram"
            className='max-w-6 md:max-w-8'
          />
        </a>
      </div>

      <p className='text-[12px] md:text-base'>CONSI - Colóquio de Estudantes de Sistemas de Informação</p>
    </div>
  )
}
