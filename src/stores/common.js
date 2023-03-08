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
  },
});
