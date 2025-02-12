export default interface HadithData {
  metadata: {
    name: string;
    sections: string[];
    section_details: HadithSectionData[];
    hadiths: HadithDetailData[];
  },
  hadiths: {
    hadithnumber: number;
    text: string;
    reference: HadithReferenceData[];
  };
}

export interface HadithSectionData {
  hadithnumber_first: number;
  hadithnumber_last: number;
}
export interface HadithDetailData {
  hadithnumber: number;
  text: string;
  reference: HadithReferenceData[];
}
export interface HadithReferenceData {
  book: number;
  hadith: number;
}
