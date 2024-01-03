import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import ContactUsPage from './Pages/ContactUsPage';
import ServicesPage from './Pages/ServicesPage';
import AboutUsPage from './Pages/AboutUsPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/aboutus' element={<AboutUsPage />} />
        <Route path='/contactus' element={<ContactUsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
