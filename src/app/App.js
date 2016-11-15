import React from "react";
import {render} from "react-dom";
import {BrowserRouter as Router, Link, Match, Miss } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Home_self from "./components/Home_self";
import Contacts from "./components/Contacts";
import Home from "./Home_test";
import About from "./About";
import Articles  from "./Article";
import Notfound  from "./Notfound";
import Animation  from "./Animation";


const  App= () => {
    return(
            <div>
                <Animation />
                <Router>
                    <div>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/About">About</Link></li>
                            <li><Link to="/Articles">Articles</Link></li>
                        </ul>
                        <hr/>
                        <Match exactly pattern='/' component={Home}/>
                        <Match pattern='/About' component={About}/>
                        <Match pattern='/Articles' component={Articles}/>
                        <Miss component={Notfound}/>
                    </div>
                </Router>
            </div>
    );
};

export default App;
