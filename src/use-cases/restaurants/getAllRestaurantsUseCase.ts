import RestaurantAdapter from "../../adapters/restaurants";
import type { Restaurant } from "../../domain/restaurant";
import { useQuery } from "@tanstack/react-query";

const restaurantAdapter = new RestaurantAdapter();

type GetAllRestaurantsUseCase = {
  restaurants: Restaurant[] | undefined;
  isLoadingRestaurants: boolean;
};

const getAllResturantsUseCase = (): GetAllRestaurantsUseCase => {
  const { data, isLoading } = useQuery({
    queryKey: ["restaurants"],
    queryFn: async () => {
      return await restaurantAdapter.getAllRestaurants();
    },
  });

  return {
    restaurants: data,
    isLoadingRestaurants: isLoading,
  };
};

export default getAllResturantsUseCase;
