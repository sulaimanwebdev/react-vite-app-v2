import { CgClose, CgSmile } from "react-icons/cg";
import mailchimpicon from "../../assets/images/logo/mailchimp.png";
import { FiUser, FiMail } from "react-icons/fi";
import { BiWorld } from "react-icons/bi";
import { IoLanguage } from "react-icons/io5";
import { BsPhone } from "react-icons/bs";
import { GrLanguage } from "react-icons/gr";
import Accordion from "../Accordion";
import {useState} from 'react';
import canva from "../../assets/images/logo/canva.png";
import unsplash from "../../assets/images/logo/unsplash.png";


const MailchimpChat = ({
  category,
  setcategory,
}) => {


  const [sec1, setsec1] = useState('block');
  const [sec2, setsec2] = useState('hidden');



  const [title, settitle] = useState('Subscription');
  const [subtitle, setsubtitle] = useState('Stay up to date and subscribe to our newsletter.');
  const [image, setimage] = useState('');
 




  return (
    <>
    <section
      className={category === "mailchimp" ? "w-72 flex flex-col flex-shrink-0 transition pr-8 overflow-y-auto" : "hidden"}
    >
      <div className="flex justify-between w-full py-8 items-center ">
        <h3 className="text-md font-bold opacity-70">Mailchimp</h3>
        <CgClose  onClick={()=> setcategory('')}  className="text-lg cursor-pointer" />
      </div>
      <div className="">
        <div className="flex gap-7 text-gray-300 text-sm items-center mb-4">
          From: <img src={mailchimpicon} className="w-10" />
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


      <button
       onClick={()=> {
        setsec1('hidden');
        setsec2('block');

       }}
      className="w-full bg-blue-500 rounded-xl py-3 transition hover:bg-blue-600 mt-5 text-white">Send a Subscription</button>
      <button className="w-full bg-white rounded-xl py-2 transition text-gray-400 mt-3 border-2 border-gray-400">Open Mailchimp</button>
    
      </div>





      

      <div className={`w-full mb-5 ${sec2}`}>

        <div 
          onClick={()=>{
            setsec1('block');
            setsec2('hidden');
          }}
        className="flex items-center gap-3 mt-3 cursor-pointer">
        <i class="far fa-angle-left text-xl"></i>
        <div className='opacity-80'>Mailchimp Home</div>
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

         <div className="font-bold opacity-80 mt-5 mb-3">Subscribe Audiences</div>



          <div className="px-3 py-2 bg-white shadow-md rounded-xl">
            <div className="flex justify-between">
              <div>
                <div className="opacity-85">Newsletter 1</div>
                <div className="opacity-85 text-sm">Newsletter subtitle</div>
              </div>
              <div>
              <i class="fas fa-newspaper text-lg text-blue-500"></i>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-3">
            <i class="fas fa-star text-2xl text-yellow-400"></i>
            <i class="fas fa-star text-2xl text-yellow-400"></i>
            <i class="fas fa-star text-2xl text-yellow-400"></i>
            <i class="fas fa-star text-2xl text-yellow-400"></i>
            <i class="fas fa-star text-2xl text-yellow-400"></i>
            </div>

          </div>




          <div className="px-3 py-2 bg-white shadow-md mt-7 rounded-xl">
            <div className="flex justify-between">
              <div>
                <div className="opacity-85">Newsletter 2</div>
                <div className="opacity-85 text-sm">Newsletter subtitle</div>
              </div>
              <div>
              <i class="fas fa-newspaper text-lg text-blue-500"></i>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-3">
            <i class="fas fa-star text-2xl text-yellow-400"></i>
            <i class="fas fa-star text-2xl text-yellow-400"></i>
            <i class="fas fa-star text-2xl text-yellow-400"></i>
            <i class="fas fa-star text-2xl text-yellow-400"></i>
            <i class="fas fa-star text-2xl text-yellow-400"></i>
            </div>

          </div>



        <select className="w-full left-bar-inputs mt-10 px-0 pb-1 cursor-pointer">
           <option>Select Audiences</option>
           <option>Select Audiences2</option>
           <option>Select Audiences3</option>
        </select>
        <div className="text-sm mt-1 opacity-70">Add an audiences from Mailchimp</div>




          
     

           <button className="w-full py-3 mt-7 transition hover:bg-blue-700 bg-blue-600 rounded-lg text-white flex items-center justify-center">Add</button>


           <button className="w-full py-2 mt-3  bg-white rounded-lg border-2 border-gray-400 text-gray-400 flex items-center justify-center">Canel</button>






      </div>




    </section>




    </>
  );
};

export default MailchimpChat;
