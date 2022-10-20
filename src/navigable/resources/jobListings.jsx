import React from 'react';
import { Container } from 'react-bootstrap';
import ESE from './EnterpriseSalesExecutive';
/**
 * Resources Page
 * @Todo: Outline
 */
function JobListings() {
    return (
    <Container>
        <h1>JOB LISTINGS</h1>
        <ESE/>
        <Container className = "contact-email">
                    <h3 style={{paddingTop: "25px", color: "white"}}>For More Information<br />Reach Out At</h3>
                    <a href="mailto:info@aohwv.com">info@aohwv.com</a>
        </Container>
    </Container>
    )
}

export default JobListings;