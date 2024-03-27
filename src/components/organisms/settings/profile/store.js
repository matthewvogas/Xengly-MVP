import create from "zustand";

const useProfileStore = create((set) => ({
  selectedApps: [],
  isOnline: false,
  isMap: false,
  setSelectedApps: (selectedApps) => set(() => ({ selectedApps })),
  setIsOnline: (isOnline) => set(() => ({ isOnline })),
  setIsMap: (isMap) => set(() => ({ isMap })),
}));

export default useProfileStore;
