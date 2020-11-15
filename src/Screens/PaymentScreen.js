import React from 'react'
import { Link } from 'react-router-dom';
function Payment() {
    return (
        <div>
            <h1>Payment Page</h1>
            <Link to="/cnf" className="nav-link">Complete Payment</Link>
        </div>
    )
}

export default Payment