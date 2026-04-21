import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, Html, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

// بيانات جدول الحصص (universityData)
const universityData = {
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
   { day: "الخميس", time: "12:30 - 2:30", subject: "مختبر جيو (Geology Lab)", lecturer: "كادر جيولوجيا",  room: "الطابق الثاني", floor: 0 },
           // { day: "الخميس", time: "10:30 - 12:30", subject: "Eng. Mechanics Lab ", lecturer: "كادر مختبر ميكانيك", room: "مختبر ميكانيك", floor: 4 },

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

const labelStyle = { 
  background: 'rgba(28, 61, 106, 0.95)',
  color: 'white', 
  padding: '10px 22px', 
  borderRadius: '30px', 
  fontSize: '18px', 
  fontWeight: 'bold', 
  border: '2px solid white',
  whiteSpace: 'nowrap',
  boxShadow: '0 8px 25px rgba(0,0,0,0.5)',
  textAlign: 'center',
  pointerEvents: 'none'
};

// --- مكون الغرفة 3D (Smart Room) ---
const SmartGlassRoom = ({ position, args, color, label, isHighlighted }) => {
  return (
    <group position={position}>
      {/* 1. المربع الأساسي - جعلناه أكثر وضوحاً */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={args} />
        <meshStandardMaterial 
          color={isHighlighted ? color : "#87ceeb"} 
          transparent={true}
          // رفعنا الشفافية لكي يظهر الجسم من كل الزوايا
          opacity={isHighlighted ? 0.9 : 0.4} 
          metalness={0.5}
          roughness={0.2}
          // إضافة "side" تجعل المادة تظهر من الداخل والخارج
          side={THREE.DoubleSide} 
        />
      </mesh>

      {/* 2. إضافة حواف هندسية (Edges) - هذه تضمن ظهوره من كل الاتجاهات حتى لو كان شفافاً */}
      <mesh>
        <boxGeometry args={args} />
        <meshBasicMaterial 
          color={isHighlighted ? "#ffffff" : color} 
          wireframe={true} 
          transparent={true} 
          opacity={0.3} 
        />
      </mesh>

      {/* 3. إضاءة داخلية صغيرة (PointLight) تجعل المربع يضيء من الداخل */}
      {isHighlighted && (
        <pointLight position={[0, 0, 0]} intensity={2} color={color} distance={5} />
      )}

      {isHighlighted && label && (
        <Html distanceFactor={10} position={[0, args[1]/2 + 0.5, 0]} center>
          <div style={labelStyle}>{label}</div>
        </Html>
      )}
    </group>
  );
};
// --- المدخل المضيء الفخم (Portal) ---
const EntrancePortal = ({ position }) => (
  <group position={position}> 
    <mesh position={[0, 0.45, 0.05]}>
      <boxGeometry args={[2, 0.9, 0.1]} />
      <meshStandardMaterial color="#1c3d6a" metalness={0.9} />
    </mesh>
    <mesh position={[0, 0.9, 0.3]}>
      <boxGeometry args={[2.5, 0.05, 0.8]} />
      <meshStandardMaterial color="#1c3d6a" />
    </mesh>
    <pointLight position={[0, 0.6, 0.8]} intensity={3} color="#00ffff" distance={5} />
  </group>
);

const LBuildingLogic = ({ activeSearch }) => {
  const query = activeSearch?.toLowerCase().trim() || "";

  // 1. منطق البحث عن الرئاسة
  const isHead = query !== "" && (query.includes("رئاسة") || query.includes("رئيس") || query.includes("head"));

  // 2. منطق البحث عن قاعة NGE2
  const isNGE2 = query !== "" && (
    query.includes("nge2") || 
    universityData.schedule.some(item => 
      item.room === "NGE2" && (item.subject.toLowerCase().includes(query) || item.lecturer.toLowerCase().includes(query))
    )
  );

  return (
    <group position={[-5, -1, 2]}>
      
      {/* --- الطابق الأرضي --- */}
      <group>
        {/* هيكل زجاجي حرف L */}
        <mesh position={[5, 0, 0]}><boxGeometry args={[10, 1.5, 3]} /><meshPhysicalMaterial transparent opacity={0.08} color="#5d91ba" /></mesh>
        <mesh position={[8.5, 0, -4]}><boxGeometry args={[3, 1.5, 5]} /><meshPhysicalMaterial transparent opacity={0.08} color="#5d91ba" /></mesh>

        {/* قاعة NGE2 - مكعب 3D حقيقي */}
        {(query === "" || isNGE2) && !isHead && (
        <SmartGlassRoom 
          position={[3, 0, 0]} 
          args={[2.8, 1.45, 3.1]} 
          color="#1d4ed8" 
          label="قاعة NGE2" 
          isHighlighted={isNGE2} 
        />
      )}
        {/* المدخل في نهاية الـ L (الزلمومة) */}
        <EntrancePortal position={[8.5, -0.6, -6.5]} />
      </group>

      {/* --- الطبقة الوسطية (Slab) - شفافة ونقية --- */}
      <group position={[0, 0.76, 0]}> 
        <mesh position={[5, 0, -0.5]}><boxGeometry args={[11, 0.02, 4]} /><meshPhysicalMaterial transparent opacity={0.1} transmission={1} /></mesh>
        <mesh position={[8.5, 0, -3.5]}><boxGeometry args={[4, 0.02, 5]} /><meshPhysicalMaterial transparent opacity={0.1} transmission={1} /></mesh>
      </group>

      {/* --- الطابق العلوي --- */}
      <group position={[0, 1.6, 0]}>
        {/* هيكل زجاجي علوي */}
        <mesh position={[5, 0, 0]}><boxGeometry args={[10, 1.5, 3]} /><meshPhysicalMaterial transparent opacity={0.08} color="#5d91ba" /></mesh>

        {/* رئاسة القسم */}
        {(query === "" || isHead) && !isNGE2 && (
          <SmartGlassRoom 
            position={[3, 0, 0]} 
            args={[2.8, 1.45, 3.1]} 
            color="#ef4444" 
            label="رئاسة القسم" 
            isHighlighted={isHead} 
          />
        )}
      </group>
    </group>
  );
};

export default function NGE2FinalDesign({ activeSearch }) {
  return (
    <div style={{ width: '100%', height: '100%', minHeight: '750px', background: '#f8fafc' }}>
      <Canvas 
        shadows 
        // 1. تقليل البعد البؤري (fov) ليعطي عمقاً أكبر، وتعديل مكان الكاميرا ليكون متوازناً
        camera={{ position: [15, 12, 15], fov: 45 }} 
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 20, 10]} intensity={1.5} castShadow />
        
        <Suspense fallback={null}>
          <Environment preset="city" />
          
          {/* 2. تحريك المبنى ليكون في منتصف المشهد تماماً (0,0,0) لتسهيل الدوران حوله */}
          <group position={[0, 0, 0]}>
             <LBuildingLogic activeSearch={activeSearch} />
          </group>
          
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.8, 0]} receiveShadow>
            <planeGeometry args={[100, 100]} />
            <meshPhysicalMaterial color="#ffffff" reflectivity={0.5} roughness={0.2} transparent opacity={0.4} />
          </mesh>
        </Suspense>

        {/* 3. جعل الهدف (target) هو نقطة الصفر ليدور الماوس حول المبنى بالكامل */}
        <OrbitControls 
          makeDefault 
          target={[0, 0, 0]} 
          enableDamping={true} // حركة ناعمة
          maxPolarAngle={Math.PI / 2} // يمنع النزول تحت الأرض
        />
        <ContactShadows position={[0, -1.79, 0]} opacity={0.4} scale={50} blur={3} />
      </Canvas>
    </div>
  );
}