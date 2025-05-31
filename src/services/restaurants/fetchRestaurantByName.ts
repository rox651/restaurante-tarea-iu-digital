import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../domain/firebase/config";
import type { Restaurant } from "../../domain/restaurant";

const fetchRestaurantByName = async (name: string) => {
  const formattedName = name.toLowerCase().trim();

  const restaurantsCol = collection(db, "restaurants");
  const restaurantsQuery = query(
    restaurantsCol,
    where("name", "==", formattedName),
  );

  const restaurantsSnapshot = await getDocs(restaurantsQuery);
  const restaurants = restaurantsSnapshot.docs.map((doc) => doc.data());

  return restaurants as Restaurant[];
};

export default fetchRestaurantByName;
