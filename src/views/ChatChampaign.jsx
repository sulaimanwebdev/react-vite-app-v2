import React from 'react'
import ChatCampaignMenu from '../components/ChatCampaignMenu';

const ChatChampaign = () => {
    return (
        <>
        
        <div className="champaignMaxWidth w-full mx-auto px-5">
       <div className="flex items-center justify-between">
       <ChatCampaignMenu/>
       </div>
        <div className="font-bold text-2xl">Chat Champaign</div>
           

        <div className="flex items-center justify-between mt-7 mb-14">
            <div className="font-semibold opacity-80">Your Champaign</div>
            <button className="py-3 px-5 rounded-md text-white font-bold bg-blue-500 transition-colors hover:bg-blue-600">Create a New</button>
        </div>


        <div className="grid grid-cols-2 mb-5">
            <div className="opacity-50">CHAMPAIGN TITLE</div>

            <div className="flex items-center justify-end">
            <div className="campaignGrid campaignGrid1 w-full grid">
               <div className="opacity-60 fontSizeChamp">VIEWS</div>
               <div className="opacity-60 fontSizeChamp">CLICKED</div>
               <div className="opacity-60 fontSizeChamp">STATUS</div>
            </div>

            </div>
        </div>



        <div className="grid grid-cols-2 w-full campaginBorder pb-2 mb-9">
            <div>Big Sale 20% Sale</div>

          <div className="flex items-center justify-end ">
          <div className="grid campaignGrid w-full mr-5">
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
            <div>Black Friday for 70% Sale</div>

          <div className="flex items-center justify-end ">
          <div className="grid campaignGrid w-full mr-5">
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








        




        </div>
        </>
    )
}

export default ChatChampaign
