import Link from 'next/link';

const Header = () => {
  return (
    <div className="bg-black text-white flex items-center justify-between px-4 sm:px-12 py-4 min-h-[70px] text-sm">
      <div className="flex gap-4">
        <Link href={'/publications/'}>
          <button>Crear publicaión</button>
        </Link>
        <Link href={'/votes/'}>
          <button>Mis votos</button>
        </Link>
        <Link href={'/sign-up/'}>
          <button>Sign up</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
