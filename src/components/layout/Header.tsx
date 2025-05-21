import { Link } from "@tanstack/react-router";

const Header = () => {
  return (
    <header className="flex gap-2 p-2">
      <Link to="/" className="[&.active]:font-bold">
        Inicio
      </Link>{" "}
      <Link to="/busqueda" className="[&.active]:font-bold">
        Busqueda de restaurantes
      </Link>
      <Link to="/resturante/new" className="[&.active]:font-bold">
        Nuevo Restaurante
      </Link>
    </header>
  );
};

export default Header;
