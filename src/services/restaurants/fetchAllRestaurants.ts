import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "../../domain/firebase/config";
import type { Restaurant } from "../../domain/restaurant";

const fetchAllRestaurants = async (): Promise<Restaurant[]> => {
  const restaurantsCol = collection(db, "restaurants");
  const restaurantsSnapshot = await getDocs(restaurantsCol);

  const restaurants = restaurantsSnapshot.docs.map((doc) => doc.data());

  return restaurants as Restaurant[];
};

export default fetchAllRestaurants;
