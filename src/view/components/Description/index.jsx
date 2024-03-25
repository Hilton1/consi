import empresa from '../../../assets/empresa.svg';
import { Button } from '../Button';

export function Description() {
  return (
    <div id='description' className="flex flex-col lg:flex-row lg:justify-around px-4 lg:px-32 items-center py-10 lg:pt-16 shadow-lg text-center lg:text-justify">
      <div className='max-w-xl'>
        <h1 className='font-poppins font-bold text-3xl lg:text-4xl xl:text-7xl leading-[1.05]'>
          Colóquio de
          <span className='text-[#7AC4E0]'> Estudantes</span> de
          <span className='text-[#0E4F84]'> Sistemas</span> de
          <span className='text-[#9C9CCD]'> Informação</span>.
        </h1>
        <p className='font-poppins font-semibold text-lg my-10 lg:my-12'>
          Conectando entusiastas, profissionais e curiosos do mundo de tecnologia.
        </p>
        <Button text='Quero participar do evento'/>
      </div>
      <div className='md:w-[600px]'>
        <img src={empresa} alt="Empresa" className='w-full'/>
      </div>
    </div>
  );
}
