import React from 'react';
import { Container, Button} from 'react-bootstrap';
import ServicesImage from '../images/services.jpg';
import serv1 from '../images/serv1.jpg';
import serv2 from '../images/serv2.jpg';


export default function Services() {
    const IGA = [
        "Analysis, requirement and solution design",
        "Data analysis and data correlation- authoritative source/HRMS and target systems",
        "HRMS driven single authoritative solution provision",
        "HRMS and additional source systems augmented provision",
        "Guardrail, Rule, Policy Management",
        "Application onboarding & integration",
        "Custom Report"
      ]
      const IAM = [
        "Analysis, requirement and solution design",
        "Multi-tenant or multi-site design Solution Service",
        "On-Board Identity System: Active Directory, LDAP, Azure Active Director",
        "On-Board Cloud based applications- SAML, OIDC",
        "Application Classification and its associated security policy",
        "MFA enablement & enrollment",
        "Single Sign On SSO",
        "Security Assessment, Gap Analysis, Actionable Mitigation Steps"
      ]
      const ITDR = [
        "Analysis, requirement and solution design",
        "Data analysis- Active Directory Solution Service",
        "On-prem model: Agent deployment & Application Deployment",
        "Cloud deployment model: agent deployment",	
        "Security (FW) management",
        "Performance management",
        "Out-of-band-listen & gather",
        "Inline–actively protect",
        "Custom report"
      ]
    return (
        <Container className='services'>
            
            <img src = {ServicesImage} style={{  gap: "0", height: "90%", width:"90%", alignSelf: "center", padding: "80px 0"}} alt = "List of supplied services in a graph: IGA -> Access review Prov..."/>
            
        
            <Container className = "back2">
                <a className='service-title'>SERVICES</a>
                <Container style = {{ display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-between"}}>
               
                <img src = {serv1} className = "service-image" alt = "List of supplied services in a graph: IGA -> Access review Prov..."/>
                    <Container style = {{ display: "flex", flexDirection: "column"}}>
                    <h2>IGA</h2>
                        {IGA.map((service, index) => 
                            <p className = "service-list">{service}</p>
                            
                        )}
                    </Container>
                </Container>
                {/* <Container style = {{ display: "flex", flexDirection: "row", width: "100%", paddingTop: "200px", paddingLeft: "60px", gap: "10px"}}>
                    <img src = {serv2} className = "service-image" alt = "List of supplied services in a graph: IGA -> Access review Prov..."/>
                    <h2>IAM</h2>
                    {IAM.map((service, index) => 
                        <p className = "service-list">{service}</p>
                        
                    )}
                </Container> */}
            </Container>
        
        </Container>
        //     {/* <img className="services-icon" src={ServicesImage} alt="Lay out of different services offered by AOH WV"/>
            
        // </Container>
    )
}