import Restaurant from "../../domain/restaurant";

const filterRestaurantByName = (name: string, restaurants: Restaurant[]) => {
  const formattedName = name.toLowerCase().trim();

  return restaurants.filter(
    (restaurant) => formattedName === restaurant.name.toLowerCase(),
  );
};

export default filterRestaurantByName;
