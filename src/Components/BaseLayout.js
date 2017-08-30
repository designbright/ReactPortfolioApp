import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class BaseLayout extends Component {
  constructor(){
    super()
  }

  render() {
    return (
      <div className="baseLayout">
        <div className = "navBar">
          <ul>
            <li><button className="btn"><Link to="/Home">Home</Link></button></li>

            <li><button className="btn"><Link to="/About">About</Link></button></li>

            <li><button className="btn"><Link to="/Portfolio">Portfolio</Link></button></li>
          </ul>
        </div>
          {this.props.children}
      </div>
    );
  }
}
