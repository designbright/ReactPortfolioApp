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

                <h2 id="journeyH2">OVERVIEW</h2>

                <p>Build a calculator with JavaScript!</p>

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
