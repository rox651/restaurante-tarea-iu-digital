import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import type { RestaurantSearchFilter } from "../domain/restaurant";

import Restaurants from "../views/restaurants/Restaurants";
import SearchRestaurant from "../views/restaurants/SearchRestaurant";

import getResturantsByNameUseCase from "../use-cases/restaurants/getRestaurantsByNameUseCase";

export const Route = createFileRoute("/busqueda")({
  component: RouteComponent,
});

function RouteComponent() {
  const [name, setName] = useState<RestaurantSearchFilter["name"]>("");

  const restaurantsByName = getResturantsByNameUseCase(name);

  return (
    <>
      <Restaurants restaurants={restaurantsByName} />
      <SearchRestaurant
        onChange={(filter) => {
          setName(filter.name);
        }}
      />
    </>
  );
}
