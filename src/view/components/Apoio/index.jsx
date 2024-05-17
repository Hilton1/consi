import { Card } from './components/Card';

import cinfo from '../../../assets/cinfo.jpeg';
import ifal from '../../../assets/ifal.jpeg';
import doity from '../../../assets/doity.jpeg';
import colab from '../../../assets/colabfundobranco.png';

import 'swiper/css';

export function Apoio() {

  const people = [
    { img: cinfo, name: 'CINFO', type: 2 },
    { img: ifal, name: 'IFAL', type: 2 },
    { img: doity, name: 'Doity', type: 2 },
    { img: colab, name: 'Colab', type: 2 },
  ];

  return (
    <div
      id="sponsors"
      className="py-32 px-4 lg:px-16 xl:px-32 shadow-lg-up relative h-full"
    >
      <div className="text-center">
        <h1 className="font-poppins font-bold text-4xl mb-4">Apoio</h1>

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
