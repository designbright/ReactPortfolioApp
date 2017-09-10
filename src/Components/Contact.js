import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import BaseLayout from './BaseLayout.js';


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

                <h2 id="journeyH2">My Journey to Engineering</h2>

                <p>I am a Web Developer and Designer from Raleigh, North Carolina.</p>

                <h2 id="journeyH2">Why I Love Programming</h2>

                <p>I am a Web Developer and Designer from Raleigh, North Carolina.</p>

                <p> Currently, I am a Software Engineering student at the Iron Yard in Raleigh, North Carolina where I am acquiring skills for front and back-end web development. I will graduate from the Iron Yard in September 2017.</p>

                <p id="downloadResume"><a href="https://medium.com">Download My Resume</a></p>

              </div>
            </div>

          </section>
      </div>
    );
  }
}
