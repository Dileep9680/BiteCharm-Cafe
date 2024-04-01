// import React from 'react'
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";


const Login = () => {
  return (
    <>
    <div className="login">
        <h3>Login</h3>
        <form>
            <label><FaUser className='log_logo' /></label>
            <input type="text" placeholder='Username' /><br />
            <label><RiLockPasswordLine  className='log_logo'/></label>
            <input type="password" placeholder='Password' /><br />
            <button>Submit</button>
        </form>
        <p>Not a member? <Link to={'/Signup'} className='log_signup'>Signup</Link></p>

    </div>
    </>
  )
}

export default Login