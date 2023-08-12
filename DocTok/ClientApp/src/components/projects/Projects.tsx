import React, { Component, FC, PropsWithChildren, useEffect, useState} from 'react';
import { Editor } from '@tinymce/tinymce-react';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from "sweetalert2";
import {locale} from "../../resources/locales/locale";
import ProjectCard from "../projects/ProjectCard.tsx";
import IProject from '../../models/responseModels/IProject';
import { request } from 'https';

export default function Projects(){
  const [projects, setProjects] = useState<IProject[]>();

  useEffect(() => {
    getProjects()
    debugger
  },[])

  const getProjects =async () => {
    const response = await fetch('https://localhost:7048/Projects');
    const data = await response.json();
    setProjects(data);
    debugger
  }

  return(
    <div style={{display: "flex"}}>
      <div style={{width: "85%", }}>
        <div style={{marginLeft: "50px",}}>
          <h3 style={{margin: "10px",}}>{locale.main.yourProjects}</h3>
          <div style={{display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "20px"}}>
            {projects?.map((item) => {
              return(<ProjectCard key = {item.id} id={item.id} imageName={item.imageName} name={item.name} description={item.description}/>)
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
