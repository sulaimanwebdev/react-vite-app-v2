import { CgClose, CgSmile } from "react-icons/cg";
import icon from "../../assets/images/logo/calendly.png";
import canva from "../../assets/images/logo/canva.png";
import unsplash from "../../assets/images/logo/unsplash.png";


import { FiUser, FiMail } from "react-icons/fi";
import { BiWorld } from "react-icons/bi";
import { IoLanguage } from "react-icons/io5";
import { BsPhone } from "react-icons/bs";
import { GrLanguage } from "react-icons/gr";
import Accordion from "../Accordion";
import {useState} from 'react';


const CalendlyChat = ({
  category,
  setcategory,
}) => {


     const [sec1, setsec1] = useState('block');
     const [sec2, setsec2] = useState('hidden');



     const [calendly, setcalendly] = useState('https://calendly.com');
     const [title, settitle] = useState('Metting');
     const [image, setimage] = useState('');
     const [message, setmessage] = useState('Set up a perfect day for the meeting');
     const [action, setaction] = useState('Choose a day');
     const [confirmText, setconfirmText] = useState('Meeting booked');








  return (
    <>
    <section
      className={category === "calendly" ? "w-72 flex flex-col flex-shrink-0 transition pr-8 overflow-y-auto" : "hidden"}
    >
      <div className="flex justify-between w-full py-8 items-center ">
        <h3 className="text-md font-bold opacity-70">Calendly</h3>
        <CgClose  onClick={()=> setcategory('')}  className="text-lg cursor-pointer" />
      </div>
        <div className="flex gap-7 text-gray-300 text-sm items-center mb-4">
          From: <img src={icon} className="w-10" />
        </div>
       
            

            {/* SEC1 */}

       <div className={sec1}>
       <div className="flex items-center gap-5 text-sm mb-2">
          <FiUser className="opacity-50" />
          asdasda
        </div>

        <div className="flex items-center gap-5 text-sm mb-2">
          <FiMail className="opacity-50" />
         asdasd
        </div>

        <div className="flex items-center gap-5 text-sm border-b border-gray-200 pb-5">
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


      <div className="font-bold text-lg mt-5 opacity-80">Calendly</div>

      <div className="rounded-md relative border-2 px-3 py-2 mt-3">
       <div className='font-bold opacity-80'>Book a Metting</div>
       <div className="opacity-80 mt-1">Set up a perfect day for the meeting</div>
       <button className="text-blue-500 font-bold mt-2 hover:text-blue-600 transition">Send</button>
       <button className="absolute bg-white border  -top-5 -right-5 flex items-center justify-center w-12 h-12 rounded-full"><i class="far fa-trash-alt text-xl"></i></button>
     </div>


      <div className="rounded-md border-2 px-3 py-2 mt-3 mb-7">
       <div>New Calendly</div>
       <button 
         onClick={()=> {
          setsec1('hidden');
          setsec2('block');

         }}
       className="text-blue-500 font-bold mt-3 hover:text-blue-600 transition">Add</button>
     </div>
       </div>









       {/* SEC2 */}

       <div className={`w-full mb-5 ${sec2}`}>

        <div 
          onClick={()=>{
            setsec1('block');
            setsec2('hidden');
          }}
        className="flex items-center gap-3 mt-3 cursor-pointer">
        <i class="far fa-angle-left text-xl"></i>
        <div className='opacity-80'>Calendly Home</div>
        </div>


        <input type="text" className="left-bar-inputs w-full px-0 pb-1 mt-5" value={calendly} onChange={(e)=> setcalendly(e.target.value)}  />
        <div className="text-sm mt-1 opacity-70">Calendly Link</div>


        <input type="text" className="left-bar-inputs w-full px-0 pb-1 mt-5" value={title} onChange={(e)=> settitle(e.target.value)}  />
        <div className="text-sm mt-1 opacity-70">Title</div>


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


        <input type="text" className="left-bar-inputs w-full px-0 pb-1 mt-5" value={message} onChange={(e)=> setmessage(e.target.value)}  />
        <div className="text-sm mt-1 opacity-70">Message</div>


        <input type="text" className="left-bar-inputs w-full px-0 pb-1 mt-5" value={action} onChange={(e)=> setaction(e.target.value)}  />
        <div className="text-sm mt-1 opacity-70">Action</div>

        <input type="text" className="left-bar-inputs w-full px-0 pb-1 mt-5 " value={confirmText} onChange={(e)=> setconfirmText(e.target.value)}  />
        <div className="text-sm mt-1 opacity-70">Confirm Text</div>


           <button className="w-full py-3 mt-5 transition hover:bg-blue-700 bg-blue-600 rounded-lg text-white flex items-center justify-center">Add</button>


           <button className="w-full py-2 mt-3  bg-white rounded-lg border-2 border-gray-400 text-gray-400 flex items-center justify-center">Canel</button>






      </div>
    
    </section>






    </>
  );
};

export default CalendlyChat;
