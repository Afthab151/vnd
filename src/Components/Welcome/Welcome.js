import React from 'react'
import './Welcome.css'
function Welcome() {
  return (
    <div className="main_container">
        <img className='wel_img' src="/Images/40229-2500x1666-desktop-hd-party-background-photo.jpg" alt="" />
      <div className="welcome_container">
        <div className="inside_wel1">
          <div className="header">
            <div className="logo">
              <img className='logo_img' src="/Images/Final logo-02.png" alt="logo" />
            </div>
            <div className="menu">
              <div className="home">
                <label htmlFor="">Home</label>
              </div>
              <div className="event">
                <label htmlFor="">Event</label>
                <div className="icon1">
                  <img className='downicon' src="/Images/icons8-down-arrow-50.png" alt="downicon" />
                </div>

              </div>
              <div className="services">
                <label htmlFor="">Services</label>
              </div>
              <div className="about">
                <label htmlFor="">About Us</label>
              </div>
              <div className="blog">
                <label htmlFor="">Blog</label>
              </div>
              <div className="contact">
                <label className='contact_label' htmlFor="">Contact Us</label>
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
          </div>

          <div className='outer_select'>
            <div className="txt">
              <p className='txt1'>Welcome to VND Events</p>
              <p className='txt2'>Exclusive events, priceless memories.</p>
            </div>
            <div className="select">
              <div className="occation">
                <p className='para1'>Select Occation</p>
                <p className='para2' >wedding</p>
                <img className='arrow_down' src="/Images/icons8-down-button-48.png" alt="icon" />
              </div>
              <div className="planner">
                <p className='para1'>Event Planner</p>
                <p className='para2' >Paradise Events</p>
                <img className='arrow_down1' src="/Images/icons8-down-button-48.png" alt="icon" />
              </div>
              <div className="date">
                <p className='para1'>Date</p>
                <p className='para2' >27-02-2024</p>
                <img className='calender' src="/Images/icons8-calender-64.png" alt="icon" />
              </div>
              <div className="search">
                <img className='searchicon' src="/Images/icons8-search-50.png" alt="searchIcon" />
              </div>
            </div>

            <div className='select_event'>
              <div className='wedding'>
                <div className='wedimg_div'>

                  <img className='wed_img' src="/Images/icons8-wedding-64 (2).png" alt="" />
                </div>
                <p className='wp1'>Wedding</p>
              </div>
              <div className='birthday'>
                <div className='birthimg_div'>

                  <img className='birth_img' src="/Images/icons8-birthday-64.png" alt="" />
                </div>
                <p className='wp1'>Birthday</p>
              </div>
              <div className='stage'>
                <div className='stageimg_div'>

                  <img className='stage_img' src="/Images/icons8-stage-80.png" alt="" />
                </div>
                <p className='wp1'>Stage Decors</p>
              </div>
              <div className='catering'>
                <div className='catimg_div'>

                  <img className='cat_img' src="/Images/icons8-catering-68.png" alt="" />
                </div>
                <p className='wp1'>Catering</p>
              </div>
              <div className='house'>
                <div className='houseimg_div'>

                  <img className='house_img' src="/Images/icons8-house-with-a-garden-50.png" alt="" />
                </div>
                <p className='wp1'>House Warming</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Welcome
