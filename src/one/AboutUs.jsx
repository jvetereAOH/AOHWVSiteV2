import { Container } from 'react-bootstrap';
import './us.css'
import { Component } from 'react';

export default class AboutUs extends Component {
  render() {
      return (
      <Container  className='back' style = {{display: "flex", flexDirection: "row"}}>    
        <Container style ={{display: "flex", flexDirection: "column", width: "70%"}}>

        </Container>
        <Container style ={{display: "flex", flexDirection: "column", width: "30%", gap: "2vw", paddingTop: "2vw"}}>
          <h2>Meet AOH</h2>
          <p>Atomic Orbital Hydrogen Wave Vector (AOH) is motivated to provide the best possible service to institutions needing capable brains to improve current identity posture.</p>
          <h2>A Security First Approach to Identity</h2>

          <p>
          Our approach to building and delivering a service, team and ultimate security best posture for clients is a phased approach.  
          </p>

          <h2>The AOH Difference</h2>

          <p>
          Good service matters.  We provide that.  
          </p>
        </Container>
      </Container>
      )
  }
}