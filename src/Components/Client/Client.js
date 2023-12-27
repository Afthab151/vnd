import React from 'react'
import './Client.css'
function Client() {
    return (
        <div className='main_container_client'>
            {/* <div className='inner_container_client'> */}
            <div className='content_client'>
                <div className='text1_client'>
                    <h1>What Our Clients Are Saying</h1>
                </div>
                <div className='quote'>
                            <img className='image_quote' src="/image/icons8-double-quotes-64.png" alt="" />
                        </div>
                        <div className='arrow_c'>
                        <img className='arrow1_img' src="/image/icons8-arrow-right-501.png" alt="" />

                        <img className='arrow2_img' src="/image/icons8-arrow-right-50.png" alt="" />
                        </div>

                <div className='threediv'>
                    <div className='image_c_client'>
                        <img className='image1_client' src="/image/blog4-29-7-5-41-22-3.jpg" alt="" />
                       
                    </div>
                    <div className='para1_client'>
                        <p className='paraheading'>Best Event Planner Portal</p>
                        <p className='para1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,</p>
                        <h4>Melbin Thomas</h4>
                        <p className='para2'>Kochi</p>
                    </div>
                    <div className='para1_client'>
                    <p className='paraheading'>Wedding Event Planner Portal</p>
                    <p className='para1'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,</p>
                    <h4>Arjun Mohan</h4>
                    <p className='para2'>Kollam</p>
                </div>
                </div>
            </div>
            {/* </div> */}
        </div>
    )
}

export default Client