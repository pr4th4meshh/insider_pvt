import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {FaServicestack} from 'react-icons/fa'
import { featuredCards } from '../constants/reusable'
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import Card from "../constants/bCard";

const style= {
  main_div: `xxs:px-[30px] sm:px-[50px] lg:px-[120px] py-[42px] `,
  title_div: `flex flex-1 flex-row items-center pb-[18px]`,
  view_btn: `border border-black rounded-lg px-2 py-2 float-right `,
  card_div: `rounded overflow-hidden shadow-lg xxs:max-w-[240px] sm:max-w-[260px] lg:max-w-[335px] max-h-[500px] mx-[10px] relative`,
  card_img: `w-full h-[250px] dark-overlay`,
  card_subDiv: `text-white font-bold text-xl mb-2 absolute bottom-[200px] z-[2] `,
  card_btn: `bg-[#EC1066] hover:bg-[#b91453] text-white font-bold py-2 px-2 rounded`,
  card_subDivTwo: `flex items-center pt-[12px] pb-[4px] bg-[#ffeaf2]`,

}

const Theatre = () => {
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
         <div className={`${style.main_div}`} >
        <div className="flex" >
        <div className={`${style.title_div}`}>
        <div className="flex  "><FaServicestack style={{fontSize:'26px', color: 'black', marginRight:'8px'}}  /></div>
        <div className="flex font-bold text-[24px] ">THEATRE & ARTS</div>
       </div>
       <div className="flex-1 " >
        <button className={`${style.view_btn}`} >View All</button>
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

export default Theatre;