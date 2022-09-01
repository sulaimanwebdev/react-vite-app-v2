import React, { useState } from "react";
import ChampaignMenu from '../components/ChampaignMenu';
import ChatCampaignMenu from '../components/ChatCampaignMenu';
import Champaigns from "../components/champaign"
import Button from "../components/Button"
import { Link } from "react-router-dom";

import banner1 from '../assets/images/bannerImages/Group1.png';
import banner2 from '../assets/images/bannerImages/Group 3.png';
import banner3 from '../assets/images/bannerImages/Group 4.png';
import banner4 from '../assets/images/bannerImages/Group 5.png';
import banner5 from '../assets/images/bannerImages/Group 6.png';

import Chatbanner1 from '../assets/images/images 2.jpeg'
import Chatbanner2 from '../assets/images/Download 2.png'
import Chatbanner3 from '../assets/images/Download (1).jpeg'
import Chatbanner4 from '../assets/images/Download 2.jpeg'
import Chatbanner5 from '../assets/images/istockphoto-1144376964-1024x1024.jpeg'
import Chatbanner6 from '../assets/images/images.png'

 import arrowRight from "../assets/icons/new-icons/arrow-right.svg";


const champs = [
  {
  title : "Big Sale for 20% sale",
  type : "Push-banner",
  views: '1244',
  clicked :'221',
  status : "active"
  },
  {
    title : "Black friday Sale for 70% sale",
    type : "Push-banner",
    views: '1244',
    clicked :'221',
    status : "active"
    },
  
];

