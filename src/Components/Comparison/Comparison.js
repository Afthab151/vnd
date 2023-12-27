import React from 'react'
import './Comparison.css';

function Comparison() {
    return (
        <div className='main_container_c'>
            <img className='image1_c' src="/image/group-young-people-hugging-tightly-600nw-1852294129.webp" alt="" />
            <div className='comparison_container'>
                <div className='comparison_container2'>
                    <h1>Event Comapny Comparison</h1>
                    <div className='comparison_container3'>
                        <div className='add_company'>
                            <div className='add_company1'>
                                <div className='image_company1'><img className='image2_c' src="/image/icons8-plus-50.png" alt="" />
                                    <label>Add Company</label>
                                </div>
                                <div className='select_option1'>
                                    <select id="company">
                                        <option value="" disabled selected>Select Company</option>
                                        <option value="volvo">Das Company</option>
                                        <option value="saab">Leo Company</option>
                                        <option value="opel">Kochin Events</option>
                                        <option value="audi">Rolex</option>
                                    </select>
                                    <select id="events">
                                        <option value="" disabled selected>Select Event</option>
                                        <option value="volvo">Wedding</option>
                                        <option value="saab">Stage Decore</option>
                                        <option value="opel">Catering</option>
                                        <option value="audi">Birthday</option>
                                        <option value="audi">Corporate Event</option>

                                    </select>
                                </div>
                            </div>
                            <div className='add_company2'>
                                <div className='image_company2'><img className='image3_c' src="/image/South-Indian-wedding-SanaSambhramaa.jpg" alt="" />
                                </div>
                                <div className='select_option2'>
                                    <select id="events1_c">
                                        <option value="" disabled selected>Select Company</option>
                                        <option value="volvo">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="opel">Opel</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                    <select id="events2_c">
                                        <option value="" disabled selected>Select Event</option>
                                        <option value="volvo">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="opel">Opel</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='button_div'>
                    <button className='button1_c'>Compare Now</button></div>
                </div>
            </div>
        </div>
    )
}

export default Comparison