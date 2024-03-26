import { Button } from '../Button';
import { Card } from './components/Card';

import calendar from '../../../assets/calendar.svg';
import clock from '../../../assets/clock.svg';
import map from '../../../assets/map.svg';

export function Schedule() {
  return (
    <div id="schedule" className="xl:flex xl:justify-around py-16 px-4 lg:px-16 xl:px-32 items-center shadow-lg-combined">
      <div>
        <h1 className='font-poppins font-bold text-3xl text-center lg:text-left lg:text-4xl'>
          Programação<span className='text-[#7AC4E0]'>.</span>
        </h1>
        <div className='xl:max-w-sm font-poppins text-lg text-justify md:text-center lg:text-justify lg:text-xl mt-5'>
          <p className='mb-10'>
            Nossa programação contará com palestras, oficinas, minicursos e muito networking.
          </p>
        </div>

        <div className='text-center mb-6 lg:text-left'>
          <Button text='Conferir programação detalhada' />
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-4'>
        <Card
          icon={calendar}
          title="Data"
          text='O evento ocorrerá nos dias <b>29</b> e <b>30</b> de <b>Abril de 2024</b>'
        />

        <Card
          icon={clock}
          title="Horário"
          text='Em ambos os dias o início será às <b>18:00h</b> e término às <b>21:30h</b>'
        />

        <a href="https://www.google.com/maps/search/Audit%C3%B3rio+Oscar+S%C3%A1tyro/@-9.6646804,-35.7343894,17z?entry=ttu" target='_blank'>
          <Card
            icon={map}
            title="Local"
            text='Auditório Oscar Sátyro - Instituto Federal de Alagoas (IFAL)'
          />

        </a>
      </div>
    </div>
  );
}
