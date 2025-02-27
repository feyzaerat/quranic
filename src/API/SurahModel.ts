
export interface SurahAudio {
  reciter: string;
  url: string;
  originalUrl: string;
}

export interface SurahData {
  id: number;
  surahName: string;
  surahNameTurkish: string;
  juzNumbers: number[];
  surahNameArabic: string;
  surahNameArabicLong: string;
  surahNameTranslation: string;
  revelationPlace: string;
  totalAyah: number;
  surahNo: number;
  english: string[];
  arabic1: string[];
  audio: Record<string, SurahAudio>;
}
