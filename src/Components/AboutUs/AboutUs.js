import React, { useState } from 'react'
import './AboutUs.css'
function AboutUs() {
    const [show, setShow] = useState(false)
    return (
        <div className="main_container8">
            <img className='wel_img1' src="/Images/aboutimg1.webp" alt="" />
            <div className="welcome_container8">
                <div className="inside_wel1">
                    <div className="header">
                        <div className="logo">
                            <img className='logo_img' src="/Images/Final logo-02.png" alt="logo" />
                        </div>
                        <div className="menu">
                            <div className="home"><a className='alink' href="/">
                                <label htmlFor="">Home</label>
                            </a>
                            </div>
                            <div className="event">
                                <label htmlFor="">Event</label>
                                <div className="icon1">
                                    <img className='downicon' src="/Images/icons8-down-arrow-50.png" alt="downicon" />
                                </div>
                            </div>
                            <div className="services"><a className='alink' href="/services">
                                <label htmlFor="">Services</label>
                            </a>
                            </div>
                            <div className="about"><a className='alink' href="/aboutus">

                                <label htmlFor="">About Us</label>
                            </a>
                            </div>
                            <div className="blog">
                                <label htmlFor="">Blog</label>
                            </div>
                            <div className="contact"><a className='alink' href="/contactus">

                                <label className='contact_label' htmlFor="">Contact Us</label>
                            </a>
                            </div>
                        </div>
                        <div className="user_profile">
                            <div className="user_name">
                                <p className='userp1'>James Thomas</p>
                            </div>
                            <div className="avatar">
                                <img className='avatar_img' src="/Images/9384699.png" alt="avatar" />
                            </div>
                            <div className="icon">
                                <img className='downicon' src="/Images/icons8-down-arrow-50.png" alt="downicon" />

                            </div>

                        </div>
                        <div className='responsive_header' >
                            <button className='ham_bttn' onClick={() => setShow(!show)}>
                                <img className='hamburger_img' src="/Images/icons8-hamburger.svg" alt="" />
                            </button>
                            <div className="responsive_content">
                                {show &&
                                    <div className='navbar'>
                                        <ul className='sidebar1'>
                                            <img className='ham_close' src="/Images/icons8-close.svg" alt="" onClick={() => setShow(!show)} />
                                            <li><img className='side_icon' src="/Images/icons8-home-25.png" alt="" /><a href="/">Home</a></li>
                                            <li><img className='side_icon' src="/Images/icons8-events-80.png" alt="" /><a href="">Events</a></li>
                                            <li><img className='side_icon' src="/Images/icons8-services.svg" alt="" /><a href="/services">Services</a></li>
                                            <li><img className='side_icon' src="/Images/icons8-blog-50.png" alt="" /><a href="">Blog</a></li>
                                            <li><img className='side_icon' src="/Images/icons8-about-us-50.png" alt="" /><a href="/aboutus">About Us</a></li>
                                            <li><img className='side_icon' src="/Images/icons8-contact-us-32.png" alt="" /><a href="/contactus">Contact Us</a></li>
                                            <li><img className='side_icon' src="/Images/icons8-log-out-50.png" alt="" /><a href="">Log Out</a></li>
                                        </ul>
                                    </div>
                                }
                            </div>
                        </div >
                    </div>

                    <div className="txt">
                        <p className='txt1'>About VND Events</p>

                    </div>
                    <div className="insidewel_content">
                        <p className='aboutp3'>Event make simple</p>
                        <p className='aboutp1' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
                        <p className='aboutp2' >Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
