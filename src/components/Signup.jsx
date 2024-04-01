
// import React from 'react' 
import logo from '../assets/logo-no-bg.png'
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaMobileAlt } from "react-icons/fa";




const Signup = () => {
  return (
    <>
    <span className='join'><h2>Join Us</h2></span>
    <div className="box">
        <div className="pic">
            <img src={logo} alt="" />
        </div>
        <div className="form-data">
            <h3 className='heading'>Welcome to our world!</h3>
            <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, animi?</p>
            <form>
                <div className="input-group">

                    <div className="input-field">
                        <label><FaUser /></label>
                        <input type="text" placeholder='Full Name' /> <br />
                        <label><MdEmail /></label>
                        <input type="email" placeholder='Email' /> <br />
                        <label><RiLockPasswordLine /></label>
                        <input type="password" placeholder='Full Name' /> <br />
                        <label><FaMobileAlt /></label>
                        <input type="tel" placeholder='Mobile Number' /> <br />
                        <button className='text-white py-2 px-4 mt-3 rounded bg-primary center'>Sign Up</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default Signup