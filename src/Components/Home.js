import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import BaseLayout from './BaseLayout.js';

export default class Home extends Component {

  constructor(props){
    super(props)
  }

  render() {
    return (

  <section id="home">
    <p id="headerName">Kelly Miller</p>
    <p id="headerTitle">Developer | Designer | Creative-ist</p>
  </section>

    );
  }
}
