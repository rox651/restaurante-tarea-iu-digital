import Restaurant from "../../entities/restaurants/Restaurant";

interface IRestaurantService {
  getAllRestaurants(): Promise<Restaurant[]>;
  getRestaurantsByName(name: string): Promise<Restaurant[]>;
  createRestaurant(restaurant: Restaurant): Promise<void>;
}

export default IRestaurantService;
