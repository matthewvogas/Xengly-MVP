import create from 'zustand';

const useNotificationsStore = create((set) => ({
    searchText: "",
    setSearchText: (text) => set({ searchText: text }),
    filterNotifications: (notifications, searchText) =>
      notifications.filter(
        (notification) =>
          notification.title.toLowerCase().includes(searchText.toLowerCase()) ||
          notification.message.toLowerCase().includes(searchText.toLowerCase())
      ),
  }));
  
export default useNotificationsStore;