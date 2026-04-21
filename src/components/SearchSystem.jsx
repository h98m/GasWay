import React, { useState } from 'react';
import { st } from './Styles';
import Building from './Building';
import { universityData } from './universityData'; // نقطة واحدة فقط

export default function SearchSystem({ setView }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showBuilding, setShowBuilding] = useState(false);
  const [searchParams, setSearchParams] = useState({ floor: null, name: "" });

  // دالة البحث الذكية (رجعتلك منطق الكلمات المفتاحية)
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    if (value.trim().length > 0) {
      // البحث الأساسي في البيانات
      let filtered = universityData.schedule.filter(item => 
        item.subject.toLowerCase().includes(value.toLowerCase()) || 
        item.lecturer.toLowerCase().includes(value.toLowerCase())
      );

      // إضافة خيارات ذكية إذا المستخدم كتب كلمات معينة
      if ("تسجيل شؤون طلبة".includes(value)) {
        filtered.push({ subject: "شعبة التسجيل", floor: 0, lecturer: "شؤون الطلبة" });
      }
      if ("مختبر حاسوب computer lab".includes(value.toLowerCase())) {
        filtered.push({ subject: "Computer Lab", floor: 0, lecturer: "مختبرات القسم" });
      }
      
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const onSelectResult = (item) => {
    setSearchParams({ floor: item.floor, name: item.subject });
    setShowBuilding(true);
    setSuggestions([]);
    setSearchTerm(item.subject);
  };

  // دالة العودة وتصفير البحث
  const handleBack = () => {
    setView('home');
    setShowBuilding(false);
    setSearchTerm("");
  };

  return (
    <div style={st.page}>
      {/* زر العودة الذكي */}
      <button onClick={handleBack} style={st.floatingBackBtn}>
        ← العودة للرئيسية
      </button>
      
      <div style={showBuilding ? st.searchContainerSmall : st.searchContainerFull}>
        <h2 style={st.glitchTitle}>نظام الاستدلال الذكي</h2>
        <p style={st.subTitle}>ابحث عن أي قسم، مختبر، أو تدريسي داخل الكلية</p>
        
        <div style={st.inputWrapper}>
          <input 
            type="text" 
            placeholder="ما الذي تبحث عنه اليوم؟" 
            value={searchTerm}
            onChange={handleSearch}
            style={st.premiumInput} 
          />
          <div style={st.inputGlow} />
          
          {suggestions.length > 0 && (
            <div style={st.modernSuggestionBox}>
              {suggestions.map((s, i) => (
                <div 
                  key={i} 
                  className="suggestion-item" 
                  style={st.modernSItem} 
                  onClick={() => onSelectResult(s)}
                >
                  <div style={st.sIcon}>📍</div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={st.sSubject}>{s.subject}</div>
                    <div style={st.sLecturer}>
                      {s.lecturer} • الطابق {s.floor === 0 ? "الأرضي" : s.floor}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {showBuilding && (
        <div style={st.buildingWrapper}>
          <div style={st.luxuryInfoBar}>
            <div style={st.infoTag}>الموقع: <b>{searchParams.name}</b></div>
            <div style={st.infoDivider} />
            <div style={st.infoTag}>
              الطابق: <b>{searchParams.floor === 0 ? "الأرضي" : searchParams.floor}</b>
            </div>
          </div>
          <div style={st.canvasWrapper}>
            <Building 
              highlightedFloor={searchParams.floor} 
              activeSearch={searchParams.name} 
            />
          </div>
        </div>
      )}
    </div>
  );
}