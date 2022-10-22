import React from 'react';

import { Container, Row, Col} from "react-bootstrap";
import { ExternalLink } from "react-external-link";
import { Icon } from 'semantic-ui-react';
import "./ContactUs.css";
/**
 * Methodology Page
 * @Todo: Outline
 */
function ContactUs() {
    return (
        <Container>
            <h1>Contact Us</h1>
            <Row>
                <Col style = {{margin: "100px"}}>
                    <h3>Follow Us At</h3>
                    <ExternalLink style = {{color: "black"}} href = "https://www.linkedin.com/company/atomic-orbital-hydrogen-wave-vector/?viewAsMember=true">
                        <Icon name = "linkedin" style = {{color: "black"}}/> Linkedin
                    </ExternalLink>
                    <br/>
                    <ExternalLink style = {{color: "black"}} href = "https://www.youtube.com/channel/UCW6PSV0dfDPXXSGCtEAOg_A?app=desktop">
                        <Icon name = "youtube" style = {{color: "black"}}/> YouTube
                    </ExternalLink>
                    <br />
                    <ExternalLink style = {{color: "black"}} href = "https://twitter.com/AOHWV">
                        <Icon name = "twitter" style = {{color: "black"}}/> Twitter
                    </ExternalLink>
                    <br />
                    <ExternalLink style = {{color: "black"}} href = "https://www.facebook.com/AtomicOrbitalHydrogenWaveVector/">
                        <Icon name = "facebook" style = {{color: "black"}}/> Facebook
                    </ExternalLink>
                    <br />
                    <ExternalLink style = {{color: "black"}} href = "https://www.instagram.com/AOH_IAM">
                        <Icon name = "instagram" style = {{color: "black"}}/> Instagram
                    </ExternalLink>
                </Col>
                <Col className = "contact-email">
                    <h3 style={{paddingTop: "25px", color: "#D8FF97"}}>For More Information<br />Reach Out At</h3>
                    <a href="mailto:info@aohwv.com">info@aohwv.com</a>
                    <br />
                    <a style={{ color: "#D8FF97"}}> 970.722.8500</a>
                    <br />
                    <a href="https://www.google.com/maps/place/516+N+Ogden+Ave+%23112,+Chicago,+IL+60642/@41.8916581,-87.6592501,17z/data=!3m1!4b1!4m5!3m4!1s0x880e2d2a173ac6f5:0xa863d75fc0f09807!8m2!3d41.8916581!4d-87.6592501" style={{ color: "#D8FF97", marginBottom: "25px"}}> 516 N Ogden #112 Chicago, IL 60642-6421</a>
                </Col>
            </Row>
        </Container>
    )
}

export default ContactUs;