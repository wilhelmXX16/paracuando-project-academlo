import Link from 'next/link';
import { IconLogo } from '../../assets/logo/IconLogo';
import Iconplus from '../../assets/svg/Iconplus';

const Header = () => {
  return (
    <div className="bg-black text-white justify-between flex items-center px-4 sm:px-12 py-4 min-h-[70px] text-sm">
      <div>
        <Link href={'/'}>
          <IconLogo />
        </Link>
      </div>
      <div className="flex items-center  px-4 sm:px-12 py-4 min-h-[70px] text-sm">
        <div className="text-blue-600 ml-8 flex">
          {/* <img src="/vector.png" alt="vector" height={10} width={20}/> */}
          <Iconplus />
          <Link href={'/publications/'}>
            <button className="ml-3.5">Crear publicación</button>
          </Link>
        </div>
        <div className="flex ml-8">
          {/*<img src="heart.png" alt="heart" width="30px" />*/}
          <Link href={'/login/'}>
            <button className="ml-3.5">Login</button>
          </Link>
        </div>
        <div className="flex items-center ">
          <div className=" flex justify-center ml-8 relative">
            {/*<UserLogo isActive={false} />
            <img
              className="mt-2.5 absolute"
              src="user.png"
              alt="logo"
              width="25px"
  />*/}
          </div>
          <Link href={'/sign-up/'}>
            <p className="ml-3.5">Sign up</p>
          </Link>
        </div>
        {/* <div className="ml-5">
          <img src="flecha.png" alt="flecha" width="25px" />
        </div> */}
      </div>
    </div>
  );
};

export default Header;
