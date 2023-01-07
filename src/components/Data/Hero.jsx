import React from 'react'
import '../Data/Hero.css'
const Hero = (props) => {
  return (
    <>
      <div className={props.cName}>
        <img
          src={props.image}
          alt="homeInamge"
        />
        <div className='heroText'>
          <h1>{props.title}</h1>
          <p>{props.text} </p>
          <a href={props.url} className={props.btnName}> {props.buttonText }</a>
        </div>
      </div>
    </>
  );
}

export default Hero