// Styles.js
export const st = {
 scheduleWrapper: {
    width: '100%',
    maxWidth: '800px',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    marginTop: '20px',
    paddingBottom: '50px'
  },

  scheduleCard: {
    background: '#fff',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    padding: '15px 25px',
    boxShadow: '0 10px 25px rgba(28,61,106,0.05)',
    border: '1px solid #f1f5f9',
    position: 'relative',
    overflow: 'hidden',
    animation: 'fadeInUp 0.5s ease-out forwards',
    opacity: 0,
    transition: '0.3s'
  },

  dayBadge: {
    background: '#f1f5f9',
    color: '#1c3d6a',
    padding: '10px 15px',
    borderRadius: '15px',
    fontWeight: 'bold',
    minWidth: '80px',
    fontSize: '14px'
  },

  subjectInfo: {
    flex: 1,
    textAlign: 'right',
    paddingRight: '20px'
  },

  subjectName: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#1c3d6a',
    marginBottom: '2px'
  },

  lecturerName: {
    fontSize: '14px',
    color: '#64748b'
  },

  roomBadge: {
    background: '#1c3d6a',
    color: '#fff',
    padding: '8px 15px',
    borderRadius: '12px',
    textAlign: 'center',
    minWidth: '70px'
  },

  sideAccent: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: '6px'
  },
  appContainer: { minHeight: '100vh', width: '100%', background: '#f8fafc', display: 'flex', flexDirection: 'column', direction: 'rtl' },
  mainContent: { flex: 1, width: '100%', display: 'flex', flexDirection: 'column' },
  page: { width: '100%', padding: '20px', textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' },
  pageTitle: { color: '#1c3d6a', fontSize: '28px', marginBottom: '30px', fontWeight: 'bold' },
  backBtn: { padding: '10px 25px', background: '#1c3d6a', color: '#fff', border: 'none', borderRadius: '12px', cursor: 'pointer', marginBottom: '20px', alignSelf: 'start', transition: '0.3s' },

  // --- ستايلات المواقع (Locations) المحدثة ---
  locationsGrid: { display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', maxWidth: '600px', marginTop: '30px' },
  
  locationCard: {
    position: 'relative', background: '#fff', padding: '25px', borderRadius: '25px',
    display: 'flex', alignItems: 'center', gap: '20px', border: '1px solid #e2e8f0',
    overflow: 'hidden', textAlign: 'right', cursor: 'pointer', transition: '0.4s'
  },

  locIconWrapper: {
    fontSize: '40px', background: '#f8fafc', width: '80px', height: '80px',
    display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '20px',
    boxShadow: '0 8px 15px rgba(0,0,0,0.05)'
  },

  locTextWrapper: { flex: 1 },
  locName: { fontSize: '20px', fontWeight: 'bold', margin: '0 0 5px 0' },
  locDesc: { color: '#64748b', fontSize: '14px', margin: 0 },

  mapBadge: { padding: '8px 15px', background: '#f1f5f9', borderRadius: '12px', fontSize: '13px', color: '#1c3d6a', fontWeight: 'bold' },

  locGlow: {
    position: 'absolute', top: 0, right: 0, width: '150px', height: '150px',
    filter: 'blur(60px)', opacity: 0.1, transition: '0.4s', pointerEvents: 'none'
  },

  // --- ستايلات البحث (Search) والأنيميشن ---
  floatingBackBtn: {
    position: 'absolute', top: '20px', right: '20px',
    padding: '12px 20px', background: 'rgba(28, 61, 106, 0.1)',
    backdropFilter: 'blur(10px)', border: '1px solid rgba(28, 61, 106, 0.2)',
    borderRadius: '15px', cursor: 'pointer', color: '#1c3d6a', fontWeight: 'bold',
    transition: '0.3s', zIndex: 10
  },

  searchContainerFull: {
    marginTop: '10vh', width: '100%', maxWidth: '600px',
    animation: 'fadeInUp 0.8s ease-out', textAlign: 'center'
  },

  searchContainerSmall: {
    width: '100%', maxWidth: '800px', marginBottom: '20px',
    animation: 'all 0.5s ease', textAlign: 'center'
  },

  glitchTitle: { fontSize: '32px', color: '#1c3d6a', fontWeight: '900', letterSpacing: '-1px', marginBottom: '5px' },
  subTitle: { color: '#64748b', marginBottom: '25px', fontSize: '16px' },
  inputWrapper: { position: 'relative', width: '100%' },

  premiumInput: {
    width: '100%', padding: '20px 25px', borderRadius: '20px',
    background: '#fff', fontSize: '18px', boxShadow: '0 10px 40px rgba(28, 61, 106, 0.1)',
    outline: 'none', textAlign: 'right', color: '#1c3d6a',
    transition: '0.3s', border: '2px solid #e2e8f0'
  },

  modernSuggestionBox: {
    position: 'absolute', top: '110%', left: 0, width: '100%',
    background: 'rgba(255, 255, 255, 0.98)', backdropFilter: 'blur(15px)',
    borderRadius: '20px', boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
    zIndex: 100, overflow: 'hidden', border: '1px solid #e2e8f0'
  },

  modernSItem: {
    padding: '15px 25px', display: 'flex', alignItems: 'center',
    justifyContent: 'flex-start', borderBottom: '1px solid #f1f5f9',
    cursor: 'pointer', transition: '0.2s', gap: '15px'
  },

  sIcon: { fontSize: '20px' },
  sSubject: { fontWeight: 'bold', color: '#1c3d6a', fontSize: '17px' },
  sLecturer: { color: '#64748b', fontSize: '14px' },

  // --- ستايلات البناية والـ Canvas ---
  buildingWrapper: {
    width: '100%', maxWidth: '1100px', marginTop: '10px',
    animation: 'fadeInUp 0.6s ease-out'
  },

  luxuryInfoBar: {
    background: '#1c3d6a', display: 'flex', justifyContent: 'center',
    alignItems: 'center', gap: '20px', padding: '15px',
    borderRadius: '20px 20px 0 0', color: '#fff'
  },

  infoTag: { fontSize: '16px' },
  infoDivider: { width: '1px', height: '20px', background: 'rgba(255,255,255,0.3)' },

  canvasWrapper: {
    height: '65vh', background: '#fff', borderRadius: '0 0 25px 25px',
    border: '1px solid #1c3d6a', overflow: 'hidden',
    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.1)'
  },

  // --- الجداول والأزرار العامة ---
  btnContainer: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px', width: '100%' },
  locBtn: { 
    width: '100%', maxWidth: '500px', padding: '20px', background: '#fff', 
    color: '#1c3d6a', border: '2px solid #1c3d6a', borderRadius: '15px', 
    fontSize: '18px', fontWeight: 'bold', cursor: 'pointer', transition: '0.3s' 
  },
  tableWrapper: { width: '100%', overflowX: 'auto', borderRadius: '15px', background: '#fff', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' },
  table: { width: '100%', minWidth: '700px', borderCollapse: 'collapse' }
};