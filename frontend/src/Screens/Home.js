import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap'
function Home() {
    return (
<div>
        <div className="header">
          <h1>Travel-It</h1>
           <p>BOOKINGS MADE EASY</p>
        


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
            <div className = "homeLogo">
            <img src="https://steemitimages.com/DQmZ6NBKWQYcEgNfxXmrRXjnFijcerBJmnFaPcGZcfrKsTo/Detail%20TI_1.png" alt="App Logo"></img>



            </div>
        </div>



        </div>
    )
}

export default Home