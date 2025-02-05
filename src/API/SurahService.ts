import axiosInterceptors from "../utils/axiosInterceptors";
import { SurahData } from "./SurahModel";

class SurahService {
  getAllSurah() {
    return axiosInterceptors.get<SurahData[]>("surah.json");
  }

  getAnySurah(surahId: number) {
    return axiosInterceptors.get<SurahData>(`${surahId}.json`);
  }
}

export default new SurahService();
