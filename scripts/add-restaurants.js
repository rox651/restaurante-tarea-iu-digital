document.addEventListener("DOMContentLoaded", () => {
  const restaurantsFromLocalStorage = JSON.parse(
    localStorage.getItem("restaurants"),
  );
  const form = document.getElementById("restaurant-form");
  const tagSelect = new Choices("#tags", {
    removeItemButton: true,
    duplicateItemsAllowed: false,
  });
  const stars = new StarRating(".star-rating");

  function saveRestaurant(restaurant) {
    const stored = JSON.parse(localStorage.getItem("restaurants")) || [];
    stored.push(restaurant);
    localStorage.setItem("restaurants", JSON.stringify(stored));
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    const title = formData.get("title");

    const findedRestaurant = restaurantsFromLocalStorage.find(
      (restaurant) => restaurant.title === title,
    );

    if (findedRestaurant) {
      alert("Ya existe un restaurante con ese nombre");
      return;
    }

    const restaurant = {
      title: formData.get("title"),
      description: formData.get("description"),
      address: formData.get("address"),
      image: formData.get("image"),
      tags: tagSelect
        .getValue()
        .map((tag) => tag.value)
        .join(" • "),
      rating: formData.get("star-rating"),
    };
    saveRestaurant(restaurant);

    form.reset();
    tagSelect.clearStore();
    window.location.replace("/index.html");
  });
});
