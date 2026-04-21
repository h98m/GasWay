import React, { useEffect } from 'react';

const Dashboard = ({ onNavigate }) => {
  const cards = [
  { 
    id: 'schedule', 
    title: 'الجدول الدراسي', 
    icon: 'https://raw.githubusercontent.com/h98m/GasWay/main/public/table.png', 
    color: '#1c3d6a', 
    desc: 'استعراض مواعيد المحاضرات الأسبوعية' 
  },
  { 
    id: 'search', 
    title: 'نظام البحث الذكي', 
    icon: 'https://raw.githubusercontent.com/h98m/GasWay/main/public/search.png', 
    color: '#0055ff', 
    desc: 'ابحث عن المختبرات، القاعات، والتدريسيين' 
  },
  { 
    id: 'locations', 
    title: 'موقع البنايات', 
    icon: 'https://raw.githubusercontent.com/h98m/GasWay/main/public/Location.png', 
    color: '#5d91ba', 
    desc: 'خرائط الوصول للأبنية والورش المركزية' 
  }
  ];
  useEffect(() => {
    // إضافة أنيميشن الكروت عند الدخول
    const style = document.createElement('style');
    style.textContent = `
      @keyframes popIn {
        0% { opacity: 0; transform: scale(0.8) translateY(40px); }
        100% { opacity: 1; transform: scale(1) translateY(0); }
      }
      .dashboard-card {
        animation: popIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
      }
      .dashboard-card:hover {
        transform: translateY(-15px) scale(1.05) !important;
        box-shadow: 0 25px 50px rgba(28,61,106,0.15) !important;
        border-color: #1c3d6a !important;
      }
      .dashboard-card:hover .icon-wrapper {
        transform: scale(1.2) rotate(-10deg);
      }
      .dashboard-card:active {
        transform: scale(0.95) !important;
      }
    `;
    document.head.append(style);
  }, []);

  return (
    <div style={ds.grid}>
      {cards.map((card, index) => (
        <div 
          key={card.id} 
          className="dashboard-card"
          style={{...ds.card, animationDelay: `${index * 0.1}s`}} 
          onClick={() => onNavigate(card.id)}
        >
          <div className="icon-wrapper" style={ds.iconWrapper}>
  {/* هنا التعديل: نفحص إذا كان النص ينتهي بـ .png نعرض صورة، وإذا لا نعرضه كإيموجي */}
  {card.icon.endsWith('.png') ? (
    <img 
      src={`/${card.icon}`} 
      alt={card.title} 
      style={{ width: '80px', height: '80px', objectFit: 'contain' }} 
    />
  ) : (
    <span style={ds.icon}>{card.icon}</span>
  )}
</div>
          
          <h2 style={{...ds.title, color: card.color}}>{card.title}</h2>
          <p style={ds.desc}>{card.desc}</p>
          
          <div style={{...ds.line, background: card.color}} />
          
          {/* لمسة فنية: رقم الطابق أو كود خلفي باهت */}
          <div style={ds.bgNumber}>{index + 1}</div>
        </div>
      ))}
    </div>
  );
};

const ds = {
  grid: { 
    display: 'flex', 
    justifyContent: 'center', 
    gap: '30px', 
    padding: '80px 20px', 
    flexWrap: 'wrap',
    perspective: '1000px' // تعطي شعور بالعمق
  },
  card: {
    width: '320px', 
    height: '380px', 
    background: '#fff', 
    borderRadius: '40px',
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    justifyContent: 'center',
    cursor: 'pointer', 
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    boxShadow: '0 15px 35px rgba(28,61,106,0.08)', 
    border: '2px solid #f1f5f9', 
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    opacity: 0 // للأنيميشن عند التحميل
  },
  iconWrapper: {
    width: '120px',
    height: '120px',
    background: '#f8fafc',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
    transition: '0.4s'
  },
  icon: { fontSize: '60px' },
  title: { fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' },
  desc: { 
    color: '#64748b', 
    fontSize: '15px', 
    padding: '0 30px', 
    lineHeight: '1.6' 
  },
  line: { 
    width: '40px', 
    height: '5px', 
    borderRadius: '10px', 
    marginTop: '25px',
    transition: '0.3s'
  },
  bgNumber: {
    position: 'absolute',
    bottom: '-10px',
    left: '20px',
    fontSize: '100px',
    fontWeight: '900',
    color: 'rgba(28,61,106,0.03)',
    zIndex: 0,
    pointerEvents: 'none'
  }
};

export default Dashboard;