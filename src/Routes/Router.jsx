// Primary Router
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes
  } from "react-router-dom";
import AOHNav   from '../comp/AOHNav';
import MDfooter from '../comp/MDfooter';

import Home     from '../navigable/home/Home';
import EffectBlog     from '../navigable/blog/EffectBlog';
import Store    from '../navigable/store/Store';
import Method   from '../navigable/methodology/Method';
import ManagedServices      from '../navigable/services/ManagedServices';
import ProfessionalServices from '../navigable/services/ProfessionalServices';
import Resources            from '../navigable/resources/Resources';

import OktaPhishing from '../navigable/blog/blogs/oktaphishing'
import PushBoundryofIGA from '../navigable/blog/blogs/PushBoundryofIGA'
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
                <Route exact path="/blog" element={<EffectBlog/>}/>
                <Route exact path="/resources" component={Resources}/>
                <Route exact path="/blog/oktaphising" element={<OktaPhishing/>}/>
                <Route exact path="/blog/pushingtheboundry" element={<PushBoundryofIGA/>}/>
            </Routes>
            <footer>
                {/* <MDfooter/> */}
            </footer>
        </Router>
    )
}
export default RouterComp;