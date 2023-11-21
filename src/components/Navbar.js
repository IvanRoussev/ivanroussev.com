import React, { useState } from 'react';
function Navbar() {
  return (
    <nav>
      <div className='menu'>
        <ul>
          <div className='logo'>Mr. Roussev</div>
          <div>
            <li>
              <a href='#home'>Home</a>
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
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
