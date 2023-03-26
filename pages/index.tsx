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
      <div className=' relative min-h-[488px] flex justify-center items-center flex-col bg-[url("/hero-banner.png")] bg-cover bg-center app-banner -mt-4 gap-5'>
        <div>
          <Logo />
          <div className=" absolute flex m-[-16]"></div>
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
        <div>
          <h1 className="app-title-2">¡Hagámoslo más personal!</h1>
          <h4>
            Selecciona tus interés para brindarte sugerencia de acuerdo a tus
            gustos
          </h4>
          <button className="border border-app-grayLight p-2">
            Restaurantes
          </button>
          <button className="border border-app-grayLight p-2">
            Artistas Peruanos
          </button>
          <button className="border border-app-grayLight p-2">Rock</button>
          <button className="border border-app-grayLight p-2">
            Artistas Colombia
          </button>
          <button className="border border-app-grayLight p-2">Indie</button>
        </div>
      </section>
    </div>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
