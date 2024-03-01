// Contact.js
import React from 'react';
import ArrayProjects from '../api/arrayProjects';
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import Header from './header';
const ProjectDetails = () => {

    const [projectData, setData] = useState([])
  
    const  {id}  = useParams();

    useEffect(() => {
      ArrayProjects().then((response) => {
        setData(response[id - 1])
      })
  
      }, []);
  
      console.log(projectData)
  

  return (
    <>
    <Header/>

    <div id="contact">
      <h2>{projectData.name}</h2>
      <p>{projectData.description}</p>
    
    
  {/**  <img src={projectData.img}></img> */}

      <a href={projectData.link}> Link para o projeto </a>

    </div>
    </>
  );
}

export default ProjectDetails;
