import React from 'react';
import { Container } from 'react-bootstrap';
import robertAndLaura from './robertandlaura.jpg';
import "./home.css";
/**
 * Render home page
 * 
 */
export default function Home() {
    return (
    <Container className='homepage'>
        <h2 className="home-h2">Meet AOH</h2>

        <p className="home-p">
        Our size is small, but our mission is big.  
        Atomic Orbital Hydrogen Wave Vector (AOH) is motivated to provide the best possible service to institutions needing capable brains to improve current identity posture. 
        </p>

        <p>
        Robert has been in Identity for over 25 years.  He is the principal architect of this practice.  Robert understands complex environments & not afraid to ask difficult questions. 
        </p>

        <h2 className="home-h2">A Security first approach to Identity</h2>

        <p className="home-p">
        Our approach to building and delivering a service, team and ultimate security best posture for clients is a phased approach.  
        Magic & easy button sound & feels wonderful, but it is not the case.  
        Everything especially identity is difficult with multiple interconnected systems, politics, and people.   
        </p>

        <h2 className="home-h2">The AOH Difference</h2>

        <p className="home-p">
        Good service matters.  We provide that.  
        </p>

        <img className="home-img" src={robertAndLaura} alt="Image of our founding paratners" />
    </Container>
    )
}
