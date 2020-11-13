import React from "react"
import { Link } from 'react-scroll'
const data = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "About",
    url: "/about",
  },
  {
    id: 3,
    text: "Experience",
    url: "/experience",
  },
  {
    id: 4,
    text: "Skills",
    url: "/skill",
  },
  {
    id: 5,
    text: "Contact",
    url: "/contact",
  },
]

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      
      <Link to={link.text} smooth={true} duration={1000} >{link.text}</Link>
     
    </li>
  )
})
// I KNOW WE CAN COMBINE IT !!!!!

export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}
