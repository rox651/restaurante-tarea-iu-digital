import { createFileRoute } from "@tanstack/react-router";

import Restaurants from "../views/restaurants/Restaurants";

import getAllResturantsUseCase from "../use-cases/restaurants/getAllRestaurantsUseCase";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const allRestaurants = getAllResturantsUseCase();

  return (
    <>
      <h1 className="text-center font-black mb-5 text-5xl lg:text-6xl">
        A donde ir?
      </h1>
      <Restaurants restaurants={allRestaurants} />
    </>
  );
}
