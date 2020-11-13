import React from "react"
import Logo from '../assets/hero-img.png'
import { Link } from 'react-scroll'

import SocialLinks from "../constants/socialLinks"
const Hero = () => {
 
  return (
    <header className="hero" id="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>i'm Rohit </h1>
            <h4>i am a MERN stack professional developer</h4>

            <Link to="Contact" smooth={true} duration={1000} className="btn">
              contact me
            </Link>
        
            <SocialLinks />
          </div>
        </article>
        <img src={Logo} className="hero-img" />
      </div>
    </header>
  )
}

export default Hero