import RestaurantAdapter from "../../adapters/restaurants";
import type { Restaurant } from "../../domain/restaurant";
import { LOCAL_STORAGE_KEY } from "../../domain/restaurant/data";

import useLocalStorage from "../common/useLocalStorage";

const restaurantAdapter = new RestaurantAdapter();

type GetAllRestaurantsUseCase = Restaurant[];

const getAllResturantsUseCase = (): GetAllRestaurantsUseCase => {
  const [allRestaurants] = useLocalStorage(
    LOCAL_STORAGE_KEY,
    restaurantAdapter.getAllRestaurants(),
  );

  return allRestaurants;
};

export default getAllResturantsUseCase;
