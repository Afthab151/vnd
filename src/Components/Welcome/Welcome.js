import React from 'react'
import './Welcome.css';
function Welcome() {
    return (
        <div className="main_container">
            <div className='inner_container1'>
                <img className='back_img1' src='/image/worship-background-2xt3iphn27jnnawm.jpg' />
                <div className='first_container'><div className='logo_section'>
                    <div className='logo'>
                        <img className='image1' src="/image/Final logo-02.png " alt="" /></div>
                    <div className='panel'>
                        <div className='home'><label>Home</label></div>
                        <div className='event'><label>Event</label>
                            <div  ><img className='image2' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Chevron-down.svg/2560px-Chevron-down.svg.png" alt="" /></div>
                        </div>
                        <div className='services'><label>Services</label></div>
                        <div className='aboutus'><label>About Us</label></div>
                        <div className='blog'><label>Blog</label></div>
                        <div className='contactus'><label>Contact Us</label></div>
                    </div>
                    <div className='account'>
                        <label>James Thomas</label>
                       <div className='account_imagediv'> <img className='account_image' src="/image/user.png" alt="" /></div>
                       <img className='account_chevron' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Chevron-down.svg/2560px-Chevron-down.svg.png" alt="" />

                    </div>
                </div>

                    <div className='text_area'>
                        <p className='text1' >Welcome to VND Events</p>
                        <p className='text2'>Exclusive events,priceless memories.</p>
                    </div>
                    <div className='event_details'>
                        <div className='event_details2'>
                            <div className='occation'>
                                <label>Select Occation</label>
                                <label>Wedding</label>
                              <img className='image3' src='/image/down-button.png' />
                            </div>
                            <div className='event_planner'>
                                <label>Event Planner</label>
                                <label>Paradise Events</label>
                                <img className='image4' src='/image/down-button.png' />
                            </div>
                            <div className='date'>
                                <label>Date</label>
                                <label>27.10.2023</label>
                                <img className='image5' src='/image/icons8-calender-64.png' />

                            </div>
                            <div className='search_icon'>
                                <img className='date_search' src='/image/icons8-search-50.png' />
                            </div>
                        </div>
                    </div>
                    <div className='all_events'>
                        <div className='wedding'>
                           <div className='wedd_imagediv'> <img className='wedding_image'src='/image/wedding.png' /></div>
                            <label className='wedding_l'>Wedding</label>
                        </div>
                        <div className='birthady'>
                        <div className='wedd_imagediv'> <img className='wedding_image'src='/image/birthday.png' /></div>

                            <label className='birthday_l'>BirthDay</label>
                        </div>

                        <div className='stage_decore'>
                        <div className='wedd_imagediv'> <img className='wedding_image'src='/image/stage.png' /></div>

                            <label className='stage_decore_l'>Stage Decore</label>

                        </div>
                        <div className='catering'>
                        <div className='wedd_imagediv'> <img className='wedding_image'src='/image/catering.png' /></div>

                            <label className='catering_l'>Catering</label>

                        </div>
                        <div className='house_warming'>
                        <div className='wedd_imagediv'> <img className='wedding_image'src='/image/housewarming.png' /></div>

                            <label className='house_warming_l'>House Warming</label>

                        </div>
                    </div>
                </div>
            </div>
            <div className='inner_container2'>

            </div>
            <div className='inner_container3'>

            </div>
            <div className='inner_container4'>

            </div>
            <div className='inner_container5'>

            </div>
            <div className='inner_container6'>

            </div>

        </div>
    )
}

export default Welcome