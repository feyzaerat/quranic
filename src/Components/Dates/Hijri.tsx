import React from "react";
import HijriDate from "hijri-date";

const turkishMonthsHijri = [
  "Muharrem",
  "Safar",
  "Rebiülevvel",
  "Rebiülahir",
  "Cemaziyelahir",
  "Cemaziyelevvel",
  "Recep",
  "Şaban",
  "Ramazan",
  "Şevval",
  "Dhulkaide",
  "Dhulhijje",
];
const Hijri = () => {
  const hijri = new HijriDate();
  const hijriMonth = hijri.getMonth();
  const hijriDay = hijri.getDate();
  const hijriYear = hijri.getFullYear();
 
  return (
    <div>
      <small>
        {hijriDay} {turkishMonthsHijri[hijriMonth - 1]}
        {hijriYear}
      </small>
    </div>
  );
};

export default Hijri;
