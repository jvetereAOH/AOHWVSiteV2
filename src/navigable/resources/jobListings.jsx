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
                    <br />
                    <a style={{ color: "#D8FF97"}}> 970.722.8500</a>
                    <br />
                    <a href="https://www.google.com/maps/place/516+N+Ogden+Ave+%23112,+Chicago,+IL+60642/@41.8916581,-87.6592501,17z/data=!3m1!4b1!4m5!3m4!1s0x880e2d2a173ac6f5:0xa863d75fc0f09807!8m2!3d41.8916581!4d-87.6592501" style={{ color: "#D8FF97", marginBottom: "25px"}}> 516 N Ogden #112 Chicago, IL 60642-6421</a>
        </Container>
    </Container>
    )
}

export default JobListings;