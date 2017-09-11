import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import BaseLayout from './BaseLayout.js';


export default class Testimonials extends Component {

  constructor(props){
    super(props)
  }

  render() {
    return (
      <section id="testimonialsSection">

        <div id="testimonialHeader">
          <h1 id="testimonialsH1">Testimonials</h1>
        </div>

        <div id="testimonialTiles">

          <div id="testimonial">
            <p>"Thanks for consistently knocking it out of the park, and catching the things that I would have otherwise overlooked that create a hiccup free candidate and manager experience."</p>
            <p> -- Talent Acquisition Specialist @ Red Hat</p>
          </div>

          <div id="testimonial">
            <p> Thank you for being such an exceptional collaborative partner. Your role is extremely important. Your partnership is essential to present a positive opinion of Red Hat to potential future employees. You are always engaging and leave important stakeholders (whether candidate's or hiring managers) with a positive impression. Your positive attitude and patience are second to none, and make you a wonderful partner to be paired with. Thank you for all that you do!""</p>
            <p> -- Talent Acquisition Specialist @ Red Hat</p>
          </div>

          <div id="testimonial">
            <p>OMG!! I want everything you make--you are AMAZING!!!! I am interested in speaking with you at the fair; love your stuff!</p>
            <p> -- Craft Fair Customer</p>
          </div>

        </div>
      </section>
    );
  }
}
