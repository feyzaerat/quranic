import { prayApi } from "../utils/axiosInstance";
import { PrayResponse } from "./PrayModel";

class PrayService {
  getAllPray(city: string) {
    return prayApi.get<PrayResponse>(`all?data.city=${city}`);
  }
}
export default new PrayService();
