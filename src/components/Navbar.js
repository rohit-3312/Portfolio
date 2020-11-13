import React from "react"
import logo from "../assets/Logo.svg"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
import SimpleSlider from "./SimpleSlider"
import About from "./About"
import Experience from "./Experience"
import Skills from "./skills"
import { Link } from 'react-scroll'

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
      
    </nav>

    
  )
}

export default Navbar