import React, { Component } from 'react';
import {Switch,Route,BrowserRouter as Router} from 'react-router-dom';
import Home from '../components/Home/home';
import Contact from '../components/Contact/contact';
import About from '../components/About/about';
class Routes extends Component {
    render() { 
        return ( 
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/contact" component={Contact}></Route>
                    <Route exact path="/about" component={About}></Route>
                </Switch>
         );
    }
}
 
export default Routes;