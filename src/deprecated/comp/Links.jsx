import Nav from 'react-bootstrap/Nav';

/**
 * Links in seperate because Dropdown is a pain in the ass
 * @returns Links element
 */
function Links() {

    return (
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
  );
}

export default Links;

