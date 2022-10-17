import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";

import './BootFoot.css'
export default function BootFooter () {
    return (
    <Container className="footer">
        <Row>
            <h2 className="foot-header">Atomic Orbital Hydrogen Wave Vector<br/> Complexity Simplified</h2>
        </Row>
        <Row className="foot-row">
            <Col className = "foot-col">
                <h3 className="heading">ABOUT US</h3>
                <Link to = "/managed_services">HOME</Link>
                <br/>
                <Link to = "/blog">BLOG</Link>
            </Col>
            <Col className = "foot-col">
                <h3 className="heading">SERVICES</h3>
                <Link to = "/home">MANAGED SERVICES</Link>
                <br/>
                <Link to = "/blog">PROFESSIONAL SERVICES</Link>
            </Col>
            <Col className = "foot-col">
                <h3 className="heading">ABOUT US</h3>
                <Link to = "/home">HOME</Link>
                <br/>
                <Link to = "/blog">BLOG</Link>
            </Col>
            <Col className = "foot-col">
                <h3 className="heading">ABOUT US</h3>
                <Link to = "/home">HOME</Link>
                <br/>
                <Link to = "/blog">BLOG</Link>
            </Col>
        </Row>
    </Container>
    )
}