import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import BookingTile from "../components/BookingTile";

function BookFlight() {
  let flight = useLocation().data;
  console.log(flight);
  return (
    <div>
      <BookingTile
        flightname={flight.itineraries[0].segments[0].carrierCode}
        flightcode= {flight.itineraries[0].segments[0].aircraft.code}
        acity={flight.itineraries[0].segments[0].arrival.iataCode}
        dcity={flight.itineraries[0].segments[0].departure.iataCode}
        atime="11:30"
        dtime="3:30"
        date={flight.itineraries[0].segments[0].departure.at}
        price={flight.price.grandTotal*88}
        flight = {flight}
      />
    </div>
  );
}
//                <Link to={{pathname: "/pymnt", data: flight}} className="nav-link"><Button variant="primary">Book</Button></Link>
export default BookFlight;
// `${flight.itineraries[0].segments[0].carrierCode} ${flight.itineraries[0].segments[0].aircraft.code}`