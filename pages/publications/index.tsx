import Link from 'next/link';
import Logo from '../../components/assets/logo/Logo';
import { NextPageWithLayout } from '../page';
import Forms from './hook/Forms';

const CreatePublication: NextPageWithLayout = () => {
  return (
    <div className="md:flex xs:flex-col flex-row flex-wrap h-screen border-solid border-2 border-green-500 w-screen">
      <div className="bg-app-blue md:flex items-center justify-center w-[255px] h-screen p-5 border-solid ">
        <Link href={'/'}>
          <div className="">
            <Logo variant="white" className="w-[3" />
            <h1 className="text-app-yellow py-10 ">¡Bienvenido, creador!</h1>
            <p className="text-app-grayLighter pb-[200px]">
              A continuación puedes completar la info de la marca, artista o
              torneo que quieres cerca
            </p>
            <p className="text-app-grayLighter">Help</p>
          </div>
        </Link>
      </div>
      <div className="md:flex items-center justify-center w-3/4 h-screen">
        <div className="flex justify-center flex-col gap-2">
          <Link href={'/'}>
            <span className="text-app-blue pt-8">Back</span>
          </Link>
          <div className=" bg-app-grayLight h-2 md:w-[612px] rounded-md ">
            <div className=" bg-app-blue h-2 md:w-[361px] rounded-md"></div>
          </div>
          <Forms />
          <button className="bg-app-blue text-app-grayLighter rounded-md h-12 w-32 ">
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePublication;
