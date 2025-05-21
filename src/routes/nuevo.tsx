import { createFileRoute } from "@tanstack/react-router";
import CreateNewRestaurantForm from "../views/restaurants/CreateNewRestaurantForm";

import setNewRestaurantUseCase from "../use-cases/restaurants/setNewRestaurantUseCase";

export const Route = createFileRoute("/nuevo")({
  component: RouteComponent,
});

function RouteComponent() {
  const handleSetNewRestaurant = setNewRestaurantUseCase();

  return (
    <CreateNewRestaurantForm handleSetNewRestaurant={handleSetNewRestaurant} />
  );
}
