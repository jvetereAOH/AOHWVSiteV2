import Nav from 'react-bootstrap/Nav';
import Dropdown from './Dropdown';

function Links() {

    return (
    <Nav className="justify-content-end">
        <Nav.Link href="#home">HOME</Nav.Link>
        <Nav.Link href="#features">METHODOLOGY</Nav.Link>
        <Nav.Link href="#solutions">SOLUTION</Nav.Link>
        <Nav.Link href="#pricing">STORE</Nav.Link>
        <Nav.Link href="#pricing">BLOG</Nav.Link>
        <Nav.Link href="#pricing">RESOURCES</Nav.Link>
    </Nav>
  );
}

export default Links;
