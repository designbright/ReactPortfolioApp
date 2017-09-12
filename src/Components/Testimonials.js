import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import BaseLayout from './BaseLayout.js';

import linkedin from "../linkedin.PNG";
import github from "../github.PNG";
import instagram from "../instagram.PNG";
import gmail from "../gmail.PNG";


export default class Testimonials extends Component {

  constructor(props){
    super(props)
  }

  render() {
    return (

      <div>
      <section id="testimonialsSection">

        <div id="testimonialHeader">
          <h1 id="testimonialsH1">Testimonials</h1>
        </div>

        <div id="testimonialTiles">

          <div id="testimonial">
            <p>"Thanks for consistently knocking it out of the park, and catching the things that I would have otherwise overlooked that create a hiccup free candidate and manager experience."</p>
            <p className="testimonialName"> -- Talent Acquisition Specialist @ Red Hat</p>
          </div>

          <hr id="testimonialHR"/>

          <div id="testimonial">
            <p> Thank you for being such an exceptional collaborative partner. Your role is extremely important. Your partnership is essential to present a positive opinion of Red Hat to potential future employees. You are always engaging and leave important stakeholders (whether candidate's or hiring managers) with a positive impression. Your positive attitude and patience are second to none, and make you a wonderful partner to be paired with. Thank you for all that you do!""</p>
            <p className="testimonialName"> -- Talent Acquisition Specialist @ Red Hat</p>
          </div>

          <hr id="testimonialHR"/>

          <div id="testimonial">
            <p>OMG!! I want everything you make--you are AMAZING!!!! I am interested in speaking with you at the fair; love your stuff!</p>
            <p className="testimonialName"> -- Craft Fair Customer</p>
          </div>

          <hr id="testimonialHR"/>

        </div>
      </section>

      <section id="footer">

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
