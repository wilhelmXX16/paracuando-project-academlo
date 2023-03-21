import { useRouter } from 'next/router';
import { Layout } from '../../components/layout/Layout';
import { NextPageWithLayout } from '../page';
export const CategoryPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { category_id } = router.query;
  return (
    <div>
      <div className='min-h-[350px] flex justify-center items-center flex-col bg-[url("/hero-banner.png")] bg-cover bg-center app-banner -mt-4 gap-5'>
        <h1 className="text-2xl">
          {' '}
          this page is{' '}
          <span className="text-app-yellow text-6xl">{category_id}</span>
        </h1>
      </div>
    </div>
  );
};

CategoryPage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default CategoryPage;
