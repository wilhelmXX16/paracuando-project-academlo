import { useRouter } from 'next/router';
import { Layout } from '../../components/layout/Layout';
import { EventSlider } from '../../components/sliders/EventSlider/EventSlider';
import { usePublications } from '../../lib/services/publications.services';
import { NextPageWithLayout } from '../page';
export const CategoryPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { category_id } = router.query;

  const {
    data: publications,
    error,
    isLoading,
    mutate: mutatePublications,
  } = usePublications();

  return (
    <div>
      <div className='min-h-[350px] flex justify-center items-center flex-col bg-[url("/hero-banner.png")] bg-cover bg-center app-banner -mt-4 gap-5'>
        <h1 className="text-2xl">
          {' '}
          this page is{' '}
          <span className="text-app-yellow text-6xl">{category_id}</span>
        </h1>
      </div>
      <div className=" py-10">
        <EventSlider
          title="Populares en Perú"
          subtitle="Lo que las personas piden mas"
          events={publications?.results || []}
        />
      </div>
      <div className=" py-10">
        <EventSlider
          title="Sugerencias para ti"
          subtitle="Publicaciones que podrias colaborar"
          events={publications?.results || []}
        />
      </div>
      {/* -------------HAGAMOSLO MAS PERSONAL------------------- */}
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
      {/* -------------CARD------------------- */}
      <div className=" py-10">
        <EventSlider
          title="Recientes"
          subtitle="Las personas últimanete están hablando de esto"
          events={publications?.results || []}
        />
      </div>
    </div>
  );
};

CategoryPage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default CategoryPage;
