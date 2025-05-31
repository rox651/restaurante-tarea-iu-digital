import type Restaurant from "../../domain/entities/restaurants/Restaurant";

const filterRestaurantByName = (name: string, restaurants: Restaurant[]) => {
  const formattedName = name.toLowerCase().trim();

  return restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(formattedName),
  );
};

export default filterRestaurantByName;
