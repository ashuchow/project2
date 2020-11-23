import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Userprofile from "../components/userprofile";

class UserProf extends Component {
  render() {
    return (
 

      <div>
        <Userprofile
        name="Dev"
        email="devghosh17@gmail.com"
        phone="9831218674"
        address="123 Road Road"
        picture="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
  
        />


      </div>
    );
  }
}

export default UserProf;