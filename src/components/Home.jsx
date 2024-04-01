import '../App.css'
import img2 from '../assets/img2.png'
// import indian from '../assets/paneer_roti.jpg'
import { BsShop } from "react-icons/bs";
import { SiCodechef } from "react-icons/si";
import { MdCelebration } from "react-icons/md";
import review from '../assets/review.jpg'
// import logo from '../assets/logo-no-bg.png'
import mobile from '../assets/mobile2.png'
import { FaApple } from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";
import img3 from '../assets/img3.png'
import { foods } from './Daata';
import { useEffect, useState } from 'react';




const Home = () => {
    const [data, setData] = useState([]);
    const filterFoods = (foodItem) => {
        const result = foods.filter((curData)=>{
            return curData.category===foodItem;
        })
        setData(result)
        console.log(result);
    }

    useEffect(()=>{
        if (foods) {
            setData(foods);
        }
    },[])

//  const [items, setItems] = useState(foods)
//  console.log(foods);

//  const filterFoods = (foodItem) => {
//     const filterFood = foods.filter((curItem)=>{
//         return curItem.category === curItem
//     });

//     setItems(filterFood);
//  }


  return (
    <>
    <div className="home1">
        <div className="txt1">
            <h1 className='home_h1'>Delicious & Affordable</h1>
            <h2 className='home_h2'>Meals Near By You</h2>
            <p className='home_p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam delectus possimus est, placeat ipsam dolores, veniam nobis quasi quod ipsum voluptatibus sunt eaque aut enim laborum neque autem illum?</p>
            <button className='bg-primary px-3 py-2 rounded'>Order Now</button>
        </div>

        <div className="home_imgg">
            <img src={img2} alt="Image Here" className='home_images'/>
        </div>
    </div>

    <div className="home2">
    <div className="imgg2">
            <img src={img2} alt="Image Here" className='images2'/>
        </div>

        <div className="txt2">
            <p>Established Since 2019</p>
            <h1 className='head2'>We have been serving for</h1>
            <h2 className='head_2'>Over 4 years</h2>
            <p className='txt2_p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam delectus possimus est, placeat ipsam dolores</p>
            <p className='txt2_p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam delectus possimus est, placeat ipsam dolores</p>
            <button className='bg-primary px-3 py-2 rounded'>Order Now</button>
        </div>
    </div>

{/*---------------===== Menu Card =====------------------*/}
    <div className="menu-card">
        <div className='check'>
        <h1>Checkout our <span onClick={()=>filterFoods({curData})}>menu</span></h1>
        <div className="filter">
            <ul>
                <li onClick={()=>filterFoods("starter")}>Starters</li>
                <li onClick={()=>filterFoods("main_course")}>Main</li>
                <li onClick={()=>filterFoods("soup")}>Soups</li>
                <li onClick={()=>filterFoods("desert")}>Desserts</li>
            </ul>
        </div>
        </div>
        <div className="conatiner my-5">
            <div className="row">
                { 
                    data.map((product) => {
                        return (
                            <>
                            <div className="col-lg-3 my-2 text-center card_body">
                            <div className="card" style={{width: '18rem'}}>
                                <img className="card-img-top" src={product.imgSrc} />
                            <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">{product.description}</p>
                            <p>{product.price}</p>
                            </div>
                            </div>
                            </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    </div>



{/* ----------======card end========------------- */}

{/* ----------====== Serivices ========------------- */}


    <div className="services">
        <h1>Amazing <span>services</span></h1>

        <div className="services-in">
            <div className="services-list">
            <span><BsShop /></span>
            <h3>230+ Locations</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, odio!</p>
            <a href="#">Learn More</a>
            </div>

            <div className="services-list">
            <span><SiCodechef /></span>
            <h3>230+ Locations</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, unde.</p>
            <a href="#">Learn More</a>
            </div>

            <div className="services-list">
            <span><MdCelebration /></span>
            <h3>230+ Locations</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, nostrum.</p>
            <a href="#">Learn More</a>
            </div>

        </div>
    </div>


    <div className="why1">
        <div className="txt_why">
            <p className='repu'>A Reputated Brand</p>
            <h1 className='why_h1'>Why <span> Choose us</span></h1>
            <p className='why_p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam delectus possimus est, placeat ipsam dolores, veniam nobis quasi quod ipsum voluptatibus sunt eaque aut enim laborum neque autem illum?</p>
            <div className='done'>
                <p>60000+ <br /><span>Orders</span></p>
                <p>9000+ <br /><span>Customers</span></p>
                <p>800+ <br /><span>Chefs</span></p>
            </div>
            <button className='bg-primary px-3 py-2 rounded'>Order Now</button>
        </div>

        <div className="why_imgg">
            <img src={img3} alt="Image Here" className='why_images'/>
        </div>
    </div>


    {/*---------------Customer Section-----------------*/}
    <div className="services">
        <h1>Customers <span>Loves Us.</span></h1>

        <div className="services-in">
            <div className="services-list">
            <span><img src={review} className='review_img' /></span>
            <h3>Lorem</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, odio!</p>
            <a href="#">Learn More</a>
            </div>

            <div className="services-list">
            <span><img src={review} className='review_img' /></span>
            <h3>Lorem</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, unde.</p>
            <a href="#">Learn More</a>
            </div>

            <div className="services-list">
            <span><img src={review} className='review_img' /></span>
            <h3>Lorem</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, nostrum.</p>
            <a href="#">Learn More</a>
            </div>

        </div>
    </div>

    {/* <div className="customers">
        <h1>Customers <span>love</span></h1>

        <div className="customer-details">
            <div className="customers-list">
            <span><img src={review} alt="" /></span>
            <h3>230+ Locations</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, odio!</p>
            <a href="#">Learn More</a>
            </div>

            <div className="customer-list">
            <span><img src={review} alt="" /></span>
            <h3>230+ Locations</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, unde.</p>
            <a href="#">Learn More</a>
            </div>

            <div className="customer-list">
            <span><img src={review} alt="" /></span>
            <h3>230+ Locations</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, nostrum.</p>
            <a href="#">Learn More</a>
            </div>

        </div>
    </div> */}

    <div className="app">
    <div className='app-data'>
        <div className="appdata-main">
        <p className='down'>Download App</p>
            <p className='detail'>People around you are ordering their delicious meals using our BiteCharm App</p><br />
            <a href="" className='store'><FaApple /><span>APP STORE</span></a>
            <a href="" className='store'><BiLogoPlayStore /><span>GOOGLE PLAY</span></a>
        </div>
        </div>

        <div className='app-look'>
            <img src={mobile} className='mobile' />
        </div>
    </div>

    {/* <footer className='footer'>
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
    </footer> */}
    </>
  )
}

export default Home