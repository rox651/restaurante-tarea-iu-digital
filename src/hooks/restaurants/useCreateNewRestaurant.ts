import { useMutation, useQueryClient } from "@tanstack/react-query";
import RestaurantAdapter from "../../infrastructure/adapters/restaurants/RestaurantAdapter";
import type Restaurant from "../../domain/entities/restaurants/Restaurant";

const restaurantAdapter = new RestaurantAdapter();

type UseCreateNewRestaurant = (restaurant: Restaurant) => Promise<void>;

const useCreateNewRestaurant = (): UseCreateNewRestaurant => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: (restaurant: Restaurant) =>
      restaurantAdapter.setNewRestaurant(restaurant),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["restaurants"] });
    },
    onError: (error) => {
      console.error("Error setting new restaurant:", error);
    },
  });

  const handleSetNewRestaurant = async (restaurant: Restaurant) => {
    await mutateAsync(restaurant);
  };

  return handleSetNewRestaurant;
};

export default useCreateNewRestaurant;
