import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="mini-container-login">
        <div className="SubmitForm">
          <h1>Sign Up</h1>
          <form>
          <div className="form-group">
            <label for="fullname">Fullname</label>
            <input type="text"/>
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            <input type="password"/>
          </div>
          <div className="button-flex-2">
            <Link to="/">
                <button className="adopting"> Login </button>
            </Link>
          </div>
          </form> 
        </div>
      </div>
  )
}

export default Login