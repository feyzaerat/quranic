
import { quranApi } from "../utils/axiosInstance";
import { SurahData } from "./SurahModel";

class SurahService {
  getAllSurah() {
    return quranApi.get<SurahData[]>("surah.json");
  }

  getAnySurah(surahId: number) {
    return quranApi.get<SurahData>(`${surahId}.json`);
  }
}

export default new SurahService();
