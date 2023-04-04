import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {FaServicestack} from 'react-icons/fa'
import { featuredCards } from '../constants/reusable'
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import Card from "../constants/bCard";

const Health = () => {
  const settings = {
    dots: true,
      infinite:false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      prevArrow:  <AiFillCaretLeft color="#b91453" />,
      nextArrow: <AiFillCaretRight color="#b91453" />,
        swipeToSlide: true,        
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2.3,
            slidesToScroll: 1,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1.2,
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
        <div className="flex" >
        <div className="flex flex-1 flex-row items-center pb-[18px] ">
        <div className="flex  "><FaServicestack style={{fontSize:'26px', color: 'black', marginRight:'8px'}}  /></div>
        <div className="flex font-bold text-[24px] ">HEALTH & WELLNESS</div>
       </div>
       <div className="flex-1 " >
        <button className="border border-black px-2 py-2 float-right " >View All</button>
       </div>
        </div>
        <Slider {...settings}>
        {featuredCards.map((card) => (
        <Card
          key={card.id}
          img={card.img}
          title={card.title}
          price={card.price}
          category={card.category}
        />
      ))}
        </Slider>
      </div>
    </>
  );
};

export default Health;