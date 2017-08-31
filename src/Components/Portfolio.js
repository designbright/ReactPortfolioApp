import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import BaseLayout from './BaseLayout.js';


export default class Portfolio extends Component {
  constructor(props){
    super(props)
  }

    render() {
    return (
      <div className="App one">
          <h1>Kelly's Portfolio</h1>
          <p>I created this app using React</p>

      </div>
    );
  }
}
