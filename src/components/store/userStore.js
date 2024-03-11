import { create } from "zustand";
import { persist } from "zustand/middleware";
import { auth } from "../../firebase.config";
import { onAuthStateChanged } from "firebase/auth";

const useUserStore = create(
  persist(
    (set) => ({
      isAuthenticated: false,
      profile: {
        name: "",
        email: "",
        imageUrl: "",
        biography: "",
      },
      setAuth: (isAuthenticated) => set({ isAuthenticated }),
      setProfile: (profile) => set({ profile }),
      updateProfile: (updateFields) =>
        set((state) => ({
          profile: { ...state.profile, ...updateFields },
        })),
      clearUser: () =>
        set({
          isAuthenticated: false,
          profile: { name: "", email: "", imageUrl: "" },
        }),
      logout: () => {
        auth.signOut();
        set({
          isAuthenticated: false,
          profile: { name: "", email: "", imageUrl: "", biography: "" },
        });
      },
    }),
    {
      name: "user-store",
    }
  )
);

onAuthStateChanged(auth, (user) => {
  if (user) {
    useUserStore.setState({
      isAuthenticated: true,
      profile: {
        name: user.displayName || "",
        email: user.email,
        imageUrl: user.photoURL || "",
        biography: "",
      },
    });
  } else {
    useUserStore.setState({
      isAuthenticated: false,
      profile: {
        name: "",
        email: "",
        imageUrl: "",
        biography: "",
      },
    });
  }
});

export default useUserStore;
