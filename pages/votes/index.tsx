import { Layout } from '../../components/layout/Layout';
import { NextPageWithLayout } from '../page';

const MeVotes: NextPageWithLayout = () => {
  return <div>mis votos</div>;
};

MeVotes.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
export default MeVotes;
