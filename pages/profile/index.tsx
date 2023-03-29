import { Layout } from '../../components/layout/Layout';
import { EventUser } from '../../components/sliders/EventUser/EventUser';
import { eventsMock } from '../../lib/data/events.mock';
import { NextPageWithLayout } from '../page';

const ProfilePage: NextPageWithLayout = () => {
  return (
    <div>
      <div className=" py-10">
        <EventUser
          //title="Mis Gustos"
          //subtitle="Lo que las personas piden mas"
          //events={eventsMock}
        />
      </div>

      <section className="  w-[100%] py-10 "></section>
    <div>
      Mis Votos
    </div>
    <div>
    Publicaciones
  </div>
  </div>
  );
};

export default ProfilePage;

ProfilePage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
