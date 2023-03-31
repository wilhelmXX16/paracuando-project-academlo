import Link from 'next/link';
import Logo from '../components/assets/logo/Logo';
import { Layout } from '../components/layout/Layout';
import { EventSlider } from '../components/sliders/EventSlider/EventSlider';
import { eventsMock } from '../lib/data/events.mock';
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
              <button className="py-4 rounded-3xl w-full sm:w-[150px] mr-8">
                Marcas y tiendas
              </button>
            </Link>

            <Link href={'/category/marcas-y-tiendas'}>
              <button className="py-4 rounded-3xl w-full sm:w-[200px]">
                Artistas y conciertos
              </button>
            </Link>

            <Link href={'/category/marcas-y-tiendas'}>
              <button className="py-4 rounded-3xl w-full sm:w-[100px]">
                Torneos
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* CONTENIDO */}

      <div className=" py-10">
        <EventSlider
          title="Populares en Perú"
          subtitle="Lo que las personas piden mas"
          events={eventsMock}
        />
      </div>
      <div className=" py-10">
        <EventSlider
          title="Populares en Perú"
          subtitle="Lo que las personas piden mas"
          events={eventsMock}
        />
      </div>
      <section className="  w-[100%] py-10 ">
        {/* ------------Seccion Hagamoslo mas personal-----------------*/}

        <div className="bg-app-grayLighter p-7 flex flex-col gap-6">
          <div>
            <h2 className="app-title-2 text-app-grayDark pb-3">
              ¡Hagámoslo más personal!
            </h2>
            <p className="app-subtitle-2 ">
              Selecciona tus interés para brindarte sugerencia de acuerdo a tus
              gustos
            </p>
          </div>
          <div className="flex items-center gap-4 overflow-x-auto ">
            <button className="bg-white border border-app-gray text-app-gray  rounded-3xl text-xs px-5 py-[15px] whitespace-nowrap">
              Restaurantes
            </button>
            <button className="bg-white border border-app-gray text-app-gray  rounded-3xl text-xs px-5 py-[15px] whitespace-nowrap">
              Artistas Mexicanos
            </button>
            <button className="bg-white border border-app-gray text-app-gray  rounded-3xl text-xs px-5 py-[15px] whitespace-nowrap">
              Rock
            </button>
            <button className="bg-white border border-app-gray text-app-gray  rounded-3xl text-xs px-5 py-[15px] whitespace-nowrap">
              Artistas Colombia
            </button>
            <button className="bg-white border border-app-gray text-app-gray  rounded-3xl text-xs px-5 py-[15px] whitespace-nowrap">
              Indie
            </button>
          </div>
          <a href="#" className="app-subtitle-2 text-app-blue">
            Ver todos los intereses
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
