import { RiHomeLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { IoRestaurant } from "react-icons/io5";
import { FaTripadvisor } from "react-icons/fa";
import { Link } from "@tanstack/react-router";

const Header = () => {
  return (
    <header className="py-5 px-3 mb-10  bg-slate-200 ">
      <h1 className="text-center font-black mb-10  text-3xl lg:text-5xl">
        <FaTripadvisor className="mx-auto  p-2 w-20 h-20 rounded-full  bg-blue-500" />
        Tripadvisor para restaurantes
      </h1>
      <nav className="flex gap-5 items-center justify-center flex-col lg:flex-row">
        <Link
          to="/"
          className=" [&.active]:font-bold flex text-center items-center gap-x-2 justify-center"
        >
          <RiHomeLine />
          Inicio
        </Link>
        <Link
          to="/busqueda"
          className="[&.active]:font-bold flex items-center text-center gap-x-2 justify-center"
        >
          <CiSearch />
          Busqueda de restaurantes
        </Link>
        <Link
          to="/nuevo"
          className="[&.active]:font-bold flex items-center gap-x-2 text-center justify-center"
        >
          <IoRestaurant />
          Nuevo Restaurante
        </Link>
      </nav>
    </header>
  );
};

export default Header;
