// Primary Router
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes
  } from "react-router-dom";
import AOHNav   from '../comp/AOHNav';
import BootFooter from '../comp/BootFooter';
import AboutUs     from '../navigable/home/AboutUs';
import BlogPreview     from '../navigable/blog/BlogPreview';
import ContactUs   from '../navigable/contact/ContactUs';
import ProfessionalServices from '../navigable/services/ProfessionalServices';
import Services from '../navigable/services/Services';
import JobListings            from '../navigable/resources/jobListings';
import Store     from '../navigable/store/Store';
import Home from '../navigable/home/Home';
import OktaPhishing from '../navigable/blog/blogs/oktaphishing'
import PushBoundryofIGA from '../navigable/blog/blogs/PushBoundryofIGA'
import CSMA from '../navigable/blog/blogs/CSMA';
import RestoreMsolUser from '../navigable/blog/blogs/Restore-MsolUser';
import { Container } from 'react-bootstrap';
import HealthCheck from '../navigable/services/HealthCheck';
/**
 * Router Component
 * @returns Router embedded in Nav bar
 */
function RouterComp() {
    return (
        <Router style = {{height: "60%"}}>
            <Container style={{display: "flex", position: "absolute", left: "0", right: "0", top: "0", bottom: "0", overflowY: "auto", flexDirection: "column", gap: "1vw", maxWidth: "100%", width: "100%", maxHeight: "auto", height: "100%", padding: "0", alignItems: "center", margin: "0", maxHeight: "100%"}}>
            <AOHNav/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/home" element={<Home/>}/>
                <Route exact path="/about-us" element={<AboutUs/>}/>
                <Route exact path="/contact-us" element={<ContactUs/>}/>
                <Route exact path="/overview/professional_services" element={<ProfessionalServices/>}/>  
                <Route exact path="/overview" element={<Services/>}/>
                <Route exact path="/blog" element={<BlogPreview/>}/>
                <Route exact path="/job-listing" element={<JobListings/>}/>
                <Route exact path="/blog/oktaphising" element={<OktaPhishing/>}/>
                <Route exact path="/blog/pushingtheboundry" element={<PushBoundryofIGA/>}/>
                <Route exact path="/blog/cybersecurity-mesh-architecture" element={<CSMA/>}/>
                <Route exact path="/blog/rsol" element={<RestoreMsolUser/>}/>
                <Route exact path='/job_listings' element={<JobListings/>}/>
                <Route exact path="/overview/healthcheck" element={<HealthCheck/>}/>
            </Routes>

            <BootFooter style ={{alignSelf: "flex-end"}}/>
            </Container>
            
        </Router>
    )
}
export default RouterComp;