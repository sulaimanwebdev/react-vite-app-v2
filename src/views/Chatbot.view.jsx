import {Link} from 'react-router-dom'
import Coffee from '../assets/icons/coffee-shop.png';
import Avatar from '../assets/icons/customer-satisfaction-bot.png';

const Chatbot = () => {
  return (
    <>
 <div className="champaignMaxWidth w-full mx-auto mt-7 px-5">
        <div className="font-bold text-2xl">Chatbot</div>
           

        <div className="flex items-center justify-between mt-7 mb-14">
            <div className="font-semibold opacity-80">Your Chatbots</div>
            <Link to="/chatbot-editor" className="py-3 px-5 rounded-md text-white font-bold bg-blue-500 transition-colors hover:bg-blue-600">Create a Chatbot</Link>
        </div>


        <div className="grid grid-cols-2 mb-5">
            <div className="opacity-50">CHATBOT TITLE</div>

            <div className="flex items-center justify-end">
            <div className="chatbotGrid chatbotGrid1 w-full grid">
               <div className="opacity-60 fontSizeChamp">MEETING TIME</div>
               <div className="opacity-60 fontSizeChamp">VIEWS</div>
               <div className="opacity-60 fontSizeChamp">CLICKED</div>
               <div className="opacity-60 fontSizeChamp">STATUS</div>
            </div>

            </div>
        </div>



        <div className="grid grid-cols-2 w-full campaginBorder pb-2 mb-9">
            <div className="font-bold">Real Estate</div>

          <div className="flex items-center justify-end ">
          <div className="grid chatbotGrid w-full mr-5">
               <div className="opacity-70 font-bold "></div>
               <div className="opacity-70 font-bold ">1244</div>
               <div className="opacity-70 font-bold ">221</div>
               <div className="opacity-70 font-bold  text-green-600">Active</div>
              
            </div>
            
           <div className="flex items-center gap-7 text-lg opacity-75">
           <i class="fal fa-pen text-base cursor-pointer"></i>
            <i class="far fa-eye text-base cursor-pointer"></i>
            <i class="far fa-trash text-base cursor-pointer"></i>
           </div>


          </div>
          
        </div>






        <div className="grid grid-cols-2 w-full campaginBorder pb-2">
            <div className="font-bold">Help</div>

          <div className="flex items-center justify-end ">
          <div className="grid chatbotGrid w-full mr-5">
               <div className="opacity-70 font-bold "></div>
               <div className="opacity-70 font-bold transform translate-x-1 ">0</div>
               <div className="opacity-70 font-bold transform translate-x-1 ">0</div>
               <div className="opacity-70 font-bold  text-yellow-500">Closed</div>
              
            </div>
            
           <div className="flex items-center gap-7 text-lg opacity-75">
           <i class="fal fa-pen text-base cursor-pointer"></i>
            <i class="far fa-eye text-base cursor-pointer"></i>
            <i class="far fa-trash text-base cursor-pointer"></i>
           </div>


          </div>
          
        </div>





        


        <div className="grid grid-cols-2 w-full campaginBorder pb-2 mt-9">
            <div className="font-bold">Book Meeting</div>

          <div className="flex items-center justify-end ">
          <div className="grid chatbotGrid w-full mr-5">
               <div className="opacity-70 font-bold ">30 Min</div>
               <div className="opacity-70 font-bold transform translate-x-1 ">0</div>
               <div className="opacity-70 font-bold transform translate-x-1 ">0</div>
               <div className="opacity-70 font-bold  text-yellow-500">Closed</div>
              
            </div>
            
           <div className="flex items-center gap-7 text-lg opacity-75">
           <i class="fal fa-pen text-base cursor-pointer"></i>
            <i class="far fa-eye text-base cursor-pointer"></i>
            <i class="far fa-trash text-base cursor-pointer"></i>
           </div>


          </div>
          
        </div>





        <div className="font-semibold text-2xl mt-16 opacity-90 ">Get Started</div>
   


       <div className="mb-10 w-full rounded-2xl mt-5 px-7 grid chatBotBannerWidth">
        <div className="flex justify-center h-full flex-col">
          <div className="text-white font-bold text-lg mb-2">First Steps</div>
          <div className="text-white opacity-80 font-normal text-base">Complete our onboarding lesson and learn how to easily create your first chatbot</div>
        </div>

        <div className="flex items-center justify-end">
        <button className="py-3 px-5 rounded-md text-white font-bold bg-blue-500 transition-colors hover:bg-blue-600  text-lg">Setup Tour</button>

        </div>

       </div>








        <div className="font-semibold text-2xl mt-16 mb-5 opacity-90">Chatbot Templates</div>
           
        <div className="grid grid-cols-3 gap-10 lg:gap-20">

         <div className="px-7 py-8 bg-white shadow-md rounded-xl">
            <img src={Coffee} alt="logo" className="w-14 mb-2 text-center" />
            <div className="font-bold text-lg">Table Reservation</div>
            <div className="mt-2 mb-7 ">Let you customers reserve a Table.</div>
            <a className="text-blue-500 fontb-semibold border border-blue-500 fontb-semibold rounded-xl px-10 py-3 cursor-pointer hover:bg-blue-500 hover:text-white transition">Start</a>
         </div>



         <div className="px-7 py-8 bg-white shadow-md rounded-xl">
            <img src={Avatar} alt="logo" className="w-14 mb-2 text-center" />
            <div className="font-bold text-lg">Meeting</div>
            <div className="mt-2 mb-7 ">Book an appointment directly in the chat.</div>
            <a className="text-blue-500 fontb-semibold border border-blue-500 fontb-semibold rounded-xl px-10 py-3 cursor-pointer hover:bg-blue-500 hover:text-white transition">Start</a>
         </div>



         <div className="px-7 py-8 bg-white shadow-md rounded-xl">
            <img src={Avatar} alt="logo" className="w-14 mb-2 text-center" />
            <div className="font-bold text-lg">Estate</div>
            <div className="mt-2 mb-7 ">Book a room tour</div>
            <a className="text-blue-500 fontb-semibold border border-blue-500 fontb-semibold rounded-xl px-10 py-3 cursor-pointer hover:bg-blue-500 hover:text-white transition">Start</a>
         </div>

        {/* GRID END */}
      </div>








      <div className="grid grid-cols-3 gap-10 lg:gap-20 mt-16 mb-14">

<div className="px-7 py-8 bg-white shadow-md rounded-xl">
   <img src={Avatar} alt="logo" className="w-14 mb-2 text-center" />
   <div className="font-bold text-lg">Call</div>
   <div className="mt-2 mb-7 ">Book a meeting call.</div>
   <a className="text-blue-500 fontb-semibold border border-blue-500 fontb-semibold rounded-xl px-10 py-3 cursor-pointer hover:bg-blue-500 hover:text-white transition">Start</a>
</div>



<div className="px-7 py-8 bg-white shadow-md rounded-xl">
   <img src={Avatar} alt="logo" className="w-14 mb-2 text-center" />
   <div className="font-bold text-lg">Tour</div>
   <div className="mt-2 mb-7 ">Book a page Tour.</div>
   <a className="text-blue-500 fontb-semibold border border-blue-500 fontb-semibold rounded-xl px-10 py-3 cursor-pointer hover:bg-blue-500 hover:text-white transition">Start</a>
</div>



<div className="px-7 py-8 bg-white shadow-md rounded-xl">
   <img src={Avatar} alt="logo" className="w-14 mb-2 text-center" />
   <div className="font-bold text-lg">Sale</div>
   <div className="mt-2 mb-7 ">Sale your Products.</div>
   <a className="text-blue-500 fontb-semibold border border-blue-500 fontb-semibold rounded-xl px-10 py-3 cursor-pointer hover:bg-blue-500 hover:text-white transition">Start</a>
</div>

{/* GRID END */}
</div>






        </div>
    </>
  )
}

export default Chatbot