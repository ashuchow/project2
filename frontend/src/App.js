  
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Reservation from "./Screens/ConfirmScreen";
import Home from "./Screens/Home";
import Navbar from "./Screens/navbar.component";
import BookFlight from "./Screens/FlightBook";
import searchFlight from "./Screens/FlightSearch";
import ResultFlight from "./Screens/FlightResult";
import BookHotel from "./Screens/HotelBook";
import ResultHotel from "./Screens/HotelResults";
import SearchHotel from "./Screens/HotelsSearch";
import Payment from "./Screens/PaymentScreen";
import userProfile from "./Screens/UserProfile";
import userSignIn from "./Screens/UserSignIn";
import contactUs from "./Screens/Contact";
import userSignUp from "./Screens/UserSignUp";
import PaymentHotel from "./Screens/PaymentHotel";
import HotelConfirm from "./Screens/HotelConfirm";
function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/bf" component={BookFlight} />
          <Route path="/bh" component={BookHotel} />
          <Route path="/sf" component={searchFlight} />
          <Route path="/sh" component={SearchHotel} />
          <Route path="/rh" component={ResultHotel} />
          <Route path="/rf" component={ResultFlight} />
          <Route path="/cnf" component={Reservation} />
          <Route path="/hcnf" component={HotelConfirm} />
          <Route path="/pymnt" component={Payment} />
          <Route path="/hpymnt" component={PaymentHotel} />
          <Route path="/up" component={userProfile} />
          <Route path="/us" component={userSignIn} />
          <Route path="/usu" component={userSignUp} />
          <Route path="/cu" component={contactUs} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;