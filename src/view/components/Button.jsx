export function Button({text}) {
  return (
    <button
      className='
        font-poppins font-semibold border rounded-2xl
        border-gray-500 px-6 py-3 text-[#6750A4] hover:bg-[#6750A4]
        hover:text-white transition duration-300'
    >
      {text}
    </button>
  )
}
