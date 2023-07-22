// CdaBadge.js
import React from 'react';

export const CdaBadge = ({ label = 'Cda Brand' }) => {
  return <div style={{ border: '1px solid black', padding: '5px', position: 'fixed', bottom: '10px', right: '10px' }}>{label}</div>;
};
