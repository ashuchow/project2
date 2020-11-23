import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Alert, Card, Modal, Breadcrumb, Table } from "react-bootstrap";


class BookingTile extends Component {
  render() {
    return (
      <div>
       <div>
            <h1>Flight Details</h1>
            </div>
            <div>
            <Card style={{ marginBottom: "2rem" }}>
              <Card.Header>{this.props.code}</Card.Header>
              <Card.Body>
                <Card.Title>{this.props.flightname}</Card.Title>
                <Card.Text>
                  <table style={{ width: "100%", tableLayout: "fixed" }}>
                    <tbody>
                      <tr>
                        <td style={{ fontSize: "1.8rem" }}>
                          {this.props.acity}
                        </td>
                        <td>
                          <span class="plane">
                            <svg
                              clip-rule="evenodd"
                              fill-rule="evenodd"
                              height="50"
                              width="50"
                              image-rendering="optimizeQuality"
                              shape-rendering="geometricPrecision"
                              text-rendering="geometricPrecision"
                              viewBox="0 0 500 500"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g stroke="#222">
                                <line
                                  fill="none"
                                  stroke-linecap="round"
                                  stroke-width="30"
                                  x1="300"
                                  x2="55"
                                  y1="390"
                                  y2="390"
                                />
                                <path
                                  d="M98 325c-9 10 10 16 25 6l311-156c24-17 35-25 42-50 2-15-46-11-78-7-15 1-34 10-42 16l-56 35 1-1-169-31c-14-3-24-5-37-1-10 5-18 10-27 18l122 72c4 3 5 7 1 9l-44 27-75-15c-10-2-18-4-28 0-8 4-14 9-20 15l74 63z"
                                  fill="#222"
                                  stroke-linejoin="round"
                                  stroke-width="10"
                                />
                              </g>
                            </svg>
                          </span>
                        </td>
                        <td style={{ fontSize: "1.8rem" }}>
                          {this.props.dcity}
                        </td>
                        <td style={{ fontSize: "1.8rem" }}>
                          {/* <span style={{ float: "right" }}> */}
                          &#8377;{this.props.price}
                          {/* </span> */}
                        </td>
                        <td style={{ fontSize: "1.8rem" }}>
                          {this.props.date}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Card.Text>
              </Card.Body>
            </Card>
            <Link to="/cnf">
                    <Button variant="danger">
                        Proceed To Book 
                    </Button>
                </Link>
        

        </div>
        </div>
      
    );
  }
}

export default BookingTile;