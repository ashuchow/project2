import React from 'react'
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';
import {Card} from 'react-bootstrap';



function bookFlight() {
    return (
        <div>
            <div>
            <h1>Flight Details</h1>
            </div>
            <div>
            <Card>
            <Card.Header>Flight Name</Card.Header>
            <Card.Body>
                <Card.Title>Delhi to Kolkata</Card.Title>
                <Card.Text>
                Time:
                </Card.Text>
                <Card.Text>
                Duration:
                </Card.Text>
                <Card.Text>
                
                
                </Card.Text>
                <Button variant="primary">Book</Button>
            </Card.Body>
            </Card>
            </div>
        </div>
    )
}

export default bookFlight