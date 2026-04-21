export const universityData = {
  schedule: [
    { day: "الأحد", time: "8:30 - 11:30", subject: "Calculus II", lecturer: "أ.م.د. مؤيد محمد",  room: "NGE2", floor: 0 },
    { day: "الأحد", time: "11:30 - 2:30", subject: "Engineering Mechanics and Strength of Material", lecturer: "أ.م.د. رعد",  room: "NGE2", floor: 0 },
    { day: "الأحد", time: "2:30 - 3:30", subject: "Engineering Mechanics and Strength of Material (Tutorial)", lecturer: "م.م. اسراء محمود",  room: "NGE2", floor: 0 },
    { day: "الاثنين", time: "8:30 - 10:30", subject: "Computer", lecturer: "أ.م.د. سلام عبد النبي",  room: "NGE2", floor: 0 },
    { day: "الاثنين", time: "10:30 - 12:30", subject: "English Language I", lecturer: "م.م. ازهار درويش",  room: "NGE2", floor: 0 },
    { day: "الاثنين", time: "12:30 - 2:30", subject: "Calculus II (Tutorial)", lecturer: "م.د. سرى علي مجيد", room: "NGE2", floor: 0 },
    { day: "الثلاثاء", time: "8:30 - 2:30", subject: "معامل", lecturer: "كادر المعامل", room: "معامل", floor: 0 },
    { day: "الأربعاء", time: "8:30 - 11:30", subject: "Engineering Practices", lecturer: "أ.م.د. سلام عبد النبي + أ.م. محمد غازي", room: "NGE2", floor: 0 },
    { day: "الأربعاء", time: "11:30 - 2:30", subject: "General Geology II", lecturer: "أ.م.د. ميساء علي", room: "NGE2", floor: 0 },
   { day: "الخميس", time: "8:30 - 10:30", subject: "Eng. Computer Lab ", lecturer: "كادر مختبر الحاسوب", room: "مختبر حاسوب", floor: 0 },
    
    // --- المختبرات الجديدة حسب طلبك ---
   { day: "الخميس", time: "12:30 - 2:30", subject: "مختبر جيو (Geology Lab)", lecturer: "كادر جيولوجيا",  room:"مختبر الجيولوجيا", floor: 0 },
    { day: "الخميس", time: "10:30 - 12:30", subject: "Eng. Mechanics Lab ", lecturer: "كادر مختبر ميكانيك", room: "مختبر ميكانيك", floor: 4 },

    // أضف هذا السطر داخل المصفوفة في ملف universityData.js
{ 
  day: "يومي", 
  subject: "رئاسة القسم", 
  lecturer: "رئيس القسم", 
  room: "رئاسة القسم", 
  floor: 1, 
  isHidden: true 
},
    // بيانات مخفية للبحث فقط
    { subject: "المالية", lecturer: "الحسابات", room: "الطابق الأول", floor: 1, isHidden: true },
    { day: "يومي", subject: "شعبة التسجيل", lecturer: "إدارة التسجيل",  room: "الأرضي - يسار", floor: 0, isHidden: true },
  ]
};