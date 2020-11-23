import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";

class Userprofile extends Component {
  render() {
    return (   
         <div class="col-md-4">
      
    <div class="d-flex flex-column align-items-center text-center">
      <img class="float right" src={this.props.picture}alt="" class="img-fluid rounded shadow-sm"></img>>
     </div>
  




      <div class="card mb-4 align-items-right">
        <div class="card-body">
          <div class="row">
            <div class="col-sm-4">
              <h6 class="mb-0">Full Name</h6>
            </div>
            <div class="col-sm-10 text-secondary">
              {this.props.name}
            </div>
          </div>
          <hr/>
          <div class="row">
            <div class="col-sm-4">
              <h6 class="mb-0">Email</h6>
            </div>
            <div class="col-sm-10 text-secondary">
              {this.props.email}
            </div>
          </div>
          <hr/>
          <div class="row">
            <div class="col-sm-4">
              <h6 class="mb-0">Phone</h6>
            </div>
            <div class="col-sm-10 text-secondary">
              {this.props.phone}
            </div>
          </div>
          <hr/>
          <div class="row">
            <div class="col-sm-4">
              <h6 class="mb-0">Address</h6>
            </div>
            <div class="col-sm-10 text-secondary">
              {this.props.address}
            </div>
          </div>
        </div>
      </div>
      
      </div>
    );
  }
}

export default Userprofile;
