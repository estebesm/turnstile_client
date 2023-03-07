//import { useUserStore } from "@/stores/user";

export const fetchWrapper = {
  login: request("OAuth"),
  get: request("GET"),
  post: request("POST"),
  put: request("PUT"),
  delete: request("DELETE"),
};

function request(method) {
  return async (url, body) => {
    const requestOptions = {
      method,
      headers: authHeader(url),
    };

    if (body) {
      if (method == "OAuth") {
        let data = new FormData();

        Object.keys(body).forEach((key) => data.append(key, body[key]));

        requestOptions.body = data;
        requestOptions.method = "POST";
      } else {
        requestOptions.headers["Content-Type"] = "application/json";
        requestOptions.body = JSON.stringify(body);
      }
    }

    const response = await fetch(url, requestOptions);
    return handleResponse(response);
  };
}

function authHeader(url) {
  //const { access_token } = useUserStore();
  const access_token = "";

  const isLoggedIn = !!access_token;
  //const isApiUrl = url.startsWith(import.meta.env.VITE_API_URL);
  const isApiUrl = true;

  if (isLoggedIn && isApiUrl) {
    return { Authorization: `Bearer ${access_token}` };
  } else {
    return {};
  }
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);

    // if (!response.ok) {
    //   const { user, logout } = useUserStore();

    //   if ([401, 403].includes(response.status) && user) {
    //     logout();
    //   }

    //   const error = (data && data.message) || response.statusText;

    //   return Promise.reject(error);
    // }

    return data;
  });
}
