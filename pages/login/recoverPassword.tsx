import Link from 'next/link';
import Logo from '../../components/assets/logo/Logo';
import { NextPageWithLayout } from '../page';

const LoginPage: NextPageWithLayout = () => {
  return (
    <div className='min-h-[100vh] text-[#F8F7FA] flex space-x-52 justify-center items-center bg-[url("/wallpaper-login.png")] bg-cover bg-center app-banner -mt-4 gap-5'>
      <div>
        <Logo variant="yellow" onlyIcon={true} />
      </div>
      <div className="max-w-[557px] min-h-[600px] border-solid border-2 border-white-600 bg-[#000000]/70 px-14 py-16 rounded-3xl">
        <h1 className="text-3xl pb-5">Elije una nueva contraseña</h1>
        <div>
          <div>
            <div className="gap-4">
              <h3 className="pb-1">Elige una nueva contraseña</h3>
              <input
                className="px-6 py-4 w-full sm:w-[442px] bg-inherit border-solid border-2 border-[#A7A6A7] rounded-[5px]"
                type="text"
                placeholder="ejemplo@mail.com"
              />
              <h3 className="pb-1">Escribela de nuevo</h3>
              <input
                className="px-6 py-4 w-full sm:w-[442px] bg-inherit border-solid border-2 border-[#A7A6A7] rounded-[5px]"
                type="text"
                placeholder="ejemplo@mail.com"
              />
            </div>
          </div>
          <div className="flex justify-center content-center py-4">
            <div className="text-center font-medium sm:w-[465px] bg-[#F3F243] text-[#000000] rounded-[5px]">
              <Link href={'/category/marcas-y-tiendas '}>
                <button className="py-4 rounded-3xl bg-primary  w-full sm:w-[150px] mr-8">
                  Cambiar contraseña
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
