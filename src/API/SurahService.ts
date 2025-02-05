import axiosInterceptors from "../utils/axiosInterceptors";
import { SurahData } from "./SurahModel";

class SurahService {
    getAllSurah(){
        return axiosInterceptors.get<SurahData[], any>("surah.json");
    }
    getAnySurah(){
        return axiosInterceptors.get<SurahData, any>("${surahId}.json");
    }
}

export default new SurahService();