import React from "react"
import Title from "./Title"
import skill from '../constants/skill'
const Skills = () => {
  return (
    <section className="section bg-grey" id="Skills">
      <Title title="Skils" />
      <div className="section-center services-center">
        {skill.map(service => {
          const { id, icon, title, text } = service

          return (
            <article key={id} className="service">
              {icon}
              <h4>{title}</h4>
              <div className="underline"></div>
              <p>{text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Skills