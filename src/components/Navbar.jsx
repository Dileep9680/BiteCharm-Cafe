import '../App.css';
import logo from '../assets/logooo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <header className='sticky-top'>
      <nav className='navigation'>
      <div className="nav-bar position-sticky">
        <Link to={'/'}><span className='logo'><img src={logo} /></span></Link>
        <div className="menu-bar">
            <ul className="menu-list">
                <li><Link to={'/About'} className='links'>About</Link></li>
                <li><Link to={'/Blog'} className='links'>Blog</Link></li>
                <li><Link to={'/Business'} className='links'> Business</Link></li>
                <li><Link to={'/Contact'} className='links'>Contact Us</Link></li>
                <li><Link to={'/Login'} className='links'>Login - To Book Table</Link></li>
                <li className="bg-primary mx-5 text-white"><Link to={'/Signup'} className='linkbt bg-primary'>Sign Up</Link></li>
            </ul>
        </div>
      </div>
      </nav>
    </header>
    </>
  )
}

export default Navbar