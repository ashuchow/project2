import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Alert, Card, Modal, Breadcrumb, Table } from "react-bootstrap";
function contactUs() {
    return (
        <div>
        <div className="header">
          <h1>Contact Details</h1>
        </div>

        
        <div className = 'container-contact'>
            <Card>
            <Card.Header>Contact</Card.Header>
            <Card.Body>
                <Card.Title>Helpline No.</Card.Title>
                <Card.Text>
                +919191919191
                </Card.Text>
                <Card.Title>Email us</Card.Title>
                <Card.Text>
                contact@travelit.com
                </Card.Text>
                <Card.Title>Address</Card.Title>
                <Card.Text>
                42-F, Lorem ipsum Avenue, Lorem Ipsum Pradesh, Republic of Lorem Ipsum 
                </Card.Text>
                
            </Card.Body>
            </Card>
        </div>
        </div>
    )
}

export default contactUs