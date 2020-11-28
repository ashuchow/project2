import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardGroup, CardImg, Breadcrumb, Table } from "react-bootstrap";

class HotelTile extends Component {
  render() {
    return (
      <div>
  <CardGroup>
  <Card>
    <Card.Img variant="top" src= {this.props.hotelimage} />
    <Card.Body>
    <Card.Title>{this.props.hotelname}</Card.Title>
      <Card.Text>
        {this.props.hoteldescription}
      </Card.Text>
      <Card.Title>Address</Card.Title>
      <Card.Text>
        {this.props.hoteladdress}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Link to="/bh">
     <Button variant="primary">Book</Button>
    </Link>
    </Card.Footer>
  </Card>
  
 
</CardGroup>
    
       </div>
     

    );
  }
}

export default HotelTile;