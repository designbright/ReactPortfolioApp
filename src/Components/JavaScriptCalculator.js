import React, {Component} from 'react';
import { Link } from 'react-router-dom';
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
  constructor(props){
    super(props)

  }
  render() {
    return (
      <div id="aboutPage">

        <div id="aboutHeader">
          <h1 id="aboutH1">JavaScript Calculator</h1>
        </div>


      <div id="profilePic">
        <img id="finalCalculator"  alt="profilePic" src={JavaScriptCalcScreenShot} height ="350" width= "250"/>
      </div>

          <section className="aboutMeSection">
              <div id="aboutMe">

              <div className="aboutMeText">

              <h3 id="contentHeader">OVERVIEW</h3>

              <p>This was my first website that I completed in May 2017 as part of The Iron Yard's Web Development Program. Below is the original mockup image that I was provided with prior to starting the project. I was also provided with the images that needed to be included. The project required that I use HTML elements such as sections, divs, ID's, classes, containers, buttons, navigation, and footers. I styled my CSS file by using floats, images, background gradients, etc</p>

              <p>The tools I used to complete this project were Google Chrome, Chrome Developer Tool - Inspect, Atom Text Editor, and GitHub.  </p>

                <h2 id="journeyH2">Why I Love Programming</h2>
                <p>I am a Web Developer and Designer from Raleigh, North Carolina.</p>
                <p> Currently, I am a Software Engineering student at the Iron Yard in Raleigh, North Carolina where I am acquiring skills for front and back-end web development. I will graduate from the Iron Yard in September 2017.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Currently, I am a Software Engineering student at the Iron Yard in Raleigh, North Carolina where I am acquiring skills for front and back-end web development. I will graduate from the Iron Yard in September 2017.</p>


              </div>
            </div>
          </section>


          <img id="calcMockup"  alt="profilePic" src={CalculatorMockup} height ="350" width= "250"/>
          <img id="htmlCodeSnip"  alt="profilePic" src={HTMLcode} height ="450" width= "650"/>
          <img id="JSCodeSnip"  alt="profilePic" src={JScode} height ="450" width= "650"/>


        <div id="contentRow1">
          <div id="contentText">
            <h3 id="contentHeader">OVERVIEW</h3>
            <p>The goal of this project was to build a calculator using JavaScript. The project was designed to help me understand how to write basic JavaScript functions,  algorithms, and work with the DOM to respond to user inputs. </p>

            <p id="viewCodeLink"><a id="quickSneakersCode" target="_blank" href="https://github.com/designbright/Quick-Sneakers.git">View the Code on GitHub</a></p>

            <p id="viewCodeLink"><a id="quickSneakersCode" target="_blank" href="  https://designbright.github.io/Quick-Sneakers/">View the Live Site</a></p>
          </div>
        </div>

          <div id="contentRow1">
            <div id="contentText">
              <h3 id="contentHeader">THE PROCESS</h3>
              <p>The goal of this project was to build a calculator using JavaScript. The project was designed to help me understand how to write basic JavaScript functions,  algorithms, and work with the DOM to respond to user inputs. </p>
            </div>
          </div>

          <div id="contentRow1">
            <div id="contentText">
              <h3 id="contentHeader">CHALLENGES AND LESSONS LEARNED</h3>
              <p>LThe most challenging part of this project was understanding the fundamentals of HTML and CSS. This was my first time ever coding anything. I was building the website as I learned new concepts during the class lectures. This made it difficult to understand the 'big picture' when laying out my HTML. I learned that coding a solid HTML file will make styling the webpage in CSS a lot easier. Learning about the "Box-Model" was crucial to my success in completing the assignment. The Box Model will also be a foundational skill that I rely on for future projects. </p>
            </div>
          </div>


          <section id="footer">
            <hr/>
            <ul id="footerNav">

              <a href="www.linkedin.com" id="linkedin">
                <img id="linkedinLogo"  alt="linkedinLogo" src={linkedin}/>
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
