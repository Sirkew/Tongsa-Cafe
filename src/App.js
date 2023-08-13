import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Menu from './Components/Menu';
import Products from './Components/Products';
import Review from './Components/Review';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <AboutUs/>
      <Menu/>
      <Products/>
      <Review/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
