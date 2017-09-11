import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class BaseLayout extends Component {
  constructor(){
    super()
  }
  render() {
    return (
      <div className="navBarContainer">

        <section id= "navBar">
          <ul>
            <li className="navLink"><Link to="/">HOME</Link></li>
            <li className="navLink"><Link to="/About">ABOUT</Link></li>
            <li className="navLink"><Link to="/Portfolio">PORTFOLIO</Link></li>
            <li className="navLink"><Link to="/Testimonials">TESTIMONIALS</Link></li>
            <li className="navLink"><Link to="/Contact">CONTACT</Link></li>
          </ul>
        </section>

          {this.props.children}
      </div>
    );
  }
}
