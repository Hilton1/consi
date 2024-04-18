import 'swiper/css';

import equipe_cosi from '../../../assets/equipe_cosi.jpeg';

export function Equipe() {
  return (
    <div
      id="equipe"
      className="py-32 px-4 lg:px-16 xl:px-32 shadow-lg-up relative h-full"
    >
      <div className="text-center">
        <h1 className="font-poppins font-bold text-4xl mb-4">Equipe COSI<span className='text-[#7AC4E0]'></span></h1>
        <div className='font-poppins text-lg text-justify md:text-center lg:text-justify lg:text-xl mt-5'>
          <p className='mb-10 text-center'>
            Confira abaixo as pessoas responsáveis por fazer com que o evento aconteça!
          </p>
        </div>

        <div className='flex justify-center'>
          <img src={equipe_cosi} alt="Equipe COSI" className='max-h-[700px] w-full object-cover'/>
        </div>
      </div>
    </div>
  )
}
