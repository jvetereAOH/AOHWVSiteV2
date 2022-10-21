import { Container } from 'react-bootstrap';
import { Icon, List } from 'semantic-ui-react';
import "./Services.css"
import logo from './../../images/Placeholderlogo.png';
function ProfessionalServices() {
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
      "Inline –actively protect",
      "Custom report"
    ]
    return (
      <Container className="services-compare">
        <Container className = "ser-row">
                <Container style={{display: "flex", flexDirection: "column", width: "50%", height: "100%", margin: "20px"}}>
                <h3 style={{color: "#D8FF97"}}>IGA</h3>
                
                <List className='comparel'>
                    {IGA.map((service, index) => 
                    <List.Item className = "item-pad">
                    <Icon name="globe" className='lcontent'/>
                    <List.Content className='lcontent'>{service}</List.Content>
                    </List.Item>
                    )}
                </List>
                </Container>
                <Container style={{display: "flex", flexDirection: "column", width: "50%", height: "100%", margin: "20px"}}>
                <h3 style={{color: "#D8FF97"}}>IAM</h3>
                
                <List className='comparel'>
                    {IAM.map((service, index) => 
                    <List.Item className = "item-pad">
                    <Icon name="table" className='lcontent'/>
                    <List.Content className='lcontent'>{service}</List.Content>
                    </List.Item>
                    )}
                </List>
                </Container>
              </Container>
        <Container className="ser-row">
          <Container style={{display: "flex", flexDirection: "column", width: "50%", height: "100%", margin: "20px"}}>
          <h3 style={{color: "#D8FF97"}}>ITDR</h3>
          
          <List className='comparel'>
              {ITDR.map((service, index) => 
              <List.Item className = "item-pad">
              <Icon name="terminal" className='lcontent'/>
              <List.Content className='lcontent'>{service}</List.Content>
              </List.Item>
              )}
          </List>
          
          </Container>
          <Container style={{display: "flex", flexDirection: "column", width: "50%", height: "100%", gap: "10%", margin: "20px"}}>
                    <h3 style={{textAlign: "center", color: "#D8FF97"}}>For More Information<br />Reach Out At</h3>
                    <a className='lcontent' href="mailto:info@aohwv.com">info@aohwv.com</a>

                    <a className='lcontent'> 970.722.8500</a>
              
                    <a className='lcontent' href="https://www.google.com/maps/place/516+N+Ogden+Ave+%23112,+Chicago,+IL+60642/@41.8916581,-87.6592501,17z/data=!3m1!4b1!4m5!3m4!1s0x880e2d2a173ac6f5:0xa863d75fc0f09807!8m2!3d41.8916581!4d-87.6592501" style={{ color: "#D8FF97", marginBottom: "25px"}}> 516 N Ogden #112 Chicago, IL 60642-6421</a>
          </Container>
        </Container>
        </Container> 

    )

}

export default ProfessionalServices;