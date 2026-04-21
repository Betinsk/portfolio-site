import React from 'react';
import '../css/skills.css';
import { FaReact, FaJava, FaHtml5, FaCss3Alt, FaGithub } from 'react-icons/fa';
import { SiJavascript, SiSpringboot, SiAngular } from 'react-icons/si';

const skills = [
  { icon: <FaReact />, label: 'React' },
  { icon: <SiJavascript />, label: 'JavaScript' },
  { icon: <FaJava />, label: 'Java' },
  { icon: <SiSpringboot />, label: 'Spring Boot' },
  { icon: <SiAngular />, label: 'Angular' },
  { icon: <FaHtml5 />, label: 'HTML5' },
  { icon: <FaCss3Alt />, label: 'CSS3' },
  { icon: <FaGithub />, label: 'Git / GitHub' },
];

function Skills() {
  return (
    <section className="skillsSection">
      <h2>Tecnologias</h2>
      <div className="skillsGrid">
        {skills.map((skill) => (
          <div className="skillCard" key={skill.label}>
            <span className="skillIcon">{skill.icon}</span>
            <span className="skillLabel">{skill.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
