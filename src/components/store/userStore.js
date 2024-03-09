import create from "zustand";

const useUserStore = create((set) => ({
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
}));

export default useUserStore;
