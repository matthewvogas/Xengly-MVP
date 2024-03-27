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
  getDoc,
} from "firebase/firestore";

export const scheduleMeeting = async (meetingDetails) => {
  try {
    const docRef = await addDoc(collection(db, "meetings"), meetingDetails);
    return docRef.id;
  } catch (error) {
    console.error("Error scheduling meeting: ", error);
    throw error;
  }
};

export const getPendingMeetingsForCreator = async (creatorId) => {
  const meetingsQuery = query(
    collection(db, "meetings"),
    where("creatorId", "==", creatorId),
    where("status", "==", "pending")
  );
  const querySnapshot = await getDocs(meetingsQuery);
  const meetings = [];
  querySnapshot.forEach((doc) => {
    meetings.push({ id: doc.id, ...doc.data() });
  });
  return meetings;
};

export const deleteMeeting = async (meetingId) => {
  try {
    await deleteDoc(doc(db, "meetings", meetingId));
  } catch (error) {
    console.error("Error deleting meeting: ", error);
    throw error;
  }
};

export const acceptMeeting = async (meetingId) => {
  try {
    const meetingRef = doc(db, "meetings", meetingId);
    const meetingSnap = await getDoc(meetingRef);

    if (!meetingSnap.exists()) {
      throw new Error("La reunión no existe.");
    }

    const meetingData = meetingSnap.data();

    const eventRef = await addDoc(collection(db, "events"), {
      ...meetingData,
      status: "accepted",
    });

    await deleteDoc(meetingRef);

    return eventRef.id;
  } catch (error) {
    console.error("Error al aceptar la reunión: ", error);
    throw error;
  }
};

export const cancelMeeting = async (meetingId) => {
  try {
    const meetingRef = doc(db, "meetings", meetingId);
    await updateDoc(meetingRef, {
      status: "cancelled",
    });
  } catch (error) {
    console.error("Error cancelling meeting: ", error);
    throw error;
  }
};
