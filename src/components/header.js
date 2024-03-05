// Header.js
import React from 'react';
import '../css/header.css'
import { FaHome } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { MdContactEmergency } from "react-icons/md";
import { FaGitSquare } from "react-icons/fa";



function Header() {
  return (
    <div className='container'>
      <nav>
        <ul>
          <li> <FaHome /> <a href="/">Home</a></li>
          <li> <GrProjects /> <a href="#projects">Projetos</a></li>
          <li> <MdContactEmergency /> <a href="#contact">Contato</a></li>
          <li> <FaGitSquare  /> <a href="https://github.com/Betinsk">Github</a></li>


        </ul>
      </nav>
    </div>
  );
}

export default Header;
