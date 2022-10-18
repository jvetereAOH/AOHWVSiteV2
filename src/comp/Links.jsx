import Nav from 'react-bootstrap/Nav';
import { NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { ExternalLink } from "react-external-link";

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
        <Nav.Link >
            <Link to="/about-us">ABOUT US</Link>
        </Nav.Link>
        {/* <Nav.Link>
            <Link to="/method">METHODOLOGY</Link>
        </Nav.Link> */}
        {/* <Nav.Link>
            <Link to="/services">SERVICES</Link>
        </Nav.Link> */}
        <NavDropdown variant="dark" title="SERVICES" id="basic-nav-dropdown">
            <NavDropdown.Item>
                <Link to="/overview" style={{'color':'black'}}>OVERVIEW</Link>
            </NavDropdown.Item>
            <NavDropdown.Item><Link to="/overview/professional_services" style={{'color':'black'}}>PROFESSIONAL SERVICES</Link></NavDropdown.Item>
        </NavDropdown>
        <Nav.Link><ExternalLink href="https://usm.channelonline.com/aohwv/storesite/Products/all?standard=true">STORE</ExternalLink></Nav.Link>        
        <Nav.Link><Link to="/blog">BLOG</Link></Nav.Link>
        <Nav.Link><Link to="/contact-us">CONTACT US</Link></Nav.Link>
    </Nav>
  );
}

export default Links;

