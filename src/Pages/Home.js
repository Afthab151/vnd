import React from 'react'
import Welcome from '../Components/Welcome/Welcome'
import Event from '../Components/Event/Event'
import Comparison from '../Components/Comparison/Comparison'
import Companies from '../Components/Companies/Companies'
import FeedBack from '../Components/FeedBack/FeedBack'
import Footer from '../Components/Footer/Footer'


function Home() {
  return (
    <div>
      <Welcome />
      <Event />
      <Comparison />
      <Companies />
      <FeedBack />
      <Footer />
    </div>
  )
}

export default Home
