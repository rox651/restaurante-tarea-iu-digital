import type { Restaurant } from "../../domain/restaurant";

interface ResturantsRepository {
  getAllRestaurants: () => Promise<Restaurant[]>;
  getRestaurantsByName: (name: string) => Promise<Restaurant[]>;
  setNewRestaurant: (restaurant: Restaurant) => void;
}

export default ResturantsRepository;
