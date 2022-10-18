import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from './../images/Placeholderlogo.png';
import { ExternalLink } from "react-external-link";
import { Icon, List } from 'semantic-ui-react';
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
                <Link to = "/overview">OVERVIEW</Link>
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
                <ExternalLink href = "https://www.linkedin.com/company/atomic-orbital-hydrogen-wave-vector/?viewAsMember=true">
                    <Icon name = "linkedin" className = "aohgreen"/>
                </ExternalLink>
                <br/>
                <ExternalLink href = "https://www.youtube.com/channel/UCW6PSV0dfDPXXSGCtEAOg_A?app=desktop">
                    <Icon name = "youtube" className = "aohgreen"/>
                </ExternalLink>
                <br />
                <ExternalLink href = "https://twitter.com/AOHWV">
                    <Icon name = "twitter" className = "aohgreen"/>
                </ExternalLink>
            </Col>
        </Row>
    </Container>
    )
}