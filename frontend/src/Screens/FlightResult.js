import React from 'react'
import { Link } from 'react-router-dom';
import {Table} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

function resultFlight() {
    return (
    <div>
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
        
        </div>


    </div>
    )
}

export default resultFlight