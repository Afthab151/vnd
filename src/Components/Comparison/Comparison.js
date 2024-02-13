import React from 'react'
import './Comparison.css'
function Comparison() {
    return (
        <div className="main_container2">
            <img className='comparison_img' src="/Images/comp2.avif" alt="" />
            <div className='comparison_container'>
                <h1 className='event_heading'>Event Company Comparison</h1>

                <div className="inner_comparison">
                    <div className="inside_comp1">
                        <div className="add_icon">
                            <img src="/Images/icons8-add-100.png" alt="" />
                            <label htmlFor="">Add Company</label>
                        </div>
                        <div className="select_div">
                            <select className='select_company' name="" id="">
                                <option value="" selected disabled>Select Company</option>
                                <option value="">D Company</option>
                                <option value="">Leo Company</option>
                                <option value="">Das Company</option>
                            </select>
                            <select className='select_eventc' name="" id="">
                                <option value="" selected disabled>Select Event</option>
                                <option value="">Birthday</option>
                                <option value="">Wedding</option>
                                <option value="">Coparative Events</option>
                            </select>
                        </div>
                    </div>
                    <div className="inside_comp2">
                        <div className="add_img">
                            <img className='inside_add' src="/Images/addimg.jpg" alt="" />
                            
                        </div>
                        <div className="select_div">
                        <select className='select_company' name="" id="">
                            <option value="" selected disabled>Dazziling Events</option>
                            <option value="">D Company</option>
                            <option value="">Leo Company</option>
                            <option value="">Das Company</option>
                        </select>
                        <select className='select_eventc' name="" id="">
                            <option value="" selected disabled>Wedding Event</option>
                            <option value="">Birthday</option>
                            <option value="">Wedding</option>
                            <option value="">Coparative Events</option>
                        </select>
                        </div>
                    </div>
                </div>
                <div className='buttn'>
                <button className='btn'>Compare Now</button>
                </div>
            </div>
        </div>
    )
}

export default Comparison
