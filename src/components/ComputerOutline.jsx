import React from 'react';

export default function ComputerOutline({ children }) {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '10px',
      overflowX: 'hidden'
    }}>
      <div style={{
        width: '96%',
        maxWidth: '1600px',
        minHeight: '98vh',
        background: 'rgba(0, 0, 0, 0.3)',
        borderRadius: '40px',
        border: '3px solid rgba(2, 247, 216, 0.3)',
        boxShadow: '0 0 30px rgba(2, 247, 216, 0.2)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          width: '100%',
          minHeight: '98vh',
          background: '#0a0a0a',
          borderRadius: '38px',
          overflowY: 'auto',
          overflowX: 'hidden',
          padding: '20px 0'
        }}>
          {children}
        </div>
      </div>
    </div>
  );
}