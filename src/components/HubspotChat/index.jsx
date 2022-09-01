import { CgClose, CgSmile } from "react-icons/cg";
import icon from "../../assets/images/logo/hubspot.png";
import { FiUser, FiMail } from "react-icons/fi";
import { BiWorld } from "react-icons/bi";
import { IoLanguage } from "react-icons/io5";
import { BsPhone } from "react-icons/bs";
import { GrLanguage } from "react-icons/gr";
import Accordion from "../Accordion";

import {useState} from 'react';


const HubspotChat = ({
  category,
  setcategory,
}) => {

  
  
  const [sec1, setsec1] = useState('block');
  const [sec2, setsec2] = useState('hidden');
  const [openPerson, setopenPerson] = useState('block');
  const [transcript, settranscript] = useState('hidden');
  



  return (
    <>
    <section
      className={category === "hubspot" ? "w-72 flex flex-col flex-shrink-0 transition pr-8 overflow-y-auto" : "hidden"}
    >
      <div className="flex justify-between w-full py-8 items-center ">
        <h3 className="text-md font-bold opacity-70">Hubspot</h3>
        <CgClose  onClick={()=> setcategory('')}  className="text-lg cursor-pointer" />
      </div>
      <div className="">
        <div className="flex gap-7 text-gray-300 text-sm items-center mb-4">
          From: <img src={icon} className="w-6" />
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

        <div className="flex items-center gap-5 text-sm border-b border-gray-200 pb-5">
          <BsPhone className="opacity-50" />
         12341234
        </div>

      <div className="border-b border-gray-200 py-5">
        <div className="flex items-center gap-5 text-sm mb-2">
          <IoLanguage className="opacity-50" />
         123434141234
        </div>

        <div className="flex items-center gap-5 text-sm mb-2">
          <BiWorld className="opacity-50" />
          12341234
        </div>

        <div className="flex items-center gap-5 text-sm">
          <GrLanguage className="opacity-50" />
        123412341234
        </div>
      </div>

      <div className="border-b border-gray-200 py-5">
        <div className="grid grid-cols-2 gap-2 mb-0">
          <div className="text-sm text-gray-400">Newsletter:</div>
          <div className="text-sm">asdasdasd</div>
          <div className="text-sm text-gray-400">Survey:</div>
          <div className="font-semibold"><CgSmile className="text-green-300 text-md" /></div>
        </div>

        <span className="text-xs opacity-20">
          Ask the customer again for a feedback
        </span>
      </div>

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



      <div className="flex items-center gap-3 mt-10 mb-5">
        <img src={icon} className='w-7'/>
        <div className='font-semibold opacity-80'>Hubspot</div>
      </div>

      <input type="text" placeholder="Add transcript notes" className=" rounded-lg border-gray-400 mb-3" />

      <button
        onClick={()=> {
          setsec1('hidden');
          setsec2('block');
  
         }}
      className='font-bold text-blue-500 transition hover:text-blue-600 text-left mb-7'>Open person in Hubspot</button>

      </div>





      
      <div className={`w-full mb-5 ${sec2}`}>
        

        <div className={openPerson}>
        <div 
          onClick={()=>{
            setsec1('block');
            setsec2('hidden');
          }}
        className="flex items-center gap-3 mt-3 cursor-pointer">
        <i class="far fa-angle-left text-xl"></i>
        <div className='opacity-80'>Back</div>
        </div>

           <div className="text-sm mt-3"><span className="text-blue-400 underline font-semibold cursor-pointer">Mike James</span> <span className="text-gray-500">is a contact in your Hubspot</span></div>
    
           <button
           onClick={()=>{
            setopenPerson('hidden');
            settranscript('block');

           }}
           className="w-full py-3 mt-5 transition hover:bg-blue-700 bg-blue-600 rounded-lg text-white flex items-center justify-center">Add transcript to notes</button>
          
          
           <div className="font-bold mt-10">Details</div>


           <div className="flex items-center gap-5 mb-3 text-sm  mt-5">
          <FiUser className="opacity-50 text-xl" />
          Mike James
        </div>

        <div className="flex items-center gap-5 mb-3 text-sm ">
          <FiMail className="opacity-50 text-lg" />
         mike.james@beipiel.com
        </div>

        <div className="flex items-center gap-5 mb-3 text-sm ">
          <FiMail className="opacity-50 text-lg" />
         Subscriber
        </div>


        </div>



        <div className={transcript}>
             

             
          <div className="flex items-center justify-between mt-5 mb-4">
              <button 
              onClick={()=>{
                setopenPerson('block');
                settranscript('hidden');
                }}
              className="text-blue-500 flex items-center cursor-pointer gap-1"><i class="far fa-angle-left text-md"></i>back</button>
          
          <div className="flex items-center gap-3">
            <button className='text-blue-500'>edit</button>
            <button className='text-blue-500'>delete</button>


          </div>
           
          </div>




          <div className="w-full border p-2 bg-yellow-100 rounded-md border-gray-300">

            <div className="opacity-40 text-sm">Added on: 2019-3-11 13:20:17</div>
            <div className="opacity-40 text-sm mt-1">Author: Jhon Powers</div>

            <div className='opacity-75 mt-4 font-bold'>LiveChat conversation transcript</div>

            <div className='opacity-75 mt-4 font-bold'>Pre-chat survey results: <br /> Name: Emilia Clark <br /> Email: <br /> <a href="mailto:e.clark@westeros.com" className='text-blue-500'>e.clark@westeros.com</a></div>


            <div className='opacity-75 mt-4 font-bold'>-------------</div>


          </div>







        
        
         </div>




     


           
           



         </div>





    </section>




    </>
  );
};

export default HubspotChat;
