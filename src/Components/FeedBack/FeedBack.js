import React from 'react'
import './FeedBack.css'
function FeedBack() {
    return (
        <div className="main_container4">
            <div className='feedback_container'>
                <h1>What Our Clients</h1>
                <h1>Are Saying</h1>
                <div className="feedback_img">
                    <img className='feedimg' src="/Images/client1.jpg" alt="" />
                </div>
                <div className="feed_icon">
                    <img className='feedicon' src="/Images/icons8-double-quotes-48.png" alt="" />
                </div>
                <div className="feed_arrow">
                    <img className='feedarr' src="/Images/icons8-left-arrow-50.png" alt="" />
                    <img className='feedarr' src="/Images/icons8-left-arrow-50 (1).png" alt="" />
                </div>
                <div className="feed_container">
                    <div className="feed1">
                        <p className='feed_para1'>Best Event Planner Portal</p>
                        <p className='feed_para2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</p>
                        <h4>Melbin Thomas</h4>
                        <p className='feed_para3'>Kochi</p>
                    </div>
                    <div className="feed2">
                    <p className='feed_para1'>Wedding Event Planner Portal</p>
                        <p className='feed_para2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</p>
                        <h4>Arjun Mohan</h4>
                        <p className='feed_para3'>Kollam</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeedBack
