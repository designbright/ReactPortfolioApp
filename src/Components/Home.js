import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import BaseLayout from './BaseLayout.js';

import MojoHome from "../MojoSite.png";


import QuickSneakersWireframe from "../QuickSneakersWireframe.jpg";


import linkedin from "../linkedin.PNG";
import github from "../github.PNG";
import instagram from "../instagram.PNG";
import gmail from "../gmail.PNG";


export default class Home extends Component {

  constructor(props){
    super(props)
  }

  render() {
    return (
<div id="homeWrapper">

  <section id="home">
    <p id="headerName">Kelly Miller</p>
    <p id="headerTitle">Developer | Designer | Creative-ist</p>
  </section>

  <section id="aboutSection">
    <h1>ABOUT</h1>
      <hr/>
    <div id="aboutText">
      <p className="aboutMeText">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

      <p className="aboutMeText">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

      <a id="readMyBlog" href="#">Read My Blog</a>
    </div>
  </section>

  <section id="portfolioSection">
    <h1 id="portfolioH1">PORTFOLIO</h1>
      <hr/>
      <div id="showcaseProjects">

      <a className="portfolioLink" href="/QuickSneakers">
        <div id="tile">
          <img id="QSwireframe"  alt="QSwireframe" src={QuickSneakersWireframe} height ="150" width= "200"/>

            <div id="tileDescription">
            <p>This is where the project description will go. Need to add goal of project and languages used to create it</p>
            </div>
        </div>
        </a>


      </div>
  </section>

  <section id="pictureRow">
    <a className="portfolioLink" href="/IntranetRedesign">
      <div className="showcase">
        <p id="blue">INTRANET REDESIGN Iam a blue square</p>
      </div>
    </a>

    <a className="portfolioLink" href="/PersonalBranding">
      <div className="showcase">
        <p id="red">PERSONAL BRADING Iam a red square</p>
      </div>
    </a>

    <a className="portfolioLink" href="/QuickSneakers">
      <div className="showcase">
        <p id="green">QUICK SNEAKERS Iam a green square</p>
      </div>
    </a>

  </section>

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

    <p id="copyright">Copyright DesignBright 2017</p>
  </section>
</div>
    );
  }
}
