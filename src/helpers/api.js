import { fetchWrapper } from "@/helpers/fetch";

const baseUrl = "http://192.168.43.191:8000/api";

export function getCardTypes() {
  return fetchWrapper
    .get(`${baseUrl}/card-types/`)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      notify({
        title: "Error",
        text: error,
        type: "error",
      });
    });
}
