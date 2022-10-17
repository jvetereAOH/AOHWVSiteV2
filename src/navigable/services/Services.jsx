import React from 'react';
import { Container, Button} from 'react-bootstrap';
import ServicesImage from './Services.png';
import { Icon, List } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import ServiceCarocel from './ServicesCarocel';
import './Services.css';
export default function Services() {
    const professional = [
        { detail: 'On-perm to Cloud Migration'},
        { detail: 'Major software upgrades'},
        { detail: 'Identity Governance'},
        { detail: 'Single Sign-on'},
        { detail: 'Federation (SAML & Oauth)'},
        { detail: 'MFA'},
        { detail: 'Training & Mentoring'},
        { detail: 'Security Hardening'}
    ]

    const managed = [
        { detail : 'Maintain System Integrity'},
        { detail : 'Monitoring and Alarming'},
        { detail : 'Performance Management'},
        { detail : 'Periodic Security Audits'},
        { detail : 'Proactive analysis to avoid downtimes'},
        { detail : 'Identity Protection (detect & respond)'},
        { detail : 'Identity Incident Response'},
    ]

    return (
        <Container className="services">
            <ServiceCarocel/>
            <Container className="detail-buttons">
                <Link to = "managed_services">
                    <Button>Managed Services</Button>
                </Link>
                <Link to = "professional_services">
                    <Button>Professional Services</Button>
                </Link>
            </Container>
            {/* <img className="services-icon" src={ServicesImage} alt="Lay out of different services offered by AOH WV"/>
            <Container className="services-compare">
                <List className='list'>
                    {professional.map((service, index) => 
                    <List.Item>
                    <Icon name="check" className='green'/>
                    <List.Content>{service.detail}</List.Content>
                    </List.Item>
                    )}
                </List>
                <List className='list'>
                    {managed.map((service, index) => 
                    <List.Item>
                        <Icon name="circle" className='red'/>
                        <List.Content>{service.detail}</List.Content>
                    </List.Item>
                    )}
                </List>
            </Container> */}
        </Container>
    )
}