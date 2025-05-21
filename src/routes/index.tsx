import { createFileRoute } from "@tanstack/react-router";

import Restaurants from "../views/restaurants/Restaurants";

import getAllResturantsUseCase from "../use-cases/restaurants/getAllRestaurantsUseCase";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const allRestaurants = getAllResturantsUseCase();

  return <Restaurants restaurants={allRestaurants} />;
}
