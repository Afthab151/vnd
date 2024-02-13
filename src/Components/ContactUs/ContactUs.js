import React, { useState } from 'react'
import './ContactUs.css'
function ContactUs() {
  const [show, setShow] = useState(false)
  return (
    <div className="main_container9">
      <img className='wel_img1' src="/Images/back9.avif" alt="" />
      <div className="welcome_container9">
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
          <div className="txt9">
            <p className='txt1'>Contact Us</p>
          </div>

        </div>
      </div>
      <div className="inside_contact">
        <div className="inside_form">
          <p className="para91">Hi, we're happy to help you!</p>
          <p className="para92">Please enter details so we can reach out to you</p>
          <form action="" className='form_controls'>
            <label className='label1'>Your Name</label><br />
            <input type="text" placeholder='Enter Your Name' /><br />
            <label className='label2'>Your Place</label><br />
            <input type="text" placeholder='Enter Your Place' /><br />
            <label className='label3'>Your Mobile</label><br />
            <input type="tel" placeholder='Enter Your Mobile No.' /><br />
            <label className='label4'>Your Email</label><br />
            <input type="email" placeholder='Enter Your Email' /><br />
            <label className='label5'>Message</label><br />
            <textarea name="" id="" cols="82" rows="10" placeholder='Please explain your enquiry'></textarea>
            <div className="abt_btn">
              <input type="submit" value='Submit Now' />
            <img className='about_img' src="/Images/icons8-right-arrow-50.png" alt="" />
            </div>
          </form>
        </div>
        <div className="inside_form2">
                <div className='phone_details' >
                  <div className="phone_img">
                    <img className='details_img' src="/Images/icons8-phone-64.png" alt="" />
                  </div>
                  <div className="inside_txt">
                    <p className="inside_p1">Phone</p>
                    <p className="inside_p2">+91 9000 1000</p>
                  </div>
                </div>
                <div className='email_details'>
                <div className="email_img">
                    <img className='details_img' src="/Images/icons8-email-64.png" alt="" />
                  </div>
                  <div className="inside_txt">
                    <p className="inside_p1">Email</p>
                    <p className="inside_p2">info@vndevents.com</p>
                  </div>
                </div>
                <div className='location_details'>
                <div className="loc_img">
                    <img className='details_img' src="/Images/icons8-location-50.png" alt="" />
                  </div>
                  <div className="inside_txt1">
                    <p className="inside_p1">Location</p>
                    <p className="inside_p2l">VND EVENTS</p>
                    <p className="inside_p3l">Building No. Palarivattam-P.O <br /> Kochi-23, Kerala, India</p>
                  </div>
                </div>
                <div className='map_details'>
                <div className="map_img">
                    <img className='map_img1' src="/Images/map1.jpg" alt="" />
                  </div>
                </div>
        </div>
      </div>

    </div>
  )
}

export default ContactUs
