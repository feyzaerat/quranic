
declare module "hijri-date" {
    class HijriDate {
      constructor(date?: Date | string);
      getMonth(): number;
      getDate(): number;
      getFullYear(): number;
    }
    export default HijriDate;
  }
  