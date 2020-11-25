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
            <td>{this.props.id}</td>
            <td>{this.props.flightname} {this.props.flightcode}</td>
            <td>{this.props.acity}</td>
            <td>{this.props.dcity}</td>
            <td>{this.props.atime}</td>
            <td>{this.props.dtime}</td>
            <td>{this.props.date}</td>
            <td>₹ {this.props.price}</td>
            <td>
              <Link to={{pathname: "/bf", data: this.props.flight}}>
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
//{flight.itineraries[0].segments[0].arrival.at}
export default FlightTile;