import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";
import FinalBook from "../components/Tile";

class Reservation extends Component {
    render(){
    return(
    <div>

    <h1>CONGRATULATIONS! YOU HAVE BOOKED YOUR FLIGHT.</h1>
    <h2>Flight Details </h2>
    <div>
        <FinalBook
          flightname="Jet Airways 11"
          acity="Kolkata"
          dcity=" New Delhi"
          atime="11:30"
          dtime="3:30"
          date="11.11.20"
          price="6000"
          name="Dev"
          phone="9903012345"
          email="dev.ghosh@email.com"
        />


      </div>

        <Link to="/" className="nav-link">Book anything else?
                
              </Link>
        
    </div>
      );
    }
}
  
export default Reservation

