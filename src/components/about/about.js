// About.js
import React from 'react';
import '../../css/about.css'
import { Link } from 'react-router-dom';

function About() {
  return (
    <section id="about">
      <div className="divName">
        <h2>Carlos</h2>
          <h2>Carvalho</h2>
            <p>Desenvolvedor web com projetos academicos desenvolvidos em várias linguagens como Javascript, e Java, frameworks como React, Angular, Springboot</p>
          <p className='moreDetails'> <Link to='/moreDetails'> Mais detalhes</Link></p>
      </div>
    </section>
  );
}

export default About;
