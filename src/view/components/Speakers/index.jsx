import { Swiper, SwiperSlide } from 'swiper/react';
import { Card } from './components/Card';
import { Modal } from '../Modal';

import logo from '../../../assets/logo.png';

import francisco from '../../../assets/francisco.jpeg';
import gustavo from '../../../assets/gustavo.jpeg';
import jonathas from '../../../assets/jonathas.jpeg';
import urandy from '../../../assets/urandy.jpeg';
import cristhian from '../../../assets/cristhian.jpg';
import joao_paulo from '../../../assets/joao_paulo.jpg';
import pedro_augusto from '../../../assets/pedro_augusto.jpg';
import vitor_melo from '../../../assets/vitor_melo.jpg';
import laiane from '../../../assets/laiane.jpg';
import luiz from '../../../assets/luiz.png';
import izabella from '../../../assets/izabella.jpeg';
import eliezir from '../../../assets/eliezir.jpeg';

import 'swiper/css';

import { useEffect, useState } from 'react';

export function Speakers() {
  const [slidePerView, setSliderPerView] = useState(2);
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (speaker) => {
    setSelectedSpeaker(speaker);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const people = [
    {
      img: francisco,
      name: 'Francisco Abud',
      tipo_atracao: 'Palestra',
      type: 1
    },
    {
      img: jonathas,
      name: 'Jônathas Nunes',
      tipo_atracao: 'Palestra',
      type: 1
    },
    {
      img: gustavo,
      name: 'Gustavo Costa',
      tipo_atracao: 'Palestra',
      type: 1
    },
    {
      img: urandy,
      name: 'Urandy Carlos',
      tipo_atracao: 'Palestra',
      type: 1
    },
    {
      img: cristhian,
      name: 'Matheus Cristian',
      tema: 'Desenvolvedor web com vue.js',
      tipo_atracao: 'Palestra',
      area_atuacao: 'Desenvolvedor Frontend na empresa Weni',
      type: 1
    },
    {
      img: joao_paulo,
      name: 'João Paulo Falcão',
      tema: 'Robótica Sucational',
      tipo_atracao: 'Oficina',
      type: 1
    },
    {
      img: eliezir,
      name: 'Eliezir Moreira',
      tema: 'React Native',
      tipo_atracao: 'Oficina',
      type: 1
    },
    {
      img: laiane,
      name: 'Laiane',
      tema: 'Introdução ao Design de Interfaces de Usuário com Figma + Importância do UX',
      tipo_atracao: 'Minicurso',
      type: 1
    },
    {
      img: luiz,
      name: 'Luiz Vilela',
      tema: 'Carreira em tecnologia e as tendências do mercado',
      tipo_atracao: 'Palestra',
      area_atuacao: 'CTO and Full Stack Engineer at Tremdy Soluções, Vink SA, Diallink',
      type: 1
    },
    {
      img: pedro_augusto,
      name: 'Pedro Augusto',
      tema: 'Privacidade de Dados na Navegação Web',
      tipo_atracao: 'Minicurso',
      type: 1
    },
    {
      img: vitor_melo,
      name: 'Vitor Melo',
      tema: 'Construindo Aplicações Web Dinâmicas com Node.js e Firebase',
      tipo_atracao: 'Minicurso',
      type: 1
    },
    {
      img: izabella,
      name: 'Izabella Pessoa',
      tema: 'Desenvolvimento Web com Framework Vue.js',
      tipo_atracao: 'Oficina',
      type: 1
    },
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
        <h1 className="font-poppins font-bold text-4xl mb-10">Atrações do evento<span className='text-[#7AC4E0]'>.</span></h1>

        <div className='font-poppins text-lg text-justify md:text-center lg:text-justify lg:text-xl mt-5'>
          <p className='mb-10 text-center'>
            Confira abaixo as pessoas que irão ministrar as palestras, minicursos e oficinas!
          </p>
        </div>

        <Swiper
          slidesPerView={slidePerView}
          loop={true}
        >
          {
            people.map((person) => (
              <SwiperSlide key={person.name}>
                <Card name={person.name} image={person.img} type={person.type} onClick={() => handleOpenModal(person)} />
              </SwiperSlide>
            ))
          }
        </Swiper>
        {isModalOpen && <Modal speaker={selectedSpeaker} onClose={handleCloseModal} />}
      </div>
    </div>
  )
}
