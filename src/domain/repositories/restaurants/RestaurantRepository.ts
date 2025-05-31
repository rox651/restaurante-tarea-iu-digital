import Restaurant from "../../entities/restaurants/Restaurant";

interface RestaurantsRepository {
  getAllRestaurants: () => Promise<Restaurant[]>;
  getRestaurantsByName: (name: string) => Promise<Restaurant[]>;
  setNewRestaurant: (restaurant: Restaurant) => Promise<void>;
}

export default RestaurantsRepository;
