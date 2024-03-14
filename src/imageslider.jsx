import React from "react";
import CarouselSlider from "react-carousel-slider";

function Slider(){
    let data = [
      {
        imgSrc: "slide1.webp",
      },
      {
        imgSrc: "slide2.webp",
      },
      {
       imgSrc: "slide3.webp",
      },
     {
       imgSrc: "slide4.webp",
     },
      
    ];
    
    let sliderBoxStyle = {
      height: "640px",
      width: "1575px",
      marginTop: "100px",

    };
    
    let itemsStyle = {
      height: "640px",
      width: "1575px",
      borderRadius: "4px",
    };

    let buttonSetting = {
      placeOn: "middle-inside"
    };
    
    let manner = {
      autoSliding: {interval: "4s"},
      duration: "1.2s"
    };

    return(
      <div>
      <CarouselSlider
        slideItems={data}
        manner={manner}
        buttonSetting={buttonSetting}
        sliderBoxStyle={sliderBoxStyle}
        itemsStyle={itemsStyle}
      />
        </div>

    );
  }


export default Slider;
