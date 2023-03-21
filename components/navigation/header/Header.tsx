import Image from 'next/image';
import { IconLogo } from '../../assets/logo/IconLogo';
import Iconplus from '../../assets/svg/Iconplus';
import { UserLogo } from '../../assets/svg/UserLogo';

const Header = () => {
  return (
    <div className="bg-black text-white justify-between flex items-center px-4 sm:px-12 py-4 min-h-[70px] text-sm">
      <div>
        <IconLogo />
      </div>
      <div className="flex items-center  px-4 sm:px-12 py-4 min-h-[70px] text-sm">
      <div className="text-blue-600 ml-8 flex">
        {/* <img src="/vector.png" alt="vector" height={10} width={20}/> */}
        <Iconplus/> 
        <p className='ml-3.5'>Crear publicación</p>
      </div>
      <div className='flex ml-8'>
        <img src="heart.png" alt="heart" width="30px" />
        <p className='ml-3.5'>Mis votos</p>
      </div>
      <div className='flex items-center '>
        <div className=' flex justify-center ml-8 relative'>
          <UserLogo isActive={false} />
          <img className='mt-2.5 absolute' src="user.png" alt="logo" width="25px" />
        </div>
        <p className='ml-3.5'>joseangel151@gmail.com</p>
      </div>
      <div className='ml-5'>
      <img  src="flecha.png" alt="flecha" width="25px" />
     </div>
    </div>

    </div>
  );
};

export default Header;
