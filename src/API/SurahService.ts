import { quranApi } from "../utils/axiosInstance";
import { SurahData } from "./SurahModel";
import TurkishNameAPI from "./TurkishNameAPI";

class SurahService {
  getAllSurah() {
    return quranApi.get<SurahData[]>("surah.json").then((response) => {
      const surahsWithTurkishNames = response.data.map((surah, index) => {
        console.log(surah); 
        const turkishName = TurkishNameAPI[index]; 
        return {
          ...surah,
          surahNameTurkish: turkishName ? turkishName.turkishName : "N/A",
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
      surahNameTurkish: turkishNameData ? turkishNameData.turkishName : "N/A",
    };
  }
}

export default new SurahService();
