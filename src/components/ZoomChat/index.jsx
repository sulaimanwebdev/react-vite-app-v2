import { CgClose, CgSmile } from "react-icons/cg";
import icon from "../../assets/images/logo/zoom.png";
import { FiUser, FiMail } from "react-icons/fi";
import { BiWorld } from "react-icons/bi";
import { IoLanguage } from "react-icons/io5";
import { BsPhone } from "react-icons/bs";
import { GrLanguage } from "react-icons/gr";
import Accordion from "../Accordion";

import {useState} from 'react';
import canva from "../../assets/images/logo/canva.png";
import unsplash from "../../assets/images/logo/unsplash.png";



const ZoomChat = ({
  category,
  setcategory,
}) => {

  
  const [sec1, setsec1] = useState('block');
  const [sec2, setsec2] = useState('hidden');



  const [title, settitle] = useState('Meeting');
  const [subtitle, setsubtitle] = useState('Meeting Subtitle');
  const [image, setimage] = useState('');
  const [message, setmessage] = useState('Set up a perfect day for the meeting');
  const [action, setaction] = useState('Choose a day');
  const [confirmText, setconfirmText] = useState('Meeting booked');


  const [popup, setpopup] = useState('hidden');





  return (
    <>
    <section
      className={category === "zoom" ? "w-72 flex flex-col flex-shrink-0 transition pr-8 overflow-y-auto" : "hidden"}
    >
      <div className="flex justify-between w-full py-8 items-center ">
        <h3 className="text-md font-bold opacity-70">Zoom</h3>
        <CgClose  onClick={()=> setcategory('')}  className="text-lg cursor-pointer" />
      </div>
      <div className="">
        <div className="flex gap-7 text-gray-300 text-sm items-center mb-4">
          From: <img src={icon} className="w-10" />
        </div>

      </div>

      <div className={sec1}>
      <div className="flex items-center gap-5 text-sm mb-2">
          <FiUser className="opacity-50" />
          asdasda
        </div>

        <div className="flex items-center gap-5 text-sm mb-2">
          <FiMail className="opacity-50" />
         asdasd
        </div>

        <div className="flex items-center gap-5 text-sm  border-b border-gray-200 pb-5">
          <BsPhone className="opacity-50" />
         12341234
        </div>




      <Accordion title="More Contact Details">
        <div className="flex justify-start gap-10">
          <div className="text-sm text-gray-400">Emal:</div>

          <div className="text-sm">example@example.com</div>

        </div>
      </Accordion>





      <Accordion title="Company Details">
        <div className="grid grid-cols-2 gap-2">
          <div className="text-sm text-gray-400">Company:</div>

          <div className="text-sm">ABC</div>

          <div className="text-sm text-gray-400">Company Size:</div>

          <div className="text-sm">1-10</div>
        </div>
      </Accordion>

      <Accordion title="Viewed Pages">
        <div className="flex justify-between text-xs opacity-30">
          <div>12.10.2021 10:43a.m</div>
          <div>5 min</div>
        </div>
        <div className="text-xs mt-0.5 mb-2">
          <div>https://example.com/index/fsdafa/</div>
        </div>
        <div className="flex justify-between text-xs opacity-30">
          <div>12.10.2021 10:43a.m</div>
          <div>5 min</div>
        </div>
        <div className="text-xs mt-0.5">
          <div>https://example.com/index/fsdafa/</div>
        </div>
      </Accordion>


      <div className="font-bold text-lg mt-5 opacity-80">Zoom Meeting</div>
      <div className="mb-3 opacity-90">Meet with your Customer now.</div>
      <button 
        onClick={()=> {
          setsec1('hidden');
          setsec2('block');

         }}
      className="w-full bg-blue-500 rounded-xl py-3 transition hover:bg-blue-600  text-white">Start Meeting</button>



        <div className="mb-7 relative mt-16">
        <div className="font-bold mt-3 flex items-center justify-between">Meeting <i onClick={()=> {
            if(popup === "hidden"){
              setpopup('flex');
            }
  
            else{
              setpopup('hidden');
  
            }
        }} className="far fa-chevron-down text-xl cursor-pointer"></i></div>
        <div className="opacity-80 mt-3 ml-5">10:30 local time</div>
        <div className="opacity-80 mt-1 ml-5">Video</div>
        <a href="https://zoom.us" className="text-blue-600 ml-5 mt-1">https://zoom.us</a>
        <button className="w-full py-3 mt-5 transition hover:bg-blue-700 bg-blue-600 rounded-lg text-white flex items-center justify-center">Join meeting</button>
        <button className="w-full py-3 mt-3 transition  rounded-lg text-gray-400 border-2 border-gray-400 flex items-center justify-center">Cancel</button>
   

        <div className={`absolute z-10 px-2 pb-2  border-gray-300 bg-white rounded-md top-10 right-0 w-52 border-2 p-2  flex-col gap-2 ${popup}`}>
                  <div className="w-full cursor-pointer gap-2  flex items-center">
                    <div><i className="far fa-pen"></i></div>
                    <div className="text-sm opacity-90 hover:opacity-100">Edit meeting</div>
                  </div>

                  <div className="w-full cursor-pointer gap-3  flex items-center">
                    <div><i className="far fa-times text-lg"></i></div>
                    <div className="text-sm opacity-90 hover:opacity-100">End meeting</div>
                  </div>

                  <div className="w-full cursor-pointer gap-2 text-red-500 flex items-center">
                    <div><i className="far fa-trash text-base"></i></div>
                    <div className="text-sm opacity-90 hover:opacity-100">Delete meeting</div>
                  </div>

                </div>
        </div>

    
      </div>








      
      <div className={`w-full mb-5 ${sec2}`}>
         <div 
          onClick={()=>{
            setsec1('block');
            setsec2('hidden');
          }}
        className="flex items-center gap-3 mt-3 cursor-pointer">
        <i class="far fa-angle-left text-xl"></i>
        <div className='opacity-80'>Zoom Home</div>
        </div>


      

        <input type="text" className="left-bar-inputs w-full px-0 pb-1 mt-5" value={title} onChange={(e)=> settitle(e.target.value)}  />
        <div className="text-sm mt-1 opacity-70">Title</div>

        <input type="text" className="left-bar-inputs w-full px-0 pb-1 mt-5" value={subtitle} onChange={(e)=> setsubtitle(e.target.value)}  />
        <div className="text-sm mt-1 opacity-70">Subtitle</div>


        <input type="text" className="left-bar-inputs w-full px-0 pb-1 mt-5" value={image} onChange={(e)=> setimage(e.target.value)}  />
        <div className="flex items-center justify-between">
        <div className="text-sm mt-1 opacity-70">Image</div>
        <div className="flex items-center gap-2 transform translate-y-1">
            <div className="text-blue-600 text-sm cursor-pointer">Upload from</div>
            <div className='flex items-center gap-2'>
              <img src={canva} className='w-5 cursor-pointer' alt="canva" />
              <img src={unsplash} className='w-5 cursor-pointer' alt="canva" />
            </div>
        </div>
        </div>

        <div className="w-full h-1 bg-gray-200 mt-5"></div>

           <div className="font-bold mt-5">Meeting Information</div>
        <select className="w-full left-bar-inputs mt-3 px-0 pb-1">
           <option>10:30</option>
           <option>11:00</option>
           <option>3:15</option>
        </select>
        <div className="text-sm mt-1 opacity-70">Time</div>


        <select className="w-full left-bar-inputs mt-3 px-0 pb-1">
           <option>Video</option>
           <option>Image</option>
           <option>Audio</option>
        </select>
        <div className="text-sm mt-1 opacity-70">Channel</div>


        <select className="w-full left-bar-inputs mt-3 px-0 pb-1">
           <option>https://zoom.us/</option>
           <option>https://zoom.us/</option>
           <option>https://zoom.us/</option>
        </select>
        <div className="text-sm mt-1 opacity-70 mb-3">Link</div>




           <button className="w-full py-3 mt-5 transition hover:bg-blue-700 bg-blue-600 rounded-lg text-white flex items-center justify-center">Create Meeting</button>


           <button className="w-full py-2 mt-3  bg-white rounded-lg border-2 border-gray-400 text-gray-400 flex items-center justify-center">Canel</button>


         </div>





    
    </section>




    </>
  );
};

export default ZoomChat;
