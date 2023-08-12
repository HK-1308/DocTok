import React, { Component, useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
import {locale} from "../../resources/locales/locale"


interface IProjectCardProps{
    id: number,
    name: string,
    imageName: string,
    description: string,
}


export default function ProjectCard(props: IProjectCardProps){  
    return(
      <Card key={props.id} style={{ width: '18rem',}}>
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
  