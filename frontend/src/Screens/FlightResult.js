import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import {Table} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import flightTile from '../components/flightTile';



class resultFlight extends Component {
  render(){
    return (
    <div>
        
    <flightTile flightname = "Jet Airways 11" acity = "kolkata" dcity = " New Delhi"
    atime = "11:30" dtime = "3:30" date = "11.11.20" price = "Rs. 6000"/>
    
    <flightTile flightname = "Jet Airways 11" acity = "kolkata" dcity = " New Delhi"
    atime = "11:30" dtime = "3:30" date = "11.11.20" price = "Rs. 6000"/>
    
        
      


    </div>
    );
}
}

export default resultFlight