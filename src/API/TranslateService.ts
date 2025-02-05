
import { translateApi } from "../utils/axiosInstance";
import TranslateData from "./TranslateModel";



class TranslateService {
  getAllTranslate() {
    return translateApi.get<TranslateData[]>(`tur-diyanetisleri.json`);
  }

  getAnyJuzTranslate(jusId:number) {
    return translateApi.get<TranslateData>(`tur-diyanetisleri/juzs/${jusId}.json`);
  }

  getAnySurahTranslate(surahId: number) {
    return translateApi.get<TranslateData>(`tur-diyanetisleri/${surahId}.json`);
  }
}

export default new TranslateService();
