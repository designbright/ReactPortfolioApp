import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import BaseLayout from './BaseLayout.js';

import ProfilePic from "../Images/ProfilePic.JPG";

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
          <h1 id="aboutH1">Meet the Designer</h1>
        </div>


      <div id="profilePic">
        <img id="profilePicImage"  alt="profilePic" src={ProfilePic} height ="350" width= "250"/>
      </div>

          <section className="aboutMeSection">
              <div id="aboutMe">

              <div className="aboutMeText">

                <h2 id="journeyH2">My Journey to Engineering</h2>

                <p>I am a Web Developer and Designer from Raleigh, North Carolina.</p>

                <p> Currently, I am a Software Engineering student at the Iron Yard in Raleigh, North Carolina where I am acquiring skills for front and back-end web development. I will graduate from the Iron Yard in September 2017.</p>

                <p>I am a self-taught "creative-ist" pursuing my passion in technology and design.  I live by a simple mantra, "Design a life you love". I believe that anyone can design an authentic, fulfilling life through self-discovery and creative exploration.</p>

                <p>My artistic style is bright, simple, and colorful. I am inspired by artists who color outside the lines. I dabble in mediums such as acrylics and watercolor. Doodles, line drawings, and sketches ae especially awesome to me!</p>

                <p>Prior to being a Developer, I was a student-athlete at the University of Kentucky and a member of the women's soccer team majoring in Kinesiology and Education. I graduated from the University of North Carolina at Chapel Hill with a degree in Exercise and Sport Science. At UNC, I  was a member of the women's rugby and rowing teams.</p>

                <h2 id="journeyH2">Why I Love Programming</h2>

                <p>I am a Web Developer and Designer from Raleigh, North Carolina.</p>

                <p> Currently, I am a Software Engineering student at the Iron Yard in Raleigh, North Carolina where I am acquiring skills for front and back-end web development. I will graduate from the Iron Yard in September 2017.</p>

                <p id="downloadResume"><a href="https://medium.com">Download My Resume</a></p>

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

            <p id="copyright">Copyright DesignBright 2017</p>
          </section>
      </div>
    );
  }
}
