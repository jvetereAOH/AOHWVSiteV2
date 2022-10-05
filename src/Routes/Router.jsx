// Primary Router
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes
  } from "react-router-dom";
import AOHNav from '../comp/AOHNav';
import Home from '../navigable/Home';
import Blog from '../navigable/Blog';
import ManagedServices from '../navigable/ManagedServices';
import Method from '../navigable/Method';
import ProfessionalServices from '../navigable/ProfessionalServices';
import Resources from '../navigable/Resources';
import Store from '../navigable/store/Store';
import MDfooter from '../comp/MDfooter';

/**
 * Router Component
 * @returns Router embedded in Nav bar
 */
function RouterComp() {
    return (
        <Router>
            <header className="App-header">
            <AOHNav/>
            </header>
            <Routes>
                <Route exact path="/" component={Home}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/method" component={Method}/>
                <Route exact path="/pro_services" component={ProfessionalServices}/>  
                <Route exact path="/manged_services" component={ManagedServices}/>
                <Route exact path="/store" component={Store}/>
                <Route exact path="/blog" component={Blog}/>
                <Route exact path="/resources" component={Resources}/>
            </Routes>
            <footer>
                {/* <MDfooter/> */}
            </footer>
        </Router>
    )
}
export default RouterComp;