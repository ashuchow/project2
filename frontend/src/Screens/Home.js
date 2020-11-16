import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap'
function Home() {
    return (
<div className>
        <div className="header">
          <h1>Travel App</h1>
           <p>We get you the Cheapest Deals</p>
        </div>


        <div className = "buttonContainer" >
        <Link to="/sf">
            <Button variant="danger">
                 BOOK FLIGHTS
            </Button> {' '}
        </Link>
        <Link to="/sh">
            <Button variant="danger">
                 BOOK HOTELS
            </Button>
        </Link>
        </div>



        </div>
    )
}

export default Home