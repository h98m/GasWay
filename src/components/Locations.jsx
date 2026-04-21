import React from 'react';
import { st } from './Styles';

const maps = {
  main: "https://maps.apple/p/~Tf~pUBub31jwP",
  annex: "https://maps.apple/p/vwG8pL-ITs8q7p", 
  workshops: "https://maps.apple/p/bqmUo~8n.5D2Dc"
};

export default function Locations({ setView }) {
  return (
    <div style={st.page}>
      <button onClick={() => setView('home')} style={st.floatingBackBtn}>← العودة للرئيسية</button>
      <h2 style={st.glitchTitle}>مواقع الأقسام والورش</h2>
      <div style={st.locationsGrid}>
        {[
          { name: 'مبنى الكلية الرئيسي', desc: 'شارع الصناعة - العمادة', icon: '🏛️', link: maps.main, color: '#1c3d6a' },
          { name: 'مبنى الملحق / الأقسام', desc: 'بناية الأقسام الهندسية', icon: '🏢', link: maps.annex, color: '#2b5691' },
          { name: 'المعامل والورش المركزية', desc: 'منطقة الورش التدريبية', icon: '🛠️', link: maps.workshops, color: '#5d91ba' }
        ].map((loc, i) => (
          <div key={i} style={st.locationCard} onClick={() => window.open(loc.link, '_blank')}>
            <div style={st.locIconWrapper}>{loc.icon}</div>
            <div style={st.locTextWrapper}>
              <h3 style={{...st.locName, color: loc.color}}>{loc.name}</h3>
              <p style={st.locDesc}>{loc.desc}</p>
            </div>
            <div style={st.mapBadge}>عرض الخريطة ←</div>
          </div>
        ))}
      </div>
    </div>
  );
}