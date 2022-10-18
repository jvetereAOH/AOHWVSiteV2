import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from './../images/Placeholderlogo.png';
import { ExternalLink } from "react-external-link";
import './BootFoot.css'

export default function BootFooter () {
    return (
    <Container className="footer">
        <Row style={{alignItems: "center"}}>
            <img className="foot-img" src={logo} alt="Image of our founding paratners" />
        </Row>
        <Row className="foot-row">
            <Col className = "foot-col">
                <h3 className="heading">ABOUT US</h3>
                <Link to = "/home">HOME</Link>
                <br/>
                <Link to = "/contact-us">CONTACT US</Link>
            </Col>
            <Col className = "foot-col">
                <h3 className="heading">SERVICES</h3>
                <Link to = "/overview/managed_services">MANAGED SERVICES</Link>
                <br/>
                <Link to = "/overview/professional_services">PROFESSIONAL SERVICES</Link>
            </Col>
            <Col className = "foot-col">
                <h3 className="heading">LEARN MORE</h3>
                <Link to = "/blog">BLOGS</Link>
                <br/>
                <Link to = "/job-listing">JOB LISTINGS</Link>
            </Col>
            <Col className = "foot-col">
                <h3 className="heading">SOCIAL MEDIA</h3>
                <ExternalLink href = "https://www.linkedin.com/company/atomic-orbital-hydrogen-wave-vector/?viewAsMember=true">LINKEDIN</ExternalLink>
                <br/>
                <ExternalLink href = "https://www.youtube.com/channel/UCW6PSV0dfDPXXSGCtEAOg_A?app=desktop">YOUTUBE</ExternalLink>
                <br />
                <ExternalLink href = "https://twitter.com/AOHWV">TWITTER</ExternalLink>
            </Col>
        </Row>
    </Container>
    )
}