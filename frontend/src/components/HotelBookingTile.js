import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Dropdown, DropdownButton, CardImg, Breadcrumb, Table } from "react-bootstrap";

class HotelBookingTile extends Component {
  render() {
    return (
      <div className = "book">

          <Card>
         <Card.Img variant="top" src= {this.props.hotelimage} />
        <Card.Body>
        <Card.Title>{this.props.hotelname}</Card.Title>
        <Card.Text>
         {this.props.hoteldescription}
        </Card.Text>
        <Card.Title>Address:</Card.Title>
        <Card.Text>
         {this.props.hoteladdress}
        </Card.Text>
        <Card.Title>Price Per Room:</Card.Title>
        <Card.Text>
         {this.props.hotelprice}
        </Card.Text>
        <Card.Title>Contact:</Card.Title>
        <Card.Text>
         {this.props.hotelcontact}
        </Card.Text>
        <Card.Title>Ameneties:</Card.Title>
        <Card.Text>
         {this.props.hotelameneties}
        </Card.Text>
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
        <Link  to="/hc">
        <Button variant="primary">Book</Button>
        </Link>
    </Card.Body>
    </Card>
  
    
       </div>
  

    );
  }
}

export default HotelBookingTile;