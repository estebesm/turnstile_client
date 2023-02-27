import { defineStore } from "pinia";
import { calendar } from "@/helpers/calendar";

export const useCalendarStore = defineStore({
  id: "calendar",
  state: () => ({
    pickerButtonDate: calendar.getToday(),
    selectedDate: calendar.currentDate,
    checkDate: false,
  }),
});
