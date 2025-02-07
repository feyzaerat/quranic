const TurkishNameAPI = [
    { id: 1, turkishName: "Fatiha Sûresi"  , juzNo:[1]},
    { id: 2, turkishName: "Bakara Sûresi"  , juzNo:[1,2,3]},
    { id: 3, turkishName: "Âl-i İmrân Sûresi"  , juzNo:[3,4]},
    { id: 4, turkishName: "Nisa Sûresi"  , juzNo:[4,5,6]},
    { id: 5, turkishName: "Mâide Sûresi"  , juzNo:[6,7]},
    { id: 6, turkishName: "En'âm Sûresi"  , juzNo:[7,8]},
    { id: 7, turkishName: "A'râf Sûresi"  , juzNo:[8,9]},
    { id: 8, turkishName: "Enfâl Sûresi"  , juzNo:[9,10]},
    { id: 9, turkishName: "Tevbe Sûresi"  , juzNo:[10,11]},
    { id: 10, turkishName: "Yûnus Sûresi"  , juzNo:[11]},
    { id: 11, turkishName: "Hûd Sûresi"  , juzNo:[11,12]},
    { id: 12, turkishName: "Yusuf Sûresi"  , juzNo:[12,13]},
    { id: 13, turkishName: "Rad Sûresi"  , juzNo:[13]},
    { id: 14, turkishName: "İbrâhîm Sûresi"  , juzNo:[13]},
    { id: 15, turkishName: "Hicr Sûresi"  , juzNo:[14]},
    { id: 16, turkishName: "Nahl Sûresi"  , juzNo:[14]},
    { id: 17, turkishName: "İsrâ Sûresi"  , juzNo:[15]},
    { id: 18, turkishName: "Kehf Sûresi"  , juzNo:[15,16]},
    { id: 19, turkishName: "Meryem Sûresi"  , juzNo:[16]},
    { id: 20, turkishName: "Tâhâ Sûresi"  , juzNo:[16]},
    { id: 21, turkishName: "Enbiya Sûresi"  , juzNo:[17]},
    { id: 22, turkishName: "Hac Sûresi"  , juzNo:[17]},
    { id: 23, turkishName: "Mü'minûn Sûresi"  , juzNo:[18]},
    { id: 24, turkishName: "Nûr Sûresi"  , juzNo:[18]},
    { id: 25, turkishName: "Furkan Sûresi"  , juzNo:[18,19]},
    { id: 26, turkishName: "Şuarâ Sûresi"  , juzNo:[19]},
    { id: 27, turkishName: "Neml Sûresi"  , juzNo:[19,20]},
    { id: 28, turkishName: "Kasas Sûresi"  , juzNo:[20]},
    { id: 29, turkishName: "Ankebût Sûresi"  , juzNo:[20,21]},
    { id: 30, turkishName: "Rum Sûresi"  , juzNo:[21]},
    { id: 31, turkishName: "Lokman Sûresi"  , juzNo:[21]},
    { id: 32, turkishName: "Secde Sûresi"  , juzNo:[21]},
    { id: 33, turkishName: "Ahzâb Sûresi"  , juzNo:[21,22]},
    { id: 34, turkishName: "Sebe Sûresi"  , juzNo:[22]},
    { id: 35, turkishName: "Fâtır Sûresi"  , juzNo:[22]},
    { id: 36, turkishName: "Yâsin Sûresi"  , juzNo:[22,23]},
    { id: 37, turkishName: "Saffât Sûresi"  , juzNo:[23]},
    { id: 38, turkishName: "Sad Sûresi"  , juzNo:[23]},
    { id: 39, turkishName: "Zümer Sûresi"  , juzNo:[23,24]},
    { id: 40, turkishName: "Mü'min Sûresi"  , juzNo:[24]},
    { id: 41, turkishName: "Fussilet Sûresi"  , juzNo:[24,25]},
    { id: 42, turkishName: "Şura Sûresi"  , juzNo:[25]},
    { id: 43, turkishName: "Zuhruf Sûresi"  , juzNo:[25]},
    { id: 44, turkishName: "Duhan Sûresi"  , juzNo:[25]},
    { id: 45, turkishName: "Câsiyye Sûresi"  , juzNo:[25]},
    { id: 46, turkishName: "Ahkâf Sûresi"  , juzNo:[26]},
    { id: 47, turkishName: "Muhammed Sûresi"  , juzNo:[26]},
    { id: 48, turkishName: "Fetih Sûresi"  , juzNo:[26]},
    { id: 49, turkishName: "Hucurât Sûresi"  , juzNo:[26]},
    { id: 50, turkishName: "Kâf Sûresi"  , juzNo:[26]},
    { id: 51, turkishName: "Zariyat Sûresi"  , juzNo:[26,27]},
    { id: 52, turkishName: "Tûr Sûresi"  , juzNo:[27]},
    { id: 53, turkishName: "Necm Sûresi"  , juzNo:[27]},
    { id: 54, turkishName: "Kamer Sûresi"  , juzNo:[27]},
    { id: 55, turkishName: "Rahmân Sûresi"  , juzNo:[27]},
    { id: 56, turkishName: "Vâkıa Sûresi"  , juzNo:[27]},
    { id: 57, turkishName: "Hadîd Sûresi"  , juzNo:[27]},
    { id: 58, turkishName: "Mücâdele Sûresi"  , juzNo:[28]},
    { id: 59, turkishName: "Haşr Sûresi"  , juzNo:[28]},
    { id: 60, turkishName: "Mümtehine Sûresi"  , juzNo:[28]},
    { id: 61, turkishName: "Saff Sûresi"  , juzNo:[28]},
    { id: 62, turkishName: "Cuma Sûresi"  , juzNo:[28]},
    { id: 63, turkishName: "Münâfikûn Sûresi"  , juzNo:[28]},
    { id: 64, turkishName: "Teğâbun Sûresi"  , juzNo:[28]},
    { id: 65, turkishName: "Talâk Sûresi"  , juzNo:[28]},
    { id: 66, turkishName: "Tahrim Sûresi"  , juzNo:[28]},
    { id: 67, turkishName: "Mûlk Sûresi"  , juzNo:[29]},
    { id: 68, turkishName: "Kalem Sûresi"  , juzNo:[29]},
    { id: 69, turkishName: "Hakka Sûresi"  , juzNo:[29]},
    { id: 70, turkishName: "Me'aric Sûresi"  , juzNo:[29]},
    { id: 71, turkishName: "Nuh Sûresi"  , juzNo:[29]},
    { id: 72, turkishName: "Cin Sûresi"  , juzNo:[29]},
    { id: 73, turkishName: "Müzzemmil Sûresi"  , juzNo:[29]},
    { id: 74, turkishName: "Müdessir Sûresi"  , juzNo:[29]},
    { id: 75, turkishName: "Kıyâmet Sûresi"  , juzNo:[29]},
    { id: 76, turkishName: "İnsan Sûresi"  , juzNo:[29]},
    { id: 77, turkishName: "Murselât Sûresi"  , juzNo:[29]},
    { id: 78, turkishName: "Nebe Sûresi"  , juzNo:[30]},
    { id: 79, turkishName: "Nâzi'at Sûresi"  , juzNo:[30]},
    { id: 80, turkishName: "Abese Sûresi"  , juzNo:[30]},
    { id: 81, turkishName: "Tekvir Sûresi"  , juzNo:[30]},
    { id: 82, turkishName: "İnfitar Sûresi"  , juzNo:[30]},
    { id: 83, turkishName: "Mutaffifin Sûresi"  , juzNo:[30]},
    { id: 84, turkishName: "İnşikâk Sûresi"  , juzNo:[30]},
    { id: 85, turkishName: "Burûc Sûresi"  , juzNo:[30]},
    { id: 86, turkishName: "Târık Sûresi"  , juzNo:[30]},
    { id: 87, turkishName: "A'lâ Sûresi"  , juzNo:[30]},
    { id: 88, turkishName: "Gâşiye Sûresi"  , juzNo:[30]},
    { id: 89, turkishName: "Fecr Sûresi"  , juzNo:[30]},
    { id: 90, turkishName: "Beled Sûresi"  , juzNo:[30]},
    { id: 91, turkishName: "Şems Sûresi"  , juzNo:[30]},
    { id: 92, turkishName: "Leyl Sûresi"  , juzNo:[30]},
    { id: 93, turkishName: "Duhâ Sûresi"  , juzNo:[30]},
    { id: 94, turkishName: "İnşirah Sûresi"  , juzNo:[30]},
    { id: 95, turkishName: "Tîn Sûresi"  , juzNo:[30]},
    { id: 96, turkishName: "Alâk Sûresi"  , juzNo:[30]},
    { id: 97, turkishName: "Kadir Sûresi"  , juzNo:[30]},
    { id: 98, turkishName: "Beyyine Sûresi"  , juzNo:[30]},
    { id: 99, turkishName: "Zilzal Sûresi"  , juzNo:[30]},
    { id: 100, turkishName: "Adiyat Sûresi"  , juzNo:[30]},
    { id: 101, turkishName: "Kâria Sûresi"  , juzNo:[30]},
    { id: 102, turkishName: "Tekasür Sûresi"  , juzNo:[30]},
    { id: 103, turkishName: "Asr Sûresi"  , juzNo:[30]},
    { id: 104, turkishName: "Humeze Sûresi"  , juzNo:[30]},
    { id: 105, turkishName: "Fîl Sûresi"  , juzNo:[30]},
    { id: 106, turkishName: "Kureyş Sûresi"  , juzNo:[30]},
    { id: 107, turkishName: "Ma'un Sûresi"  , juzNo:[30]},
    { id: 108, turkishName: "Kevser Sûresi"  , juzNo:[30]},
    { id: 109, turkishName: "Kâfirûn Sûresi"  , juzNo:[30]},
    { id: 110, turkishName: "Nasr Sûresi"  , juzNo:[30]},
    { id: 111, turkishName: "Tebbet Sûresi"  , juzNo:[30]},
    { id: 112, turkishName: "İhlâs Sûresi"  , juzNo:[30]},
    { id: 113, turkishName: "Felâk Sûresi"  , juzNo:[30]},
    { id: 114, turkishName: "Nâs Sûresi"  , juzNo:[30]}
  ];
  
  export default TurkishNameAPI;
  