import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import About from "./About";  
import Contact from "./Contact";
import React_logo from './React_logo.png';
class Main extends Component {
    render() {
      return (
        <HashRouter>
          <div>
            <h2>Simple SPA</h2>
            <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
              <li><NavLink to="/stuff">About</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <div className="content">
              <Route exact path="/" component={Home}/>
              <Route path="/stuff" component={About}/>     
              <Route path="/contact" component={Contact}/>
            </div>
            <div className="logo-container">
                <img src={React_logo} alt="logo" width="350" height="350" />
            </div>
          </div>
        </HashRouter>
      );
    }
  }
export default Main;
