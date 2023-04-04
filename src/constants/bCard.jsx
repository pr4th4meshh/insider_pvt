import React from 'react';
import { FaServicestack } from 'react-icons/fa';

const style= {
    title_div: `flex flex-1 flex-row items-center pb-[18px]`,
    view_btn: `border border-black rounded-lg px-2 py-2 float-right `,
    card_div: `rounded overflow-hidden shadow-lg xxs:max-w-[240px] sm:max-w-[260px] lg:max-w-[335px] max-h-[500px] mx-[10px] relative`,
    card_img: `w-full h-[250px] dark-overlay`,
    card_subDiv: `text-white font-bold text-xl mb-2 absolute bottom-[200px] z-[2] `,
    card_btn: `bg-[#EC1066] hover:bg-[#b91453] text-white font-bold py-2 px-2 rounded`,
    card_subDivTwo: `flex items-center pt-[12px] pb-[4px] bg-[#ffeaf2]`,
  }

const Card = ({ img, title, price, category }) => {
    return (
        <>
            <div className={`${style.card_div}`}>    
            <div className="csz">
            <img className={`${style.card_img}`} src={img} alt="Your Image"/>
            </div>
             <div className="px-4 py-4 w-[240px] ">
               <div className={`${style.card_subDiv}`}> {title} </div>
               <p className="text-gray-700 text-[14px]">
                Video in demand. <br />
                Watch on Insider. <br />
                <a href="price" className="font-semibold" >{price}</a>
               </p>
               <h4 className="text-[14px] text-[#EC1066]" >{category}</h4>
             </div>
             <div className="px-4 pt-0 pb-2 w-[240px] flex flex-row ">
               <button className={`${style.card_btn}`}>
                 Buy Now
               </button>
             </div>
             <div className={`${style.card_subDivTwo}`}>
                   <div className="flex"><FaServicestack style={{fontSize:'12px', color: '#EC1066', marginRight:'8px', marginLeft: '18px'}}  /></div>
                   <div className="flex font-light text-[12px] text-[#ec1066] ">Enjoy this event from your home </div>
                  </div>
           </div>
        </>
    )
}

export default Card;