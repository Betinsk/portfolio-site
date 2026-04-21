import React from 'react';
import '../../css/about.css'
import DownloadLink from './download';

function About() {
  return (
    <section id="about" className="heroSection">
      <div className="heroContent">
        <div className="heroText">
          <p className="heroRole">Desenvolvedor Web</p>
          <h1 className="heroName">Carlos Carvalho</h1>
          <p className="heroDescription">
            Desenvolvedor focado em construir aplicações completas, do front ao back.
            Experiência com React, JavaScript e Java com Spring Boot — gosto de resolver
            problemas reais e entregar produtos funcionais.
          </p>
          <div className="heroActions">
            <a href="#projects" className="btnPrimary">Ver Projetos</a>
            <DownloadLink />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
