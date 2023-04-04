import React from 'react'
import { footerHero, footerHeroTwo} from '../constants/reusable'


const FooterHero = () => {
  return (
    <div className="xxs:px-[10px] sm:px-[50px] lg:px-[120px] py-[42px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:gap-4 sm:gap-0 xxs:gap-0 pb-12">
  {footerHero.map((foot) => (
     <div className="overflow-hidden lg:max-w-auto sm:max-w-auto xxs:max-w-auto h-auto max-h-max mx-[5px] cursor-pointer xxs:pb-6 ">
      <h4 className=" xxs:text-[14px] text-[10px] text-gray-500 cursor-pointer" > {foot.title} </h4>
        <p className="text-gray-500 font-normal xxs:text-[14px] sm:text-[10px] text-[10px]">
         {foot.content}<br />
        </p>
    </div>
  ))}

</div>
<h4 className=" xxs:text-[10px] text-[14px] text-gray-500 pb-6" > Discover your city with Paytm Insider </h4>
<div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-8 lg:gap-4 sm:gap-0 xxs:gap-0">
  {footerHeroTwo.map((foot) => (
     <div className="overflow-hidden max-w-auto h-auto max-h-max xxs:mx-[25px] sm:mx-[5px] cursor-pointer flex flex-col ">
      <h4 className=" xxs:text-[10px] text-[14px] text-gray-500 cursor-pointer" > {foot.c1} </h4>
      <h4 className=" xxs:text-[10px] text-[14px] text-gray-500 cursor-pointer" > {foot.c2} </h4>
      <h4 className=" xxs:text-[10px] text-[14px] text-gray-500 cursor-pointer" > {foot.c3} </h4>
      <h4 className=" xxs:text-[10px] text-[14px] text-gray-500 cursor-pointer" > {foot.c4} </h4>
      <h4 className=" xxs:text-[10px] text-[14px] text-gray-500 cursor-pointer" > {foot.c5} </h4>
      <h4 className=" xxs:text-[10px] text-[14px] text-gray-500 cursor-pointer" > {foot.c6} </h4>
      <h4 className=" xxs:text-[10px] text-[14px] text-gray-500 cursor-pointer" > {foot.c7} </h4>
      <h4 className=" xxs:text-[10px] text-[14px] text-gray-500 cursor-pointer" > {foot.c8} </h4>
      <h4 className=" xxs:text-[10px] text-[14px] text-gray-500 cursor-pointer" > {foot.c9} </h4>
      <h4 className=" xxs:text-[10px] text-[14px] text-gray-500 cursor-pointer" > {foot.c10} </h4>
      <h4 className=" xxs:text-[10px] text-[14px] text-gray-500 cursor-pointer" > {foot.c11} </h4>
      <h4 className=" xxs:text-[10px] text-[14px] text-gray-500 cursor-pointer" > {foot.c12} </h4>
      <h4 className=" xxs:text-[10px] text-[14px] text-gray-500 cursor-pointer" > {foot.c13} </h4>
      <h4 className=" xxs:text-[10px] text-[14px] text-gray-500 cursor-pointer" > {foot.c14} </h4>
    </div>
  ))}

</div>
    </div>
  )
}

export default FooterHero