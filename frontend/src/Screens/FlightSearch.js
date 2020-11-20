import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form} from 'react-bootstrap';


  
function searchFlight() {
    return (
     <div>
        <div>
            <h1>Search Flights</h1>
            
        </div>
        <div>
    <Form>
        <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Source City</Form.Label>
        <Form.Control as="select">
        <option>Kolkata</option>
        <option>Delhi</option>
        <option>Banglore</option>
        <option>Mumbai</option>
        <option>Chennai</option>
        </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Destination City</Form.Label>
        <Form.Control as="select">
        <option>Kolkata</option>
        <option>Delhi</option>
        <option>Banglore</option>
        <option>Mumbai</option>
        <option>Chennai</option>
        </Form.Control>
        </Form.Group>
    </Form>    
        </div>
        <div>
        <Link to="/rf" className="nav-link">Results</Link>
        </div>

    </div>
    )
}

export default searchFlight