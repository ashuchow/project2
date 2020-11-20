import React from 'react'
import { Link } from 'react-router-dom';
import {Table} from 'react-bootstrap';

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
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
        
        </div>
        <div>
            <h1>Show Flight Search Results</h1>
            <Link to="/bf" className="nav-link">Flight XYZ</Link>
        </div>


    </div>
    )
}

export default resultFlight