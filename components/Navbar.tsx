import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-slate-800 px-8 py-3">
      <Link className="text-white font-bold" href="/">
        Crud
      </Link>
      <Link className="bg-white p-2" href="/addTopic">
        Add Topic
      </Link>
    </nav>
  );
};

export default Navbar;
