import React from 'react';
import { Link } from 'react-router-dom';
import {Table} from 'react-bootstrap';
import {Button} from 'react-bootstrap';


const flightTile = props => {
    console.log(props)
    return  (
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
    <thead>
    <tr>
    <td>1</td>
    <td>{props.flightname}</td>
    <td>{props.acity}</td>
    <td>{props.dcity}</td>
    <td>{props.atime}</td>
    <td>{props.dtime}</td>
    <td>{props.date}</td>
    <td>{props.price}</td>
    <td><Link to="/bf">
              <Button variant="danger">
                  BOOK 
              </Button>
          </Link></td>
  </tr>
  </thead>
  </Table>
  </div>
    )

}



export default flightTile