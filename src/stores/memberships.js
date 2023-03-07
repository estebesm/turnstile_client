import { defineStore } from "pinia";
import { fetchWrapper } from "@/helpers/fetch";
import { notify } from "@kyvg/vue3-notification";

const baseUrl = "http://192.168.43.191:8000/api";

export const useMembershipsStore = defineStore({
  id: "memberships",
  state: () => ({
    loading: false,
    memberships: [],
  }),
  actions: {
    async getMemberships() {
      this.loading = true;
      return fetchWrapper
        .get(`${baseUrl}/cards/`)
        .then((data) => {
          console.log(data);
          this.memberships = data;
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
    async createCard(body) {
      return fetchWrapper
        .post(`${baseUrl}/cards/`, {
          ...body,
        })
        .then((data) => {
          this.memberships.push(data);
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
