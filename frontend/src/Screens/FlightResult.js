import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import {Table} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import flightTile from '../components/flightTile';



class resultFlight extends Component {
  render(){
    return (
    <div>
<<<<<<< HEAD
=======
        <div>
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Flight Name</th>
      <th>Arrival City</th>
      <th>Departure City</th>
      <th>Arrival Time</th>
      <th>Departure Time</th>
      <th>Date</th>
      <th>Price</th>
      <th>Book</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>Lmao</td>
      <td>Lmao</td>
      <td>Lmao</td>
      <td>Lmao</td>
      <td>Lmao</td>
      <td><Link to="/bf">
                <Button variant="danger">
                    BOOK 
                </Button>
            </Link></td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>
      <Link to="/bf">
                <Button variant="danger">
                    BOOK
                </Button>
                </Link>
      </td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
>>>>>>> ccf29e55b56dd83bb2c669d615204928fa3bbe5c
        
    <flightTile flightname = "Jet Airways 11" acity = "kolkata" dcity = " New Delhi"
    atime = "11:30" dtime = "3:30" date = "11.11.20" price = "Rs. 6000"/>
    
    <flightTile flightname = "Jet Airways 11" acity = "kolkata" dcity = " New Delhi"
    atime = "11:30" dtime = "3:30" date = "11.11.20" price = "Rs. 6000"/>
    
        
      


    </div>
    );
}
}

export default resultFlight