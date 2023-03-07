import { defineStore } from "pinia";
import { calendar } from "@/helpers/calendar";

export const useCalendarStore = defineStore({
  id: "calendar",
  state: () => ({
    currentDate: calendar.currentDate,
    selectedDate: calendar.currentDate,
  }),
});
