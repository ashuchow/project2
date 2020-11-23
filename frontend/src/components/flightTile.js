import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";

class FlightTile extends Component {
  render() {
    return (
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
            <td>{this.props.flightname}</td>
            <td>{this.props.acity}</td>
            <td>{this.props.dcity}</td>
            <td>{this.props.atime}</td>
            <td>{this.props.dtime}</td>
            <td>{this.props.date}</td>
            <td>{this.props.price}</td>
            <td>
              <Link to="/bf">
                <Button variant="danger">BOOK</Button>
              </Link>
            </td>
          </tr>
        </thead>
      </Table>
      </div>
    );
  }
}

export default FlightTile;
