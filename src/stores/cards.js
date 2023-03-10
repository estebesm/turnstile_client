import { defineStore } from "pinia";
import { fetchWrapper } from "@/helpers/fetch";
import { notify } from "@kyvg/vue3-notification";
import { calendar } from "@/helpers/calendar";

const baseUrl = "https://baha996.pythonanywhere.com/api";

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
        .then((res) => {
          this.cards = res;
          return res;
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
        .then((res) => {
          this.cards.push(res);
          return res;
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
