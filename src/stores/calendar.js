import { defineStore } from "pinia";
import { calendar } from "@/helpers/calendar";

export const useCalendarStore = defineStore({
  id: "calendar",
  estebes: "hi",
  state: () => ({
    currentDate: calendar.currentDate,
    selectedDate: calendar.currentDate,
  }),
});
