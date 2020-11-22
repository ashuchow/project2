import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form} from 'react-bootstrap';
<<<<<<< HEAD
import {Button} from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
=======
//import DatePicker from "react-datepicker";
//import "react-datepicker/dist/react-datepicker.css";

>>>>>>> ccf29e55b56dd83bb2c669d615204928fa3bbe5c

const searchFlight = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));
  
  export default function DatePickers() {
    const classes = searchFlight();
  


    return (
     <div>
        <div>
            <h1>Search Flights</h1>
            
        </div>
        <div>
    <Form>
        <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Source City</Form.Label>
        <Form.Control as="select">
        <option>Kolkata</option>
        <option>Delhi</option>
        <option>Banglore</option>
        <option>Mumbai</option>
        <option>Chennai</option>
        </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Destination City</Form.Label>
        <Form.Control as="select">
        <option>Kolkata</option>
        <option>Delhi</option>
        <option>Banglore</option>
        <option>Mumbai</option>
        <option>Chennai</option>
        </Form.Control>
        </Form.Group>
    </Form>    
        </div>
        <div>
        <form className={classes.container} noValidate>
            <TextField
            id="date"
            label="Birthday"
            type="date"
            defaultValue="2017-05-24"
            className={classes.textField}
            InputLabelProps={{
            shrink: true,
            }}
        />
        </form>
        
            <div>
            <Link to="/rf">
                    <Button variant="danger">
                        Search 
                    </Button>
                </Link>
        
            </div>
        </div>

    </div>
    )
}

