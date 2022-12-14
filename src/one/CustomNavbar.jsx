import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import './Nav.css';
import logo from '../images/Placeholderlogo.png';
import Nav from 'react-bootstrap/Nav';
var Scroll = require('react-scroll');
var Link = Scroll.Link;

/* Render basic bootstrap navbar
 * @returns Navbar
 */
function CustomNavbar() {


    return (
    <Navbar variant="dark" className="AOHNav static">
        <Container className="NavContainer">
            <Navbar.Brand style={{height: "100%"}}>
                <img src={logo} className="nav-image"/>
            </Navbar.Brand>
            <Nav className="justify-content-end" style={{"padding-top":"5%"}}>
            <Nav.Link>
                <Link activeClass="active" to="home" spy={true} smooth={true} duration={250} containerId="containerElement">
                    HOME
                </Link>
            </Nav.Link>
            <Nav.Link>
                <Link activeClass="active" to="about_page" spy={true} smooth={true} duration={250} containerId="containerElement">
                        ABOUT US
                </Link>
            </Nav.Link>
            <Nav.Link>
            <Link activeClass="active" to="services" spy={true} smooth={true} duration={250} containerId="containerElement">
                    SERVICES
                </Link>
            </Nav.Link>
           
            <Nav.Link>
            <Link activeClass="active" to="blog" spy={true} smooth={true} duration={250} containerId="containerElement">
                BLOGS
            </Link>
            </Nav.Link>
                <Nav.Link>
                    <Link activeClass="active" to="contact" spy={true} smooth={true} duration={250} containerId="containerElement">
                        CONTACT US
                    </Link>
                </Nav.Link>
            </Nav>
        </Container>
    </Navbar>
    )
}

export default CustomNavbar