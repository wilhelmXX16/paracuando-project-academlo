import Link from 'next/link';
import Logo from '../../components/assets/logo/Logo';
import { NextPageWithLayout } from '../page';

const CreatePublication: NextPageWithLayout = () => {
  return (
    <div className="flex flex-row flex-wrap h-screen border-solid border-2 border-red-500 gap-4">
      <div className="bg-app-blue md:flex items-center justify-center w-[255px] p-5 border-solid border-2 border-yellow-500">
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
      <div className=" w-full max-w-lg">
        <Link href={'/'}>
          <h1 className="text-app-blue mt-8">Back</h1>
        </Link>
        <div className="border-solid border-1 bg-app-grayLight h-1 w-[612px] rounded-md">
          <div className=" bg-app-blue h-0 w-[361px]"></div>
        </div>
        <h1>Publicación</h1>
        <samp>Información básica</samp>
        <form>
          <label className="flex flex-col gap-1">
            <span className="font-semibold">Titulo de publicación</span>
            <input className="p-4 border border-app-grayDark" type="text" />
          </label>
          <label className="flex flex-col gap-1">
            <span className="font-semibold">Titulo de publicación</span>
            <input className="p-4 border border-app-grayDark" type="text" />
          </label>
          <label className="flex flex-col gap-1">
            <span className="font-semibold">Tipo</span>
            <select name="tipo">
              <option>---</option>
              <option>---</option>
              <option>---</option>
            </select>
          </label>
          <label className="flex flex-col gap-1">
            <span className="font-semibold">Categoria</span>
            <select name="tipo">
              <option>---</option>
              <option>---</option>
              <option>---</option>
            </select>
          </label>
          <label className="flex flex-col gap-1">
            <span className="font-semibold">¿Por qué lo recomiendas?</span>
            <input className="p-4 border border-app-grayDark" type="stext" />
          </label>
          <label className="flex flex-col gap-1">
            <span className="font-semibold">Link de referencia</span>
            <input className="p-4 border border-app-grayDark" type="stext" />
          </label>
        </form>
        <button>Siguiente</button>
      </div>
    </div>
  );
};

export default CreatePublication;
