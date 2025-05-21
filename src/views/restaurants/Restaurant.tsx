import { useState } from "react";
import type { Restaurant as RestaurantType } from "../../domain/restaurant";

const defaultImage = new URL(
  "../../assets/images/default-image.png",
  import.meta.url,
).href;

type Props = {
  restaurant: RestaurantType;
};

const Restaurant = ({ restaurant }: Props) => {
  const { name, address, imageURL, description } = restaurant;
  const [imageToShow, setImageToShow] = useState(imageURL);

  return (
    <article className="bg-white shadow-md rounded-lg">
      <img
        src={imageToShow}
        alt={name}
        onError={() => {
          setImageToShow(defaultImage);
        }}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h4 className="text-xl font-bold mb-2">{name}</h4>
        <p className="text-lg font-medium text-gray-600">{address}</p>
        <p className="text-base text-gray-700">{description}</p>
      </div>
    </article>
  );
};

export default Restaurant;
