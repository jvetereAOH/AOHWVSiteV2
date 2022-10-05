import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import Links from './Links';
import './Nav.css';
import logo from './../images/Placeholderlogo.png';

/**
 * Render basic bootstrap navbar
 * @returns Navbar
 */
function AOHNav() {

    return (
        <Navbar variant="dark" className="AOHNav">
        <Container className="NavContainer">
          <Navbar.Brand href="#home">
            <img src={logo} className="nav-image"/>
          </Navbar.Brand>
          <Links/>
        </Container>
      </Navbar>
    )
}

export default AOHNav