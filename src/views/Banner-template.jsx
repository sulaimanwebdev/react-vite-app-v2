import React from 'react'
import banner1 from '../assets/images/bannerImages/Group1.png';
import banner2 from '../assets/images/bannerImages/Group 3.png';
import banner3 from '../assets/images/bannerImages/Group 4.png';
import banner4 from '../assets/images/bannerImages/Group 5.png';
import banner5 from '../assets/images/bannerImages/Group 6.png';





const BannerTemplate = () => {
    return (
        <div className="champaignMaxWidth w-full mx-auto mt-7 px-5 pb-14">

          <div className="flex items-center justify-between mt-7 mb-14">
            <div className="font-semibold text-xl opacity-80">Banner Template</div>
            <button className="py-3 px-5 rounded-md text-white font-bold bg-blue-500 transition-colors hover:bg-blue-600 ">New Banner</button>
          </div>


          <div className="grid grid-cols-3 gap-20">
        

          <div className="px-4 pt-8 pb-3 bg-white shadow-md text-center relative rounded-xl">
          <img src={banner1} alt="banner" className="w-full" />
          <div className="font-bold text-2xl transform -translate-y-5 w-full relative z-10 bbbb ">Countdown</div>
          <div className="transform -translate-y-5 w-full absolute left-0 bottom-10 h-5 bg-white "></div>

          <button className="text-blue-600">Choose this template</button>
          </div>




          <div className="px-4 pt-8 pb-3 bg-white shadow-md text-center rounded-xl">
          <img src={banner2} alt="banner" className="w-full" />
          <div className="font-bold text-2xl transform -translate-y-5 w-full bbbb">Tips & Tricks</div>
          <button className="text-blue-600">Choose this template</button>
          </div>


          <div className="px-4 pt-8 pb-3 bg-white shadow-md text-center rounded-xl">
          <img src={banner3} alt="banner" className="w-full" />
          <div className="font-bold text-2xl transform -translate-y-5 w-full bbbb ">Sign Up</div>
          <button className="text-blue-600">Choose this template</button>
          </div>



          <div className="px-4 pt-8 pb-3 bg-white shadow-md text-center rounded-xl">
          <img src={banner4} alt="banner" className="w-full" />
          <div className="font-bold text-2xl transform -translate-y-5 w-full bbbb ">Promotion</div>
          <button className="text-blue-600">Choose this template</button>
          </div>



          <div className="px-4 pt-8 pb-3 bg-white shadow-md text-center rounded-xl">
          <img src={banner5} alt="banner" className="w-full" />
          <div className="font-bold text-2xl transform -translate-y-5 w-full bbbb ">Survey</div>
          <button className="text-blue-600">Choose this template</button>
          </div>
         </div>
       </div>
    )
}

export default BannerTemplate
