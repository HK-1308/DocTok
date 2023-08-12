import React, { Component} from 'react';
import { Editor } from '@tinymce/tinymce-react';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from "sweetalert2";
import {locale} from "../../resources/locales/locale"

export class Home extends Component {
  static displayName = Home.name;

  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div style={{"display": "flex"}}>
        <h1>ГЛАВНАЯ СТРАНИЦА, ТЕСТ</h1>
      </div>
    );
  }
}
