import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import BaseLayout from './BaseLayout.js';

import MojoSite from "../MojoSite.png";
import MojoWk1 from "../Images/MojoWk1.png";
import MojoWk2 from "../Images/MojoWk2.png";
import MojoMonth3 from "../Images/MojoMonth3.png";
import MojoWhiteboard from "../Images/MojoWhiteboard.png";

export default class Portfolio extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (

    <div id="portfolioPage">

    <div id="testimonialHeader">
      <h1 id="portfolioTop">New Hire Onboarding Portal</h1>
    </div>

    <section id="portfolioWrapper">
        <div id="contentText">
          <h3 id="contentHeader">OVERVIEW</h3>

          <p>The goal of this project was to re-design an existing team intranet page to enhance the global new hire onboarding training program. The need for this project resulted from an increase in new hires being added to the Human Resources department at a rapidly growing open-source technology company.</p>

          <p>The company needed a globally scaleable solution in the form of an 'onboarding portal' via the existing company intranet. The company intranet, known to internal employees as "Mojo", is a product of Jive Software. Mojo is used as an internal resource for employees to collaborate and access information such as company announcements and projects.</p>

          <p>Ultimately, the new hire onboarding portal that would serve as an internal toolkit to help new employees learn their job quicker and more efficiently. The portal would be a central place for all process documentation, team announcements, and training guides.</p>
        </div>

        <p id="viewCodeLink"><a id="quickSneakersCode" href="https://github.com">View the Code on GitHub</a></p>

        <p id="mojoSiteContainer">
          <img id="mojoSite"  alt="mojoSite" src={MojoSite} height ="500" width= "800"/>
        </p>



      <div id="pictureRow">
        <p id="blue">Iam a blue square
          <img id="mojoWk1"  alt="Week1" src={MojoWk1} height="400" width="400"/>
        </p>

        <p id="red">I am a red square
          <img id="mojoWk2"  alt="Week2" src={MojoWk2} height ="400" width= "400"/>
        </p>

        <p id= "green">I am a greeen square
          <img id="mojoWk3"  alt="Week3" src={MojoMonth3} height ="400" width= "400"/>
        </p>

      </div>


      <div id="contentRow1">
        <div id="contentText">
          <h3 id="contentHeader">THE DESIGN PROCESS</h3>
          <p>Understanding the big picture was crucial to designing an outstanding team onboarding portal. I began researching the intranet for other teams who may have created similar portals and training toolkits. I also explored the organizational structure of the global Human Resources department. I began putting together a list of people who could be subject matter experts on my project team. </p>
          <p>I started whiteboarding my ideas and sharing my designs with peers. Once all versions were approved, I started creating a test site in Mojo to explore all of the possible features and functionality.</p>
          <p>The real test was to actually use the newly created site to train a new hire. The new hires would provide my project team with feedback on topics such as user experience, information architecture, and most importantly, the impact the site had on their ramp-up time to productivity. The overall feedback from new hires was positive. They appreciated having all the information they needed to know in one place. They also liked the breakdown of information in terms of WHAT they needed to know and WHEN.</p>

          <p>Below is a snapshot of the final product. All of the links for role specific process documentation will take you to the team Google drive where updated documentation lives.</p>
          <p id="mojoWhiteboardImageContainer">
            <img id="mojoWhiteboard"  alt="mojoWhiteboard" src={MojoWhiteboard} height ="500" width= "500"/>
          </p>
        </div>
      </div>

      <div id="contentRow1">
        <div id="contentText">
          <h3 id="contentHeader">CHALLENGES AND LESSONS LEARNED</h3>
          <p>ADD CONTENT</p>
        </div>
      </div>

    </section>

  </div>
    );
  }
}
