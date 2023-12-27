import React from 'react'
import './Footer.css'
function Footer() {
    return (
        <div className="main_container5">
            <div className='footer_container'>
                <div className="footer">
                    <div className="foot1">
                        <p className="footp1b">VnD Events</p>
                        <p className="footp1b">Kaloor,Kochi | Kerala,India</p>
                    </div>
                    <div className="foot2">
                        <p className="footp1">Privacy Policy</p>
                        <p className="footp1">Terms & Conditions</p>
                    </div>
                    <div className="foot3">
                        <p className="footp1">vndevents@gmail.com</p>
                        <p className="footp1">+91 12345 67890</p>
                    </div>
                </div>
                <hr className='hr2' />
                <div className="footer2">
                    <div className="foot4">
                        <img className='copy_icon' src="/Images/icons8-copyright-26.png" alt="" />
                        <p className="footp1">2023 : VnD Events All Rights Reserved</p>
                    </div>
                    <div className="foot5">
                        <p className="footp1">Powerded by : Pennonn Technologies</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
