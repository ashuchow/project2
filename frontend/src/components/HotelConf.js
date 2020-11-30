import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardDeck, CardImg, Breadcrumb, Table } from "react-bootstrap";

class HotelConfirm extends Component {
    render() {
        return (     
            
            <>
              <h4>Name</h4>
      {this.props.name}
       <h4></h4> 
      <h4>Phone</h4>
      {this.props.phone}
      <h4></h4>

      <h4>Email</h4>
      {this.props.email}
        <h4></h4>
            <Card>
              <Card.Img variant="top" src={this.props.hotelimage} />
              
              <Card.Body>
             <Card.Title>{this.props.hotelname}</Card.Title>
             <Card.Text>
              {this.props.hoteldescription}
            </Card.Text>
            <Card.Title></Card.Title>
            <Card.Text>
            Address:{this.props.hoteladdress}
            </Card.Text>
            <Card.Text>Check-In: </Card.Text>
            <Card.Text>Check-out: </Card.Text>
            <Card.Text>No. of Rooms: </Card.Text>
            <Card.Text>
                Free breakfast: Included
            </Card.Text>
            <Card.Text>

            Total :Rs. {this.props.hotelprice}
            </Card.Text>

               
              </Card.Body>
            </Card>
            <br />
            
  
                    

          </>

        )
    }

}
export default HotelConfirm