import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Jsq from './components/JSQ/Jsq.js';
import Nav from "./components/Nav/Nav.js";
import StudeyNote from "./components/StudeyNote/StudyNote.js";
import App from "./App.js";
import PhoneTest from './components/PhoneTest/PhoneTest.js';
import Chooser from "./components/Foodchooser/Chooser.js";
import Animation from "./components/Animation/Animation.js";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <div>
    <Nav />
    <Router>
      <Route exact path='/' component={App} />
      <Route path='/Jsq' component={Jsq} />
      <Route path='/StudyNote' component={StudeyNote} />
      <Route path='/PhoneTest' component={PhoneTest} />
      <Route path='/Chooser' component={Chooser}/>
      <Route path='/Animation' component={Animation}/>
      
      
    </Router>
  </div>
  ,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
