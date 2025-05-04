class RestaurantCard extends HTMLElement {
  constructor() {
    super();

    const template = document.createElement("template");
    template.innerHTML = `
      <style>
        @import "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css";
      </style>
      <div class="bg-white rounded-lg shadow-md overflow-hidden ">
        <img class="h-48 w-full object-cover image" src="../assets/restaurant-img-example.jpg" alt="Restaurant image">
        <div class="p-4">
          <h3 class="text-lg font-semibold title"></h3>
          <p class="text-sm text-gray-500 tags mt-1"></p>
          <div class="flex justify-between text-sm text-gray-600 mt-2">
            <span class="rating flex items-center gap-1">
              <span class="text-yellow-500">★</span>
              <span class="rating-value"></span>
            </span>
            <span class="fee text-gray-700 font-medium"></span>
          </div>
        </div>
      </div>
    `;

    this.attachShadow({ mode: "open" }).appendChild(
      template.content.cloneNode(true),
    );
  }

  connectedCallback() {
    const shadow = this.shadowRoot;
    shadow.querySelector(".title").textContent =
      this.getAttribute("title") || "";
    shadow.querySelector(".tags").textContent = this.getAttribute("tags") || "";
    shadow.querySelector(".rating-value").textContent =
      this.getAttribute("rating") || "";
    shadow.querySelector(".fee").textContent = this.getAttribute("fee") || "";
  }
}

customElements.define("restaurant-card", RestaurantCard);

export { RestaurantCard };
