import { hadithApi } from "../utils/axiosInstance";
import HadithData from "./HadithAPI";


class HadithService {
  getAllHadith() {
    return hadithApi.get<HadithData>("tur-bukhari.json");
  }
}
export default new HadithService();
