import Link from 'next/link';
import Logo from '../components/assets/logo/Logo';
import { Layout } from '../components/layout/Layout';
import { EventSlider } from '../components/sliders/EventSlider/EventSlider';
// import { useCategories } from '../lib/services/categories.services';
import { usePublications } from '../lib/services/publications.services';

import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  // const { data, error, isLoading } = useCategories();

  // console.log({ data, error, isLoading });

  const {
    data: publications,
    error,
    isLoading,
    mutate: mutatePublications,
  } = usePublications();
  //console.log({ publications, error, isLoading });
  //console.log(publications);

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
            className="px-6 py-4 rounded-full w-full sm:w-[465px]"
            type="text"
            placeholder="¿Qué quieres ver en tu ciudad?"
          />
          <div className=" flex justify-between gap-2">
            <Link href={'/category/marcas-y-tiendas '}>
              <button className="bg-white rounded-full py-4 w-full sm:w-[150px] mr-2">
                Marcas y tiendas
              </button>
            </Link>

            <Link href={'/category/marcas-y-tiendas'}>
              <button className=" bg-white py-4 w-full rounded-full sm:w-[200px] mr-2">
                Artistas y conciertos
              </button>
            </Link>

            <Link href={'/category/marcas-y-tiendas'}>
              <button className="bg-white py-4 w-full rounded-full sm:w-[100px] mr-2mr-2">
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
          events={publications?.results || []}
        />
      </div>
      <div className=" py-10">
        <EventSlider
          title="Populares en Perú"
          subtitle="Lo que las personas piden mas"
          events={publications?.results || []}
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
          <div className="flex flex-wrap items-center gap-4 overflow-x-auto ">
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
