export function Card({icon, title, text}) {
  return (
    <div className="inner-shadow-lg p-8 rounded-3xl">
      <img src={icon} alt="Calendário" />
      <h1 className='mt-6 font-poppins font-bold text-xl'>
        {title}
      </h1>
      <p className='max-w-56 mt-2 font-poppins pb-6' dangerouslySetInnerHTML={{ __html: text }}>
      </p>
    </div>
  )
}
