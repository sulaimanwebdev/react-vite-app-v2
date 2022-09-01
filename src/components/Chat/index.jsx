import { CgSmile, CgInfo } from "react-icons/cg";
import { GrAttachment } from "react-icons/gr";
import { FiSend, FiMessageSquare, FiMail } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTag, AiOutlineTwitter } from "react-icons/ai";
import ChatMessage from "../ChatMessage";

import ChatMessagesGroup from "../ChatMessagesGroup";
import iPhone from '../../assets/images/iphone.png';
import {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Dropbox from '../../assets/images/logo/dropbox.png'
import GoogleMeet from '../../assets/images/logo/google-meet.png'
import zoom from '../../assets/images/logo/zoom.png';
import calendly from '../../assets/images/logo/calendly.png';
import HomeImage from "../../assets/images/home.webp";
import product from '../../assets/images/images.png'
import saleImage from '../../assets/images/Download 2.jpeg'

import Controllers from '../../assets/images/controller.png'




const MessageStyle = {
  base: "w-1/2 rounded-xl py-2.5 px-4 flex justify-between",
  right: "bg-sky-200 ml-2",
  left: "bg-blue-100 mr-2",
};

const ContainerStyle = {
  left: "flex justify-start pr-8",
  right: "flex justify-end pl-8",
};




const Chat = ({ messages = [], side = "left", facebookFunction, categoryValue }) => {

  const [selectMessages, setselectMessages] = useState('hidden');



  const [showUploadCard, setshowUploadCard] = useState('hidden');





  return (
    <div className="border rounded-2xl border-blue-50 w-full h-full flex flex-col pb-4 grow-0 relative">
      <div className="h-full px-8 overflow-y-scroll flex flex-col flex-grow-0 flex-shrink relative">

        {messages.map((item) => (
          <ChatMessagesGroup date={item.date} messages={item.messages} />
        ))}

        
        <div className="border-2 my-5 rounded-md w-60 h-68">
          
     <img src={iPhone} alt="iphone" className="w-full h-full object-cover" />
        </div>

        <iframe className="rounded-md border-2 mb-5 " width="240px" height="160px" src="https://www.youtube.com/embed/NpEaa2P7qZI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  





        <div className={`mb-10 ${ContainerStyle[side]}`}>
      <div className={`${MessageStyle.base} ${MessageStyle[side]}`}>
        <div>
          <h6 className="font-semibold mb-2">example@example.com</h6>
          <p>This is new message <a href="#" className='text-blue-600'>https://example.com</a></p>
        </div>
        <div className={side === "right" ? "flex items-center" : ""}>
          <span className="opacity-20 text-xs">9:30</span>
        </div>
      </div>
    </div>



    <div className="mb-10">
      <p className='opacity-75 mb-3'>example@example.com has been rated as good at 09:45 AM</p>
      <p className='opacity-75'>example@example.com has been commanted, "Very helpful" at 09:45 AM</p>
    </div>





   <div className='w-full mb-5' >
   <Swiper
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        slidesPerView={categoryValue === "" ? "3" : "2"}
      >
        <SwiperSlide className='overflow-hidden mx-3 border-2 rounded-lg'>
          <img src={HomeImage} alt="home" className="w-full object-cover h-40" />
          <div className="px-3 mb-3">
            <div className='font-bold mt-3 mb-2'>Lorem input the example</div>
            <button className="w-full py-2 border-2 border-blue-500 transition text-blue-600 hover:bg-blue-500 hover:text-white">See the product</button>
          </div>
        </SwiperSlide>

        <SwiperSlide className='overflow-hidden mx-3 border-2 rounded-lg'>
          <img src={HomeImage} alt="home" className="w-full object-cover h-40" />
          <div className="px-3 mb-3">
            <div className='font-bold mt-3 mb-2'>Lorem input the example</div>
            <button className="w-full py-2 border-2 border-blue-500 transition text-blue-600 hover:bg-blue-500 hover:text-white">See the product</button>
          </div>
        </SwiperSlide>

        <SwiperSlide className='overflow-hidden mx-3 border-2 rounded-lg'>
          <img src={HomeImage} alt="home" className="w-full object-cover h-40" />
          <div className="px-3 mb-3">
            <div className='font-bold mt-3 mb-2'>Lorem input the example</div>
            <button className="w-full py-2 border-2 border-blue-500 transition text-blue-600 hover:bg-blue-500 hover:text-white">See the product</button>
          </div>
        </SwiperSlide>

        <SwiperSlide className='overflow-hidden mx-3 border-2 rounded-lg'>
          <img src={HomeImage} alt="home" className="w-full object-cover h-40" />
          <div className="px-3 mb-3">
            <div className='font-bold mt-3 mb-2'>Lorem input the example</div>
            <button className="w-full py-2 border-2 border-blue-500 transition text-blue-600 hover:bg-blue-500 hover:text-white">See the product</button>
          </div>
        </SwiperSlide>


        <SwiperSlide className='overflow-hidden mx-3 border-2 rounded-lg'>
          <img src={HomeImage} alt="home" className="w-full object-cover h-40" />
          <div className="px-3 mb-3">
            <div className='font-bold mt-3 mb-2'>Lorem input the example</div>
            <button className="w-full py-2 border-2 border-blue-500 transition text-blue-600 hover:bg-blue-500 hover:text-white">See the product</button>
          </div>
        </SwiperSlide>

        <SwiperSlide className='overflow-hidden mx-3 border-2 rounded-lg'>
          <img src={HomeImage} alt="home" className="w-full object-cover h-40" />
          <div className="px-3 mb-3">
            <div className='font-bold mt-3 mb-2'>Lorem input the example</div>
            <button className="w-full py-2 border-2 border-blue-500 transition text-blue-600 hover:bg-blue-500 hover:text-white">See the product</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className='overflow-hidden mx-3 border-2 rounded-lg'>
          <img src={HomeImage} alt="home" className="w-full object-cover h-40" />
          <div className="px-3 mb-3">
            <div className='font-bold mt-3 mb-2'>Lorem input the example</div>
            <button className="w-full py-2 border-2 border-blue-500 transition text-blue-600 hover:bg-blue-500 hover:text-white">See the product</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className='overflow-hidden mx-3 border-2 rounded-lg'>
          <img src={HomeImage} alt="home" className="w-full object-cover h-40" />
          <div className="px-3 mb-3">
            <div className='font-bold mt-3 mb-2'>Lorem input the example</div>
            <button className="w-full py-2 border-2 border-blue-500 transition text-blue-600 hover:bg-blue-500 hover:text-white">See the product</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className='overflow-hidden mx-3 border-2 rounded-lg'>
          <img src={HomeImage} alt="home" className="w-full object-cover h-40" />
          <div className="px-3 mb-3">
            <div className='font-bold mt-3 mb-2'>Lorem input the example</div>
            <button className="w-full py-2 border-2 border-blue-500 transition text-blue-600 hover:bg-blue-500 hover:text-white">See the product</button>
          </div>
        </SwiperSlide>
       
      </Swiper>


<div className="flex flex-col float-right">
  

<div className="px-4 py-4 w-64  mt-14 bg-white shadow-md rounded-xl">
        <img src={GoogleMeet} alt="Google Meet"  className='mx-auto w-20'/>
        <div className="font-bold mt-3">Meeting</div>
        <div className="opacity-80 mt-1">Meeting Subtitle</div>
        <div className="opacity-80 mt-3 ml-5">10:30 local time</div>
        <div className="opacity-80 mt-1 ml-5">Video</div>
        <button className="w-full py-3 mt-5 transition hover:bg-blue-700 bg-blue-600 rounded-lg text-white flex items-center justify-center">Join meeting</button>
    </div>


    <div className="px-4 py-4 w-64  mt-14 bg-white shadow-md rounded-xl">
        <img src={zoom} alt=" Zoom"  className='mx-auto w-16'/>
        <div className="font-bold mt-3">Meeting</div>
        <div className="opacity-80 mt-1">Meeting Subtitle</div>
        <div className="opacity-80 mt-3 ml-5">10:30 local time</div>
        <div className="opacity-80 mt-1 mb-2 ml-5">Video</div>
        <a href="https://zoom.us" className="text-blue-600 ">https://zoom.us</a>
        <button className="w-full py-3 mt-4 transition hover:bg-blue-700 bg-blue-600 rounded-lg text-white flex items-center justify-center">Join meeting</button>
    </div>






    <div className=" w-64  mt-14 bg-white overflow-hidden shadow-md rounded-xl">
        <img src={product} alt="Product"  className='mx-auto w-full'/>
       <div className="w-full px-4 py-4">
       <div className="font-bold mt-3">Subscription</div>
        <div className="opacity-80 mt-1">Stay up to date and subscribe to our newsletter.</div>
        <button className="w-full py-3 mt-4 transition hover:bg-blue-700 bg-blue-600 rounded-lg text-white flex items-center justify-center">Subscribe</button>
   
       </div>
    </div>





    <div className=" w-64  mt-14 bg-white overflow-hidden shadow-md rounded-xl">
        <img src={saleImage} alt="Product"  className='mx-auto w-full'/>
       <div className="w-full px-4 py-4">
      <div className="flex justify-between">
        <div>
          <div className="font-bold">Bottle</div>
          <div className="opacity-80">0.5I/Blue</div>
        </div>
        <div className="font-bold">25,95€/mo.</div>
      </div>
        <button className="w-full py-3 mt-4 transition hover:bg-blue-700 bg-blue-600 rounded-lg text-white flex items-center justify-center">Buy Now</button>
   
       </div>
    </div>





    <div className="px-4 py-4 w-64  mt-14 bg-white shadow-md rounded-xl">
        <img src={calendly} alt=" Zoom"  className='mx-auto w-16'/>
        <div className="font-bold mt-5">Book a Meeting</div>
        <div className="opacity-80 mt-1">Set up a perfect day for the morning.</div>
        <button className="w-full py-3 mt-4 transition hover:bg-blue-700 bg-blue-600 rounded-lg text-white flex items-center justify-center">Choose a date</button>
    </div>









</div>


   </div>


























      </div>

      <div className="py-4 border-t border-blue-100 px-10  flex-shrink-0 bottom-0 bg-white flex flex-col">
        <div className="flex justify-between items-center flex-shrink-0 w-full mb-2">


          <input
            placeholder="Enter your message here"
            className="focus:outline-none border-none placeholder:font-bold w-full pr-6"
          />
  

          <div className="flex items-center gap-6">
            <div className="flex items-center text-2xl gap-2">
              <button className=" relative">
                <GrAttachment className='opacity-50 hover:opacity-100' onClick={() => showUploadCard === "hidden" ? setshowUploadCard("flex") : setshowUploadCard("hidden")}/>
                <div className={`absolute z-10 px-2 pb-2 bg-white rounded-md -top-20 right-0 w-52 border-2 pa-2  flex-col gap-1 ${showUploadCard}`}>
                  <div className="w-full gap-2  flex items-center">
                    <div><i class="far fa-image text-2xl opacity-80"></i></div>
                    <div className="text-sm opacity-90 hover:opacity-100">Upload from Device</div>
                  </div>

                  <div className="w-full gap-2  flex items-center">
                    <div><img src={Dropbox} className='w-6' /></div>
                    <div className="text-sm opacity-90 hover:opacity-100">Upload from Dropbox</div>
                  </div>
                </div>
              </button>
              <button className="opacity-50 hover:opacity-100">
                <CgSmile />
              </button>
            </div>

            <button className="flex justify-center items-center px-2.5 py-2.5 rounded-full bg-blue-400 hover:opacity-80">
              <FiSend className="text-2xl text-white pt-0.5 pr-0.5" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-gray-500">#</span>
            <span className="text-gray-500">{`{...}`}</span>
                 <img src={Controllers} alt="Google Meet"  className='mx-auto w-8'/>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Chat;
