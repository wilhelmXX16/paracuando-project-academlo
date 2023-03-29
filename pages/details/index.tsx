import { Layout } from '../../components/layout/Layout';
import { EventSlider } from '../../components/sliders/EventSlider/EventSlider';
import { usePublications } from '../../lib/services/publications.services';
import { NextPageWithLayout } from '../page';

const {
  data: publications,
  error,
  isLoading,
  mutate: mutatePublications,
} = usePublications();

const Details: NextPageWithLayout = () => {
  return (
    <div>
      {/* -------------BUTTONS AND SEARCH----------------- */}
      <div className=" flex justify-between max-md:flex-col pt-5 ">
        <div>
          <button className="px-6 py-4 rounded-3xl  border border-app-gray hover:bg-gray-100 focus:ring-4 mr-2 mb-2">
            Marcas y tiendas
          </button>
          <button className="px-6 py-4 rounded-3xl border border-app-gray hover:bg-gray-100 focus:ring-4 mr-2 mb-2">
            Artistas y conciertos
          </button>
          <button className="px-6 py-4 rounded-3xl border border-app-gray hover:bg-gray-100 focus:ring-4 mr-2 mb-2">
            Torneos
          </button>
        </div>
        <div>
          <input
            className="px-6 py-4 rounded-3xl w-full sm:w-[465px] border border-app-gray"
            type="text"
            placeholder="¿Qué quieres ver en tu ciudad"
          />
        </div>
      </div>

      {/* ------------- DETAILS------------------- */}
      <div className="flex py-12 ">
        <div className="w-[45%]  grid grid-col  content-between">
          <div>
            <h4 className="app-title-3">Artista / Pop - Rock</h4>
            <h1 className="app-title-1 pr-2">concierto de Lady Gaga</h1>
            <p className="text-app-grayDark h-[94px] pr-2">
              El concierto con la tematica de lady gaga en la vegas. El
              concierto con la tematica de lady gaga en la vegasEl concierto con
              la tematica de lady gaga en la vegas
            </p>
          </div>
          <div>
            <div id="link" className="  ">
              <a
                href="#"
                className="text-app-subtitle-2 text-app-blue font-semibold "
              >
                ladygaga.com
              </a>
              <div className="flex ">
                {/*<img src="/public/img/Vector.svg" alt="">*/}
                <img src="Vector.svg" alt="mock" />
                <span>10 votos</span>
              </div>
              <div className="grid justify-items-center pt-3">
                <button className="px-6 py-[11px] rounded-3xl w-[95%] bg-app-blue text-app-grayLighter  border border-app-gray content-end">
                  Votar
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------- */}
        <div id="img" className="w-[55%] grid justify-items-end ">
          <img src="mock-event-image.png" alt="mock" className="" />
        </div>
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

      {/* -------------CARD------------------- */}
      <div className=" py-10">
        <EventSlider
          title="Populares en Perú"
          subtitle="Lo que las personas piden mas"
          events={publications?.results || []}
        />
      </div>
      <section className="  w-[100%] py-10 "></section>
    </div>
  );
};

export default Details;

Details.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
