import React from 'react';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


interface IProjectCardProps{
    id: number,
    name: string,
    imageName: string,
    description: string,
}

export default function ProjectCard(props: IProjectCardProps){ 
  
  const navigate = useNavigate();

  const ProjectCardClick = ()=>{
    navigate(`/projects/${props.id}`)
  }

  return(
    <Card key={props.id} style={{ width: '18rem',}} onClick={ProjectCardClick}>
      <Card.Img variant="top" src={require(`../../resources/icons/${props.imageName}`)} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
  