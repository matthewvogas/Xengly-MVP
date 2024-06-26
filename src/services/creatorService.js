import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc,
} from "firebase/firestore";

const db = getFirestore();

export const getCreators = async () => {
  const creators = [];
  const creatorsQuery = query(
    collection(db, "users"),
    where("userType", "==", "creator")
  );
  const querySnapshot = await getDocs(creatorsQuery);
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    creators.push({
      id: doc.id,
      name: data.name,
      biography: data.biography,
      birthDate: data.birthDate,
      email: data.email,
      profileImageURI: data.profileImageURI,
    });
  });
  return creators;
};

export const getUserById = async (userId) => {
  const userRef = doc(db, "users", userId);
  const docSnap = await getDoc(userRef);

  if (docSnap.exists()) {
    const data = docSnap.data();
    return {
      id: docSnap.id,
      name: data.name,
      biography: data.biography,
      birthDate: data.birthDate,
      email: data.email,
      profileImageURI: data.profileImageURI,
      images: data.images || [],
    };
  } else {
    return null;
  }
};
