import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";
import HotelConfirm from "../components/HotelConf";
function HotelConfirmed()
    {
        return (     <div>
            <h1>CONGRATULATIONS! YOU HAVE BOOKED YOUR ROOM.</h1>
            <h2>Booking Details</h2>
            <div>
              <HotelConfirm
                hotelimage="https://im.rediff.com/money/2012/jul/tajpalace.jpg"
                hotelname="Taj Palace"
                hoteladdress="P.O. Box 283 8562 Fusce Rd Frederick Nebraska 20620"
                hotelprice="1110"
                name="Dev"
                phone="9831022671"
                email="devghosh@gmail.com"

              />
              
            </div>
      
            <Link to="/" className="nav-link">
              Book anything else?
            </Link>
            
          </div>
          
            
           
               
        );
    
}
export default HotelConfirmed