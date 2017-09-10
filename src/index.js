import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import './Styles/App.css';
import registerServiceWorker from './registerServiceWorker';

//import React Router
import {BrowserRouter, Route, Switch} from 'react-router-dom';

//import Components
import BaseLayout from './Components/BaseLayout.js';
import Home from './Components/Home.js';
import About from './Components/About.js';
import Portfolio from './Components/Portfolio.js';
import Testimonials from './Components/Testimonials.js';
import Contact from './Components/Contact.js';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route path="/Home" component={Home}/>
        <Route path="/About" component={About} />
        <Route path="/Portfolio" component={Portfolio}/>
        <Route path="/Testimonials" component={Testimonials}/>
        <Route path="/Contact" component={Contact}/>
      </Switch>
    </BaseLayout>
  </BrowserRouter>

,document.getElementById('root'));
registerServiceWorker();
