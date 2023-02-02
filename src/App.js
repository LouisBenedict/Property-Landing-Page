import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Header2 from './Components/Header-2';
import Body from './Components/Body-1';
import Body2 from './Components/Body-2';
import Body3 from './Components/Body-3';
import Location from './Components/Location';
import Units from './Components/Units';
import AboutDev from './Components/AboutDev';
import Registration from './Components/Registration';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">

      <header>
        <Navbar />
        <Header />
        <Header2 />
      </header>

      <Body />
      <Body2 />
      <Body3 />
      <Location />
      <Units />
      <AboutDev />
      <Registration />

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
