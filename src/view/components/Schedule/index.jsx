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
            Nossa programação contará com palestras, oficinas, minicursos, competições e muito networking!
          </p>
        </div>

        <div className='text-center mb-6 lg:text-left'>
          <Button text='Conferir programação detalhada' link={'https://doity.com.br/cosi#schedule'}/>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-4'>
        <Card
          icon={calendar}
          title="Data"
          text='O evento ocorrerá no dia <b>18</b> de <b>Maio de 2024</b>'
        />

        <Card
          icon={clock}
          title="Horário"
          text='O credenciamento será às <b>08:30h</b>, com a abertura do evento sendo às <b>09:00h</b>. O encerramento será de <b>16:00h</b>'
        />

        <a href="https://www.google.com/maps/place/Instituto+Federal+de+Alagoas+-+Campus+Macei%C3%B3/@-9.6640343,-35.7351965,17z/data=!3m1!4b1!4m6!3m5!1s0x701457996307ad5:0x1d22c2c44f26f853!8m2!3d-9.6640396!4d-35.7303309!16s%2Fg%2F1229dxbv?entry=ttu" target='_blank'>
          <Card
            icon={map}
            title="Local"
            text='Instituto Federal de Alagoas (IFAL) - Campus Maceió'
          />

        </a>
      </div>
    </div>
  );
}
