import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import BaseLayout from './BaseLayout.js';


export default class Home extends Component {

  constructor(props){
    super(props)
  }

  render() {
    return (

      <div className="App one">
        <BaseLayout/>
          <h1>Home Page</h1>
          <p>Coming soon...</p>
          <p>More styling</p>
          <p>Featured Projects</p>
          <p>Images</p>

      </div>
    );
  }
}
