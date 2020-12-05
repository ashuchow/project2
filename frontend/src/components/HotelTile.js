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

class HotelTile extends Component {
  render() {
    return (
      <div>
        <CardDeck>
          <Card>
 
            <Card.Body>
              <Card.Title>{this.props.hotelname}</Card.Title>
              <Card.Text>{this.props.hoteldescription}</Card.Text>
              <Card.Title>Address:</Card.Title>
              <Card.Text>
                <p>Street: {this.props.hoteladdress}</p>
                <p>Postal Code: {this.props.hotelpobox}</p>
                <p>City: {this.props.hotelcity}</p>
              </Card.Text>
              <Card.Title>Price:</Card.Title>
              <Card.Text>
                {this.props.currency} {this.props.hotelprice}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Link to={{pathname: "/bh", data: this.props.hotel}}>
                <Button variant="danger">Book</Button>
              </Link>
            </Card.Footer>
          </Card>
        </CardDeck>
        <br />
      </div>
    );
  }
}

export default HotelTile;
