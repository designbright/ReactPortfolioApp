import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import BaseLayout from './BaseLayout.js';

import linkedin from "../linkedin.PNG";
import github from "../github.PNG";
import instagram from "../instagram.PNG";
import gmail from "../gmail.PNG";

import Resume from "../MillerKellyResume2017.pdf";


export default class Contact extends Component {

  constructor(props){
    super(props)
  }

  render() {
    return (
      <div id="aboutPage">

        <div id="aboutHeader">
          <h1 id="aboutH1">Contact</h1>
        </div>

          <section className="aboutMeSection">
              <div id="aboutMe">

              <div className="aboutMeText">

                <h2 id="journeyH2">I am available for hire!</h2>
                <h2 id="journeyH2">Email: ukmills12@gmail.com </h2>
                <h2 id="journeyH2">Phone: 704-614-0992</h2>

              <p id="downloadResume"><a target="_blank" href={Resume}>Download My Resume</a></p>

              </div>
            </div>
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
          </section>
      </div>
    );
  }
}
