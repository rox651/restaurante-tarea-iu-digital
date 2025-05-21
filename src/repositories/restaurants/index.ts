import type { Restaurant } from "../../domain/restaurant";

interface ResturantsRepository {
  getAllRestaurants: () => Restaurant[];
  getRestaurantByName: (name: string, restaurant: Restaurant[]) => Restaurant[];
  setNewRestaurant: (restaurant: Restaurant) => Restaurant[];
}

export default ResturantsRepository;
