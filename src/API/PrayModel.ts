export interface PrayResult {
  saat: string;
  vakit: string;
}

export interface PrayResponse {
  success: boolean;
  result: PrayResult[];
}

const PrayModel = {
  PrayResponse: {} as PrayResponse,
  PrayResult: {} as PrayResult,
};
export default PrayModel;
