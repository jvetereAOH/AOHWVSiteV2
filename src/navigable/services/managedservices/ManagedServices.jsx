import React from 'react';
import { Container } from 'react-bootstrap';
import { Icon, List } from 'semantic-ui-react';

/**
 * Managed Services Page
 * @Todo Outline
 */
function ManagedServices() {
    const lifecycle = [
        {detial: "(Joiner,Mover,Lever) management"},
        {detail: "Third Party vendor management"},
        {detail: "Temp worker or contractor management"},
        {detail: "Conversation & transfers"}
    ]
    return (
    <Container className="managed-services">
        <Container className="item">
        <h2>User Identity Lifecyle Management</h2>
        <List className='list'>
                    {lifecycle.map((service, index) => 
                    <List.Item>
                    <Icon name="check" className='green'/>
                    <List.Content>{service.detail}</List.Content>
                    </List.Item>
                    )}
                </List>

        </Container>
    </Container>
    )
}

export default ManagedServices;