import { IconLogo } from '../../assets/logo/IconLogo';
import { UserLogo } from '../../assets/svg/UserLogo';
import Image from 'next/image';




const Header = () => {
  return (
    <div className="bg-black text-white justify-between flex items-center px-4 sm:px-12 py-4 min-h-[70px] text-sm">
      <div>
        <IconLogo />
      </div>
      <div className="flex items-center  px-4 sm:px-12 py-4 min-h-[70px] text-sm">
      <div className="text-blue-600 ml-8 flex">
        <Image src={'/vector.png'} alt="vector" w-5 />
        <p className='ml-3.5'>Crear publicación</p>
      </div>
      <div className='flex ml-8'>
        <Image src={'/heart.png'} alt="heart" w-8 />
        <p className='ml-3.5'>Mis votos</p>
      </div>
      <div className='flex items-center '>
        <div className=' flex justify-center ml-8 relative'>
          <UserLogo isActive={false} />
          <Image src={'/user.png'} alt="logo" className='mt-2.5 absolute' w-6 />
        </div>
        <p className='ml-3.5'>joseangel151@gmail.com</p>
      </div>
      <div className='ml-8'>
      <Image  src={'/flecha.png'} alt="flecha" w-6 />
      </div>
    </div>
    </div>
  );
};

export default Header;
