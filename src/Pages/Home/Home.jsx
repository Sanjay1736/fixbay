import React from 'react'
import Hero from '../../components/Data/Hero'
import Navbar from '../../components/Navbar/Navbar'
import LCD from '../../components/Assests/LCD.jpg'
import AIR from "../../components/Assests/Aircondi.jfif";
import Fridege from "../../components/Assests/Fridge_.jpg";
import Washing from "../../components/Assests/washing mechine_.jpg";
import '../Home/Home.css'
const Home = () => {
  return (
    <>
      <Navbar />

      <div className="container">
      <div className="images">
          <img className="img" src={LCD} alt="Lcd" />
          <p>
            Our Company has technicians who can fix almost all kinds and brand
            of TV. LED, OLED, Plasma or LCD and and leading brands like Samsung,
            LG, Philips, Sony etc.
          </p>
          <button>Click Here</button>
        </div>
      <div className="images">
          <img className="img" src={AIR} alt="Lcd" />
          <p>
            Our Company has technicians who can fix almost all kinds and brand
            of TV. LED, OLED, Plasma or LCD and and leading brands like Samsung,
            LG, Philips, Sony etc.
          </p>
          <button>Click Here</button>
        </div>
      <div className="images">
          <img className="img" src={Fridege} alt="Lcd" />
          <p>
            Our Company has technicians who can fix almost all kinds and brand
            of TV. LED, OLED, Plasma or LCD and and leading brands like Samsung,
            LG, Philips, Sony etc.
          </p>
          <button>Click Here</button>
        </div>
      <div className="images">
          <img className="img" src={Washing} alt="Lcd" />
          <p>
            Our Company has technicians who can fix almost all kinds and brand
            of TV. LED, OLED, Plasma or LCD and and leading brands like Samsung,
            LG, Philips, Sony etc.
          </p>
          <button>Click Here</button>
        </div>
      </div>
    </>
  );
}

export default Home