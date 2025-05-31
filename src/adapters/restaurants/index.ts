import type { Restaurant } from "../../domain/restaurant";

import RestaurantRepository from "../../repositories/restaurants/";

import fetchRestaurantByName from "../../services/restaurants/fetchRestaurantByName";
import fetchAllRestaurants from "../../services/restaurants/fetchAllRestaurants";

class RestaurantAdapter implements RestaurantRepository {
  async getAllRestaurants() {
    const restaurants = fetchAllRestaurants();
    return restaurants;
  }
  async getRestaurantsByName(name: string) {
    return fetchRestaurantByName(name);
  }
  setNewRestaurant(restaurant: Restaurant) {}
}

export default RestaurantAdapter;
