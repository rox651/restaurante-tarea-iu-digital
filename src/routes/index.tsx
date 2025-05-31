import { createFileRoute } from "@tanstack/react-router";

import Restaurants from "../views/restaurants/Restaurants";

import useGetAllRestaurants from "../hooks/restaurants/useGetAllRestaurants";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { restaurants, isLoadingRestaurants } = useGetAllRestaurants();

  return (
    <>
      <h1 className="text-center font-black mb-5 text-5xl lg:text-6xl">
        A donde ir?
      </h1>

      {isLoadingRestaurants ? (
        <p className="text-center text-2xl">Cargando...</p>
      ) : null}

      {!isLoadingRestaurants && restaurants ? (
        <Restaurants restaurants={restaurants} />
      ) : null}
    </>
  );
}
