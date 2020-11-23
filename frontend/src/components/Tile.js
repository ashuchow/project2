import React from 'react'

export default function Tile() {
    return (
        <div>
            
        </div>
    )
}
<div class="col-md-8">
<div class="card mb-3">
  <div class="card-body">
    <div class="row">
      <div class="col-sm-3">
        <h6 class="mb-0">Full Name</h6>
      </div>
      <div class="col-sm-9 text-secondary">
        Kenneth Valdez
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-sm-3">
        <h6 class="mb-0">Email</h6>
      </div>
      <div class="col-sm-9 text-secondary">
        fip@jukmuh.al
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-sm-3">
        <h6 class="mb-0">Phone</h6>
      </div>
      <div class="col-sm-9 text-secondary">
        (239) 816-9029
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-sm-3">
        <h6 class="mb-0">Mobile</h6>
      </div>
      <div class="col-sm-9 text-secondary">
        (320) 380-4539
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-sm-3">
        <h6 class="mb-0">Address</h6>
      </div>
      <div class="col-sm-9 text-secondary">
        Bay Area, San Francisco, CA
      </div>
    </div>
  </div>
</div>


<div>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th> Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
          </tr>
        </thead>
        <thead>
          <tr>
            <td>1</td>
            <td>{this.props.name}</td>
            <td>{this.props.email}</td>
            <td>{this.props.phone}</td>
            <td>{this.props.address}</td>
            <td>
              <Link to="/bf">
                <Button variant="danger">button</Button>
              </Link>
            </td>
          </tr>
        </thead>
      </Table>
      </div>


      import React from 'react'
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
        <form>
          <label>

            Number of Tickets:
            <input
              name="numberOfTickets"
              type="number"
              value={this.state.numberOfGuests}
              onChange={this.handleInputChange} />
          </label>
        </form>
      );
    }
  }
export default Reservation