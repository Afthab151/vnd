import Welcome from './Components/Welcome/Welcome';
import './App.css';
import Companies from './Components/Companies/Companies';
import Event from './Components/Event/Event';
import Comparison from './Components/Comparison/Comparison';
import FeedBack from './Components/FeedBack/FeedBack';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Welcome />
      <Event />
      <Comparison />
      <Companies />
      <FeedBack />
      <Footer />
    </div>
  );
}

export default App;
