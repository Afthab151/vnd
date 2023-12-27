import './App.css';
import React from 'react';
import Welcome from './Components/Welcome/Welcome';
import Event from './Components/Event/Event';
import Comparison from './Components/Comparison/Comparison';
import Companies from './Components/Companies/Companies';
import Client from './Components/Client/Client';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className='App'>
    <Welcome />
    <Event/>
    <Comparison />
    <Companies />
    <Client />
    <Footer />
    </div>
  )
}

export default App;
