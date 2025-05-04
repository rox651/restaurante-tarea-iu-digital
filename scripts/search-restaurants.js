import { restaurants } from "./data/restaurants.js";
import createRestaurantNode from "./helpers/createRestaurantNode.utility.js";

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search-input");
  searchInput.value = "";

  const containerForRestaurants = document.getElementById(
    "container-restaurants",
  );

  searchInput.addEventListener("input", (event) => {
    const resturantCards = document.querySelectorAll("restaurant-card");

    const searchValue = event.target.value.toLowerCase().trim() || "";

    const filteredRestaurants = restaurants.filter((restaurant) =>
      restaurant.title.toLowerCase().includes(searchValue),
    );

    resturantCards.forEach((card) => {
      card.remove();
    });

    filteredRestaurants.forEach((restaurant) => {
      const restaurantCard = createRestaurantNode(restaurant);

      containerForRestaurants.insertAdjacentElement(
        "beforeend",
        restaurantCard,
      );
    });
  });
});
