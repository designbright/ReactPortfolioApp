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
import QuickSneakers from './Components/QuickSneakers.js';
import IntranetRedesign from './Components/IntranetRedesign.js';
import PersonalBranding from './Components/PersonalBranding.js';
import JavaScriptCalculator from './Components/JavaScriptCalculator.js';

import Testimonials from './Components/Testimonials.js';
import Contact from './Components/Contact.js';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/About" component={About} />

        <Route path="/Portfolio" component={Portfolio}/>
        <Route path="/QuickSneakers" component={QuickSneakers}/>
        <Route path="/IntranetRedesign" component={IntranetRedesign}/>
        <Route path="/PersonalBranding" component={PersonalBranding}/>
        <Route path="/JavaScriptCalculator" component={JavaScriptCalculator}/>
        <Route path="/Testimonials" component={Testimonials}/>
        <Route path="/Contact" component={Contact}/>
      </Switch>
    </BaseLayout>
  </BrowserRouter>

,document.getElementById('root'));
registerServiceWorker();
