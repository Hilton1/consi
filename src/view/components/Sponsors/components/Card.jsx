export function Card({name, image, type}) {
  return (
    <div className='max-w-52 text-center'>
      <div className='flex justify-center'>
        <img src={image} alt="Foto Patrocinador" />
      </div>

      <p className='font-poppins font-bold text-md'>{name}</p>

      <div className='flex justify-center'>
        <div
          className={`
            flex items-center justify-center gap-2 rounded-full w-40
            ${type === 1 ? 'bg-organization' : 'bg-sponsorship'}
          `}
        >
          <p className='p-3 bg-white rounded-full'></p>

          <p className='font-poppins py-2'>
            {type === 1 ? 'Organização' : 'Patrocínio'}
          </p>
        </div>
      </div>

    </div>
  )
}
