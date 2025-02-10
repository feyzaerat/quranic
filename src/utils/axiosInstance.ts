import axios from "axios";

const quranApi = axios.create({
  baseURL: "https://quranapi.pages.dev/api/",
});
const translateApi = axios.create({
  baseURL: "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/",
});
const prayApi = axios.create({
  baseURL: "https://api.collectapi.com/pray/",
});

[quranApi, translateApi, prayApi].forEach((api) => {
  api.interceptors.request.use((config) => {
    config.headers["Accept-Language"] = "tr";
    return config;
  });
});

prayApi.interceptors.request.use((config) => {
  config.headers["Authorization"] =
    "apikey 73eSVsP6UzBRM5OB2S7PS7:4NRYIgHdOLsEDUIAzta1jx";
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
export { quranApi, translateApi, prayApi };
