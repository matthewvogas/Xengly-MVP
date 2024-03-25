import create from "zustand";

const useCheckoutStore = create((set) => ({
  isMap: false,
  selectedApp: null,
  setIsMap: (isMap) => set(() => ({ isMap })),
  setSelectedApp: (selectedApp) => set(() => ({ selectedApp })),
}));

export default useCheckoutStore;
