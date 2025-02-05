import axios from "axios";

const quranApi = axios.create({
  baseURL: "https://quranapi.pages.dev/api/",
})
const translateApi = axios.create({
  baseURL: "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/info.json",
});

quranApi.interceptors.request.use((config) => {
  config.headers["Accept-Language"] = "tr";
  return config;
});
translateApi.interceptors.request.use((config) => {
  config.headers["Accept-Language"] = "tr";
  return config;
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(
      "An issue was encountered while making the API request : ",
      error
    );
  }
);
export default {quranApi, translateApi};
