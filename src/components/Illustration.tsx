import IllustrationImg from '../assets/illustration-mockups.svg';
import LogoImg from '../assets/logo.svg';

export function Illustration() {

  return (
    <div className="flex flex-col justify-center w-[75%] md:w-[45%]">
      <div className='w-1/3'>
        <img src={LogoImg} alt="Logo" />
      </div>
      <img src={IllustrationImg} alt="Illustration" />
    </div>
  )
}