import empresa from '../../../assets/empresa.svg';

export function Description() {
  return (
    <div className="flex justify-around px-32 items-center mt-16">
      <div className='max-w-xl'>
        <h1 className='font-poppins font-bold text-7xl leading-[1.05]'>
          Colóquio de
          <span className='text-[#7AC4E0]'> Estudantes</span> de
          <span className='text-[#0E4F84]'> Sistemas</span> de
          <span className='text-[#9C9CCD]'> Informação</span>.
        </h1>
        <p className='font-poppins font-semibold text-lg my-12'>
          Conectando entusiastas, profissionais e curiosos do mundo de tecnologia.
        </p>
        <button
          className='
            font-poppins font-semibold border rounded-2xl
            border-gray-500 px-6 py-3 text-[#6750A4] hover:bg-[#6750A4]
            hover:text-white transition duration-300'
        >
          Quero participar do evento
        </button>
      </div>
      <div className='w-[600px]'>
        <img src={empresa} alt="Empresa" className='w-full'/>
      </div>
    </div>
  );
}
