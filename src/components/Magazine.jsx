import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {FaServicestack} from 'react-icons/fa'
import { featuredCards } from '../constants/reusable'
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const Magazine = () => {
  const settings = {
    dots: true,
      infinite:false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      prevArrow:  <AiFillCaretLeft color="#b91453" />,
    nextArrow: <AiFillCaretRight color="#b91453" />,
        swipeToSlide: true,        
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2.4,
            slidesToScroll: 1,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1.1,
            slidesToScroll: 1,
            initialSlide: 0
          }
        },
        {
          breakpoint: 340,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
  };
  return (
    <>
      <div className="xxs:px-[30px] sm:px-[50px] lg:px-[120px] py-[42px] " >
       <div className="flex items-center pb-[18px] ">
        <div className="flex  "><FaServicestack style={{fontSize:'26px', color: 'black', marginRight:'8px'}}  /></div>
        <div className="flex font-bold text-[24px] ">MAGAZINES</div>
       </div>
        <Slider {...settings}>

{featuredCards.map((card) => (
  <div className=" csz rounded overflow-hidden shadow-lg max-w-[240px] max-h-[250px] mx-[10px] ">    
  <img className="w-full h-[250px] img-overlay " src={card.img} alt="Your Image"/>
   <div className="px-4 py-4 w-[240px] img-content ">
     <div className=" text-white font-[700] text-xl mb-2 absolute bottom-[40px] "> {card.title} </div>
   </div>
 </div>
))}
        </Slider>
      </div>
    </>
  );
};

export default Magazine;
