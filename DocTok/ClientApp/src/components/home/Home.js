import React, { Component} from 'react';

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
