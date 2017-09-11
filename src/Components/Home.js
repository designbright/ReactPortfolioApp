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
