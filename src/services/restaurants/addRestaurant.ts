import { collection, addDoc } from "firebase/firestore/lite";
import { db } from "../../domain/config/firebase";

import type Restaurant from "../../domain/entities/restaurants/Restaurant";

const addRestaurant = async (restaurant: Restaurant): Promise<void> => {
  await addDoc(collection(db, "restaurants"), restaurant);
};

export default addRestaurant;
