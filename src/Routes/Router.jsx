// Primary Router
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes
  } from "react-router-dom";
import AOHNav   from '../comp/AOHNav';
import Footer from '../comp/footer';
import BootFooter from '../comp/BootFooter';
import Home     from '../navigable/home/Home';
import EffectBlog     from '../navigable/blog/EffectBlog';
import Store    from '../navigable/store/Store';
import Method   from '../navigable/methodology/Method';
import ManagedServices      from '../navigable/services/managedservices/ManagedServices';
import ProfessionalServices from '../navigable/services/ProfessionalServices';
import Services from '../navigable/services/Services';
import Resources            from '../navigable/resources/Resources';

import OktaPhishing from '../navigable/blog/blogs/oktaphishing'
import PushBoundryofIGA from '../navigable/blog/blogs/PushBoundryofIGA'
import CSMA from '../navigable/blog/blogs/CSMA';
import { Container } from 'react-bootstrap';
/**
 * Router Component
 * @returns Router embedded in Nav bar
 */
function RouterComp() {
    return (
        <Router style = {{maxHeight: "100%"}}>
            <Container style={{display: "flex", position: "absolute", left: "0", right: "0", top: "0", bottom: "0", overflowY: "auto", flexDirection: "column", gap: "1vw", maxWidth: "100%", width: "100%", maxHeight: "auto", height: "100%", padding: "0", alignItems: "center", margin: "0", maxHeight: "100%"}}>
            <AOHNav/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/home" element={<Home/>}/>
                {/* <Route exact path="/method" component={Method}/> */}
                <Route exact path="/pro_services" element={<ProfessionalServices/>}/>  
                <Route exact path="/managed_services" element={<ManagedServices/>}/>
                <Route exact path="/overview" element={<Services/>}/>
                {/* <Route exact path="/store" component={Store}/> */}
                <Route exact path="/blog" element={<EffectBlog/>}/>
                <Route exact path="/resources" element={<Resources/>}/>
                <Route exact path="/blog/oktaphising" element={<OktaPhishing/>}/>
                <Route exact path="/blog/pushingtheboundry" element={<PushBoundryofIGA/>}/>
                <Route exact path="/blog/cybersecurity-mesh-architecture" element={<CSMA/>}/>
            </Routes>

            <BootFooter style ={{alignSelf: "flex-end"}}/>
            </Container>
            
        </Router>
    )
}
export default RouterComp;