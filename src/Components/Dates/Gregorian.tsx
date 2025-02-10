import React from 'react';

const Gregorian = () => {
  const turkishMonths = [
    "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
    "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
  ];

  const gregDate = new Date();
  const gregMonth = gregDate.getMonth(); 
  const gregDay = gregDate.getDate(); 
  const gregYear = gregDate.getFullYear(); 

  return (
    <div>
      <small>{gregDay} {turkishMonths[gregMonth]} {gregYear}</small>
    </div>
  );
};

export default Gregorian;
