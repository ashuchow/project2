import React from 'react'
import { Link } from 'react-router-dom';

function userSignUp() {
    return (
        <div>
        <div>
            <div className="header">
          <h1>Sign-up</h1>
        </div>
        <div className = "form">
        <form>
            <ul className = "form-container">
                <li>
                    <h3>CREATE NEW ACCOUNT</h3>
                </li>
                <li>
                    <label htmlFor= "name">
                        Name
                    </label>
                    <input type = "name" name ="name" id = "name" onChange={(e) =>(e.target.value)}>
                    </input>
                    
                </li>
                <li>
                    <label htmlFor= "email">
                        Email
                    </label>
                    <input type = "email" name ="email" id = "email" onChange={(e) => (e.target.value)}>
                    </input>
                    
                </li>
                <li>
                <label for= "password">Password</label>
                <input type = "password" name ="password" id = "password" onChange={(e) => (e.target.value)}>
                    </input>
                </li>
                <li>
                <label for= "rePassword">RePassword</label>
                <input type = "rePassword" name ="rePassword" id = "rePassword" onChange={(e) => (e.target.value)}>
                    </input>
                </li>
                <li>
                    <button type ="submit" className= "button primary">Sign In</button>
                </li>
                <li>
                    Already have an account? <Link to = "/us">Sign-IN</Link>
                </li>
               

            </ul>



        </form>

    </div>
    </div>
    </div>
    )
}

export default userSignUp