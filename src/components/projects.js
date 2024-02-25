// Projects.js
import React from 'react';
import '../css/project.css'
import pureform from '../assets/pureform.png'
import { Link } from 'react-router-dom'

const projectsData = [
    {
      id: 1,
      name: 'Prisão federal',
      img: pureform,
      description: 'Um sistema de prisão federal Americano, inspirado na serie de tv, Orange is the new black',
      link: 'https://prisaofederal.netlify.app/'
    },
    {
      id: 2,
      name: 'Site para academia',
      img: pureform,
      description: 'Um sistema de academia, feito em javaScript',
      link: 'https://pureformfitness.netlify.app/index.html'
    },
    // Adicione mais objetos de projeto conforme necessário
  ];


function Projects() {
  return (
    <section id="projects">
   <h2>Meus Projetos</h2>
      <div className="project-grid">
        {projectsData.map((project) => (
          <div className="project-card" key={project.id}>
            <h3>{project.name}</h3>
            <img src= {pureform} />
            <p>{project.description}</p>
            <Link to={`/projectDetails/${project.id}`}> Detalhes</Link>
          </div>

         
        ))}
      </div>
  </section>
  );
}

export default Projects;
