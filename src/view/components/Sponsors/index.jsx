import { Card } from './components/Card';

import gallery_purple from '../../../assets/gallery_purple.svg';

import 'swiper/css';

export function Sponsors() {

  const people = [
    { img: gallery_purple, name: 'Patrocinador X', type: 2 },
    { img: gallery_purple, name: 'Patrocinador Y', type: 2 },
    { img: gallery_purple, name: 'Patrocinador Z', type: 2 },
    { img: gallery_purple, name: 'Patrocinador X', type: 2 },
    { img: gallery_purple, name: 'Patrocinador Y', type: 2 },
    { img: gallery_purple, name: 'Patrocinador Z', type: 2 },
    { img: gallery_purple, name: 'Patrocinador X', type: 2 },
    { img: gallery_purple, name: 'Patrocinador Y', type: 2 },
    { img: gallery_purple, name: 'Patrocinador Z', type: 2 },
    { img: gallery_purple, name: 'Patrocinador X', type: 2 },
    { img: gallery_purple, name: 'Patrocinador Y', type: 2 },
    { img: gallery_purple, name: 'Patrocinador Z', type: 2 },
    { img: gallery_purple, name: 'Patrocinador X', type: 2 },
    { img: gallery_purple, name: 'Patrocinador Y', type: 2 },
    { img: gallery_purple, name: 'Patrocinador Z', type: 2 },
    { img: gallery_purple, name: 'Patrocinador X', type: 2 },
    { img: gallery_purple, name: 'Patrocinador Y', type: 2 },
    { img: gallery_purple, name: 'Patrocinador Z', type: 2 },
  ];

  return (
    <div
      id="sponsors"
      className="py-32 px-4 lg:px-16 xl:px-32 shadow-lg-up relative h-full"
    >
      <div className="text-center">
        <h1 className="font-poppins font-bold text-4xl mb-10">Patrocinadores do evento<span className='text-[#7AC4E0]'>.</span></h1>
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
