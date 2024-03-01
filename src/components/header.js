// Header.js
import React from 'react';
import '../css/header.css'

function Header() {
  return (
    <div className='container'>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
