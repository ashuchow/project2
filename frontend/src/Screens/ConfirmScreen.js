import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";
class Reservation extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        
        numberOfTickets: 0
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }
  
    render() {
      return (
        <div>
            <h1>Final Booking</h1>

        
        
        <form>
          <label>

            Number of Tickets:
            <input
              name="numberOfTickets"
              type="number"
              value={this.state.numberOfTickets}
              onChange={this.handleInputChange} />
          </label>
          <br/>
          <label>
          Name(s):
           <input type="text" name="name" />
            <label>Age: 
                <input type="number" age="age"/>
            </label>
            <label>
                Passport/ Aadhaar Number:
                <input type= "text" />
            </label>
            </label>

            <input type="submit" value="Submit" />
        </form>

        <Link to="/" className="nav-link">Book anything else?
                
              </Link>
        </div>
      );
    }
  }
export default Reservation

