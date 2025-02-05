import axios from "axios";

const axiosInterceptors = axios.create({
  baseURL: "https://quranapi.pages.dev/api/",
});

axiosInterceptors.interceptors.request.use((config) => {
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
export default axiosInterceptors;
