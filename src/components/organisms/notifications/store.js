import create from "zustand";
import Image from "../../../assets/images/exampleImage.jpg";

const useNotificationsStore = create((set) => ({
  searchText: "",
  notifications: [
    {
      id: 1,
      title: "Evento con Xengler",
      message: "Mañana a las 10:00 AM tienes un evento con Gina",
      icon: Image,
    },
    {
      id: 2,
      title: "Terminar de configurar el perfil personal",
      message: "Aún te falta llenar unas cosas en tu perfil personal",
    },
    {
      id: 3,
      title: "Evento con Xengler",
      message: "Mañana a las 12:00 PM tienes un evento con Carlos",
      icon: Image,
    },
  ],
  filteredNotifications: [],
  setSearchText: (text) => set({ searchText: text }),
  filterNotifications: (searchText) =>
    set((state) => ({
      filteredNotifications: state.notifications.filter(
        (notification) =>
          notification.title.toLowerCase().includes(searchText.toLowerCase()) ||
          notification.message.toLowerCase().includes(searchText.toLowerCase())
      ),
    })),
  removeNotification: (id) =>
    set((state) => ({
      notifications: state.notifications.filter(
        (notification) => notification.id !== id
      ),
      filteredNotifications: state.filteredNotifications.filter(
        (notification) => notification.id !== id
      ),
    })),
}));

export default useNotificationsStore;
