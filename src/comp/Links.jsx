import Nav from 'react-bootstrap/Nav';
import { NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";

/**
 * Links in seperate because Dropdown is a pain in the ass
 * @returns Links element
 */
function Links() {

    return (
    <Nav className="justify-content-end" style={{"padding-top":"5%"}}>
        <Nav.Link >
            <Link to="/home">HOME</Link>
        </Nav.Link>
        <Nav.Link>
            <Link to="/method">METHODOLOGY</Link>
        </Nav.Link>
        <NavDropdown variant="dark" title="SOLUTIONS" id="basic-nav-dropdown">
            <NavDropdown.Item><Link to="/pro_services" style={{'color':'black'}}>Professional Services</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to="/managed_services" style={{'color':'black'}}>Managed Services</Link></NavDropdown.Item>
        </NavDropdown>
        <Nav.Link><Link to="/store">STORE</Link></Nav.Link>
        <Nav.Link><Link to="/blog">BLOG</Link></Nav.Link>
        <Nav.Link><Link to="/resources">RESOURCES</Link></Nav.Link>
    </Nav>
  );
}

export default Links;
