import { restaurants } from "./data/restaurants.js";
import createRestaurantNode from "./helpers/createRestaurantNode.utility.js";

document.addEventListener("DOMContentLoaded", () => {
  const resturantsFromLocalStorage =
    JSON.parse(localStorage.getItem("restaurants")) || [];

  if (resturantsFromLocalStorage.length === 0) {
    localStorage.setItem("restaurants", JSON.stringify(restaurants));
  }

  const containerForRestaurants = document.getElementById(
    "container-restaurants",
  );

  containerForRestaurants.className =
    "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4";

  resturantsFromLocalStorage.forEach((restaurant) => {
    const resurantCard = createRestaurantNode(restaurant);

    containerForRestaurants.insertAdjacentElement("beforeend", resurantCard);
  });
});
