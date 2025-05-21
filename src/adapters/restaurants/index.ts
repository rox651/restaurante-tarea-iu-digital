import type { Restaurant } from "../../domain/restaurant";
import restaurants from "../../domain/restaurant/data";

import RestaurantRepository from "../../repositories/restaurants/";

import filterRestaurantByName from "../../services/restaurants/filterRestaurantByName";
import getStorageValue from "../../services/common/getStorageValue";

class RestaurantAdapter implements RestaurantRepository {
  getAllRestaurants(): Restaurant[] {
    return restaurants;
  }
  getRestaurantByName(name: string, restaurants: Restaurant[]): Restaurant[] {
    return filterRestaurantByName(name, restaurants);
  }
  setNewRestaurant(restaurant: Restaurant): Restaurant[] {
    const allRestaurants = getStorageValue("restaurants", restaurants);
    const updatedRestaurants = [...allRestaurants, restaurant];

    return updatedRestaurants;
  }
}

export default RestaurantAdapter;
