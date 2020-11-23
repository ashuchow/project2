import React from 'react'
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import { useLocation } from "react-router-dom";


function BookFlight() {
    let flight=useLocation().data
    console.log(flight)
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
                <Link to={{pathname: "/pymnt", data: flight}} className="nav-link"><Button variant="primary">Book</Button></Link>
            </Card.Body>
            </Card>
            </div>
        </div>
    )
}

export default BookFlight
