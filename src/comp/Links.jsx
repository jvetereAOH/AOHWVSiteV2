import Nav from 'react-bootstrap/Nav';
import { NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { ExternalLink } from "react-external-link";
import './Nav.css';
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
        <NavDropdown variant="dark" title="SERVICES" id="basic-nav-dropdown" className = "glow">
            <NavDropdown.Item className = "glow">
                <Link to="/overview" style={{color:'black'}} >OVERVIEW</Link>
            </NavDropdown.Item>
            <NavDropdown.Item><Link to="/overview/professional_services" style={{'color':'black'}}>PROFESSIONAL SERVICES</Link></NavDropdown.Item>
        </NavDropdown>
        <a className="glow nav-link" href="https://nam12.safelinks.protection.outlook.com/?url=https%3A%2F%2Fusm.channelonline.com%2Faohwv%2Fstoresite%2FProducts%2Fall%3Fstandard%3Dtrue&data=05%7C01%7Cjvetere%40aohwv.com%7C2220c2daeab5472766a008dab0f58058%7C66ee295d6dc74d80a7f27ada5cbdcbe0%7C0%7C0%7C638016866047617657%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=EldtwCKOBrpOrlK3wEYPMhe4F9IV66nOufoBEWj3Nm0%3D&reserved=0">STORE</a>

        <Nav.Link><Link to="/blog">BLOG</Link></Nav.Link>
        <Nav.Link><Link to="/contact-us">CONTACT US</Link></Nav.Link>
    </Nav>
  );
}

export default Links;

