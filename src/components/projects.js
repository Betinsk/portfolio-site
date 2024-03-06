// Projects.js
import React, { useState } from 'react';
import '../css/project.css'
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
    <section className='containerProject' id="projects">
   <h2>Meus Projetos</h2>
      <div className="project-grid">
        {projectData.map((project) => (
          <div className="project-card" key={project.id}>
            <h3>{project.name}</h3>
            <img src= {project.img} />
            <p>{project.description}</p>
            <Link target="_blank" rel="noopener noreferrer" to={`/projectDetails/${project.id}`}> Detalhes</Link>
          </div>

         
        ))}
      </div>
  </section>
  );
}

export default Projects;
