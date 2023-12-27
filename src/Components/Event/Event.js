import React from 'react'
import './Event.css'
import Card from 'react-bootstrap/Card';
function Event() {
    return (
        <div className="main_container1">
            <div className='event_container'>
                <div className="event_header">
                    <h1>Choose your event</h1>
                </div>
                <div className="selection">
                    <p className='select_p1' >Wedding</p>
                    <p className='select_p2' >Stage Decors</p>
                    <p className='select_p3' >Catering</p>
                    <p className='select_p4' >Birthday</p>
                    <p className='select_p5' >Corporate Events</p>
                </div>
                <div className='hr_div'>

                    <hr className='hr1' />
                    <img className='arrow_image' src="/Images/icons8-next-page-64.png" alt="" />
                </div>
                <div className="event_cards">
                    <div className="first_card">
                        <Card>
                            <Card.Img className='card_img' src="/Images/stage1.jpg" />
                            <Card.Body>
                                <Card.Title className='card_title'>Planet Event Company</Card.Title>
                                <Card.Text className='card_para'>
                                    Best Event management Company <br />
                                    Kochi. Providing Wedding
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="second_card">
                        <Card>
                            <Card.Img className='card_img' src="/Images/stage2.jpg" />
                            <Card.Body>
                                <Card.Title className='card_title'>Wedding Mantra Kochi</Card.Title>
                                <Card.Text className='card_para'>
                                    Best Event management Company <br />
                                    Kochi. Providing Wedding
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="third_card">
                        <Card>
                            <Card.Img className='card_img' src="/Images/stage3.jpg" />
                            <Card.Body>
                                <Card.Title className='card_title'>White Lagoon Events</Card.Title>
                                <Card.Text className='card_para'>
                                    Best Event management Company <br />
                                    Kochi. Providing Wedding
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="fourth_card">
                        <Card>
                            <Card.Img className='card_img' src="/Images/stage4.jpg" />
                            <Card.Body>
                                <Card.Title className='card_title'>Tulips Events</Card.Title>
                                <Card.Text className='card_para'>
                                    Best Event management Company <br />
                                    Kochi. Providing Wedding
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Event
