import create from "zustand";

const useMenuStore = create((set) => ({
  activePath: "/",
  setActivePath: (path) => set({ activePath: path }),
}));

export default useMenuStore;
