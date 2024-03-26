import { Link } from 'react-scroll';

export function LinkHeader({ text, to }) {
  return (
    <Link
      to={to}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      className="cursor-pointer text-black hover:font-[700] font-poppins font-[600] text-sm md:text-base"
    >
      {text}
    </Link>
  );
}
