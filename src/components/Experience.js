import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight, FaDownload } from "react-icons/fa"
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import exp from '../constants/exp'
import axios from 'axios'

function download(){
  axios({ url: '/example.pdf', method: 'GET', responseType: 'blob', })
  .then((response) => { const url = window.URL.createObjectURL(new Blob([response.data])); 
    const link = document.createElement('a');
     link.href = url; link.setAttribute('download', 'Resume.pdf');
     document.body.appendChild(link);
      link.click();});
}



const Experience = () => {
  const [value, setValue] = React.useState(0)
  const { company, position, date, desc } = exp[value]
  //console.log (exp)

    
   
  

  return (
    <section className="section jobs" id="Experience">
      <Title title="expierence" />
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {exp.map((item, index) => {
            return (
              <button
                key={item.date}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {item.company}
              </button>
            )
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {desc.map(item => {
            return (
              <div key={item.id} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{item.name}</p>
              </div>
            )
          })}
        </article>
      </div>
  
      <button className="btn center-btn" onClick={download}>
        download Resume
      </button>
      
    </section>
  )
}

export default Experience;