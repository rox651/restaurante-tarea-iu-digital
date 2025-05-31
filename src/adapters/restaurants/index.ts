import type { Restaurant } from "../../domain/restaurant";

import RestaurantRepository from "../../repositories/restaurants/";
import addRestaurant from "../../services/restaurants/addRestaurant";

import fetchAllRestaurants from "../../services/restaurants/fetchAllRestaurants";
import filterRestaurantByName from "../../services/restaurants/filterRestaurantsByName";

class RestaurantAdapter implements RestaurantRepository {
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
