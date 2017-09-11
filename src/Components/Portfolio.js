import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import BaseLayout from './BaseLayout.js';

import personalLogo from "../personalLogo.PNG";

export default class Portfolio extends Component {
  constructor(props){
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
          <p id="viewCodeLink"><a id="quickSneakersCode" href="https://github.com">View More Projects on GitHub</a></p>
          <h3 id="contentHeader">MORE PROJECTS COMING SOON!</h3>
        </div>
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

        <a className="portfolioLink" target="_blank" href="https://instagram.com/design_bright">
          <div className="showcase">
            <p id="green">VIEW MY ART WORK ON INSTAGRAM Iam a green square</p>
          </div>
        </a>

      <div id="pictureRow">
          <p id="blue">Iam a blue square</p>
         <p id="red">I am a red square</p>
         <p id= "green">I am a greeen square </p>
      </div>
    </section>
  </div>
    );
  }
}
