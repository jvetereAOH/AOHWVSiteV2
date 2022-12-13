import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import './Nav.css';
import logo from '../images/Placeholderlogo.png';
import Nav from 'react-bootstrap/Nav';
/**
 * Render basic bootstrap navbar
 * @returns Navbar
 */
function Navbars() {

    return (
        <Navbar variant="dark" className="AOHNav">
            <Container className="NavContainer">
                <Navbar.Brand href="/" style={{height: "100%"}}>
                    <img src={logo} className="nav-image"/>
                </Navbar.Brand>
                <Nav className="justify-content-end" style={{"padding-top":"5%"}}>
                    <Nav.Link >
                        HOME
                    </Nav.Link>
                    <Nav.Link >
                        ABOUT US
                    </Nav.Link>
                    <Nav.Link >
                        SERVICES
                    </Nav.Link>
                    <Nav.Link>
                        BLOGS
                    </Nav.Link>
                    <Nav.Link>
                        CONTACT US
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navbars