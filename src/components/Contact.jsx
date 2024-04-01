import { MdCall } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { IoIosChatbubbles } from "react-icons/io";
import { FaMapLocation } from "react-icons/fa6";


const Contact = () => {
  return (
    <>
    <div className="contact">
        <div>
            <h3>Contact Us</h3>
        </div>
        <div className="contact_us">
            <div className="contact_detail">
                <MdCall  className="logo_size"/>
                <p className="type">BY PHONE</p>
                <p>+91 - 00000-00000</p><br />
                <p className="type">International:</p>
                <p>1-606-1800-206</p>
            </div>
            <div className="contact_detail">
                <IoIosMail className="logo_size" />
                <p className="type">E-Mail Us at</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, mollitia!</p>
                <a href="">Go to Mail</a>
            </div>
            <div className="contact_detail">
                <IoIosChatbubbles className="logo_size"/>
                <p className="type">LIVE CHAT</p>
                <p>Chat with a member of our in-house team</p>
                <a href="">Click to chat</a>
            </div>
            <div className="contact_detail">
                <FaMapLocation className="logo_size"/><br />
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15230.212110308046!2d78.32013845443724!3d17.385228021450754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb95608dde168b%3A0x8437da3f50f732fe!2sInvisalign%20Experience%20Centre!5e0!3m2!1sen!2sin!4v1711819335676!5m2!1sen!2sin" width="300" height="150"  allowfullscreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            </div>
        </div>
    </div>
    </>
  )
}

export default Contact