import { Card } from './components/Card';

import mesha from '../../../assets/mesha.jpg';

import 'swiper/css';

export function Sponsors() {

  const people = [
    { img: mesha, name: 'Mesha. tecnologia', type: 2 },
  ];

  return (
    <div
      id="sponsors"
      className="py-32 px-4 lg:px-16 xl:px-32 shadow-lg-up relative h-full"
    >
      <div className="text-center">
        <h1 className="font-poppins font-bold text-4xl mb-4">Patrocinadores do evento<span className='text-[#7AC4E0]'>.</span></h1>
        <div className='font-poppins text-lg text-justify md:text-center lg:text-justify lg:text-xl mt-5'>
          <p className='mb-10 text-center'>
            Confira abaixo as empresas que estão apoiando o nosso evento!
          </p>
        </div>
        <div className="grid gap-4 justify-center items-center grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {
            people.map((person) => (
              <Card key={person.name} name={person.name} image={person.img} type={person.type} />
            ))
          }
        </div>

      </div>
    </div>
  )
}
