import React from 'react';
import '../css/header.css'
import { FaHome, FaGithub, FaLinkedin } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { MdEmail } from "react-icons/md";

function Header() {
  return (
    <div className='containerHeader'>
      <nav>
        <ul>
          <li><FaHome /> <a href="/">Home</a></li>
          <li><GrProjects /> <a href="#projects">Projetos</a></li>
          <li><MdEmail /> <a href="#contact">Contato</a></li>
          <li><FaGithub /> <a href="https://github.com/Betinsk" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><FaLinkedin /> <a href="https://www.linkedin.com/in/carlos-carvalho-262131187/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
