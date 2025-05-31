import { collection, addDoc } from "firebase/firestore/lite";
import { db } from "../../domain/firebase/config";
import type { Restaurant } from "../../domain/restaurant";

const addRestaurant = async (restaurant: Restaurant): Promise<void> => {
  await addDoc(collection(db, "restaurants"), restaurant);
};

export default addRestaurant;
