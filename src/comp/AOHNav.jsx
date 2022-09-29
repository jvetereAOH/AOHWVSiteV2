import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './Nav.css';
import logo from './../images/Placeholderlogo.png';

function AOHNav() {

    return (
        <Navbar variant="dark" className="AOHNav">
        <Container className="NavContainer">
          <Navbar.Brand href="#home">
            <img src={logo} className="nav-image"/>
          </Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#features">METHODOLOGY</Nav.Link>
            <Nav.Link href="#solutions">SOLUTIONS</Nav.Link>
            <Nav.Link href="#pricing">STORE</Nav.Link>
            <Nav.Link href="#pricing">BLOG</Nav.Link>
            <Nav.Link href="#pricing">RESOURCES</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default AOHNav