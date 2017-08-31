import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import BaseLayout from './BaseLayout.js';


export default class About extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="App one">
    
          <h1>About</h1>
          <p>I am from Raleigh, North Carolina</p>


      </div>
    );
  }
}
