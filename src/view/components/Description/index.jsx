import empresa from '../../../assets/empresa.svg';
import { Button } from '../Button';

export function Description() {
  return (
    <div id='description' className="flex flex-col lg:flex-row lg:justify-around px-4 lg:px-16 xl:px-32 items-center py-10 lg:pt-16 shadow-lg text-center lg:text-left">
      <div className='xl:max-w-xl lg:max-w-lg'>
        <h1 className='font-poppins font-bold text-3xl lg:text-6xl xl:text-7xl leading-[1.05]'>
          Colóquio de
          <span className='text-[#7AC4E0]'> Estudantes</span> de
          <span className='text-[#0E4F84]'> Sistemas</span> de
          <span className='text-[#9C9CCD]'> Informação</span>.
        </h1>

        <div className='lg:text-left'>
          <p className='font-poppins font-semibold text-lg my-10 lg:w-[85%] lg:my-12'>
            Conectando entusiastas, profissionais e curiosos do mundo de tecnologia.
          </p>
        </div>

        <Button text='Quero participar do evento' link={'https://doity.com.br/cosi#registration'}/>
      </div>
      <div className='md:w-[500px]'>
        <img src={empresa} alt="Empresa" className='w-full'/>
      </div>
    </div>
  );
}
