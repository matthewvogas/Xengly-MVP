import create from 'zustand';

const useProfileStore = create((set) => ({
  schedule: {
    Monday: { start: '', end: '' },
  },
  setSchedule: (day, start, end) =>
    set((state) => ({
      schedule: { ...state.schedule, [day]: { start, end } },
    })),
}));

export default useProfileStore;
