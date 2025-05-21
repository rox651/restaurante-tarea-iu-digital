import type { Restaurant } from ".";

const restaurants: Restaurant[] = [
  {
    name: "Pacifico Mar",
    description: "Deliciosa comida del mar",
    address: "Av. 85 Nro 45 - 85 Barranquilla",
    imageURL:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/b6/c7/37/santiago-de-alfama-boutique.jpg?w=1100&h=600&s=1",
  },
  {
    name: "La Parrilla de Juan",
    description: "Especialistas en carnes a la parrilla",
    address: "Calle 50 Nro 20 - 30 Medellín",
    imageURL:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/de/f5/fe/20151227-213314-largejpg.jpg?w=1400&h=-1&s=1",
  },
  {
    name: "Sushi Zen",
    description: "Auténtico sushi japonés",
    address: "Carrera 10 Nro 5 - 15 Bogotá",
    imageURL:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/48/15/ec/cibo-fantastico-e-posto.jpg?w=1000&h=600&s=1",
  },
  {
    name: "Pizzería Italiana",
    description: "La mejor pizza artesanal",
    address: "Calle 25 Nro 14 - 50 Cali",
    imageURL:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/a8/a2/5c/pizzeria-italiana-vittoria.jpg?w=1800&h=-1&s=1",
  },
  {
    name: "Café Aroma",
    description: "Café y postres deliciosos",
    address: "Carrera 7 Nro 12 - 45 Cartagena",
    imageURL:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-s/03/1b/49/42/cafe-aroma.jpg?w=600&h=400&s=1",
  },
];

const LOCAL_STORAGE_KEY = "restaurants-data";

export { restaurants, LOCAL_STORAGE_KEY };
