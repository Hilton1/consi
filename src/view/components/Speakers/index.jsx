import { Swiper, SwiperSlide } from 'swiper/react';
import { Card } from './components/Card';

import logo from '../../../assets/logo.png';
import gallery_blue from '../../../assets/gallery_blue.svg';

import 'swiper/css';

import { useEffect, useState } from 'react';

export function Speakers() {
  const [slidePerView, setSliderPerView] = useState(2);

  const people = [
    { img: gallery_blue, name: 'Palestrante X', type: 1 },
    { img: gallery_blue, name: 'Palestrante Y', type: 1 },
    { img: gallery_blue, name: 'Palestrante Z', type: 1 },
    { img: gallery_blue, name: 'Palestrante X', type: 1 },
    { img: gallery_blue, name: 'Palestrante Y', type: 1 },
    { img: gallery_blue, name: 'Palestrante Z', type: 1 },
    { img: gallery_blue, name: 'Palestrante X', type: 1 },
    { img: gallery_blue, name: 'Palestrante Y', type: 1 },
    { img: gallery_blue, name: 'Palestrante Z', type: 1 }
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
      id="speakers"
      className="py-32 px-4 lg:px-16 xl:px-32 shadow-lg-up relative h-full"
    >
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-contain"
        style={{
          backgroundImage: `url(${logo})`,
          opacity: 0.05,
          filter: 'grayscale(100%)',
          zIndex: -1,
        }}
      ></div>
      <div className="text-center">
        <h1 className="font-poppins font-bold text-4xl mb-10">Palestrantes do evento<span className='text-[#7AC4E0]'>.</span></h1>
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
