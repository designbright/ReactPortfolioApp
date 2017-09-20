import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import BaseLayout from './BaseLayout.js';

import LogoDesigns from "../Images/PersonalBranding/logoDesigns.png";
import Fonts from "../Images/PersonalBranding/Fonts.png";
import Patterns from "../Images/PersonalBranding/patterns.png";
import BrandBoard1 from "../Images/PersonalBranding/BrandBoard1.png";
import BrandBoard2 from "../Images/PersonalBranding/BrandBoard2.png";

import linkedin from "../linkedin.PNG";
import github from "../github.PNG";
import instagram from "../instagram.PNG";
import gmail from "../gmail.PNG";



export default class Portfolio extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (

    <div id="portfolioPage">

    <div id="testimonialHeader">
      <h1 id="portfolioTop">Personal Branding</h1>
    </div>

    <section id="portfolioWrapper">
        <div id="contentText">
          <h3 id="contentHeader">OVERVIEW</h3>
          <p>The goal of this project was to learn more about the following topics: Create a personal brand that reflects my creative style, personality and values; Learn more about branding; Create a personal brand used to sell artwork; Self-discovery</p>

        <p>Design Bright is my personal brand and persona. Participating in my first craft fair was the catalyst to this design. I needed something to make my booth stand out and attract customers. My products consisted of colorful greeting cards and decorative watercolor and acrylic wall prints. I began researching everything I could about branding and started documenting my ideas. This allowed me to discover a lot about myself and how I wanted to introduce my talents and artistic personality to the world. My journey to creating the brand has been incredibly enlightening and has energized my soul.
​       </p>
        </div>

      <div id="contentRow1">

        <div id="contentText">
          <h3 id="contentHeader">THE LOGO DESIGN PROCESS</h3>
          <p>I wanted my brand logo to reflect my love for bright colors and hand lettering. The personality needed to be fun, bold, and simple. The typography for Design Bright is a hand lettering font. </p>
          <p> I created several different prototypes using different design tools such as pen and paper, Canva, iPad, and Wacom Tablet. I shared my ideas and designs with friends and family and gathered feedback on the design's strengths and improvement opportunities.</p>
        </div>
      </div>

      <p id="logoDesignsContainer">
        <img id="logoDesigns"  alt="logos" src={LogoDesigns} height ="300" width= "800"/>
      </p>

      <p id="fontsContainer">
        <img id="fonts"  alt="logos" src={Fonts} height ="300" width= "800"/>
      </p>

      <div id="contentRow1">

        <div id="contentText">
          <h3 id="contentHeader">COLOR & PATTERN SELECTION</h3>
          <p>The colors for Design Bright needed to reflect my personality -colorful, vibrant, and bold. When people ask me what my favorite color is, my response is always the same: I love all of them, especially glitter. I wanted to incorporate pinks, golds, blues, yellows, and blacks. I customized color pallettes using Adobe Color to find RGB and HEX codes​</p>

          <p>I wanted the Design Bright patterns to reflect something you would find at a fashion boutique or funky art gallery. They needed to be abstract and colorful. I was inspired by textures such as acrylic paint and gold patterns</p>

          <p>Tools used: iPad, Wacom Tablet, Pinterest</p>

          <p id="patternsContainer">
            <img id="patterns"  alt="patterns" src={Patterns} height ="300" width= "800"/>
          </p>
        </div>
      </div>

      <div id="contentRow1">
        <div id="contentText">
          <h3 id="contentHeader">BRAND BOARDS - PUTTING IT ALL TOGETHER</h3>
          <p>The final step in my branding design process was to compile all of my research, designs, and inspiration in order to communicate my vision is a clear, simple manner. Once I narrowed down the logos, color palettes, fonts, and pattern designs, I created brand boards to showcase the big picture. I used Canva to create my brand boards</p>

          <p id="brandBoardContainer">
            <img id="brandboard1"  alt="brandBoard" src={BrandBoard1} height ="700" width= "500"/>
              <img id="brandboard2"  alt="brandBoard" src={BrandBoard2} height ="700" width= "500"/>
          </p>

          <p id="brandBoardContainer"></p>
        </div>
      </div>
    </section>

    <section id="footer">
      <hr/>
      <ul id="footerNav">
        <a href="https://www.linkedin.com/in/kelly-miller-b2417756/" id="linkedin" target="_blank">
          <img id="linkedinLogo" alt="linkedinLogo" src={linkedin}/>
        </a>

        <a href="https://www.instagram.com/design_bright/" id="instagram" target="_blank">
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
