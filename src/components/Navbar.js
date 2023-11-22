import React, { useState } from 'react';
import hamburgerStack from '../images/icons8-hamburger-menu.svg';
import logo from '../images/ivan-roussev-logo.png';
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };

  return (
    <nav>
      <div className='menu'>
        <ul>
          <div className='logo'>
            <img className='logo-image' src={logo} alt='Ivan Roussev' />
          </div>
          <div className='burger-menu'>
            <li className='dvs-header__trigger' onClick={toggleMenu}>
              <img src={hamburgerStack} alt='stack' className='burger-stack' />
            </li>
            <div className={`dvs-header__menuItems ${isOpen ? 'is-open' : ''}`}>
              <li>
                <a href='#app'>Home</a>
              </li>
              <li>
                <a href='#about'>About</a>
              </li>
              <li>
                <a href='#projects'>Projects</a>
              </li>
              <li>
                <button className='contact-button'>
                  <a href='#contact'>Contact</a>
                </button>
              </li>
            </div>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
