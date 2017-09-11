import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import BaseLayout from './BaseLayout.js';

import QuickSneakersFinal from "../Images/QuickSneakers/QuickSneakersFinal.png";


export default class QuickSneakers extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (

    <div id="portfolioPage">

    <div id="testimonialHeader">
      <h1 id="portfolioTop">Quick Sneakers</h1>
    </div>

    <section id="portfolioWrapper">
        <div id="contentText">
          <h3 id="contentHeader">OVERVIEW</h3>
          <p>This was my first website that I completed in May 2017 as part of The Iron Yard's Web Development Program.

          Below is the original mockup image that I was provided with prior to starting the project. I was also provided with the images that needed to be included.

          The project required that I use HTML elements such as sections, divs, ID's, classes, containers, buttons, navigation, and footers.

          I styled my CSS file by using floats, images, background gradients, etc</p>

          <p>The tools I used to complete this project were Google Chrome, Chrome Developer Tool - Inspect, Atom Text Editor, and GitHub.  </p>
        </div>

        <p id="viewCodeLink"><a id="quickSneakersCode" target="_blank" href="https://github.com/designbright/Quick-Sneakers.git">View the Code on GitHub</a></p>

        <p id="QSfinalContainer">
          <img id="QSfinal"  alt="Quick Sneakers Final" src={QuickSneakersFinal} height ="600" width= "500"/>
        </p>

      <div id="pictureRow">
          <p id="blue">Iam a blue square</p>
         <p id="red">I am a red square</p>
         <p id= "green">I am a greeen square </p>
      </div>

      <div id="contentRow1">

        <div id="contentText">
          <h3 id="contentHeader">THE PROCESS</h3>
          <p>I began by creating a wireframe in order to visually breakdown the components of the mockup. This also helped me decide what type of HTML elements that I would need and how I needed to structure them.

          After writing the HTML file using the text editor, Atom, I began styling the site with CSS. I implemented floats throughout the whole page. </p>
        </div>
      </div>

      <div id="pictureRow">
          <p id="blue">Iam a blue square</p>
         <p id="red">I am a red square</p>
         <p id= "green">I am a greeen square </p>
      </div>

      <div id="contentRow1">
        <div id="contentText">
          <h3 id="contentHeader">CHALLENGES AND LESSONS LEARNED</h3>
          <p>LThe most challenging part of this project was understanding the fundamentals of HTML and CSS. This was my first time ever coding anything. I was building the website as I learned new concepts during the class lectures. This made it difficult to understand the 'big picture' when laying out my HTML. I learned that coding a solid HTML file will make styling the webpage in CSS a lot easier. Learning about the "Box-Model" was crucial to my success in completing the assignment. The Box Model will also be a foundational skill that I rely on for future projects.

          Floats were the most challenging CSS component to work with. If I could re-do this project, I would choose to use flex-box instead.</p>
        </div>
      </div>


    </section>

  </div>
    );
  }
}
