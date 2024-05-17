export function Card({name, image, type}) {
  return (
    <div className='max-w-52 text-center'>
      <div className='flex justify-center'>
      <div className="rounded-full overflow-hidden w-40 h-40 mb-4">
          <img src={image} alt="Foto Patrocinador" className="w-full h-full object-cover rounded-full" />
        </div>
      </div>

      <div className='flex justify-center'>
        <div
          className={`
            flex items-center justify-center gap-2 rounded-full w-48
            ${type === 1 ? 'bg-organization' : 'bg-sponsorship'}
          `}
        >
          <p className='font-poppins py-2'>
            { name }
          </p>
        </div>
      </div>

    </div>
  )
}
