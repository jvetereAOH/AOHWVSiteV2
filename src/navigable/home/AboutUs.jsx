import React from 'react';
import { Container, Button} from 'react-bootstrap';
import FootLogo from './FootLogo.jpg';
import { Link } from "react-router-dom";
import "./home.css";
/**
 * Render home page
 * 
 */
export default function AboutUs() {
    return (
    <Container className='homepage'>
        <h2 className="home-h2">Meet AOH</h2>

        <p className="home-p">
        Atomic Orbital Hydrogen Wave Vector (AOH) is motivated to provide the best possible service to institutions needing capable brains to improve current identity posture. 
        </p>

        <h2 className="home-h2">A Security First Approach to Identity</h2>

        <p className="home-p">
        Our approach to building and delivering a service, team and ultimate security best posture for clients is a phased approach.  
        Everything especially identity is difficult with multiple interconnected systems, politics, and people.   
        </p>

        <h2 className="home-h2">The AOH Difference</h2>

        <p className="home-p">
        Good service matters.  We provide that.  
        </p>

        <img className="home-img" src={FootLogo} alt="Image of our founding paratners" />

        <Container style = {{display: "flex", gap: "50px", alignSelf: "center", width: "50%", height: "15%"}}>
            <h3 style = {{width:"50%"}}>Join Us</h3>
            <Link exact to = "/job_listings">
                <Button style = {{height: "30%", backgroundColor: "black"}} className='detailbut'>View Open Positions</Button>
            </Link>
        </Container>

    </Container>
    )
}
