import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';


function userProfile() {
    return (
        <div class="col-md-8">
        <div class="card mb-3">
          <div class="card-body">
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Full Name</h6>
              </div>
              <div class="col-sm-9 text-secondary">
                Kenneth Valdez
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Email</h6>
              </div>
              <div class="col-sm-9 text-secondary">
                fip@jukmuh.al
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Phone</h6>
              </div>
              <div class="col-sm-9 text-secondary">
                (239) 816-9029
              </div>
            </div>
            <hr/>

            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Address</h6>
              </div>
              <div class="col-sm-9 text-secondary">
                Bay Area, San Francisco, CA
              </div>
            </div>
          </div>
        </div>
        </div>
        )
        }
        
        export default userProfile