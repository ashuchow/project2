import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Navbar } from 'react-bootstrap'
import { ListGroup } from 'react-bootstrap'
function Home() {
    return (
        <div>
            <ListGroup horizontal className = "ctr">
                <ListGroup.Item className= "bg-dark"><Link to="/sf" >Book Flights</Link></ListGroup.Item>
                <ListGroup.Item className= "bg-dark"><Link to="/sh" >Book Hotels</Link></ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default Home