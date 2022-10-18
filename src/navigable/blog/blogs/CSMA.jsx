import React from "react";
import { Container } from "react-bootstrap";
import '../blogs.css'
import csma1 from "./cybermeshimges/csma1.jpg";
import csma2 from "./cybermeshimges/csma2.jpg";
import csma3 from "./cybermeshimges/csma3.jpg";
import csma4 from "./cybermeshimges/csma4.jpg";
import csma5 from "./cybermeshimges/csma5.jpg";
import csma6 from "./cybermeshimges/csma6.jpg";

export default function CSMA() {
    return (
    <div className="Blog">
        <Container className="blogcontent">
            <h2 className="blogtitle">Cyber Security Mesh Architecture (CSMA)</h2>
            <br />
            <p className="text-muted graphbound">
            Gartner created this approach that makes sense.  
            Putting this into our services cycle. 
            Starting with company assets, represented by best of breed point products. 
            </p>

            <img className="img-mesh" src={csma1} alt="Layout map of described cyber security mesh network"/>

            <p className="text-muted">SIEM & SOAR with an aggregation point.</p>
            <img className="img-mesh" src={csma2} alt="Layout map of with aggregation point" />

            <p className="text-muted"> Moving on to Security Intelligence, Threat Intelligence, Work flow & Automation.  </p>
            <img className="img-mesh" src={csma3} alt="Automation map of security"/>

            <p className="text-muted"> MUST add in Identity.</p>
            <img className="img-mesh" src={csma4} alt="Layout showing multi layer identity verification"/>

            <p className="text-muted">Posture & playbook managment</p>
            <img className="img-mesh" src={csma5} alt="posture and playbook map" />

            <p className="text-muted">Here you go! Full complete, happy mesh!</p>
            <img className="img-mesh" src={csma6} alt="Entire solution in one diagram" />
        </Container>
    </div>
    )
}