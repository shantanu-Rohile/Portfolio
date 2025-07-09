import React from 'react';

function Border() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '20px 0',
      }}
    >
      <div
        style={{
          width: '450px',
          height: '1px',
          backgroundColor: '#00fff7',
          boxShadow: '0 0 8px #00fff7',
        }}
      />
      <div
        style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: '#00fff7',
          margin: '0 12px',
          boxShadow: '0 0 8px #00fff7, 0 0 12px #00fff7',
        }}
      />
      <div
        style={{
          width: '450px',
          height: '1px',
          backgroundColor: '#00fff7',
          boxShadow: '0 0 8px #00fff7',
        }}
      />
    </div>
  );
}

export default Border;
