import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import Restaurants from "../views/restaurants/Restaurants";
import SearchRestaurant from "../views/restaurants/SearchRestaurant";

import useGetResturantsByName from "../hooks/restaurants/useGetRestaurantsByName";

import type RestaurantSearchFilter from "../domain/entities/restaurants/RestaurantSearchFilter";

export const Route = createFileRoute("/busqueda")({
  component: RouteComponent,
});

function RouteComponent() {
  const [name, setName] = useState<RestaurantSearchFilter["name"]>("");

  const { restaurants, isLoadingRestaurants } = useGetResturantsByName(name);

  return (
    <>
      <SearchRestaurant
        onChange={(filter) => {
          setName(filter.name);
        }}
      />

      {isLoadingRestaurants ? (
        <p className="text-center text-2xl">Cargando...</p>
      ) : null}

      {!isLoadingRestaurants && restaurants ? (
        <Restaurants restaurants={restaurants} />
      ) : null}
    </>
  );
}
