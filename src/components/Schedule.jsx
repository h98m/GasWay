import React from 'react';
import { st } from './Styles';
import { universityData } from './universityData';

export default function Schedule({ setView }) {
  return (
    <div style={st.page}>
      <button onClick={() => setView('home')} style={st.backBtn}>← العودة</button>
      <h2 style={st.pageTitle}>الجدول الدراسي - المرحلة الأولى</h2>
      <div style={st.tableWrapper}>
        <table style={st.table}>
          <thead>
            <tr style={{ background: '#1c3d6a', color: '#fff' }}>
              <th>اليوم</th><th>المادة</th><th>التدريسي</th><th>القاعة</th>
            </tr>
          </thead>
          <tbody>
            {universityData.schedule.filter(item => !item.isHidden).map((item, i) => (
              <tr key={i} style={{ borderBottom: '1px solid #eee', background: i % 2 === 0 ? '#fff' : '#f9fbff' }}>
                <td>{item.day}</td>
                <td style={{ fontWeight: 'bold' }}>{item.subject}</td>
                <td>{item.lecturer}</td>
                <td>{item.room}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}