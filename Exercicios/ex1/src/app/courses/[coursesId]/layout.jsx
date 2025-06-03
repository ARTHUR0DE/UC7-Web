import React from 'react';

export default function Layout({ children }) {
  return (
    <div style={{ border: '1px solid blue', padding: '20px' }}>
      <h1>Layout do Curso</h1>
      {children}
    </div>
  );
}