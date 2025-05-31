import type RestaurantType from "../../domain/entities/restaurants/Restaurant";
import Restaurant from "./Restaurant";

type Props = {
  restaurants: RestaurantType[];
};

const Restaurants = ({ restaurants }: Props) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {restaurants.length === 0 && (
        <div className="flex flex-col items-center justify-center text-center py-10 col-span-full">
          <h2 className="text-xl font-semibold text-gray-700">
            Restaurantes no encontrados
          </h2>
          <p className="text-gray-500 mt-2">
            Intenta ajustar tus filtros o vuelve más tarde.
          </p>
          <img
            src="/assets/no-restaurants.svg"
            alt="No se encontraron restaurantes"
            className="mt-4 w-1/2 max-w-sm"
          />
        </div>
      )}
      {restaurants.map((restaurant, index) => (
        <Restaurant key={index} restaurant={restaurant} />
      ))}
    </section>
  );
};

export default Restaurants;
