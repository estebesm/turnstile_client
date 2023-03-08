import { defineStore } from "pinia";
import { fetchWrapper } from "@/helpers/fetch";
import { notify } from "@kyvg/vue3-notification";

const baseUrl = "http://baha996.pythonanywhere.com/api";

export const useCommonStore = defineStore({
  id: "common",
  state: () => ({
    loading: false,
    card_types: [],
  }),
  actions: {
    async getCardTypes() {
      return fetchWrapper
        .get(`${baseUrl}/card-types/`)
        .then((data) => {
          this.card_types = data;
        })
        .catch((error) => {
          notify({
            title: "Error",
            text: error,
            type: "error",
          });
        });
    },
    async updateCardType(card_type) {
      return fetchWrapper
        .put(`${baseUrl}/card-types/${card_type.id}/`, card_type)
        .then((res) => {
          this.card_types = this.card_types.map((item) =>
            item.id === res.id ? res : item
          );
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
