import casal from '../../../assets/casal.svg';

export function About() {
  return (
    <div id="about" className="lg:flex lg:justify-around px-4 lg:px-16 xl:px-32 items-center py-16 gap-8">
      <div className='flex justify-center xl:max-w-xl lg:max-w-lg'>
        <div className='md:w-[500px]'>
          <img src={casal} alt="Casal" className='w-full'/>
        </div>
      </div>
      <div>
        <h1 className='font-poppins font-bold text-3xl xl:text-4xl text-center lg:text-left'>
          O que é o CONSI<span className='text-[#7AC4E0]'>?</span>
        </h1>
        <div className='lg:max-w-lg text-justify font-poppins text-lg xl:text-xl mt-5'>
          <p className='mb-10'>
            O <b>CONSI</b> é uma iniciativa aberta e gratuita, que busca fomentar o compartilhamento de conhecimento e experiências entre os participantes.
          </p>
          <p>
            Organizado por alunos do <b>IFAL</b>, visa proporcionar uma plataforma de aprendizado e conexões para estudantes, profissionais e entusiastas de tecnsologia.
          </p>
        </div>
      </div>
    </div>
  );
}
