import create from 'zustand';

const useBadgeStore = create((set) => ({
  badges: [
    { text: "Bailarinas", isActive: false },
    { text: "Influencers", isActive: false },
    { text: "Deportistas", isActive: false },
    { text: "Músicos", isActive: false },
  ],
  toggleBadge: (badgeText) =>
    set((state) => ({
      badges: state.badges.map((badge) =>
        badge.text === badgeText ? { ...badge, isActive: !badge.isActive } : badge
      ),
    })),
}));

export default useBadgeStore;
