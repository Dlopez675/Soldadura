import React from 'react';
import './side.css';

const Side = () => {
  return (
    <div className="side-container">
      <div className="contact-bar">
        <span className="contact-item">
          <span className="icon">内</span> Trabaja Con Nosotros
        </span>
        <span className="divider">|</span>
        <span className="contact-item">
          <span className="icon">©</span> (Comercial) +56 9 4917 8389
        </span>
        <span className="divider">|</span>
        <span className="contact-item">
          <span className="icon">后</span> (Reclutamiento) +56 9 4665 7536
        </span>
        <span className="divider">|</span>
        <span className="contact-item">
          <span className="icon">回</span> contacto@incoprovi
        </span>
      </div>
    </div>
  );
};

export default Side;