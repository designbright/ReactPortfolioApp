import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import BaseLayout from './BaseLayout.js';


export default class References extends Component {

  constructor(props){
    super(props)
  }

  render() {
    return (

      <div className="App one">
          <h1>References</h1>
          <h4>Employer: DeBug University</h4>
          <p>Email: hello@gmail.com</p>
          <p>Phone: 123-456-7890</p>

          <h4>Employer: Black Lab Inc</h4>
          <p>Email: hello@gmail.com</p>
          <p>Phone: 123-456-7890</p>

          <h4>Employer: Pattern Dog Raleigh</h4>
          <p>Email: hello@gmail.com</p>
          <p>Phone: 123-456-7890</p>
      </div>
    );
  }
}
