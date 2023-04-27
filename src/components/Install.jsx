import React from 'react'

const Install = () => {
  return (
    <div className='bg-[#0c172f] h-auto ' >
      <div className='flex xxs:px-[10px] sm:px-[50px] lg:px-[120px] py-[62px] lg:flex-row xxs:flex-col-reverse xxs:items-center' >
        <div className="flex flex-1 flex-col text-white">
          <h1 className='text-[34px] font-[600]' >HIT PAUSE ON BOREDOM</h1>
          <br />
          <h3 className='sm:text-[22px] lg:text-[22px] font-[500] xxs:text-[16px] ' >Kickstart your resolution to party hard. Experience LIVE music, comedy, poetry, theatre, sports & so much more…</h3>
          <br />
          <h3 className='sm:text-[22px] lg:text-[22px] font-[500] xxs:text-[16px]' >Watch and cheer for your favourite teams, Discover new hobbies with workshops & courses And Groove to the beats of your favourite artists.</h3>
          <br />
          <br />
        <div className='flex flex-row' >
        <img src="../public/assets/playstore1.svg" className='mr-4 border border-white rounded-lg transition ease-in-out hover:-translate-y-1 hover:scale-110' alt="" />
        <img src="../public/assets/playstore2.svg" className='mr-4 border border-white rounded-lg transition ease-in-out hover:-translate-y-1 hover:scale-110' alt="" />
        </div>
        </div>
        <div className="flex flex-1 justify-end ">
          <img src="../public/assets/installhero1.gif" className='w-[320px] h-[320px] xxs:pb-12 lg:pb-0 ' alt="" />
        </div>
      </div>
    </div>
  )
}

export default Install; 