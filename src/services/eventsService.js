import { db } from "../firebase.config";
import { collection, query, where, getDocs } from "firebase/firestore";

export const getEventsForUser = async (userId) => {
  const events = [];
  const clientEventsQuery = query(
    collection(db, "events"),
    where("clientId", "==", userId)
  );
  let querySnapshot = await getDocs(clientEventsQuery);
  querySnapshot.forEach((doc) => {
    events.push({ id: doc.id, ...doc.data(), userType: "client" });
  });

  const creatorEventsQuery = query(
    collection(db, "events"),
    where("creatorId", "==", userId)
  );
  querySnapshot = await getDocs(creatorEventsQuery);
  querySnapshot.forEach((doc) => {
    events.push({ id: doc.id, ...doc.data(), userType: "creator" });
  });

  return events;
};
