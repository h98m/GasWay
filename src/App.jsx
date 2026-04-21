import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Locations from './components/Locations';
import Schedule from './components/Schedule';
import SearchSystem from './components/SearchSystem';
import { st } from './components/Styles';

export default function App() {
  const [view, setView] = useState('home');

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Segoe UI', sans-serif; }
      body { background: #f8fafc; direction: rtl; }
      @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    `;
    document.head.append(style);
  }, []);

  const renderContent = () => {
    switch (view) {
      case 'home':      return <Dashboard onNavigate={setView} />;
      case 'locations': return <Locations setView={setView} />;
      case 'schedule':  return <Schedule setView={setView} />;
      case 'search':    return <SearchSystem setView={setView} />;
      default:          return <Dashboard onNavigate={setView} />;
    }
  };

  return (
    <div style={st.appContainer}>
      <Header />
      <main style={st.mainContent}>
        {renderContent()}
      </main>
    </div>
  );
}