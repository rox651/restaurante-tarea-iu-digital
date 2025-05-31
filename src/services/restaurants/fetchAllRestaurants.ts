import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "../../domain/config/firebase";
import type Restaurant from "../../domain/entities/restaurants/Restaurant";

const fetchAllRestaurants = async (): Promise<Restaurant[]> => {
  const restaurantsCol = collection(db, "restaurants");
  const restaurantsSnapshot = await getDocs(restaurantsCol);

  const restaurants = restaurantsSnapshot.docs.map((doc) => doc.data());

  return restaurants as Restaurant[];
};

export default fetchAllRestaurants;
