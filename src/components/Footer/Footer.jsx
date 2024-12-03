import React from "react";
import "../Footer/footer.css";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs'; // Ejemplo de icono de Bootstrap

 export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Enlaces de Navegación */}
        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>


          {/* Iconos de Redes Sociales */}

        <footer style={{
            display: 'flex',
            justifyContent: 'center',
            padding: '20px',
            backgroundColor: '#333',
            color: '#fff',
            position: 'relative',
            bottom: 0,
            width: '100%',
        }}>
            <div style={{ margin: '0 15px' }}>
                <FaFacebook size={30} />
            </div>
            <div style={{ margin: '0 15px' }}>
                <FaTwitter size={30} />
            </div>
            <div style={{ margin: '0 15px' }}>
                <FaInstagram size={30} />
            </div>
            <div style={{ margin: '0 15px' }}>
                <BsFillPersonFill size={30} />
            </div>
        </footer>


        {/* Derechos Reservados */}
        <p className="footer-rights">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

