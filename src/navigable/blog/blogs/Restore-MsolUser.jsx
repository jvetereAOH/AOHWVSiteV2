import React from "react";
import { Container } from "react-bootstrap";
import { ExternalLink } from "react-external-link";
import img from './Picture1.jpg';
import '../blogs.css'
export default function RestoreMsolUser() {
    return (
        <div className="Blog">
            <Container className="blogcontent">
                <h1 className="blogtitle">Restore-MsolUser</h1>
            
                <p>
                After working full blast for 23-years I took a break with a mentor & wrote a script for a tv series called tradecraft. 
                It was about a husband & wife that owned a cyber security services company. 
                An IoT tooth told her what to do except when it was buried far into the earth. 
                90% non-fiction. 
                </p>
                
                <p>
                In the story, I was trying to describe what was seen in the sky. 
                You can draw an <ExternalLink className="bloglink" href = "https://www.linkedin.com/company/atomic-orbital-hydrogen-wave-vector?trk=public_profile_topcard-current-company">Atomic Orbital Hydrogen Wave Vector.</ExternalLink> 
                </p>
                
                
                <p>
                Identity is the ultimate attack service. 
                All trail runs lead to identity. 
                We all have our own stories & constantly need to re-invent ourselves.  
                No matter what we are selling, delivering, or being.    
                </p>

                <p>
                It takes 23 years to have 23 years-experience. 
                </p>

                <img className="img-mesh roundedborder" src={img} alt="Layout map of described cyber security mesh network"/>


                <a className="text-muted">By Laura Hees</a>
            </Container>
        </div>
        )
}
