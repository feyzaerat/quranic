import { quranApi } from "../utils/axiosInstance";
import { SurahData } from "./SurahModel";
import TurkishNameAPI from "./TurkishNameAPI";

class SurahService {
  getAllSurah() {
    return quranApi.get<SurahData[]>("surah.json").then((response) => {
      const surahsWithTurkishNames = response.data.map((surah, index) => {
        const turkishName = TurkishNameAPI[index];
        return {
          ...surah,
          surahNameTurkish: turkishName ? turkishName.turkishName : "Çeviri Bulunamadı",
        };
      });

      return surahsWithTurkishNames;
    });
  }

  async getAnySurah(surahId: number): Promise<SurahData> {
    const response = await quranApi.get<SurahData>(`${surahId}.json`);
    const data = response.data;

    const turkishNameData = TurkishNameAPI.find(
      (surah) => surah.id === surahId
    );

    return {
      ...data,
      surahNameTurkish: turkishNameData ? turkishNameData.turkishName : "Çeviri Bulunamadı",
    };
  }
}

export default new SurahService();
