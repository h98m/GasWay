import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, Html } from '@react-three/drei';
import * as THREE from 'three';
import NGE2Building from './NGE2Building'; 
import { universityData } from './universityData'; // الخطأ 1: أضفنا هذا السطر

const labelStyle = { 
  background: 'rgba(28, 61, 106, 0.95)',
  color: 'white', 
  padding: '10px 20px', 
  borderRadius: '30px', 
  fontSize: '18px', 
  fontWeight: 'bold', 
  border: '2px solid white',
  whiteSpace: 'nowrap',
  boxShadow: '0 6px 15px rgba(0,0,0,0.3)',
  pointerEvents: 'none',
  textAlign: 'center'
};
const BuildingEntrance = () => (
  <group position={[0, -0.6, 1.5]}> 
    <mesh position={[0, 0.45, 0.05]}>
      <boxGeometry args={[1.2, 0.9, 0.1]} />
      <meshStandardMaterial color="#1c3d6a" metalness={0.8} />
    </mesh>
    <mesh position={[0, 0.45, 0.06]}>
      <boxGeometry args={[1.1, 0.85, 0.02]} />
      <meshStandardMaterial color="#5d91ba" transparent opacity={0.3} />
    </mesh>
    <mesh position={[0, 0.9, 0.3]}>
      <boxGeometry args={[2, 0.05, 0.8]} />
      <meshStandardMaterial color="#1c3d6a" />
    </mesh>
    <pointLight position={[0, 0.8, 0.4]} intensity={2} color="#00ffff" distance={3} />
  </group>
);
const SecondFloorDetails = ({ activeSearch }) => {
  const cellArgs = [1.4, 1.0, 1.4]; 
  // تظهر إذا كان البحث فارغ أو يتضمن كلمة "مالية"
  const showFinance = !activeSearch || activeSearch.includes("مالية");

  return (
    <group position={[0, -0.1, 0]}>
      {showFinance && (
        /* هنا عكسنا الموقع: وضعناها في جهة اليسار [0.75] بدل اليمين */
        <group position={[0.75, 0, 0.75]}>
          <mesh>
            <boxGeometry args={cellArgs} />
            <meshStandardMaterial color="#1e4d2b" transparent opacity={0.8} /> 
          </mesh>
          <mesh>
            <boxGeometry args={cellArgs} />
            <meshStandardMaterial color="#1e4d2b" wireframe opacity={0.9} />
          </mesh>
          <Html distanceFactor={6} position={[0, 0.8, 0]} center>
            <div style={labelStyle}>شعبة المالية</div>
          </Html>
        </group>
      )}
    </group>
  );
};
// الطابق الأرضي: تسجيل ومختبر حاسوب
const GroundFloorDetails = ({ activeSearch }) => {
  const cellArgs = [1.4, 1, 1.4]; 
  
  // يظهر فقط إذا كان البحث فارغاً أو يحتوي كلمة "تسجيل" حصراً
  const showRegistration = activeSearch === "" || activeSearch.includes("تسجيل");
  
  // التعديل هنا: يظهر فقط إذا كان البحث فارغاً أو يحتوي كلمة "حاسوب" أو "Computer" 
  // (ابتعدنا عن كلمة "مختبر" لأنها موجودة في كل المختبرات)
  const showLab = activeSearch === "" || activeSearch.includes("حاسوب") || activeSearch.includes("Computer");

  return (
    <group>
      {showRegistration && (
        <group position={[-0.75, 0, 0.75]}>
          <mesh><boxGeometry args={cellArgs} /><meshStandardMaterial color="#05162e" transparent opacity={0.8} /></mesh>
          <mesh><boxGeometry args={cellArgs} /><meshStandardMaterial color="#0a1d37" wireframe opacity={0.3} /></mesh>
          <Html distanceFactor={8} position={[0, 0.8, 0]} center><div style={labelStyle}>شعبة التسجيل</div></Html>
        </group>
      )}
      {showLab && (
        <group position={[0.75, 0, -0.75]}>
          <mesh><boxGeometry args={cellArgs} /><meshStandardMaterial color="#00004d" transparent opacity={0.8} /></mesh>
          <Html distanceFactor={8} position={[0, 0.8, 0]} center><div style={labelStyle}>مختبر الحاسوب</div></Html>
        </group>
      )}
    </group>
  );
};
// الطابق الثالث - مختبر جيو
// الطابق الثالث - مختبر جيو (جهة اليمين)
const ThirdFloorDetails = ({ activeSearch }) => {
  const cellArgs = [1.4, 1.0, 1.4]; 
  const showGeo = activeSearch === "" || (activeSearch && (activeSearch.includes("جيو") || activeSearch.includes("Geology")));

  return (
    <group position={[0, -0.1, 0]}>
      {showGeo && (
        /* غيرنا الـ X إلى 0.75 ليصبح على اليمين */
        <group position={[0.75, 0, -0.75]}>
          <mesh>
            <boxGeometry args={cellArgs} />
            <meshStandardMaterial color="#8b4513" transparent opacity={0.8} /> 
          </mesh>
          <mesh>
            <boxGeometry args={cellArgs} />
            <meshStandardMaterial color="#8b4513" wireframe opacity={0.9} />
          </mesh>
          <Html distanceFactor={6} position={[0, 0.8, 0]} center>
            <div style={labelStyle}>مختبر الجيولوجيا</div>
          </Html>
        </group>
      )}
    </group>
  );
};

