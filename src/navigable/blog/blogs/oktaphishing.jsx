import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { ExternalLink } from "react-external-link";

function OktaPhishing() {
    return (
    <div className="Blog">
        <Container className="blogcontent">
            <h1 className="blogtitle">SMS Phishing Attacks affecting Okta IAM Solution</h1>
        
            <p className="graphbound">
                There has been a slew of SMS phishing attacks recently 
                & SMS/OTP is most prevailing token delivery mechanism as 
                second factor authentication but it is also a weak security measure.
            </p>
                <ExternalLink className="bloglink" href = "https://lnkd.in/esm9EAgm ">How 1-Time Passcodes Became a Corporate Liability</ExternalLink> 
            <br />
    
            <p>
                What we at AOH recommend along with our Partner Okta: 
            </p>
            <ol className="graphbound">
                <li>To mitigate the first factor, use a personalized message or insert image at Tenant or Org Level. Applying at the account level is preferable.</li>
                <li>To mitigate second factor, use WebAuthn.</li>
            </ol>
            <br />
            <ExternalLink className="bloglink" href = "https://lnkd.in/eu5iktQR">Okta Help: About MFA</ExternalLink>
            <br />
            <ExternalLink className="bloglink" href = "https://lnkd.in/ey3Js9x3">Okta Help: Change sign-on logo</ExternalLink>
        </Container>
    </div>
    )
}
export default OktaPhishing;