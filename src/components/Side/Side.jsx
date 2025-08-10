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
          <span className="icon">©</span> (Comercial) +XX X XXXX XXXX
        </span>
        <span className="divider">|</span>
        <span className="contact-item">
          <span className="icon">后</span> (Reclutamiento) +XX X XXXX XXXX
        </span>
        <span className="divider">|</span>
        <span className="contact-item">
          <span className="icon">回</span> contacto@SOLDADURA.pa
        </span>
      </div>
    </div>
  );
};

export default Side;