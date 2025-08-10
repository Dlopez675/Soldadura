import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-grid">
        {/* Columna 1: Oficinas */}
        <div className="footer-column">
          <h3 className="footer-title">OFICINAS SOLDADURA</h3>
          <div className="footer-content">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, excepturi ipsa optio cumque quas ex.</p>
            <p>[Comercial] +XX X XXXX XXXX</p>
            <p>[Reclutamiento] +XX X XXXX XXXX</p>
            <p>contact@SOLDADURA.PA</p>
          </div>
        </div>

        {/* Columna 2: Menú */}
        <div className="footer-column">
          <h3 className="footer-title">MENÚ DE NAVEGACIÓN</h3>
          <ul className="footer-menu">
            <li><span>Nuestras Especialidades</span></li>
            <li><span>Experiencias</span></li>
            <li><span>Nuestra Historia</span></li>
            <li><span>Contactanos</span></li>
          </ul>
        </div>

        {/* Columna 3: Redes sociales */}
        <div className="footer-column">
          <h3 className="footer-title">SÍGUENOS</h3>
          <div className="social-icons">
            <a className="social-icon" target="_blank" rel="noopener noreferrer" href="http://facebook.com">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a className="social-icon" target="_blank" rel="noopener noreferrer" href="http://linkedin.com">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a className="social-icon" target="_blank" rel="noopener noreferrer" href="http://instagram.com">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} SOLDADURA. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;