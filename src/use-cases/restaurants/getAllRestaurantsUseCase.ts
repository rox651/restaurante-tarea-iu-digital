import RestaurantAdapter from "../../adapters/restaurants";
import type { Restaurant } from "../../domain/restaurant";

const restaurantAdapter = new RestaurantAdapter();

type GetAllRestaurantsUseCase = Restaurant[];

const getAllResturantsUseCase = (): GetAllRestaurantsUseCase => {
  // const [allRestaurants] = useLocalStorage(
  //   LOCAL_STORAGE_KEY,
  //   restaurantAdapter.getAllRestaurants(),
  // );
  //
  // return allRestaurants;
  return [];
};

export default getAllResturantsUseCase;
