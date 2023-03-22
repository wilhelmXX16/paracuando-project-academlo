import Link from 'next/link';
import Logo from '../../components/assets/logo/Logo';
import { NextPageWithLayout } from '../page';

const CreatePublication: NextPageWithLayout = () => {
  return (
    <div className="grid md:grid-flow-col-2 h-screen">
      <div className="bg-app-blue md:flex items-center justify-center w-[255px] p-5">
        <Link href={'/'}>
          <div className="">
            <Logo variant="white" />
            <h1 className="text-app-yellow py-10 ">¡Bienvenido, creador!</h1>
            <p className="text-app-grayLighter pb-[200px]">
              A continuación puedes completar la info de la marca, artista o
              torneo que quieres cerca.
            </p>
            <p className="text-app-grayLighter">Help</p>
          </div>
        </Link>
      </div>
      <article className="w-full text-left flex flex-col gap-8">
        <h2 className="text-app-blue">Back</h2>
      </article>
    </div>
  );
};

export default CreatePublication;
