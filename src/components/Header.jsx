import React, { useEffect } from 'react';

const Header = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes slideDown {
        from { transform: translateY(-100%); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
      @keyframes pulse {
        0% { box-shadow: 0 0 0 0 rgba(28, 61, 106, 0.4); }
        70% { box-shadow: 0 0 0 10px rgba(28, 61, 106, 0); }
        100% { box-shadow: 0 0 0 0 rgba(28, 61, 106, 0); }
      }
      @keyframes logoEntrance {
        from { transform: scale(0.5) rotate(-15deg); opacity: 0; }
        to { transform: scale(1) rotate(0); opacity: 1; }
      }
      .header-container {
        animation: slideDown 0.8s cubic-bezier(0.16, 1, 0.3, 1);
      }
      .logo-animate {
        animation: logoEntrance 1s ease-out forwards;
      }
      .badge-pulse {
        animation: pulse 2s infinite;
      }
    `;
    document.head.append(style);
  }, []);

  // استبدل قسم الـ return في كودك بهذا:
  return (
    <header className="header-container" style={s.header}>
      {/* شعار الكلية - رابط مباشر من GitHub Raw */}
      <img 
        src="https://raw.githubusercontent.com/h98m/GasWay/main/public/college_logo.png" 
        alt="College" 
        className="logo-animate" 
        style={s.logo} 
      />

      <div style={s.titleGroup}>
        <h1 style={s.mainTitle}>هندسة النفط والغاز</h1>
        <div className="badge-pulse" style={s.subTitleBadge}>
          قسم الغاز الطبيعي
        </div>
      </div>

      {/* شعار الجامعة - رابط مباشر من GitHub Raw */}
      <img 
        src="https://raw.githubusercontent.com/h98m/GasWay/main/public/logo.png" 
        alt="University" 
        className="logo-animate" 
        style={{...s.logo, animationDelay: '0.2s'}} 
      />
    </header>
  );
};

const s = {
  header: {
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    padding: '15px 5%', 
    background: 'linear-gradient(to bottom, #ffffff, #f8fafc)', 
    borderBottom: '4px solid #1c3d6a',
    boxShadow: '0 10px 30px rgba(28, 61, 106, 0.05)', 
    direction: 'rtl', 
    flexWrap: 'wrap',
    position: 'relative',
    zIndex: 1000
  },
  logo: { 
    width: 'clamp(60px, 9vw, 95px)', 
    height: 'auto',
    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))',
    transition: '0.3s ease'
  },
  titleGroup: { 
    textAlign: 'center', 
    padding: '5px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  mainTitle: { 
    margin: 0, 
    fontSize: 'clamp(20px, 4.5vw, 30px)', 
    color: '#1c3d6a',
    fontWeight: '900',
    letterSpacing: '-0.5px',
    textShadow: '0 2px 4px rgba(0,0,0,0.05)'
  },
  subTitleBadge: { 
    display: 'inline-block', 
    padding: '5px 18px', 
    background: 'linear-gradient(135deg, #1c3d6a 0%, #2b5691 100%)', 
    color: '#fff', 
    borderRadius: '30px', 
    fontSize: 'clamp(11px, 2.2vw, 15px)', 
    marginTop: '8px',
    fontWeight: 'bold',
    border: '1px solid rgba(255,255,255,0.2)'
  }
};

export default Header;