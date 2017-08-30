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

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route path="/Home" component={Home}/>
        <Route path="/About" component={About} />
        <Route path="/Portfolio" component={Portfolio}/>
      </Switch>
    </BaseLayout>
  </BrowserRouter>

,document.getElementById('root'));
registerServiceWorker();
