import React from 'react'
import { Link } from 'react-router-dom';
function Home() {
    return (
        <div>
            <ul>
                <li>
                <Link to="/sf" className="nav-link">Book Flights</Link>
                </li>
                <li>
                <Link to="/sh" className="nav-link">Book Hotels</Link>
                </li>
            </ul>
        </div>
    )
}

export default Home