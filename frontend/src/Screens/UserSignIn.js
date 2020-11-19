import React from 'react'
import { Link } from 'react-router-dom';

function userSignIn() {
    return (
        <div className = "form">
        <form onSubmit>
            <ul className = "form-container">
                <li>
                    <h3>Sign In</h3>
                </li>
                <li>
                    <label htmlFor= "email">
                        Email
                    </label>
                    <input type = "email" name ="email" id = "email" onChange={(e) =>(e.target.value)}>
                    </input>
                    
                </li>
                <li>
                <label for= "password">Password</label>
                <input type = "password" name ="password" id = "password" onChange={(e) =>(e.target.value)}>
                    </input>
                </li>
                <li>
                    <button type ="submit" className= "button primary">Sign In</button>
                </li>
                <li>
                    Do not have an account?
                </li>
                <li>
                    <Link to = "/register" className ="button secondary text-center">Create a new Account</Link>
                </li>

            </ul>



        </form>

    </div>
    )
}

export default userSignIn