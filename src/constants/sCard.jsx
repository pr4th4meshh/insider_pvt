import React from 'react';
import { FaVideo } from 'react-icons/fa';

const style = {
  card_div: `rounded overflow-hidden shadow-lg max-w-[240px] max-h-[500px] mx-[10px]`,
  card_divTwo: `text-white font-bold text-xl mb-2 absolute top-[210px] z-[2]`,
  card_divThree: `px-4 pt-0 pb-2 w-[240px] flex flex-row`,
  card_divFour: `flex items-center pt-[12px] pb-[4px] bg-[#ffeaf2]`,
}

const Card = ({ img, title, price, category }) => {
  return (
    <div className={`${style.card_div}`}>
      <div className='csz' >
        <img className="w-full h-[250px]" src={img} alt="Your Image" />
      </div>

      <div className="px-4 py-4 w-[240px] ">
        <div className={`${style.card_divTwo}`}> {title} </div>
        <p className="text-gray-700 text-[14px]">
          Video in demand. <br />
          Watch on Insider. <br />
          <a href="price" className="font-semibold" >{price}</a>
        </p>
        <h4 className="text-[14px] text-[#EC1066]" >{category}</h4>
      </div>

      <div className={`${style.card_divThree}`}>
        <button className=" bg-[#EC1066] hover:bg-[#b91453] text-white font-bold py-2 px-2 rounded">
          Buy Now
        </button>
      </div>

      <div className={`${style.card_divFour}`}>
        <div className="flex"><FaVideo style={{fontSize:'12px', color: '#EC1066', marginRight:'8px', marginLeft: '18px'}}  /></div>
        <div className="flex font-light text-[12px] text-[#ec1066] ">Enjoy this event from your home </div>
      </div>
    </div>
  );
};

export default Card;