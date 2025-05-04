import { RestaurantCard } from "../restaurant.js";
export default function createRestaurantNode(restaurant) {
  const restaurantCard = new RestaurantCard();

  restaurantCard.setAttribute("title", restaurant.title);
  restaurantCard.setAttribute("tags", restaurant.tags);
  restaurantCard.setAttribute("time", restaurant.time);
  restaurantCard.setAttribute("rating", restaurant.rating);
  restaurantCard.setAttribute("reviews", restaurant.reviews);
  restaurantCard.setAttribute("fee", restaurant.fee);
  restaurantCard.setAttribute("image", restaurant.image);

  return restaurantCard;
}
