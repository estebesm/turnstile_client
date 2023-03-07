import { defineStore } from "pinia";
import { fetchWrapper } from "@/helpers/fetch";
import { notify } from "@kyvg/vue3-notification";
import { calendar } from "@/helpers/calendar";

const baseUrl = "http://192.168.43.191:8000/api";

export const useCardsStore = defineStore({
  id: "cards",
  state: () => ({
    loading: false,
    cards: [],
    selectedDate: calendar.currentDate,
  }),
  actions: {
    async getCards() {
      this.loading = true;
      return fetchWrapper
        .get(`${baseUrl}/cards/`)
        .then((data) => {
          console.log(data);
          this.cards = data;
        })
        .catch((error) => {
          notify({
            title: "Ошибка",
            text: "Проверьте интернет соединение",
            type: "error",
          });
        })
        .finally(() => {
          this.loading = false;
        });
    },
    async createCard(body) {
      return fetchWrapper
        .post(`${baseUrl}/cards/`, {
          ...body,
        })
        .then((data) => {
          this.cards.push(data);
        })
        .catch((error) => {
          notify({
            title: "Error",
            text: error,
            type: "error",
          });
        });
    },
  },
});
