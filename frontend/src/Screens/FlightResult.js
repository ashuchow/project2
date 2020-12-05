import React, { useState, useEffect } from "react";

import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import FlightTile from "../components/FlightTile";
import Spinner from "../components/Spinner";

const ResultFlight = () => {
  const [flights, setFlights] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let arrival = useLocation().data.arrival;
  let departure = useLocation().data.departure;
  let date = useLocation().data.date;
  console.log(arrival);
  console.log(departure);
  console.log(date);
  useEffect(() => {
    const fetchFlights = async () => {
      const result = await axios.post(
        `http://localhost:5000/amadeus/date?departure=${date}&locationDeparture=${departure}&locationArrival=${arrival}`
      );
      console.log(result.data.data);
      setFlights(result.data.data);
      setIsLoading(false);
    };
    fetchFlights();
  }, []);

  return isLoading ? (
    <div>
      <div className="header">
        <h1>Flights</h1>
      </div>
      <Spinner />
    </div>
  ) : (
    <div>
      <div className="header">
        <h1>Flights</h1>
      </div>
      <br/>
      <section>
        {flights.slice(0, 10).map((flight) => (
          <div key={flight.id}>
            {console.log(flight)}
            <FlightTile
              id={flight.id}
              flightname={flight.itineraries[0].segments[0].carrierCode}
              flightcode={flight.itineraries[0].segments[0].number}
              acity={arrival}
              dcity={departure}
              atime={flight.itineraries[0].segments[0].arrival.at}
              dtime={flight.itineraries[0].segments[0].departure.at}
              date={flight.lastTicketingDate}
              price={Math.trunc(flight.price.grandTotal * 88)}
              flight={flight}
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default ResultFlight;
