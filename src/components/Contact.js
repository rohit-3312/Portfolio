import React from "react"
import Layout from "../components/Layout"
import Title from "./Title"


const Contact = () => {
  return (
  

      <section className="contact-page" id="Contact">
      < Title title="Contact me"/>
        <article className="contact-form">
          <h3>get in touch</h3>
          <form action="https://formspree.io/f/xqkgqjov" method="POST">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="form-control"
                required="true"
              />
              <input
                type="email"
                placeholder="email"
                name="email"
                className="form-control"
                required="true"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="message"
                className="form-control"
                required="true"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn btn">
              submit here
            </button>
          </form>
        </article>
      </section>
   
  )
}

export default Contact