import React from 'react';

import { Container, Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import { ExternalLink } from "react-external-link";
import { Icon, List } from 'semantic-ui-react';
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
            </Row>
        </Container>
    )
}

export default ContactUs;