import create from 'zustand';

const useBadgeStore = create((set) => ({
  badges: [
    { text: "empresario", isActive: false },
    { text: "guru", isActive: false },
    { text: "1M", isActive: false },
    { text: "negocios", isActive: false },
    { text: "salir", isActive: false },
  ],
  searchQuery: "",
  setSearchQuery: (query) =>
    set(() => ({
      searchQuery: query,
    })),
  toggleBadge: (badgeText) =>
    set((state) => ({
      badges: state.badges.map((badge) =>
        badge.text === badgeText ? { ...badge, isActive: !badge.isActive } : badge
      ),
    })),
}));

export default useBadgeStore;
