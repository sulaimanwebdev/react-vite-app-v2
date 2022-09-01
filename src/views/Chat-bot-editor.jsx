import React,{useState} from 'react'
import {Link} from 'react-router-dom'


const ChatBotEditor = () => {

    const [panel, setpanel] = useState('');
    const [categories, setcategories] = useState('');
    const [main, setmain] = useState('hidden');


    // Right bars
    const [messageBar, setmessageBar] = useState('block');
    const [questionBar, setquestionBar] = useState('hidden');
    const [buttonBar, setbuttonBar] = useState('hidden');


    

    // boxed
   
    const [questionBox, setquestionBox] = useState('hidden')
    const [buttonBox, setbuttonBox] = useState('hidden')



    // input filed values

    const [messageText, setmessageText] = useState('Hello, how can I help you today?');
    const [questionText, setquestionText] = useState('What is your Email?');
    const [buttonText, setbuttonText] = useState('Would you like to book a meeting?');




  

    let addIconFunction = () =>{

      if (messageBar === "block"){
        
        setquestionBox("block")
        setmessageBar("hidden")
        setquestionBar('block')
      }


      if (questionBox === "block"){
        
        setmessageBar("hidden")
        setquestionBar("hidden")
        setbuttonBar("block")
        setbuttonBox('block')

      }


    
    }
 
  return (
    <>
    <div className="chatbot-editor w-full h-auto min-h-screen absolute top-0 left-0 z-50" style={{backgroundColor: "#413E55"}}>

    <div className="w-full py-3 bg-white">
        <div className="mx-auto bg-white px-5 flex items-center justify-between">
          
           <div className="flex items-center">
             <Link to="/chatbot" className="w-10 h-10 flex bg-gray-200 rounded-md items-center mr-6 justify-center"><i class="fal fa-home-alt text-2xl"></i></Link>
             <button className="w-10 h-10 flex bg-gray-200 rounded-md items-center justify-center"><i class="far fa-arrow-left text-xl"></i></button>
             <button className="w-10 h-10 flex bg-gray-200 rounded-md items-center ml-4 justify-center"><i class="far fa-arrow-right text-xl"></i></button>
             <div className="flex items-center ml-4 pl-3 pr-2 h-10 bg-gray-200 rounded-md justify-center gap-5">
               <button className='text-xl'><i class="far fa-minus"></i></button> 
               <button className='text-xl'><i class="far fa-plus"></i></button> 
               <button>100%</button> 
             </div>
           </div>



           <div className="flex items-center gap-5">
           <button className="h-12 px-5 rounded-md text-blue-500 border-2 border-blue-500 font-bold bg-white transition-colors">Test your bot</button>
           <button className="h-12 px-5 rounded-md text-white font-bold bg-blue-500 transition-colors hover:bg-blue-600">Save</button>
           </div>

        </div>
    </div>








     <div className={`w-full ${panel}`}>
<div className="w-full min-h-screen h-full">

<div className="mx-auto   w-full text-center transition">
    <div className="mx-auto">
      <button  className="max-w-md text-white py-3 text-lg font-bold mt-14 w-full border border-gray-100 rounded-md " style={{backgroundColor: "#103252"}}>Startpoint</button>
      
      <div className={`mx-auto max-w-xs w-full ${categories}`}>
          <button onClick={()=> {setpanel("chat-bot-grid"), setcategories('hidden'), setmain("block")}} className="w-8 cursor-pointer text-white mt-3 mb-8 mx-auto rounded-full h-8 flex items-center justify-center border-2 border-white"><i class="far fa-plus"></i></button>

          <div className="w-full bg-white rounded-md py-2">
            <div className="border-b border-gray-400 pb-1 opacity-85 w-full px-2 flex items-center justify-center">Message</div>
            <div className="border-b border-gray-400 pb-1 pt-1 opacity-85 w-full px-2 flex items-center justify-center">Question</div>
            <div className="border-b border-gray-400 pb-1 pt-1 opacity-85 w-full px-2 flex items-center justify-center">Button</div>
            <div className="border-b border-gray-400 pb-1 pt-1 opacity-85 w-full px-2 flex items-center justify-center">Step</div>
            <div className="border-b border-gray-400 pb-1 pt-1 opacity-85 w-full px-2 flex items-center justify-center">Image</div>
            <div className="border-b border-gray-400 pb-1 pt-1 opacity-85 w-full px-2 flex items-center justify-center">Image Slider</div>
            <div className="border-b border-gray-400 pb-1 pt-1 opacity-85 w-full px-2 flex items-center justify-center">Booking</div>
            <div className="pt-1 opacity-85 w-full px-2 flex items-center justify-center">Donate</div>
         
          </div>
      </div>

           


           {/* MAIN */}
           <div className={`w-fit mt-10 ${main}`}>
               {/* message */}
               <div className="mx-auto overflow-hidden bg-white rounded-lg min-h-fit max-w-xs w-full flex gap-3">
                 <div className="min-h-fit bg-blue-500 " style={{minWidth: "40px"}}></div>
                 <div className="mt-2 flex items-start flex-col mb-2 mr-2">
                   <div className="font-bold">Message</div>
                   <div className="opacity-80 text-left">{messageText}</div>
                 </div>
               </div>

   {/* QUESTION */}
   <div className={`mx-auto mt-10 overflow-hidden bg-white rounded-lg min-h-fit max-w-xs w-full flex gap-3 ${questionBox}`}>
                 <div className="min-h-fit bg-purple-500 " style={{minWidth: "40px"}}></div>
                 <div className="mt-2 flex items-start flex-col mb-2 mr-2">
                   <div className="font-bold">Question</div>
                   <div className="opacity-80 text-left">{questionText}</div>
                 </div>
               </div>



 {/* BUTTON */}

 <div className={` mt-10 mx-auto ${buttonBox}`}>
 <div className={`mx-auto  overflow-hidden bg-white rounded-lg min-h-fit max-w-xs w-full flex gap-3 `}>
                 <div className="min-h-fit bg-yellow-300" style={{minWidth: "40px"}}></div>
                 <div className="mt-2 flex items-start flex-col mb-2 mr-2">
                   <div className="font-bold">Button</div>
                   <div className="opacity-80 text-left">{buttonText}</div>
                 </div>
 </div>


<div className="flex items-center justify-between mx-auto w-full max-w-xs mt-6">

   <div className="flex items-center flex-col gap-1 mx-auto">
     <button className='bg-white rounded px-4 py-2'>Yes</button>
     <button className="w-8 cursor-pointer text-white mt-3 mb-8 mx-auto rounded-full h-8 flex items-center justify-center border-2 border-white"><i class="far fa-plus"></i></button>
   </div>

   <div className="flex items-center flex-col gap-1 mx-auto">
     <button className='bg-white rounded px-4 py-2'>No</button>
     <button className="w-8 cursor-pointer text-white mt-3 mb-8 mx-auto rounded-full h-8 flex items-center justify-center border-2 border-white"><i class="far fa-plus"></i></button>
   </div>



</div>


               

 </div>





          <button onClick={addIconFunction} className="w-8 cursor-pointer text-white mt-3 mb-8 mx-auto rounded-full h-8 flex items-center justify-center border-2 border-white"><i class="far fa-plus"></i></button>




           </div>







    


    </div>
</div>

</div>


{/* RIGHT BAR STARTS */}

<div className={`w-full hidden pl-4 pr-3 chatbot-rightbar ${panel === "chat-bot-grid" ? "h-screen" : "hidden " }`} style={{backgroundColor: "#F2F2F2"}}>
<div className="flex items-center justify-end gap-5 mt-5">
  <button className="text-2xl "><i class="far fa-times"></i></button>
  <button className="text-2xl "><i class="far fa-check"></i></button>
</div>


{/* MESSAGE */}
<div className={`w-full ${messageBar}`}>
  <div className="font-bold opacity-85 text-xl opacity-75 transform -translate-y-7">Message</div>
  
  <div className="flex items-center w-32 justify-between rounded-md text-white px-3 py-2 bg-gray-300 w-fit">
  <i class="fal fa-alarm-clock text-xl"></i>
  <span className="w-fit">+2s delay</span>
  </div>
  
  <div className="font-bold opacity-80 mt-7 mb-2">Text</div>
  <input type="text"
  value={messageText}
  onChange={(e)=>{
    setmessageText(e.target.value)
  }}
  className="bg-white border-none outline-none px-3 py-2 rounded-md w-full" />

</div>




{/* Question */}
<div className={`w-full ${questionBar}`}>
  <div className="font-bold opacity-85 text-xl opacity-75 transform -translate-y-7">Question</div>
  
  <div className="flex items-center w-32 justify-between rounded-md text-white px-3 py-2 bg-gray-300 w-fit">
  <i class="fal fa-alarm-clock text-xl"></i>
  <span className="w-fit">+2s delay</span>
  </div>
  
  <div className="font-bold opacity-80 mt-7 mb-2">Text</div>
  <input type="text"
  value={questionText}
  onChange={(e)=>{
    setquestionText(e.target.value)
  }}
  className="bg-white border-none outline-none px-3 py-2 rounded-md w-full" />

<div className="font-bold opacity-80 mt-4 mb-2">Validation</div>

   <select  className="bg-white border-none outline-none px-3 py-2 rounded-md w-full cursor-pointer ">
     <option>None</option>
     <option>Email</option>
     <option>Phone Number</option>
     <option>Company Name</option>
     <option>Company Size</option>


   </select>

   <div className="font-bold opacity-80 mt-4 mb-2">Error</div>
  <input type="text"
  value="Apps, It doesn't look like a name"
 
  className="bg-white border-none outline-none px-3 py-2 rounded-md w-full" />



</div>






{/* Button */}
<div className={`w-full ${buttonBar}`}>
  <div className="font-bold opacity-85 text-xl opacity-75 transform -translate-y-7">Button</div>
  
  <div className="flex items-center w-32 justify-between rounded-md text-white px-3 py-2 bg-gray-300 w-fit">
  <i class="fal fa-alarm-clock text-xl"></i>
  <span className="w-fit">+2s delay</span>
  </div>
  
  <div className="font-bold opacity-80 mt-7 mb-2">Text</div>
  <input type="text"
  value={buttonText}
  onChange={(e)=>{
    setbuttonText(e.target.value)
  }}
  className="bg-white border-none outline-none px-3 py-2 rounded-md w-full" />

<div className="font-bold opacity-80 mt-4 mb-2">Quick Reply</div>

<div className="flex items-center gap-3">
  <button className='border border-blue-400 text-blue-400 px-7 py-2 bg-white rounded'>Yes</button>
  <button className='border border-blue-400 text-blue-400 px-7 py-2 bg-white rounded'>No</button>
  <button className='text-xl text-blue-400 ml-2'><i class="far fa-plus"></i></button> 

</div>





</div>








</div>



{/* RIGHT BAR ENDS */}






     </div>





    </div>
    </>
  )
}

export default ChatBotEditor