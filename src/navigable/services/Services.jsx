import React from 'react';
import { Container, Button} from 'react-bootstrap';
// import ServicesImage from './Services.png';
import { Icon, List } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import ServiceCarocel from './ServicesCarocel';
import './Services.css';
import ServicesImage from './AI3.jpg';
export default function Services() {

    return (
          <Container className="services">
            
            <img src = {ServicesImage} style={{  gap: "0", height: "100%", width:"100%"}}/>
            <h2 style = {{fontFamily: "'proxima-nova', sans-serif"}}>This is our playground.  Let’s get started.</h2>
            <Link to = "professional_services">
                    <Button className='detailbut' style = {{fontFamily: "'proxima-nova', sans-serif"}}>View Professional Services</Button>
            </Link>   
        </Container>
        //     {/* <img className="services-icon" src={ServicesImage} alt="Lay out of different services offered by AOH WV"/>
            
        // </Container>
    )
}