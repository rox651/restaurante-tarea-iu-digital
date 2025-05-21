import Restaurant from "../../domain/restaurant";

interface ResturantsRepository {
  getAllRestaurants: () => Restaurant[];
  getRestaurantByName: (name: string) => Restaurant[];
  setNewRestaurant: (restaurant: Restaurant) => Restaurant[];
}

export default ResturantsRepository;
