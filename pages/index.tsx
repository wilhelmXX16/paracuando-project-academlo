import Link from 'next/link';
import Logo from '../components/assets/logo/Logo';
import { Layout } from '../components/layout/Layout';
import { useCategories } from '../lib/services/categories.services';

import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  const { data, error, isLoading } = useCategories();

  console.log({ data, error, isLoading });

  return (
    <div>
      {/* HERO SECTION */}
      <div className='min-h-[488px] flex justify-center items-center flex-col bg-[url("/hero-banner.png")] bg-cover bg-center app-banner -mt-4 gap-5'>
        <div>
          <Logo />
        </div>
        <div className="flex flex-col gap-4 items-center">
          <input
            className="px-6 py-4 rounded-3xl w-full sm:w-[465px]"
            type="text"
            placeholder="¿Qué quieres ver en tu ciudad?"
          />
          <div className="bg-white rounded-3xl justify-between">
            <Link href={'/category/marcas-y-tiendas '}>
              <button className='py-4 rounded-3xl w-full sm:w-[150px] mr-8'>Marcas y tiendas</button>
            </Link>

            <Link href={'/category/marcas-y-tiendas'}>
              <button className='py-4 rounded-3xl w-full sm:w-[200px]'>Artistas y conciertos</button>
            </Link>
            
            <Link href={'/category/marcas-y-tiendas'}>
              <button className='py-4 rounded-3xl w-full sm:w-[100px]'>Torneos</button>
            </Link>
            <Link href={'/sign-up/'}>
              <button className='py-4 rounded-3xl w-full sm:w-[100px]'>sing up</button>

            </Link>
          </div>
        </div>
      </div>
      {/* CONTENIDO */}
      <div className="bg-red-300 h-[70vh]">
      <div>
        <div>
          <h1>
          Populares en Perú
        </h1>
        <h4>Lo que las personas piden mas</h4>
        </div>
<div className='flex'>

        <div className='w-[40vh] border-solid border-2 border-indigo-400 '>
        <img src="mock-event-image.png" alt="mock"/>
        <div className='h-2 p-4'>
        <h4>Concierto de Lady Gaga</h4>
        <p>El concierto con la tematica de Lady Gaga en las vegas. El concierto con la tematica de Lady Gaga en las vegas. El concierto con la tematica de Lady Gaga en las vegas.</p>
        </div>
        <div className='w-[40vh] border-solid border-2 border-indigo-400'>
        <img src="mock-event-image.png" alt="mock"/>
        <div className='h-2 p-4'>
        <h4>Concierto de Lady Gaga</h4>
        <p>El concierto con la tematica de Lady Gaga en las vegas. El concierto con la tematica de Lady Gaga en las vegas. El concierto con la tematica de Lady Gaga en las vegas.</p>
        </div>
        <div className='w-[40vh] border-solid border-2 border-indigo-400'>
        <img src="mock-event-image.png" alt="mock"/>
        </div>
        </div>
      </div>
      
      </div>
      </div>
      </div>

    </div>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
