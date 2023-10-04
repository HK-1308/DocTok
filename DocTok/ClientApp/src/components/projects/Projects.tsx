import React, { useEffect, useState} from 'react';
import ProjectCard from "../projects/ProjectCard.tsx";
import IProject from '../../models/responseModels/IProject.ts';
import './Projects.scss'
import ProjectService from '../../services/ProjectService.ts';

export default function Projects(){
  const [projects, setProjects] = useState<IProject[]>();
  const projectService = new ProjectService()

  useEffect(() => {
    fetchProjects()
  },[])

  const fetchProjects = async () => {
    const data = await projectService.get();
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
