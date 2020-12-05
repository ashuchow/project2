import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardDeck,
  CardImg,
  Breadcrumb,
  Table,
} from "react-bootstrap";

class HotelConfirm extends Component {
  render() {
    return (
      <>
        <Card>
          <Card.Body>
            <h1>CONGRATULATIONS! YOU HAVE BOOKED YOUR ROOM.</h1>
            <h2>Booking Details</h2>
            <h5>Name:</h5>
            {this.props.name}
            <h5>Phone:</h5>
            {this.props.phone}
            <h5>Email:</h5>
            {this.props.email}
          </Card.Body>
          <Card.Body>
          <h4>Hotel:</h4>
            <Card.Title>{this.props.hotelname}</Card.Title>
            <Card.Text>{this.props.hoteldescription}</Card.Text>
            <Card.Title></Card.Title>
            <Card.Text>Address : {this.props.hoteladdress}</Card.Text>
            <Card.Text>Postal Code: {this.props.hotelpobox}</Card.Text>
            <Card.Text>Check-In: {this.props.inDate}</Card.Text>
            <Card.Text>Check-out: {this.props.outDate}</Card.Text>
            <Card.Text>No. of Rooms: </Card.Text>
            <Card.Text>Free breakfast: Included</Card.Text>
            <Card.Text>
              Total : {this.props.hotelcurrency} {this.props.hotelprice}
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
      </>
    );
  }
}
export default HotelConfirm;
