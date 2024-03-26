import { Swiper, SwiperSlide } from 'swiper/react';
import { Card } from './components/Card';

import logo from '../../../assets/logo.svg';
import gallery_blue from '../../../assets/gallery_blue.svg';
import gallery_purple from '../../../assets/gallery_purple.svg';

import 'swiper/css';

import { useEffect, useState } from 'react';

export function Sponsors() {
  const [slidePerView, setSliderPerView] = useState(2);

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
  ];

  useEffect(() => {
    function handleResize(){
      if (window.innerWidth <= 425) {
        setSliderPerView(2.2);
      } else if (window.innerWidth > 425 & window.innerWidth <= 768) {
        setSliderPerView(3.2);
      } else if (window.innerWidth > 768 & window.innerWidth <= 1024) {
        setSliderPerView(4.2);
      } else {
        setSliderPerView(6.2);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.addEventListener("resize", handleResize);
    }
  });

  return (
    <div
      id="sponsors"
      className="py-32 px-4 lg:px-16 xl:px-32 shadow-lg-up relative h-full"
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
          slidesPerView={slidePerView}
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
