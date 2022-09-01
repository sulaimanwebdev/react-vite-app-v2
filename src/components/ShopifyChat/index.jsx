import { CgClose, CgSmile } from "react-icons/cg";
import icon from "../../assets/images/logo/shopify.png";
import { FiUser, FiMail } from "react-icons/fi";
import { BiWorld } from "react-icons/bi";
import { IoLanguage } from "react-icons/io5";
import { BsPhone } from "react-icons/bs";
import { GrLanguage } from "react-icons/gr";
import Accordion from "../Accordion";


const ShopifyChat = ({
  category,
  setcategory,
}) => {
  return (
    <>
    <section
      className={category === "shopify" ? "w-72 flex pb-7 flex-col flex-shrink-0 transition pr-8 overflow-y-auto" : "hidden"}
    >
      <div className="flex justify-between w-full py-8 items-center ">
        <h3 className="text-md font-bold opacity-70">Shopify</h3>
        <CgClose  onClick={()=> setcategory('')}  className="text-lg cursor-pointer" />
      </div>
      <div className="border-b border-gray-200 pb-5">
        <div className="flex gap-7 text-gray-300 text-sm items-center mb-4">
          From: <img src={icon} className="w-6" />
        </div>
        <div className="flex items-center gap-5 text-sm mb-2">
          <FiUser className="opacity-50" />
          asdasda
        </div>

        <div className="flex items-center gap-5 text-sm mb-2">
          <FiMail className="opacity-50" />
         asdasd
        </div>

        <div className="flex items-center gap-5 text-sm">
          <BsPhone className="opacity-50" />
         12341234
        </div>
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





      <Accordion title="Shopify">
      

      <div className="flex items-center justify-between border rounded mt-5 px-3 py-3">
          <div className="flex items-center gap-5">
            <div><i class="fas fa-shopping-cart text-lg text-gray-400"></i></div>
            <div>
              <div className="font-bold opacity-80">Cart Content</div>
              <div className='text-gray-500 text-sm'>3 items</div>
            </div>
          </div>
          <div className='font-bold text-xl opacity-80'>$260</div>
      </div>



      <div className="flex items-center justify-between border rounded mt-1 px-3 py-3 ">
          <div className="flex items-center gap-5">
            <div><i class="fas fa-clipboard text-2xl text-gray-400"></i></div>
            <div>
              <div className="font-bold opacity-80">Orders</div>
              <div className='text-gray-500 text-sm'>55 orders</div>
            </div>
          </div>
          <div className='font-bold text-xl opacity-80'>$3,463</div>
      </div>


      
      <div className="flex items-center justify-between border rounded mt-1 px-3 py-3">
          <div className="flex items-center gap-5">
            <div><i class="fas fa-undo text-xl text-gray-400"></i></div>
            <div>
              <div className="font-bold opacity-80">Refunds</div>
              <div className='text-gray-500 text-sm'>Sell all client returns</div>
            </div>
          </div>
      </div>



      <div className="flex items-center justify-between border rounded mt-1 px-3 py-3 ">
          <div className="flex items-center gap-5">
            <div><i class="fas fa-archive text-xl text-gray-400"></i></div>
            <div>
              <div className="font-bold opacity-80">Products Cards</div>
              <div className='text-gray-500 text-sm'>Send your store's items directly to your client</div>
            </div>
          </div>
      </div>


      <button className="border-2 border-blue-500 font-bold transition rounded text-blue-500 py-2 mt-4 hover:bg-blue-500 hover:text-white px-5">Go to Shopify</button>

     
     <div className="w-full border rounded mt-7   px-3 py-3">

       <div className="flex items-center justify-between">
       <div className="font-bold opacity-80">Last Order</div>
       <i class="fas fa-arrow-right text-xl  text-gray-600"></i>
       </div>



       <div className="flex items-center justify-between border-b-2 pb-2 mt-4 mb-3">
         <div>
          <div className="font-bold opacity-80">#1023</div>
          <div className='text-gray-500 text-sm'>March 30, 2022</div>
         </div>


         <div className='font-bold text-xl opacity-80'>$3,356</div>
        
       </div>
 
              


       <div className="font-bold"><span className='opacity-80'>Status:</span><span className='px-3 ml-2 py-1 rounded-full bg-blue-500 text-white text-sm'>Open</span></div>

       <div className="mt-3">
         <div className="flex items-center mt-1 gap-3">
           <i class="fas fa-check-circle text-xl text-green-500"></i>
          <div className="opacity-80">Unfullfiled(3)</div>
         </div>

         <div className="flex items-center mt-1 gap-3">
           <i class="fas fa-check-circle text-xl text-green-500"></i>
           <div className="opacity-80">Fullfiled(6)</div>
         </div>


         <div className="flex items-center mt-1 gap-3">
           <i class="fas fa-check-circle text-xl text-green-500"></i>
           <div className="opacity-80">Paid</div>
         </div>



         
          
       </div>










     </div>




      </Accordion>





   
    </section>




    </>
  );
};

export default ShopifyChat;
