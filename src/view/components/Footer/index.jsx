import linkedin from '../../../assets/linkedin.svg';
import twitter from '../../../assets/twitter.svg';
import facebook from '../../../assets/facebook.svg';
import instagram from '../../../assets/instagram.svg';

export function Footer() {
  return (
    <div className="flex justify-around items-center py-4 shadow-lg-up">
      <div className='flex gap-3'>
        <a href="">
          <img
            src={linkedin}
            alt="LinkedIn"
            className='max-w-8'
          />
        </a>
        <a href="">
          <img
            src={twitter}
            alt="Twitter"
            className='max-w-8'
          />
        </a>
        <a href="">
          <img
            src={facebook}
            alt="Facebook"
            className='max-w-8'
          />
        </a>
        <a href="">
          <img
            src={instagram}
            alt="Instagram"
            className='max-w-8'
          />
        </a>
      </div>

      <p className='text-blue-opacity'>CONSI - Colóquio de Estudantes de Sistemas de Informação</p>
    </div>
  )
}
