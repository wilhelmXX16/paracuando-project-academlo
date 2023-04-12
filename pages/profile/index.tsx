import { Layout } from '../../components/layout/Layout';
import { EventUser } from '../../components/sliders/EventUser/EventUser';
import { usePublications } from '../../lib/services/publications.services';
import { NextPageWithLayout } from '../page';

const ProfilePage: NextPageWithLayout = () => {
  const {
    data: publications,
    error,
    isLoading,
    mutate: mutatePublications,
  } = usePublications();

  return (
    <div>
      <div className="app-banner relative bg-[#1B4DB1] flex justify-center ">
        <div className="w-[200px] h-[200px] rounded-full relative bg-red-700 -mb-[120px] mt-[80px]"></div>
      </div>
      <div className="flex justify-center text-center text-[#858485]">
        <p className="border-solid border-2 border-[#858485] rounded-full px-[10px] py-[5px] mx-[20px] mt-[150px] mb-[30px] w-[150px]">
          Mis votos
        </p>
        <p className=" border-solid border-2 border-[#858485] rounded-full px-[10px] py-[5px] mt-[150px] mb-[30px]">
          Mis publicaciones
        </p>
      </div>
      <div>
        <div className=" py-10">
          <EventUser events={publications?.results || []} />
        </div>
      </div>

      <div>
        <ul className="flex justify-center text-center text-white my-4">
          <li className="rounded-full bg-red-700 w-[40px] h-[30px] flex justify-center content-center my-4 mx-0.5">
            <button>{'<'}</button>
          </li>
          <li className="rounded-full bg-red-700 w-[40px] h-[30px] flex justify-center content-center my-4 mx-0.5">
            <button>1</button>
          </li>
          <li className="rounded-full bg-red-700 w-[40px] h-[30px] flex justify-center content-center my-4 mx-0.5">
            <button>2</button>
          </li>
          <li className="rounded-full bg-red-700 w-[40px] h-[30px] flex justify-center content-center my-4 mx-0.5">
            <button>3</button>
          </li>
          <li className="rounded-full bg-red-700 w-[40px] h-[30px] flex justify-center content-center my-4 mx-0.5">
            <button>{'>'}</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfilePage;

ProfilePage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
