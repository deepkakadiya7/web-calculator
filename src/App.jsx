import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleCalculator from './SimpleCalculator';
import GstCalculator from './GstCalculator';

function App() {
  return (
    <>
      {/* Google Fonts for Poppins */}
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
      <div style={{ background: 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)', minHeight: '100vh', width: '100vw', padding: 0, margin: 0 }}>
        <header style={{ width: '100vw', background: '#fff', boxShadow: '0 2px 8px rgba(31,38,135,0.07)', padding: '24px 0', marginBottom: 32 }}>
          <h1 style={{ textAlign: 'center', fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#222', letterSpacing: 1, fontSize: 36, margin: 0 }}>GST & Simple Calculator</h1>
        </header>
        <main style={{ width: '100vw', minHeight: 'calc(100vh - 120px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap', justifyContent: 'center', width: '100%', maxWidth: '1600px', padding: '0 32px' }}>
            <div style={{ flex: '1 1 400px', minWidth: 340, maxWidth: 500, display: 'flex', justifyContent: 'center' }}>
              <SimpleCalculator />
            </div>
            <div style={{ flex: '1 1 400px', minWidth: 340, maxWidth: 500, display: 'flex', justifyContent: 'center' }}>
              <GstCalculator />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App
