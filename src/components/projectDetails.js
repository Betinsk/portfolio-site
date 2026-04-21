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
      setData(ArrayProjects()[id - 1])
    }, [id]);
  
  return (
    <div className='containerDetails'>
    <Header/>

    <div >
      <h2>{projectData.name}</h2>
      <div className='link'>
      <a href={projectData.link} target="_blank" rel="noopener noreferrer"> Link para o projeto </a>
      </div>
      <p>{projectData.complexDetails}</p>
       <img className='detailsImg' src={projectData.img} alt={projectData.name} />
      </div>
   
    </div>
  );
}

export default ProjectDetails;
