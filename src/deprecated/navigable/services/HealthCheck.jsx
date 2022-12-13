import { Container } from 'react-bootstrap';
import { Icon, List } from 'semantic-ui-react';
import States from './Capture.JPG'

export default function HealthCheck() {
    const healthCheck = [
        'IGA. Identity Governance',
        'Source of Truth',
        'User Life Cycle Management; User Roles & Creations, Least Privilege',
        'Workflow, process creation',
        'Password Management; Privileged Accounts & Non - Privileged',
        'On-Premise Active Directory, Azure Active Directory, Hybrid, LDAP',
        'Applications not integrated with SSO',
        'ServiceNOW, SNOW, EPIC integrations'
    ];
    return (
        <Container style = {{ display: "flex", flexDirection: "row", height: "2400px", width: "75%", margin: "2% 10% 110px 10%"}}>
            <Container style = {{ display: "flex", flexDirection: "column",  gap: "4%",height: "100%", width: "70%"}}>
                <h1 className="font" style={{fontWeight: "bold", fontSize: "x-large"}}>
                    IDENTITY ACCESS
                </h1>
                <h1 className="font" style={{fontWeight: "bold", fontSize: "x-large"}}>
                    MANAGEMENT HEALTH CHECK
                </h1>
                <h3 className="font" style={{fontWeight: "bold", fontSize: "large", backgroundColor: "#99ff65", width: "50%"}}>
                    PAM, IAM, SAM I AM?
                </h3>
                <p style ={{width: "50%"}}>It does not matter the OEM or the capacity you are using the tool currently for identity. Will review & help provide oversight & architecture set of eyes to help you plan with your specific scenario. Organizations and technologies are constantly evolving & often impossible to keep up unless this is what you are doing all day long.</p>

                <Container style={{display: "flex", flexDirection: "column", width: "50%", height: "100%", margin: "20px"}}>

                <List>
                    {healthCheck.map((service, index) => 
                    <List.Item className = "item-pad">
                    <Icon style = {{fontSize: "smaller", color: "#D8FF97"}} name="circle"/>
                    <List.Content>{service}</List.Content>
                    </List.Item>
                    )}
                </List>
                </Container>
            </Container>
            <Container style = {{ display: "flex", flexDirection: "column", height: "100%", width: "30%"}}>
                <img src = {States} alt ="Current state future state phased approach" style = {{ alignSelf: "center", maxWidth: "75%", minWidth: "50%", objectFit:"contain"}}/>
            </Container>
        </Container>
    )
}