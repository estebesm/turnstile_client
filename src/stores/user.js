import { defineStore } from "pinia";
import { fetchWrapper } from "@/helpers/fetch";
import { notify } from "@kyvg/vue3-notification";
import router from "@/router";

const baseUrl = `${import.meta.env.VITE_API_URL}`;

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    loading: false,
    user: JSON.parse(localStorage.getItem("user")),
    profile: {},
    has_profile: false,
    access_token: localStorage.getItem("access_token"),
    refresh_token: localStorage.getItem("refresh_token"),
  }),
  actions: {
    async login(username, password) {
      this.loading = true;

      return fetchWrapper
        .login(`${baseUrl}/streamers/login`, {
          username,
          password,
        })
        .then((data) => {
          let { access_token, refresh_token } = data;

          this.access_token = access_token;
          this.refresh_token = refresh_token;

          localStorage.setItem("access_token", this.access_token);
          localStorage.setItem("refresh_token", this.refresh_token);

          router.push("/profile");

          this.loading = false;
        })
        .catch((error) =>
          notify({
            title: "Error",
            text: error,
            type: "error",
          })
        );
    },
    logout() {
      this.access_token = null;
      this.refresh_token = null;

      localStorage.removeItem("user");
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");

      router.push("/login");
    },
    async fetchUser() {
      this.loading = true;

      return fetchWrapper
        .post(`${baseUrl}/streamers/me`)
        .then((user) => {
          this.user = user;

          localStorage.setItem("user", JSON.stringify(user));

          this.loading = false;
        })
        .catch((error) =>
          notify({
            title: "Error",
            text: error,
            type: "error",
          })
        );
    },
    async fetchProfile() {
      this.loading = true;

      return fetchWrapper
        .get(`${baseUrl}/streamer_profiles`)
        .then((profile) => {
          if (profile != null) {
            this.has_profile = true;
            this.profile = profile;
          }

          this.loading = false;
        })
        .catch((error) =>
          notify({
            title: "Error",
            text: error,
            type: "error",
          })
        );
    },
    async createUserProfile(data) {
      return fetchWrapper
        .post(`${baseUrl}/streamer_profiles`, data)
        .then((profile) => (this.profile = profile))
        .catch((error) =>
          notify({
            title: "Error",
            text: error,
            type: "error",
          })
        );
    },
    async updateUserProfile(data) {
      return fetchWrapper
        .put(`${baseUrl}/streamer_profiles`, data)
        .then((profile) => (this.profile = profile))
        .catch((error) =>
          notify({
            title: "Error",
            text: error,
            type: "error",
          })
        );
    },
  },
});
