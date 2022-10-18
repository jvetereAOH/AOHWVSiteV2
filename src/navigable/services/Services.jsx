import React from 'react';
import { Container, Button} from 'react-bootstrap';
import ServicesImage from './Services.png';
import { Icon, List } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import ServiceCarocel from './ServicesCarocel';
import './Services.css';
export default function Services() {

    return (
        <Container className="services">
            <ServiceCarocel/>
            <Container className="detail-buttons">
                <Link to = "professional_services">
                    <Button className='detailbut'>View Professional Services</Button>
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