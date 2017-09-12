import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import BaseLayout from './BaseLayout.js';

import BrandBoard1 from "../Images/PersonalBranding/BrandBoard1.png";
import Shoe from "../Images/QuickSneakers/shoe2.png";
import JavaScriptCalcScreenShot from "../Images/JavaScriptCalculator/JSCalcScreenShot.png";
import Mojo from "../Images/IntranetRedesign/MojoSite.png";

import linkedin from "../linkedin.PNG";
import github from "../github.PNG";
import instagram from "../instagram.PNG";
import gmail from "../gmail.PNG";

export default class Portfolio extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (

      <div id="portfolioPage">

        <div id="testimonialHeader">
          <h1 id="portfolioTop">Portfolio</h1>
        </div>

        <section id="portfolioWrapper">
          <div id="contentText">
            <h1>MORE PROJECTS COMING SOON!</h1>
            <p id="viewCodeLink">
              <a id="quickSneakersCode" target="_blank" href="https://github.com/designbright">View More Projects on GitHub</a>
            </p>
            <h3 id="contentHeader">Click an image below to learn more about each project</h3>
          </div>

          <a className="portfolioLink" href="/PersonalBranding">
            <p id="brandBoardContainer">
              <img id="brandboard1" alt="brandBoard" src={BrandBoard1} height="600" width="450"/>
            </p>
          </a>

          <a className="portfolioLink" href="/QuickSneakers">
            <p id="brandBoardContainer">
              <img id="brandboard1" alt="brandBoard" src={Shoe} height="300" width="450"/>
            </p>
          </a>

          <a className="portfolioLink" href="/JavaScriptCalculator">
            <p id="brandBoardContainer">
              <img id="brandboard1" alt="brandBoard" src={JavaScriptCalcScreenShot} height="450" width="350"/>
            </p>
          </a>

          <a className="portfolioLink" href="/IntranetRedesign">
            <p id="brandBoardContainer">
              <img id="brandboard1" alt="brandBoard" src={Mojo} height="450" width="350"/>
            </p>
          </a>

          <a className="portfolioLink" target="_blank" href="https://instagram.com/design_bright">
            <p id="brandBoardContainer">
            <img id="instagramLogo" alt="instagramLogo" src={instagram}/>
            </p>
          </a>


        </section>

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
