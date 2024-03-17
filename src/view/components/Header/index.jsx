import logo from '../../../assets/logo.svg';
import { LinkHeader } from './components/LinkHeader';
import { Link } from 'react-scroll';

export function Header() {
  return (
    <header className='fixed w-full flex justify-between items-center px-32 py-4 border-b-2 bg-white z-50'>
        <Link
        to='description'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className='cursor-pointer'
      >
        <img src={logo} alt="Logo Consi" className='max-w-24' />
      </Link>

      <div className='flex justify-between gap-6 items-center'>
        <LinkHeader text="O que é o CONSI?" to="about" />
        <LinkHeader text="Programação" to="schedule" />
        <LinkHeader text="Organização e Patrocinadores" to="sponsors" />

        <button className='bg-[#6750A4] py-4 px-10 rounded-full text-white font-poppins font-[600]'>
          Inscrever-se
        </button>
      </div>
    </header>
  );
}
