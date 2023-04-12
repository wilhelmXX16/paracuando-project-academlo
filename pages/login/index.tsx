import Cookies from 'js-cookie';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import Logo from '../../components/assets/logo/Logo';
import { loginUser } from '../../lib/services/auth.service';
import { NextPageWithLayout } from '../page';

type FormData = {
  email: string;
  password: string;
};

const LoginPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: FormData) => {
    loginUser(data)
      .then((res) => {
        Cookies.set('token', res.data.token);
        router.push('/');
        //console.log(res);
      })
      .catch((error) => {
        console.log(error);
        alert('credenciales incorrctas');
        reset();
      });

    //console.log(data);
  };

  return (
    <div className='min-h-[100vh] text-[#F8F7FA] flex space-x-52 justify-center items-center bg-[url("/wallpaper-login.png")] bg-cover bg-center app-banner -mt-4 gap-5 '>
      <div>
        <Logo variant="yellow" onlyIcon={true} />
      </div>
      <div className="max-w-[557px] min-h-[600px] border-solid border-2 border-white-600 bg-[#000000]/70 px-14 py-16 rounded-3xl ">
        <h1 className="text-3xl pb-5">¡Hola!</h1>
        <p className="text-base pb-5">
          Inicie sesión con los datos que registró durante su registro
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="gap-4">
            <h3 className="pb-1">Email</h3>
            <input
              className="px-6 py-4 w-full sm:w-[442px] bg-inherit border-solid border-2 border-[#A7A6A7] rounded-[5px]"
              type="text"
              placeholder="ejemplo@mail.com"
              {...register('email')}
            />
          </label>
          <label className="gap-4 ">
            <h3 className="py-2">Contraseña</h3>
            <input
              className="px-6 py-4 w-full sm:w-[442px] bg-inherit border-solid border-2 border-[#A7A6A7] rounded-[5px]"
              type="text"
              placeholder="Contraseña"
              {...register('password')}
            />
          </label>
          <div className="flex justify-center content-center py-4">
            <h3>¿Olvidaste tu contraseña?</h3>
            <Link href={'/login/findAccount'}>
              <button className="rounded-3xl  w-full sm:w-[150px] mr-8  p-0">
                Recupérala aqui
              </button>
            </Link>
          </div>
          <div className="text-center font-medium bg-app-yellow text-[#000000] rounded-[5px]">
            <button className="py-4 rounded-3xl bg-primary  w-full sm:w-[150px] mr-8">
              Iniciar sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
