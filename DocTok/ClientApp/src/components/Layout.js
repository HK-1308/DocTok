import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        <NavMenu />
        <Container style={{"marginLeft": "0px", "marginRight": "0px", "paddingLeft": "0px", "paddingRight":"0px", maxWidth: "none"}}>
          {this.props.children}
        </Container>
      </div>
    );
  }
}
