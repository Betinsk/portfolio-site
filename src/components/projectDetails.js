// Contact.js
import React from 'react';
import ArrayProjects from '../api/arrayProjects';
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import Header from './header';

import '../css/projectDetails.css'

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
    <div className='containerDetails'>
    <Header/>

    <div >
      <h2>{projectData.name}</h2>
      <div className='link'>
      <a href={projectData.link} target="_blank" rel="noopener noreferrer"> Link para o projeto </a>
      </div>
      <p>{projectData.complexDetails}</p>
       <img className='datailsImg' src={projectData.img} ></img>
      </div>
   
    </div>
  );
}

export default ProjectDetails;
