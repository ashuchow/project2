import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Confirm from "./Screens/ConfirmScreen";
import Home from "./Screens/Home";
import Navbar from "./Screens/navbar.component";
import bookFlight from "./Screens/FlightBook";
import searchFlight from "./Screens/FlightSearch";
import resultFlight from "./Screens/FlightResult";
import bookHotel from "./Screens/HotelBook";
import resultHotel from "./Screens/HotelResults";
import searchHotel from "./Screens/HotelsSearch";
import Payment from "./Screens/PaymentScreen";
import userProfile from "./Screens/UserProfile";
import userSignIn from "./Screens/UserSignIn";
import userSignup from "./Screens/UserSignup";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/bf" component={bookFlight} />
          <Route path="/bh" component={bookHotel} />
          <Route path="/sf" component={searchFlight} />
          <Route path="/sh" component={searchHotel} />
          <Route path="/rh" component={resultHotel} />
          <Route path="/rf" component={resultFlight} />
          <Route path="/cnf" component={Confirm} />
          <Route path="/pymnt" component={Payment} />
          <Route path="/up" component={userProfile} />
          <Route path="/us" component={userSignIn} />
          <Route path="/usu" component={userSignup} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
