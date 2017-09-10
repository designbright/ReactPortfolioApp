import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import BaseLayout from './BaseLayout.js';

import personalLogo from "../personalLogo.PNG";

export default class Portfolio extends Component {
  constructor(props){
    super(props)
  }

    render() {
    return (

    <div id="portfolioPage">

    <div id="testimonialHeader">
      <h1 id="portfolioTop">Portfolio</h1>
    </div>


    <section id="portfolioWrapper">

      <div id="contentRow1">

        <div id="contentText">
          <h3 id="contentHeader">CONTENT TITLE</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>

      <div id="pictureRow">
          <p id="blue">Iam a blue square</p>
         <p id="red">I am a red square</p>
         <p id= "green">I am a greeen square </p>
      </div>

      <div id="contentRow1">

        <div id="contentText">
          <h3 id="contentHeader">CONTENT TITLE</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>

      <div id="pictureRow">
          <p id="blue">Iam a blue square</p>
         <p id="red">I am a red square</p>
         <p id= "green">I am a greeen square </p>
      </div>

      <div id="contentRow1">

        <div id="contentText">
          <h3 id="contentHeader">CONTENT TITLE</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>

      <div id="pictureRow">
          <p id="blue">Iam a blue square</p>
         <p id="red">I am a red square</p>
         <p id= "green">I am a greeen square </p>
      </div>
    </section>




  </div>
    );
  }
}
