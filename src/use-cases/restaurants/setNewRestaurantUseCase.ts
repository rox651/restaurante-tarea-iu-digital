import RestaurantAdapter from "../../adapters/restaurants";
import type { Restaurant } from "../../domain/restaurant";
import { LOCAL_STORAGE_KEY } from "../../domain/restaurant/data";
import useLocalStorage from "../common/useLocalStorage";

const restaurantAdapter = new RestaurantAdapter();

type SetNewRestaurantUseCase = (restaurant: Restaurant) => void;

const setNewRestaurantUseCase = (): SetNewRestaurantUseCase => {
  const [_, setAllRestaurants] = useLocalStorage(
    LOCAL_STORAGE_KEY,
    restaurantAdapter.getAllRestaurants(),
  );

  const handleSetNewRestaurant = (restaurant: Restaurant) => {
    const updatedRestaurants = restaurantAdapter.setNewRestaurant(restaurant);

    setAllRestaurants(updatedRestaurants);
  };

  return handleSetNewRestaurant;
};

export default setNewRestaurantUseCase;
