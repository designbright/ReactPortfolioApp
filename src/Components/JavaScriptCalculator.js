import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import BaseLayout from './BaseLayout.js';

import JavaScriptCalcScreenShot from "../Images/JavaScriptCalculator/JSCalcScreenShot.png";
import CalculatorMockup from "../Images/JavaScriptCalculator/CalculatorMockup.jpg";
import HTMLcode from "../Images/JavaScriptCalculator/HTMLcode.png";
import JScode from "../Images/JavaScriptCalculator/JScode.png";

import linkedin from "../linkedin.PNG";
import github from "../github.PNG";
import instagram from "../instagram.PNG";
import gmail from "../gmail.PNG";

export default class About extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <div id="aboutPage">

        <div id="aboutHeader">
          <h1 id="aboutH1">JavaScript Calculator</h1>
        </div>

        <div id="calculatorContainer">
          <img id="finalCalculator" alt="profilePic" src={JavaScriptCalcScreenShot} height="350" width="250"/>
        </div>

        <section id="portfolioWrapper">
          <div id="contentText">
            <h3 id="contentHeader">OVERVIEW</h3>
            <p>The goal of this project was to build a calculator using JavaScript. The project was designed to help me understand how to write basic JavaScript functions,  algorithms, and work with the DOM to respond to user inputs. </p>

            <p>The JavaScript calculator was a project that I completed in July 2017 as part of The Iron Yard's Full-Stack Web Development Program. The Iron Yard was an immersive coding boot camp designed to help new developers learn the fundamentals of front and back-end programming languages.</p>

            <p>The tools I used to complete this project were Google Chrome, Chrome Developer Tool - Inspect, Atom Text Editor, and GitHub. The languages used in the project were HTML, CSS, and JavaScript.
            </p>

          <p>
            <ul>
              <li><a className="jsCalcCode" target="_blank" href="https://github.com/designbright/JavaScriptCalculator.git">View the Code on GitHub</a></li>
              <li><a className="jsCalcCode" target="_blank" href="  https://designbright.github.io/JavaScriptCalculator/">View the Live Site</a></li>
            </ul>
          </p>
          </div>

          <div id="contentRow1">

            <div id="theProcess">
              <h3 id="theProcessHeader">THE PROCESS</h3>
              <p>Step 1: Setup Project Files in Atom</p>
                <p>
                  Create an index.html file
		              Create a main.css file and link it to your index.html file
		              Create a main.js file and link it to your index.html file
                </p>

              <p>Step 2: Code the HTML and CSS</p>
                <p>In the HTML file, I chose to use a table to represent the body of my calculator. This enabled me to  rows and columns that would create the buttons. Using a table also allowed me to control specific elements I wanted to target with the JavaScript.  Next, I styled it using basic CSS. </p>

              <p>Step 3: Code the JavaScript</p>
                <p>Create some functions to store repeatable steps. You'll need to find a way to track the numbers pressed until the = is pressed</p>

            </div>
          </div>
        </section>


        <img id="htmlCodeSnip" alt="HTML Code Snippet" src={HTMLcode} height="450" width="450"/>
        <img id="JSCodeSnip" alt="profilePic" src={JScode} height="450" width="450"/>

        <section id="footer">
          <hr/>
          <ul id="footerNav">

            <a href="www.linkedin.com" id="linkedin">
              <img id="linkedinLogo" alt="linkedinLogo" src={linkedin}/>
            </a>

            <a href="wwww.instagram.com" id="instagram">
              <img id="instagramLogo" alt="instagramLogo" src={instagram}/>
            </a>

            <a href="wwww.github.com" id="github">
              <img id="githubLogo" alt="githubLogo" src={github}/>
            </a>

            <a href="wwww.gmail.com" id="gmail">
              <img id="gmailLogo" alt="ukmills12@gmail.com" src={gmail}/>
            </a>
          </ul>
        </section>
      </div>
    );
  }
}
