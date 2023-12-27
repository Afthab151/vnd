import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div className='main_container_f'>
      <div className='inner_footer'>
        <div className='inside_footer'>
          <div className='footer_1'>
            <p>VnD Events</p>
            <p>Kaloor,Kochi|Kerala,India</p>
          </div>
          <div className='footer_2'>
            <p>Privacy Policy</p>
            <p>Terms and Conditions</p>
          </div>
          <div className='footer3'>
            <p>vndevents@gmailcom</p>
            <p>+91 12345 67890</p>
          </div>
        </div>
        <div className='hr1_f'><hr className='hr1' /></div>
        <div className='inside_footer2'>
        <div className='footer4'><img className='image1_f' src="/image/icons8-copyright-24.png " alt="" />
        <p>2023 : VnD Events All Right Reserved</p>
        </div>
        <div className='footer5'>
        <p>Powered By : Pennonn Technologies</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer