import logo from '../assets/logo-no-bg.png'
import { FaRegCopyright } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <>
    <footer className='footer'>
        <div className='footer_links'>
       
        <div className="main">
            <span>Main</span>
            <div>
            <a href="#">Blog</a>
            <a href="#">FAQs</a>
            <a href="#">Support</a>
            <a href="#">About Us</a>
            </div>
        </div>
            
        <div className="product">
        <span>Product</span>
            <div>
            <a href="#">Log In</a>
            <a href="#">Personal</a>
            <a href="#">Business</a>
            <a href="#">Team</a>
            </div>
        </div>
        <div className="press">
        <span>Press</span>
            <div>
            <a href="#">Logos</a>
            <a href="#">Stories</a>
            <a href="#">Events</a>
            <a href="#">Offices</a>
            </div>
        </div>
        <div className="legal">
            <span>Legal</span>
            <div>
            <a href="#">GDPR</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Services</a>
            <a href="#">Disclaimer</a>
            </div>
        </div>
        </div>
        <hr />
        <div className='lower-foot'>
            <img src={logo} alt="logo" />
            <p><FaRegCopyright /> 2024 BiteCharm Inc. All Rights Reserved</p>
            <div className="social">
                <span className="facebook"><FaFacebook /></span>
                <span className="twitter"><FaSquareXTwitter /></span>
                <span className="youtube"><FaYoutube /></span>
                <span className="whatsapp"><IoLogoWhatsapp /></span>
                <span className="linkedin"><FaLinkedin /></span>
            </div>
        </div>
    </footer>

    </>
  )
}

export default Footer