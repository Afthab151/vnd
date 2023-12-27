import React from 'react'
import './Event.css';
import Card from 'react-bootstrap/Card';
function Event() {
    return (
        <div className='main_container_e'>
            <div className='event_container' >
                <div className='innerevent_container'>
                    <div className='heading_e'> <p className='text1_e'>Choose your event</p></div>
                    <div className='events'>
                        <div className='wedding_e'>
                            Wedding
                        </div>
                        <div className='stagedecore_e'>
                            Stage Decore
                        </div>
                        <div className='catering_e'>
                            Catering
                        </div>
                        <div className='birthday_e'>
                            Birthday
                        </div>
                        <div className='corporate_e'>
                            Corporate Event
                        </div>

                    </div>
                    <div className='hr1_e'><hr />
                        <img className='image1_e' src="/image/icons8-next-page-64.png " alt="" /></div>
                    <div className='events_cards'>
                        <div class="first_card">
                            <Card>
                                <Card.Img className='firstcard_image' variant="top" src="/image/284912622_537363174599565_8313416739499186466_n.avif" />
                                <Card.Body>
                                    <Card.Title className='firstcard_title'>Planet Event Company</Card.Title>
                                    <Card.Text className='firstcard_text'>
                                        Best Event management Company<br></br>
                                        Kochi Providing Wedding
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </div>
                        <div className='second_card'>
                            <Card>
                                <Card.Img className='firstcard_image' variant="top" src="/image/photo-84d16e56-6176-46c6-bf48-f8687b79b55b.avif" />
                                <Card.Body>
                                    <Card.Title className='firstcard_title'>Wedding Mantra Kochi</Card.Title>
                                    <Card.Text className='firstcard_text'>
                                        Best Event management Company<br></br>
                                        Kochi Providing Wedding
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </div>
                        <div className='third_card'>
                            <Card>
                                <Card.Img className='firstcard_image' variant="top" src="/image/stagedecoration.jpg" />
                                <Card.Body>
                                    <Card.Title className='firstcard_title'>White Lagoon Events</Card.Title>
                                    <Card.Text className='firstcard_text'>
                                        Best Event management Company<br></br>
                                        Kochi Providing Wedding
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </div>
                        <div className='fourth_card'>
                            <Card>
                                <Card.Img className='firstcard_image' variant="top" src="/image/jonas-wedding-6-2000-20cc2187e0c3469ab1b38eaaf9ef5f39.jpg" />
                                <Card.Body>
                                    <Card.Title className='firstcard_title'>Tulips Events</Card.Title>
                                    <Card.Text className='firstcard_text'>
                                        Best Event management Company<br></br>
                                        Kochi Providing Wedding
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Event