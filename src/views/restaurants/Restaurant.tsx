import type { Restaurant as RestaurantType } from "../../domain/restaurant";

type Props = {
  restaurant: RestaurantType;
};

const Restaurant = ({ restaurant }: Props) => {
  const { name, address, imageURL, description } = restaurant;
  return (
    <article className="bg-white shadow-md rounded-lg p-4">
      <img
        src={imageURL}
        alt={name}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <h4 className="text-xl font-bold">{name}</h4>
      <p className="text-lg font-medium text-gray-600">{address}</p>
      <p className="text-base text-gray-700">{description}</p>
    </article>
  );
};

export default Restaurant;
