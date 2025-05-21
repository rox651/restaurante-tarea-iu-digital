import { createFileRoute } from "@tanstack/react-router";
import CreateNewRestaurantForm from "../views/restaurants/CreateNewRestaurantForm";

import setNewRestaurantUseCase from "../use-cases/restaurants/setNewRestaurantUseCase";

export const Route = createFileRoute("/nuevo")({
  component: RouteComponent,
});

function RouteComponent() {
  const handleSetNewRestaurant = setNewRestaurantUseCase();

  return (
    <>
      <h2 className="text-center font-black mb-5 text-3xl lg:text-4xl">
        Crear Nuevo Restaurante
      </h2>

      <div className="mx-auto lg:w-1/2">
        <CreateNewRestaurantForm
          handleSetNewRestaurant={handleSetNewRestaurant}
        />
      </div>
    </>
  );
}
