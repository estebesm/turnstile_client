import { defineStore } from "pinia";
import { fetchWrapper } from "@/helpers/fetch";
import { notify } from "@kyvg/vue3-notification";

const baseUrl = "https://baha996.pythonanywhere.com/api";

export const useCardTypesStore = defineStore({
  id: "cardTypes",
  state: () => ({
    loading: false,
    card_types: [],
  }),
  actions: {
    async getCardTypes() {
      this.loading = true;
      return fetchWrapper
        .get(`${baseUrl}/card-types/`)
        .then((res) => {
          this.card_types = res;
          return res;
        })
        .catch((error) => {
          notify({
            title: "Error",
            text: error,
            type: "error",
          });
        })
        .finally(() => {
          this.loading = false;
        });
    },
    async updateCardType(card_type) {
      return fetchWrapper
        .put(`${baseUrl}/card-types/${card_type.id}/`, card_type)
        .then((res) => {
          this.card_types = this.card_types.map((item) =>
            item.id === res.id ? res : item
          );
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
    async createCardType(card_type) {
      return fetchWrapper
        .post(`${baseUrl}/card-types/`, card_type)
        .then((res) => {
          this.card_types.push(res);
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
    async deleteCardType(id) {
      return fetchWrapper
        .delete(`${baseUrl}/card-types/${id}/`)
        .then((res) => {
          this.card_types = this.card_types.filter((item) => item.id !== id);
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
