
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbarc from './Component/Navbarc.js';
import Slider from './Component/Slider.js';
import Footer from './Component/Footer.js';

function Homepage() {
  return (
    <div className="App">
      <Navbarc />
      <Slider />
      <Footer />
    </div> 
  );
}

export default Homepage;
