import type Restaurant from "../../../domain/entities/restaurants/Restaurant";
import type RestaurantsRepository from "../../../domain/repositories/restaurants/RestaurantRepository";

import addRestaurant from "../../../services/restaurants/addRestaurant";
import fetchAllRestaurants from "../../../services/restaurants/fetchAllRestaurants";
import filterRestaurantByName from "../../../services/restaurants/filterRestaurantsByName";

class RestaurantAdapter implements RestaurantsRepository {
  async getAllRestaurants() {
    const restaurants = await fetchAllRestaurants();
    return restaurants;
  }
  async getRestaurantsByName(name: string) {
    const restaurants = await fetchAllRestaurants();
    const restaurantsByName = filterRestaurantByName(name, restaurants);
    return restaurantsByName;
  }
  async setNewRestaurant(restaurant: Restaurant) {
    await addRestaurant(restaurant);
  }
}

export default RestaurantAdapter;