// الطابق الرابع - مختبر المقاومة
const FourthFloorDetails = ({ activeSearch }) => {
  const cellArgs = [1.4, 1.0, 1.4]; 
  const showStrength = !activeSearch || activeSearch.includes("مقاومة") || activeSearch.includes("Mechanics");

  return (
    <group position={[0, -0.1, 0]}>
      {showStrength && (
        /* موقعه بالخلف جهة اليسار */
        <group position={[0.75, 0, -0.75]}>
          <mesh>
            <boxGeometry args={cellArgs} />
            <meshStandardMaterial color="#ff4500" transparent opacity={0.8} /> {/* لون برتقالي ناري للمقاومة */}
          </mesh>
          <mesh>
            <boxGeometry args={cellArgs} />
            <meshStandardMaterial color="#ff4500" wireframe opacity={0.9} />
          </mesh>
          <Html distanceFactor={6} position={[0, 0.8, 0]} center><div style={labelStyle}>مختبر المقاومة</div></Html>
        </group>
      )}
    </group>
  );
};
const BuildingFloor = ({ position, floorHeight, floorIndex, highlightedFloor, activeSearch }) => {
  const isHighlighted = highlightedFloor === floorIndex;
  const isDetailed = floorIndex === 0;
  // داخل مكون BuildingFloor ابحث عن شرط floorIndex === 0 وضيف تحته هذا:

  return (
    <group position={position}>
      <mesh>
        <boxGeometry args={[3, floorHeight, 3]} />
        <meshStandardMaterial 
          color={isHighlighted ? "#2b00ff" : "#5d91ba"} 
          metalness={0.8} 
          transparent 
          opacity={isHighlighted ? 0.9 : (isDetailed ? 0.2 : 0.5)} 
          emissive={isHighlighted ? "#00e5ff" : "#000"} 
          emissiveIntensity={isHighlighted ? 2 : 0} 
        />
      </mesh>
      {/* سقف الطابق */}
      <mesh position={[0, floorHeight / 2, 0]}>
        <boxGeometry args={[3.2, 0.08, 3.2]} />
        <meshStandardMaterial color="white" />
      </mesh>
      // داخل مكون BuildingFloor ابحث عن شرط floorIndex === 0 وضيف تحته هذا:
      {floorIndex === 1 && (
        <SecondFloorDetails activeSearch={activeSearch} />
      )}
      {floorIndex === 2 && (
  <ThirdFloorDetails activeSearch={activeSearch} />
)}

{floorIndex === 4 && (
  <FourthFloorDetails activeSearch={activeSearch} />
)}
      {floorIndex === 0 && (
        <>
          <GroundFloorDetails activeSearch={activeSearch} />
          <BuildingEntrance />
        </>
      )}
    </group>
  );
};

export default function Building({ highlightedFloor, activeSearch }) {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  React.useEffect(() => {
    if (activeSearch) {
      const query = activeSearch.toLowerCase().trim();
      const keywords = ["معامل", "كادر المعامل", "ورش", "workshop"];
      
      // إذا كانت كلمة البحث موجودة في القائمة، افتح الرابط
      if (keywords.some(key => query.includes(key))) {
        window.open("https://maps.apple/p/bqmUo~8n.5D2Dc", "_blank");
      }
    }
  }, [activeSearch]);
  const isNGE2Target = activeSearch && universityData.schedule.some(item => {
    const query = activeSearch.toLowerCase().trim();
    const isMatch = item.subject.toLowerCase().includes(query) || 
                    item.lecturer.toLowerCase().includes(query) || 
                    item.room.toLowerCase().includes(query);
    
    // التعديل هنا: حول إذا كانت الغرفة NGE2 "أو" إذا كان الموضوع هو رئاسة القسم
    return isMatch && (item.room === "NGE2" || item.subject.includes("رئاسة القسم"));
  });

  if (isNGE2Target) {
    return <NGE2Building activeSearch={activeSearch} />;
  }

  return (
    <div style={{ width: '100%', height: '100%', minHeight: '600px' }}>
      <Canvas 
        // 1. عدلنا الـ fov من 28 إلى 35 حتى نبتعد شوية ونشوف البناية كاملة بالحاسبة
        camera={{ position: [8, 6, 12], fov: isMobile ? 42 : 35 }} 
      >
        <ambientLight intensity={1.5} />
        <Suspense fallback={null}>
          <Environment preset="city" />
          
          {/* 2. رفعنا الـ Y إلى -1.5 (بدل -3.2) حتى تصعد البناية وتتوسط المربع */}
          <group position={[0, -1.5, 0]}> 
            {[0, 1, 2, 3, 4].map((f) => (
              <BuildingFloor 
                key={f} 
                floorIndex={f} 
                position={[0, f * 1.25, 0]} 
                floorHeight={1.2} 
                highlightedFloor={highlightedFloor} 
                activeSearch={activeSearch} 
              />
            ))}
            
            <mesh position={[0, -0.65, 0]}>
              <boxGeometry args={[12, 0.15, 12]} />
              <meshStandardMaterial color="#cbd5e1" />
            </mesh>
          </group>
        </Suspense>

        <OrbitControls 
          makeDefault 
          minPolarAngle={Math.PI / 4} 
          maxPolarAngle={Math.PI / 1.8} 
        />
        
        {/* 3. رفعنا الظل لمستوى الأرضية الجديد -2.1 */}
        <ContactShadows position={[0, -2.1, 0]} opacity={0.5} scale={20} blur={2.5} />
      </Canvas>
    </div>
  );
}