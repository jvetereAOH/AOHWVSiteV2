import React from 'react';
import { Container } from 'react-bootstrap';
import './jobs.css';

export default function ESE() {
    return (
        <Container className = 'font' style={{display: 'flex', flexDirection: 'column', margin: "5%", padding: "5%"}}>
            <h3 style={{fontWeight: 'bold'}}>Enterprise Sale Executive</h3>
            <br />
            <p className = "font">
            The AOH Enterprise Sales Executive will communicate present & demonstrate AOH 
            product  &  services  solutions.    During  the  sales  cycle  the  Enterprise  Sales 
            Executive  will  work  with  the  IAM  engineering  team  to  architect  solutions, 
            identify  vendor  solutions  that  meet  the  client’s  requirements  and  position 
            competitive solutions.  The Enterprise Sales Executive will also be responsible 
            for identifying needs and selling services.  Writing and presenting skills are 
            a must.
            </p>
            <ul>
                <li>Strong background in Information Security & Identity Access Management</li>
                <li>Deep understanding of complex government agencies, contract programs etc</li>
                <li>Establishing strategic business relationships within Corporate, Education & Enterprise Accounts</li>
                <li>Previous identity experience hard requirement</li>
            </ul>

            <h4>Responsibilities</h4>

            <ul>
                <li>Effectively translate customer requirements</li>
                <li>Maintain certification with top partners</li>
                <li>Apply vendor solutions that address technical requirement</li>
            </ul>

            <h4>Requirements</h4>
            <ul>
            <li>5-7 years of services sales experience</li>
            <li>5-7 years of information security experience</li>
            <li>EXCELLECT customer service skills </li>
            <li>Strong communication skills (phone and email) </li>
            <li>Self-managed and team oriented </li>
            </ul>

            
        </Container>
    )
}