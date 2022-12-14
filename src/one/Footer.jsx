import React from "react";
import { Container } from "react-bootstrap";
import { ExternalLink } from "react-external-link";
import { Icon } from 'semantic-ui-react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "./ContactUs.css"
var Scroll = require('react-scroll');
var Link = Scroll.Link;


export default function Footer () {
    return (
    <Container className="prime">
        <div className="layer1">
            <a style = {{fontSize: "2vw", color: "black"}}>
            FOR MORE INFORMATION
            </a>
            
            <a style = {{fontSize: "1.5vw", color: "black"}} href="mailto:info@aohwv.com">info@aohwv.com</a>

            <a style={{fontSize: "1.5vw", color: "black"}}> 833.646.7300</a>
            <a style={{fontSize: "1.5vw", color: "black"}} href="https://www.google.com/maps/place/516+N+Ogden+Ave+%23112,+Chicago,+IL+60642/@41.8916581,-87.6592501,17z/data=!3m1!4b1!4m5!3m4!1s0x880e2d2a173ac6f5:0xa863d75fc0f09807!8m2!3d41.8916581!4d-87.6592501"> 516 N Ogden #112 Chicago, IL 60642-6421</a>
        </div>
        <div className="layer2">
            <a style = {{fontSize: "2vw", color: "white", fontWeight: "bold"}}>
            FOLLOW US ON SOCIAL MEDIA
            </a>
            <div className="socials">
                <ExternalLink style = {{color: "white"}} href = "https://twitter.com/AOHWV">
                    <Icon name = "twitter" style = {{color: "white", fontSize: "5vw"}}/>
                </ExternalLink>
                <ExternalLink style = {{color: "white"}} href = "https://www.linkedin.com/company/atomic-orbital-hydrogen-wave-vector/?viewAsMember=true">
                    <Icon name = "linkedin" style = {{color: "white", fontSize: "5vw"}}/>
                </ExternalLink>
                <ExternalLink style = {{color: "white"}} href = "https://www.youtube.com/channel/UCW6PSV0dfDPXXSGCtEAOg_A?app=desktop">
                        <Icon name = "youtube" style = {{color: "white", fontSize: "5vw"}}/> 
                </ExternalLink>
            </div>
        </div>
        <div className="layer3">
        <Navbar className="footnav">
        <Container className="NavContainer">
            <Nav  >
            <Nav.Link>
                <Link className="link" activeClass="active" to="home" spy={true} smooth={true} duration={250} containerId="containerElement">
                    HOME
                </Link>
            </Nav.Link>
            <Nav.Link>
                <Link className="link" activeClass="active" to="about_page" spy={true} smooth={true} duration={250} containerId="containerElement">
                        ABOUT US
                </Link>
            </Nav.Link>
            <Nav.Link>
            <Link className="link" activeClass="active" to="services" spy={true} smooth={true} duration={250} containerId="containerElement">
                    SERVICES
                </Link>
            </Nav.Link>
           
            <Nav.Link>
            <Link className="link"  activeClass="active" to="blog" spy={true} smooth={true} duration={250} containerId="containerElement">
                BLOGS
            </Link>
            </Nav.Link>
            <Nav.Link>
                <Link className="link" activeClass="active" to="contact" spy={true} smooth={true} duration={250} containerId="containerElement">
                    CONTACT US
                </Link>
            </Nav.Link>
            </Nav>
        </Container>
    </Navbar>
    </div>
    <div className="layer4">
        <a className="copy">
        © 2008-2022 GLW Specialty
        </a>
    </div>
      
    </Container>
    )
}