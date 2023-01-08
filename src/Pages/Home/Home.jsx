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
      <div>
        <h1 className='home-header'>Fixbay Services</h1>
        <img
          src="https://static.wixstatic.com/media/889c9d_cb9be101320b487b94ca5cf816635914f000.jpg/v1/fill/w_1903,h_446,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/889c9d_cb9be101320b487b94ca5cf816635914f000.jpg"
          alt="service"
        />
      </div>
      <div className="Proffession">
        <div className="home-text">
          <h1>Experiened &</h1>
          <h1>Proffessional Team</h1>
          <p>
            We work hard to provide all customers with excellent service at
            competitive prices. When you need a professional repair solution,
            trust the team at Happy Home Service Center. Take a look at our
            services to learn more.
          </p>
          <button>Expolre</button>
        </div>
        <div className="home-image">
          <img
            src="https://media.istockphoto.com/id/489937474/photo/home-appliances.jpg?s=612x612&w=0&k=20&c=x9MfsuwtJlNhq8uLWOpisy16b9JHfeqqxmeyP4nXoHw="
            alt="Our Work"
          />
        </div>
      </div>
      <div>
        <h1>Our Services</h1>
      </div>
    </>
  );
}

export default Home;
{/* <div className="container">
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
      </div> */}