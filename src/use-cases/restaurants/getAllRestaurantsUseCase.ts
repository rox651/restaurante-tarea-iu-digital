import RestaurantAdapter from "../../adapters/restaurants";
import type { Restaurant } from "../../domain/restaurant";

import useLocalStorage from "../common/useLocalStorage";

const restaurantAdapter = new RestaurantAdapter();

type GetAllRestaurantsUseCase = Restaurant[];

const getAllResturantsUseCase = (): GetAllRestaurantsUseCase => {
  const [allRestaurants] = useLocalStorage(
    "restaurants",
    restaurantAdapter.getAllRestaurants(),
  );

  return allRestaurants;
};

export default getAllResturantsUseCase;
