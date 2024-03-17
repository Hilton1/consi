import { Swiper, SwiperSlide } from 'swiper/react';
import { Card } from './components/Card';

import logo from '../../../assets/logo.svg';
import gallery_blue from '../../../assets/gallery_blue.svg';
import gallery_purple from '../../../assets/gallery_purple.svg';


import 'swiper/css';

export function Sponsors() {
  const people = [
    { img: gallery_blue, name: 'Hilton', type: 1 },
    { img: gallery_blue, name: 'Hilton', type: 1 },
    { img: gallery_purple, name: 'Hilton', type: 2 },
    { img: gallery_blue, name: 'Hilton', type: 1 },
    { img: gallery_blue, name: 'Hilton', type: 1 },
    { img: gallery_purple, name: 'Hilton', type: 2 },
    { img: gallery_blue, name: 'Hilton', type: 1 },
    { img: gallery_purple, name: 'Hilton', type: 2 },
    { img: gallery_blue, name: 'Hilton', type: 1 },
    { img: gallery_blue, name: 'Hilton', type: 1 },
    { img: gallery_blue, name: 'Hilton', type: 1 }
  ]

  return (
    <div
      id="sponsors"
      className="py-32 px-32 shadow-lg-up relative h-full"
    >
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-contain"
        style={{
          backgroundImage: `url(${logo})`,
          opacity: 0.05,
          filter: 'grayscale(100%)',
          zIndex: -1
        }}
      ></div>
      <div className="text-center">
        <h1 className="font-poppins font-bold text-4xl">Organização e Patrocinadores<span className='text-[#7AC4E0]'>.</span></h1>
        <div className="flex justify-center mb-16">
          <p className="mt-4 text-xl max-w-2xl">
            O evento é organizado pelo Profº. Dr. Eduardo Cardoso Moraes e os alunos de BSI do IFAL da turma de Gestão de Projetos-2023.2
          </p>
        </div>

        <Swiper
          slidesPerView={7.4}
          loop={true}
        >
          {
            people.map((person) => (
              <SwiperSlide key={person.name}>
                <Card name={person.name} image={person.img} type={person.type} />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </div>
  )
}
