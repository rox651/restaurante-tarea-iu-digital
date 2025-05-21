interface Restaurant {
  name: string;
  description: string;
  imageURL: string;
  address: string;
}

interface RestaurantSearchFilter {
  name: string;
}

export type { Restaurant, RestaurantSearchFilter };
