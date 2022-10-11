import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { ExternalLink } from "react-external-link";

export default function PushBoundryofIGA() {
    return (
        <div className="Blog">
            <Container className="blogcontent">
                <h1 className="blogtitle">Push the boundary of IGA & HRMS</h1>
            
                <p>
                In HRMS driven provision workflow, 
                HRMS acts the “authoritative source or trust source” for FTE to manage Joiner/Mover/Leaver event. 
                The identity data originated from HRMS and reconcile into IGA except for “immediate termination”. 
                Typically, contractors are reconciled into IGA separately.  
                </p>
                
                <p>
                This does not manage well for these two important use cases. 
                The first one is re-hire. The second is conversion: contractor convert into employee 
                or vice versa. For most companies, 
                they must build custom logic in both HRMS and IGA solution and most of them still requires manual data remediation. 
                In today’s environment, the issue becomes more visible due to high workforce turn over. 
                </p>
                
                <p>
                IGA is the “identity data warehouse” for both contractor & employee for the enterprise. 
                Why not allow IGA to manage these two use cases directly? Or more importantly, 
                to allow the “IGA” as the true “trust source” for employee/contractors.  
                </p>

                <p>
                This was inspired by the vision of one of our clients in healthcare. 
                </p>
            </Container>
        </div>
        )
}
