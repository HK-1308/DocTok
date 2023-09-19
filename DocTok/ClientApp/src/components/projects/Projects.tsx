import React, { useEffect, useState} from 'react';
import ProjectCard from "../projects/ProjectCard.tsx";
import IProject from '../../models/responseModels/IProject';
import './Projects.scss'

export default function Projects(){
  const [projects, setProjects] = useState<IProject[]>();

  useEffect(() => {
    getProjects()
  },[])

  const getProjects =async () => {
    const response = await fetch('https://localhost:7048/Projects');
    const data = await response.json();
    setProjects(data);
  }

  return(
    <div>
      <div className='project-list'>
        {projects?.map((item) => {
          return(<ProjectCard key = {item.id} id={item.id} imageName={item.imageName} name={item.name} description={item.description}/>)
        })}
      </div>
    </div>
  )
}
