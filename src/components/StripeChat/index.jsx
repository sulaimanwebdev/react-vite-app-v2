import { CgClose, CgSmile } from "react-icons/cg";
import icon from "../../assets/images/logo/stripe.png";
import { FiUser, FiMail } from "react-icons/fi";
import { BiWorld } from "react-icons/bi";
import { IoLanguage } from "react-icons/io5";
import { BsPhone } from "react-icons/bs";
import { GrLanguage } from "react-icons/gr";
import Accordion from "../Accordion";
import {useState} from 'react';
import canva from "../../assets/images/logo/canva.png";
import unsplash from "../../assets/images/logo/unsplash.png";


const StripeChat = ({
  category,
  setcategory,
}) => {


  const [sec1, setsec1] = useState('block');
  const [sec2, setsec2] = useState('hidden');



  const [title, settitle] = useState('Bottle');
  const [subtitle, setsubtitle] = useState('0.5I/Blue');
  const [image, setimage] = useState('');
  const [items, setitems] = useState('1');
  const [productPrice, setproductPrice] = useState('25,95€');




  return (
    <>
    <section
      className={category === "stripe" ? "w-72 flex flex-col flex-shrink-0 transition pr-8 overflow-y-auto" : "hidden"}
    >
      <div className="flex justify-between w-full py-8 items-center ">
        <h3 className="text-md font-bold opacity-70">Stripe</h3>
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
      className="w-full bg-blue-500 rounded-xl py-3 transition hover:bg-blue-600 mt-5 text-white">Send Payment</button>
      <button className="w-full bg-white rounded-xl py-2 transition text-blue-600 mt-3 border-2 border-blue-500">Open Stripe</button>
    

       </div>



       

       <div className={`w-full mb-5 ${sec2}`}>
         <div 
          onClick={()=>{
            setsec1('block');
            setsec2('hidden');
          }}
        className="flex items-center gap-3 mt-3 cursor-pointer">
        <i class="far fa-angle-left text-xl"></i>
        <div className='opacity-80'>Send Payment</div>
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

           <div className="font-bold mt-5">Billing Information</div>
            
             <div className="flex items-center justify-between px-2 mt-2">
               <label htmlFor="reccuring" className="flex items-center cursor-pointer gap-2">
                 <input type="radio"  id='reccuring'  name="billing-type" />
                 <div  className='text-sm opacity-80'>Reccuring</div>
               </label>

               <label htmlFor="one-time" className="flex items-center cursor-pointer gap-2">
                 <input type="radio" id='one-time' name="billing-type" />
                 <div  className='text-sm opacity-80'>One Time</div>
               </label>


             </div>


        <select className="w-full left-bar-inputs mt-3 px-0 pb-1">
           <option>Monthly</option>
           <option>Yearly</option>
        </select>
        <div className="text-sm mt-1 opacity-70">Payment Gap</div>




        <input type="number" className="left-bar-inputs w-full px-0 pb-1 mt-5" value={items} onChange={(e)=> setitems(e.target.value)}  />
        <div className="text-sm mt-1 opacity-70">Items</div>



        <input type="text" className="left-bar-inputs w-full px-0 pb-1 mt-5" value={productPrice} onChange={(e)=> setproductPrice(e.target.value)}  />
        <div className="text-sm mt-1 opacity-70">Product Price</div>





           <button className="w-full py-3 mt-5 transition hover:bg-blue-700 bg-blue-600 rounded-lg text-white flex items-center justify-center">Send Payment</button>


           <button className="w-full py-2 mt-3  bg-white rounded-lg border-2 border-gray-400 text-gray-400 flex items-center justify-center">Open Stripe</button>


         </div>


    </section>




    </>
  );
};

export default StripeChat;
