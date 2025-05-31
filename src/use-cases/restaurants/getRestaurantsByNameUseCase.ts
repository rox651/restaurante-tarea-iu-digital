import RestaurantAdapter from "../../adapters/restaurants";
import type { Restaurant } from "../../domain/restaurant";

const restaurantAdapter = new RestaurantAdapter();

type GetRestaurantsByNameUseCase = Restaurant[];

const getResturantsByNameUseCase = (
  name: string,
): GetRestaurantsByNameUseCase => {
  // const allRestaurants = getAllResturantsUseCase();
  // const restaurantsByName = restaurantAdapter.getRestaurantByName(
  //   name,
  //   allRestaurants,
  // );

  return [];
};

export default getResturantsByNameUseCase;
