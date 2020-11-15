import React from 'react'
import { Link } from 'react-router-dom';
function Confirm() {
    return (
        <div>
            <h1>Confirm Page</h1>
            <Link to="/" className="nav-link">Book anything else?</Link>
        </div>
    )
}

export default Confirm