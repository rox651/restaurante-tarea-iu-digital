import RestaurantAdapter from "../../adapters/restaurants";
import Restaurant from "../../domain/restaurant";
import useLocalStorage from "../common/useLocalStorage";

const restaurantAdapter = new RestaurantAdapter();

type GetRestaurantsByNameUseCase = Restaurant[];

const getResturantsByNameUseCase = (
  name: string,
): GetRestaurantsByNameUseCase => {
  const [restaurantsByName] = useLocalStorage(
    "restaurants",
    restaurantAdapter.getRestaurantByName(name),
  );

  return restaurantsByName;
};

export default getResturantsByNameUseCase;
