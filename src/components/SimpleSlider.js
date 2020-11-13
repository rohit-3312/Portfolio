import React from "react";
import Slider from "react-slick";
import About from "./About";
import Experience from "./Experience";
import Hero from "./Hero";
import Layout from "./Layout";
import Skills from "./skills";

 const SimpleSlider=()=> {
  var settings = {
    dots: false,
    infinite: false,
    speed: 10,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable:true,
    focusOnSelect:true,
    slide:"component",
    swipeToSlide:true
  };
  return (
      <>
      <Layout>
      <Slider {...settings}>
      
        <Hero/>
     
      
        <About/>
      
        <Experience/>
     
        <Skills/>
      
    </Slider>
          </Layout>
    
    </>
  );
}

export default SimpleSlider