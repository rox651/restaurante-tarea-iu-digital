import { useMutation, useQueryClient } from "@tanstack/react-query";
import RestaurantAdapter from "../../adapters/restaurants";
import type { Restaurant } from "../../domain/restaurant";

const restaurantAdapter = new RestaurantAdapter();

type SetNewRestaurantUseCase = (restaurant: Restaurant) => Promise<void>;

const setNewRestaurantUseCase = (): SetNewRestaurantUseCase => {
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

export default setNewRestaurantUseCase;
