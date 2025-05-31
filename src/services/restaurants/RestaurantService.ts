import type Restaurant from "../../domain/entities/restaurants/Restaurant";
import type IRestaurantService from "../../domain/interfaces/restaurants/IResturantServices";

import addRestaurant from "./addRestaurant";
import fetchAllRestaurants from "./fetchAllRestaurants";
import filterRestaurantByName from "./filterRestaurantsByName";

class RestaurantService implements IRestaurantService {
  async getAllRestaurants() {
    try {
      const restaurants = await fetchAllRestaurants();
      return restaurants;
    } catch (error) {
      throw new Error(
        `Failed to fetch restaurants: ${error instanceof Error ? error.message : "Unknown error"}`,
      );
    }
  }

  async getRestaurantsByName(name: string) {
    try {
      const allRestaurants = await fetchAllRestaurants();
      const filteredRestaurants = filterRestaurantByName(name, allRestaurants);
      return filteredRestaurants;
    } catch (error) {
      throw new Error(
        `Failed to fetch restaurants by name: ${error instanceof Error ? error.message : "Unknown error"}`,
      );
    }
  }

  async createRestaurant(restaurant: Restaurant) {
    if (!restaurant) {
      throw new Error("Restaurant data is required");
    }

    try {
      await addRestaurant(restaurant);
    } catch (error) {
      throw new Error(
        `Failed to create restaurant: ${error instanceof Error ? error.message : "Unknown error"}`,
      );
    }
  }
}

export default RestaurantService;
