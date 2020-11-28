import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Alert, Card, Modal, Breadcrumb, Table } from "react-bootstrap";
function contactUs() {
    return (
        <div>
        <div className="header">
          <h1>Contact Details</h1>
        </div>

        
        <div className = 'container-contact'>
            <Card>
            <Card.Header>Contact</Card.Header>
            <Card.Body>
                <Card.Title>Helpline No.</Card.Title>
                <Card.Text>
                +919191919191
                </Card.Text>
                <Card.Title>Email us</Card.Title>
                <Card.Text>
                contact@travelit.com
                </Card.Text>
                <Card.Title>Address</Card.Title>
                <Card.Text>
                42-F, Lorem ipsum Avenue, Lorem Ipsum Pradesh, Republic of Lorem Ipsum 
                </Card.Text>
                
            </Card.Body>
            </Card>
        </div>
        {/* <div className="cardcontact">
             <img src="https://gray-kktv-prod.cdn.arcpublishing.com/resizer/4wqUoybgM9vFxW4WMYuwNcvbzIc=/1200x675/smart/cloudfront-us-east-1.images.arcpublishing.com/gray/XBKVWUDNAZIBHDERTLLBHIBEO4.jpg" />
            <div className="container-contact">
                <h4><b>Aditya Sarkar</b></h4>
                <p>Front-End Developer</p>
            </div>
        </div>
        <div className="cardcontact">
            <div className = "contactimage">
             <img src="https://gray-kktv-prod.cdn.arcpublishing.com/resizer/4wqUoybgM9vFxW4WMYuwNcvbzIc=/1200x675/smart/cloudfront-us-east-1.images.arcpublishing.com/gray/XBKVWUDNAZIBHDERTLLBHIBEO4.jpg" />
             </div>
            <div className="container-contact">
                <h4><b>Neil Chowdhary</b></h4>
                <p>Backend Developer</p>
            </div>
        </div>
        <div className="cardcontact">
             <img src="https://gray-kktv-prod.cdn.arcpublishing.com/resizer/4wqUoybgM9vFxW4WMYuwNcvbzIc=/1200x675/smart/cloudfront-us-east-1.images.arcpublishing.com/gray/XBKVWUDNAZIBHDERTLLBHIBEO4.jpg" />
            <div className="container-contact">
                <h4><b>Dev Ghosh</b></h4>
                <p>Front-End Developer</p>
            </div>
        </div> */}
    
    


</div>


    )
}

export default contactUs