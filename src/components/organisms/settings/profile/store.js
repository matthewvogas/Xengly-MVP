import create from 'zustand';

const useProfileStore = create((set) => ({
  schedules: [],
  selectedApps: [],
  isOnline: false,
  isMap: false,
  setSchedules: (schedules) => set(() => ({ schedules })),
  setSelectedApps: (selectedApps) => set(() => ({ selectedApps })),
  setIsOnline: (isOnline) => set(() => ({ isOnline })),
  setIsMap: (isMap) => set(() => ({ isMap })),
}));

export default useProfileStore;
