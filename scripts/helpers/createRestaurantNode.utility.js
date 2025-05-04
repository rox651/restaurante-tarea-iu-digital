import { RestaurantCard } from "../restaurant.js";
export default function createRestaurantNode(restaurant) {
  const restaurantCard = new RestaurantCard();

  restaurantCard.setAttribute("title", restaurant.title);
  restaurantCard.setAttribute("tags", restaurant.tags);
  restaurantCard.setAttribute("rating", restaurant.rating);
  restaurantCard.setAttribute("image", restaurant.image);
  restaurantCard.setAttribute("description", restaurant.description);
  restaurantCard.setAttribute("address", restaurant.address);

  return restaurantCard;
}
