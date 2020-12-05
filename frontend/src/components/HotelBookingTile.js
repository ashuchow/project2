import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  Dropdown,
  DropdownButton,
  CardImg,
  Breadcrumb,
  Table,
} from "react-bootstrap";

class HotelBookingTile extends Component {
  render() {
    return (
      <>
        <Card>
          <Card.Body>
            <Card.Title><h1>{this.props.hotelname}</h1></Card.Title>
            <Card.Text>{this.props.hoteldescription}</Card.Text>
            <Card.Title>Address:</Card.Title>
            <Card.Text>
              <p>Street: {this.props.hoteladdress}</p>
              <p>Postal Code: {this.props.hotelpobox}</p>
            </Card.Text>
            <Card.Title>Price Per Room:</Card.Title>
            <Card.Text>
              {this.props.hotelprice} {this.props.hotelcurrency}
            </Card.Text>
            <Card.Title>Contact:</Card.Title>
            <Card.Text>phone : {this.props.hotelcontact.phone}</Card.Text>
            <Card.Text>fax : {this.props.hotelcontact.fax}</Card.Text>
            <Card.Title>Ameneties:</Card.Title>
            <Card.Text>{this.props.hotelameneties[0]}</Card.Text>
            <Card.Text>{this.props.hotelameneties[1]}</Card.Text>
            <Card.Text>{this.props.hotelameneties[2]}</Card.Text>
            <Card.Text>{this.props.hotelameneties[3]}</Card.Text>
            <Card.Text>{this.props.hotelameneties[4]}</Card.Text>
            <Card.Title>Rating:</Card.Title>
            <Card.Text>{this.props.hotelrating}</Card.Text>
            <Card.Title>Rooms</Card.Title>
            <Card.Text>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  No. of Rooms
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Card.Text>
            <Link to={{pathname: "/hpymnt" , data: this.props.hotel}}>
              <Button variant="primary">Book</Button>
            </Link>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default HotelBookingTile;
