import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Alert, Card, Modal, Breadcrumb, Table } from "react-bootstrap";


class Hotelhistory extends Component {
  render() {
    return (
        <>
        
        
        <Card>
        
        
        <Card.Body>
       <Card.Title><td style={{ fontSize: "2.0rem" }}>{this.props.hotelname}</td></Card.Title>
       <Card.Title>
        {this.props.hoteldescription}
      </Card.Title>
      <Card.Title>Address: {this.props.hoteladdress}</Card.Title>
      <Card.Title>Check-In: </Card.Title>
        <Card.Title>Check-out: </Card.Title>
     
      <Card.Title>Total : Rs.{this.props.hotelprice}</Card.Title>
      
         
        </Card.Body>
      </Card>
      <br />
      
        </>
            

        

        
        
      
    );
  }
}

export default Hotelhistory;