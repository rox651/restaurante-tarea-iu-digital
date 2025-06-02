import { useQuery } from "@tanstack/react-query";
import RestaurantAdapter from "../../infrastructure/adapters/restaurants/RestaurantAdapter";
import type Restaurant from "../../domain/entities/restaurants/Restaurant";

const restaurantAdapter = new RestaurantAdapter();

type UseGetAllRestaurants = {
  restaurants: Restaurant[] | undefined;
  isLoadingRestaurants: boolean;
};

const UseGetAllResturants = (): UseGetAllRestaurants => {
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

export default UseGetAllResturants;
