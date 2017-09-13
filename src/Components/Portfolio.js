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
            <h1 id="moreProjects">MORE PROJECTS COMING SOON!</h1>
            <h3 id="contentHeader">Click an image below to learn more about each project</h3>
            <p id="viewCodeLink">
              <a className="portfolioLinks" target="_blank" href="https://github.com/designbright">View More Projects on GitHub</a>
            </p>

            <p className="portfolioLinks" >
            <a href="https://www.instagram.com/design_bright/
" id="instagram" target="_blank">View my Artwork on Instagram</a>
            </p>



          </div>

          <section id="portfolioRow1">
            <a className="portfolioLink" href="/PersonalBranding">
              <p id="brandBoardContainer">
                <img id="brandboard1" alt="Personal Branding Project" src={BrandBoard1} height="600" width="450"/>
              </p>
            </a>

            <a className="portfolioLink" href="/QuickSneakers">
              <p id="brandBoardContainer">
                <img id="brandboard1" alt="Quick Sneakers Project" src={Shoe} height="300" width="450"/>
              </p>
            </a>
          </section>

          <section id="portfolioRow2">

            <a className="portfolioLink" href="/JavaScriptCalculator">
              <p id="brandBoardContainer">
                <img id="brandboard1" alt="JavaScript Calculator Project" src={JavaScriptCalcScreenShot} height="450" width="350"/>
              </p>
            </a>

            <a className="portfolioLink" href="/IntranetRedesign">
              <p id="brandBoardContainer">
                <img id="brandboard1" alt="Intranet Redesign Project" src={Mojo} height="450" width="650"/>
              </p>
            </a>

          </section>
        </section>

        <section id="footer">
          <hr/>
          <ul id="footerNav">
            <a href="https://www.linkedin.com/in/kelly-miller-b2417756/
  " id="linkedin" target="_blank">
              <img id="linkedinLogo" alt="linkedinLogo" src={linkedin}/>
            </a>

            <a href="https://www.instagram.com/design_bright/
  " id="instagram" target="_blank">
              <img id="instagramLogo" alt="instagramLogo" src={instagram}/>
            </a>

            <a href="https://github.com/designbright" id="github" target="_blank">
              <img id="githubLogo" alt="githubLogo" src={github}/>
            </a>

            <a href="mailto:ukmills12@gmail.com" id="gmail" target="_blank">
              <img id="gmailLogo" alt="ukmills12@gmail.com" src={gmail}/>
            </a>
          </ul>

        </section>

      </div>
    );
  }
}
