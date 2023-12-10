import React, { useState } from 'react';
import hamburgerStack from '../images/hamburgermenu.svg';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };

  const scrollToSection = (id, event) => {
    event.preventDefault(); // Prevent default anchor behavior
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav>
      <div className='menu'>
        <ul>
          <div className='logo'></div>
          <div className='burger-menu'>
            <li className='dvs-header__trigger'>
              <a href='#' onClick={toggleMenu}>
                <img
                  src={hamburgerStack}
                  alt='stack'
                  className='burger-stack'
                />
              </a>
            </li>
            <div className={`dvs-header__menuItems ${isOpen ? 'is-open' : ''}`}>
              <li>
                <a href='#' onClick={(e) => scrollToSection('app', e)}>
                  Home
                </a>
              </li>
              <li>
                <a href='#' onClick={(e) => scrollToSection('about', e)}>
                  About
                </a>
              </li>
              <li>
                <a href='#' onClick={(e) => scrollToSection('projects', e)}>
                  Projects
                </a>
              </li>
              <li>
                <a href='#' onClick={(e) => scrollToSection('contact', e)}>
                  Contact
                </a>
              </li>
            </div>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