const Champaign = () => {

    const [openTab, setOpenTab] = React.useState(1);
  const [showModal, setshowModal] = useState("opacity-0 invisible");

  let modalFunction = () =>{
    setshowModal("opacity-100 visible")
  }
  const [selected, setSelected] = useState("");
    return (
        <>
        
        
        <div className="champaignMaxWidth w-11/12 mx-auto px-5">
          <div className="flex items-center justify-between">
       <ChatCampaignMenu/>
       <ChampaignMenu/>
       </div>
        <div className="font-bold text-2xl">Champaign</div>
           

        <div className="flex items-center justify-between mt-7 mb-14">
            <div className="font-semibold opacity-80">2 Champaigns</div>
            <div onClick={modalFunction} className="flex cursor-pointer mt-8  items-center gap-3 font-normal ">
<button className="text-white bg-blue-600 hover:opacity-70 font-normal block px-10 py-2 rounded-full">Create a Banner</button>
</div>
        </div>
        
        <div className="flex border-b border-gray-200">
            <div className="opacity-50 basis-1/3">TITLE</div>
            <div className="opacity-60 fontSizeChamp basis-1/3">TYPE</div>

            <div className="flex basis-1/3">
           
               <div className="opacity-60 basis-1/3">VIEWS</div>
               <div className="opacity-60 basis-1/3">CLICKED</div>
               <div className="opacity-60  basis-1/3">STATUS</div>
            </div>

        </div>





<Champaigns data={champs} />


{/* POPUP */}


<div className={`fixed top-0 transition mainFixedOverlay h-screen w-screen flex items-center justify-center ${showModal}`}>

<div className="blackOverlay absolute left-0 top-0 w-full h-full" onClick={() => setshowModal('opacity-0 invisible')}></div>

<div className="rounded-lg  max-h-11/12 overflow-y-scroll bg-white w-2/3 py-8 pb-10 px-7 relative z-50">
<div className="flex items-center justify-between">
              <div className="font-bold opacity-70 text-xl">Create a Champaign</div>
              <i class="fal fa-times cursor-pointer text-black opacity-70 text-xl" onClick={() => setshowModal('opacity-0 invisible')}></i>
</div>


<div className="flex">
	<ul className="list-none mt-5 pt-3 pb-4 basis-1/4" role="tablist">
		<li className="last:mr-0 my-4"> <a className={ "font-semibold p-4 rounded-lg " + (openTab===1 ? "text-white bg-blue-600 " : "text-black-600 bg-gray-300") } onClick={e=> {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Push Banner
              </a> </li>

              <li className="my-8"> <a className={ "font-semibold p-4 rounded-lg " + (openTab===2 ? "text-white bg-blue-600 " : "text-black-600 bg-gray-300") } onClick={e=> {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Chat Banner
              </a> </li>
		
	</ul>
	<div className="tab-content tab-space basis-3/4">
		<div className={openTab===1 ? "block" : "hidden"} id="link1">
			<div className="flex items-center">
				<div className="">

                <div className="w-full">

<Link to="/create-banner" className="flex ml-4 items-center gap-4 w-64 justify-center p-2 rounded-lg bg-gray-200"><span>Create a own Push Banner</span> <div className="w-5"><img src={arrowRight} alt="" /></div></Link>


<div className="grid grid-cols-2">


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




                </div>
			</div>
		</div>
		<div className={openTab===2 ? "block" : "hidden"} id="link1">
			<div className="flex items-center">
				<div className="">
                <Link to="/chat-create-banner" className="flex ml-4 items-center gap-4 w-64 justify-center p-2 rounded-lg bg-gray-200"><span>Create a own Chat Banner</span> <div className="w-5"><img src={arrowRight} alt="" /></div></Link>

{/* Chat Banner  */}

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">


<div className="px-4 pt-8 pb-3 bg-white shadow-md  relative rounded-xl">

 <div className="bg-white mb-7 relative shadow-md rounded-xl mx-auto pb-3 transform -translate-x-3" style={{width: "calc(100% - 30px)"}}>
 <img src={Chatbanner1} alt="banner" className="w-full h-32 rounded-xl object-cover object-center" />
<div className=" w-fit  px-3 text-base opacity-80 mt-2 ">Up to 80% off, use it now</div>
<button className=" w-fit  px-3 text-base  mt-2 text-blue-600">Show more</button>

 <div className={`absolute bottom-2 -right-7 flex items-center justify-center rounded-full w-14 h-14 bg-blue-600 cursor-pointer hover:bg-blue-800 transition-colors`}><i class="fas fa-comment-dots text-white text-2xl"></i></div>
  
 </div>
<div className="flex items-center justify-center"><button className="text-blue-600 border-b-2 border-blue-500">Choose this template</button></div>
</div>








<div className="px-4 pt-8 pb-3 bg-white shadow-md  relative rounded-xl">

 <div className="bg-white mb-7 relative shadow-md rounded-xl mx-auto pb-3 transform -translate-x-3" style={{width: "calc(100% - 30px)"}}>
 <img src={Chatbanner2} alt="banner" className="w-full h-32 rounded-xl object-cover object-center" />
<div className=" w-fit  px-3 text-base opacity-80 mt-2 ">Up to 80% off, use it now</div>
<button className=" w-fit  px-3 text-base  mt-2 text-blue-600">Show more</button>

 <div className={`absolute bottom-2 -right-7 flex items-center justify-center rounded-full w-14 h-14 bg-blue-600 cursor-pointer hover:bg-blue-800 transition-colors`}><i class="fas fa-comment-dots text-white text-2xl"></i></div>
  
 </div>
<div className="flex items-center justify-center"><button className="text-blue-600 border-b-2 border-blue-500 text-base">Choose this template</button></div>
</div>









<div className="px-4 pt-8 pb-3 bg-white shadow-md  relative rounded-xl">

<div className="bg-white mb-7 relative shadow-md rounded-xl mx-auto pb-3 transform -translate-x-3" style={{width: "calc(100% - 30px)"}}>
<img src={Chatbanner3} alt="banner" className="w-full h-32 rounded-xl object-cover object-center" />
<div className=" w-fit  px-3 text-base opacity-80 mt-2 ">Up to 80% off, use it now</div>
<button className=" w-fit  px-3 text-base  mt-2 text-blue-600">Show more</button>

<div className={`absolute bottom-2 -right-7 flex items-center justify-center rounded-full w-14 h-14 bg-blue-600 cursor-pointer hover:bg-blue-800 transition-colors`}><i class="fas fa-comment-dots text-white text-2xl"></i></div>

</div>
<div className="flex items-center justify-center"><button className="text-blue-600 border-b-2 border-blue-500 text-base">Choose this template</button></div>
</div>













<div className="px-4 pt-8 pb-3 bg-white shadow-md  relative rounded-xl">

<div className="bg-white mb-7 relative shadow-md rounded-xl mx-auto pb-3 transform -translate-x-3" style={{width: "calc(100% - 30px)"}}>
<img src={Chatbanner4} alt="banner" className="w-full h-32 rounded-xl object-cover object-center" />
<div className=" w-fit  px-3 text-base opacity-80 mt-2 ">Up to 80% off, use it now</div>
<button className=" w-fit  px-3 text-base  mt-2 text-blue-600">Show more</button>

<div className={`absolute bottom-2 -right-7 flex items-center justify-center rounded-full w-14 h-14 bg-blue-600 cursor-pointer hover:bg-blue-800 transition-colors`}><i class="fas fa-comment-dots text-white text-2xl"></i></div>

</div>
<div className="flex items-center justify-center"><button className="text-blue-600 border-b-2 border-blue-500 text-base">Choose this template</button></div>
</div>














<div className="px-4 pt-8 pb-3 bg-white shadow-md  relative rounded-xl">

<div className="bg-white mb-7 relative shadow-md rounded-xl mx-auto pb-3 transform -translate-x-3" style={{width: "calc(100% - 30px)"}}>
<img src={Chatbanner5} alt="banner" className="w-full h-32 rounded-xl object-cover object-center" />
<div className=" w-fit  px-3 text-base opacity-80 mt-2 ">Up to 80% off, use it now</div>
<button className=" w-fit  px-3 text-base  mt-2 text-blue-600">Show more</button>

<div className={`absolute bottom-2 -right-7 flex items-center justify-center rounded-full w-14 h-14 bg-blue-600 cursor-pointer hover:bg-blue-800 transition-colors`}><i class="fas fa-comment-dots text-white text-2xl"></i></div>

</div>
<div className="flex items-center justify-center"><button className="text-blue-600 border-b-2 border-blue-500 text-base">Choose this template</button></div>
</div>












<div className="px-4 pt-8 pb-3 bg-white shadow-md  relative rounded-xl">

<div className="bg-white mb-7 relative shadow-md rounded-xl mx-auto pb-3 transform -translate-x-3" style={{width: "calc(100% - 30px)"}}>
<img src={Chatbanner6} alt="banner" className="w-full h-32 rounded-xl object-cover object-center" />
<div className=" w-fit  px-3 text-base opacity-80 mt-2 ">Up to 80% off, use it now</div>
<button className=" w-fit  px-3 text-base  mt-2 text-blue-600">Show more</button>

<div className={`absolute bottom-2 -right-7 flex items-center justify-center rounded-full w-14 h-14 bg-blue-600 cursor-pointer hover:bg-blue-800 transition-colors`}><i class="fas fa-comment-dots text-white text-2xl"></i></div>

</div>
<div className="flex items-center justify-center"><button className="text-blue-600 border-b-2 border-blue-500 text-base">Choose this template</button></div>
</div>
</div>
</div>



                </div>
			</div>
		</div>
	</div>




{/* TABS */}
  </div>
 </div>

 {/* CONTAINER  */}
</div>
        </>
    )
}

export default Champaign
