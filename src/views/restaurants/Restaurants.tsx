import type { Restaurant as RestaurantType } from "../../domain/restaurant";
import Restaurant from "./Restaurant";

type Props = {
  restaurants: RestaurantType[];
};

const Restaurants = ({ restaurants }: Props) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {restaurants.map((restaurant, index) => (
        <Restaurant key={index} restaurant={restaurant} />
      ))}
    </section>
  );
};

export default Restaurants;
