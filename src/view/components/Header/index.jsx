import logo from '../../../assets/logo.png';
import { LinkHeader } from './components/LinkHeader';
import { Link } from 'react-scroll';

export function Header() {
  return (
    <header className='fixed w-full flex justify-between items-center px-4 lg:px-16 xl:px-32 py-4 border-b-2 bg-white z-50'>
      <Link
        to='description'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className='cursor-pointer'
      >
        <img src={logo} alt="Logo Cosi" className='max-w-16 md:max-w-24' />
      </Link>

      <div className='lg:flex justify-between gap-2 md:gap-6 items-center hidden'>
        <LinkHeader text="O que é o COSI?" to="about" />
        <LinkHeader text="Programação" to="schedule" />
        <LinkHeader text="Atrações" to="speakers" />
        <LinkHeader text="Patrocinadores" to="sponsors" />
        <LinkHeader text="Equipe COSI" to="equipe" />

        <button className='bg-[#6750A4] py-4 px-10 rounded-full text-white font-poppins font-[600]'>
          Inscrever-se
        </button>
      </div>
    </header>
  );
}
