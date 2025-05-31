import { useQuery } from "@tanstack/react-query";
import RestaurantAdapter from "../../infrastructure/adapters/restaurants/RestaurantAdapter";
import type Restaurant from "../../domain/entities/restaurants/Restaurant";

const restaurantAdapter = new RestaurantAdapter();

type GetRestaurantsByNameUseCase = {
  restaurants: Restaurant[] | undefined;
  isLoadingRestaurants: boolean;
};

const getResturantsByNameUseCase = (
  name: string,
): GetRestaurantsByNameUseCase => {
  const { data, isLoading } = useQuery({
    queryKey: ["restaurants", name],
    queryFn: async () => {
      const restaurants = await restaurantAdapter.getRestaurantsByName(name);

      return restaurants;
    },
  });

  return {
    restaurants: data,
    isLoadingRestaurants: isLoading,
  };
};

export default getResturantsByNameUseCase;
