import { Layout } from '../../components/layout/Layout';
import { NextPageWithLayout } from '../page';

const ProfilePage: NextPageWithLayout = () => {
  return <div>

    
  </div>;
};

export default ProfilePage;

ProfilePage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
