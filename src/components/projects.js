// Projects.js
import React, { useState } from 'react';
import '../css/project.css'
import pureform from '../assets/pureform.png'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import ArrayProjects from '../api/arrayProjects';

function Projects() {

  const [projectData, setData] = useState([])

  useEffect(() => {
    ArrayProjects().then((response) => {
      setData(response)
    })

    }, []);

    console.log(projectData)

  return (
    <section id="projects">
   <h2>Meus Projetos</h2>
      <div className="project-grid">
        {projectData.map((project) => (
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
