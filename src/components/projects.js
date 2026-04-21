import React, { useState, useEffect } from 'react';
import '../css/project.css'
import { Link } from 'react-router-dom'
import ArrayProjects from '../api/arrayProjects';

function Projects() {
  const [projectData, setData] = useState([])

  useEffect(() => {
    setData(ArrayProjects())
  }, []);

  return (
    <section className='containerProject' id="projects">
      <h2>Meus Projetos</h2>
      <div className="project-grid">
        {projectData.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.img} alt={project.name} />
            <div className="project-card-body">
              <h3>{project.name}</h3>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.link} target="_blank" rel="noopener noreferrer">Ver projeto</a>
                <Link to={`/projectDetails/${project.id}`} target="_blank" rel="noopener noreferrer">Detalhes</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
