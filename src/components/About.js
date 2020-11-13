  
import React from "react"
import Layout from "../components/Layout"
import Title from "../components/Title"
//import SEO from "../components/SEO"
import Logo from '../assets/hero-img.png'
import stack from '../constants/skill'
import {FcCallback} from 'react-icons/fc'
import {SiGmail} from 'react-icons/si'





const About = () => {

  function myFunction() {
    /* Get the text field */
    var copyText = document.getElementById("myInput");
  console.log(copyText)
    document.execCommand("copy");
  
  
   
  }

  return (
   
     
      <section className="about-page" id="About">
        <div className="section-center about-center">
          <img src={Logo} className="about-img" />
          <article className="about-text">
            <Title title={"ABOUT ME"} />
            <p>some lies about me</p>

            <li >
               <a  className="social-link"  style={{fontSize:"20px"}} target="_blank" >
               <FcCallback className="social-icon" style={{marginRight:"8px"}} ></FcCallback>  <p id="myInput"  style={{display:"inline", color:"blue"}}>8802764062 </p>
              </a> 
            </li>

            <li >
               <a  className="social-link" style={{fontSize:"20px"}} target="_blank">
         <SiGmail className="social-icon"  style={{marginRight:"8px"}}></SiGmail>  <p id="myInput"  style={{display:"inline" , color:"blue"}}>r.sharma3312@gmail.com </p>
              </a> 
            </li>


            {/* <div className="about-stack">
              {stack.map(item => {
                return <span key={item.id}>{item.title}</span>
              })}
            </div> */}
          </article>
          
        </div>
      </section>
 
  )
}

export default About