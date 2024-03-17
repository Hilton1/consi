import casal from '../../../assets/casal.svg';

export function About() {
  return (
    <div id="about" className="flex justify-around px-32 items-center pt-16">
      <div className='w-[600px]'>
        <img src={casal} alt="Casal" className='w-full'/>
      </div>
      <div>
        <h1 className='font-poppins font-bold text-4xl'>
          O que é o CONSI<span className='text-[#7AC4E0]'>?</span>
        </h1>
        <div className='max-w-lg font-poppins text-xl mt-5'>
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
