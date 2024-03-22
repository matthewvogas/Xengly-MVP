import { db } from "../firebase.config";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";

export const scheduleMeeting = async (meetingDetails) => {
  try {
    const docRef = await addDoc(collection(db, "meetings"), meetingDetails);
    console.log("Meeting scheduled with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error scheduling meeting: ", error);
    throw error;
  }
};
