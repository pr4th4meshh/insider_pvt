import React from "react";
import { BrowserView, MobileView, isMobile } from 'react-device-detect';

const style = {
  col__img: `w-full h-30 rounded-xl object-contain pointer`,
  main_div: `xl:max-w-[1280px] w-full xxs:px-[20px] sm:px-[50px] lg:px-[120px] pt-[80px] `,
  sub_div: `grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-4`,
  h1: `font-bold text-[24px]`,
  p: `text-[18px]`
}

const Categories = () => {
  console.log(navigator.userAgent)
  return (
    <div className={`${style.main_div}`}>
      <div className="pb-[24px]" >
        <BrowserView>
        <h1 className={`${style.h1}`} >FIND NEW EXPERIENCES</h1>
        </BrowserView>
        <MobileView>
        <h1 className={`${style.h1}`} >FIND NEW EXPERIENCES WITH INSIDER</h1>
        </MobileView>
        <p className={`${style.p}`} >Step out or stay in. Make a plan!</p>
      </div>
      <div >
      <div className={`${style.sub_div}`}>
  <div className="col cursor-pointer">
    <img src=" /assets/wrks.png" alt="Image 1" className={`${style.col__img}`} />
  </div>
  <div className="col cursor-pointer">
    <img src=" /assets/two.png" alt="Image 2" className={`${style.col__img}`}/>
  </div>
  <div className="col cursor-pointer">
    <img src=" /assets/three.png" alt="Image 3" className={`${style.col__img}`} />
  </div>
  <div className="col cursor-pointer">
    <img src=" /assets/four.png" alt="Image 4" className={`${style.col__img}`} />
  </div>
  <div className="col cursor-pointer">
    <img src=" /assets/five.png" alt="Image 5" className={`${style.col__img}`} />
  </div>
</div>
      </div>
    </div>
  );
};

export default Categories;
