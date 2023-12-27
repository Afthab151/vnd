import React from 'react'
import './Companies.css'
function Companies() {
  return (
    <div className='main_container_comp'>
      <div className='companies'>
        <h1>Top Event Companies</h1>
        <div className='company_images'>
          <div className='first_second'>
            <div className='firstimage_c'>
              <img className='image1_comp' src="/image/8f1d5b08a819e3ef4574734a5c53ca00.jpg" alt="" />
              <div className='text1_comp'>
                <label className='text1_1'>Grand Events Kochi</label><br></br>
                <label className='text1_2'>Stage Decoration</label>
              </div>
            </div>
            <div className='secondimage_c'>
              <img className='image2_comp' src="/image/FE.jpg" alt="" />
              <div className='text2_comp'>
                <label className='text2_1'>Weva Event Company</label><br></br>
                <label className='text2_2'>Corporative Events</label>
              </div>
            </div>
          </div>
          <div className='thirdimage_c'>
            <img className='image3_comp' src="/image/best-wedding-reception-songs-bride-groom-dance-karinawiebe_photography.webp" alt="" />
            <div className='text3_comp'>
                <label className='text3_1'>Divine Event Makers</label><br></br>
                <label className='text3_2'>Wedding Events</label>
              </div>
          </div>
          <div className='ffs'>
          <div className='fourthimage_c'>
          <img className='image4_comp' src="/image/ds_slider_2.jpg" alt="" />
          <div className='text4_comp'>
                <label className='text4_1'>Plan B Event Makers</label><br></br>
                <label className='text4_2'>Corporate Events</label>
              </div>
          </div>
          <div className='fifth_sixth'>
          <div className='fifthimage_c'>
          <img className='image5_comp' src="/image/pexels-pavel-danilyuk-6405771.jpg" alt="" />
          <div className='text5_comp'>
                <label className='text5_1'>Pink Dot</label><br></br>
                <label className='text5_2'>Corporate Events</label>
              </div>
          </div>
          <div className='sixthimage_c'>
          <img className='image6_comp' src="/image/Wedding-Event.webp" alt="" />
          <div className='text6_comp'>
                <label className='text6_1'>New Story Events</label><br></br>
                <label className='text6_2'>Wedding Events</label>
              </div>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Companies