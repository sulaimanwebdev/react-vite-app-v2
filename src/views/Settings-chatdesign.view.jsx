import React, {useState} from 'react'
import { Link } from "react-router-dom";
import transparentImage from '../assets/images/transparentImage.png';
import Toggle from "../components/Toggle";
import logo from "../assets/icons/new-icons/Icon.svg";

const SettingsChatdesign = () => {

const [focusShow, setfocusShow] = useState("hidden");


    const [dropDown, setdropDown] = useState("hidden");

    let dropDownFunction = () =>{
      if(dropDown == "hidden"){
         setdropDown('flex');
      }

      else{
        setdropDown('hidden');

      }
    }



   
    const [buttonBackgrounColor, setbuttonBackgrounColor] = useState("#534bf5");
    

    let changeBodyColor = (e) =>{
      setColor(e.target.value)

  }




  const [widgetPosition, setwidgetPosition] = useState("justify-end")
  const [widgetRow, setwidgetRow] = useState("flex-row")

   let changeWidgetPosition = () =>{
     if(widgetPosition == "justify-end"){
      setwidgetPosition("justify-start")
      setwidgetRow("flex-row-reverse");
     }
     else{
      setwidgetPosition("justify-end")
      setwidgetRow("flex-row");


     }
   }


   const [profileImage, setprofileImage] = useState("flex")
   let changeprofileImage = () =>{
     if(profileImage == "flex"){
       setprofileImage('hidden')
     }
     else{
      setprofileImage('flex')

     }
   }




   const [firstMessage, setfirstMessage] = useState("Hello, how can we help you?");

   const [widgetText, setwidgetText] = useState("Chat with us");
   const [tabText, settabText] = useState("Online")
    //  tabs
    const [online, setonline] = useState("");
    const [chatStart, setchatStart] = useState("hidden");
    const [offline, setoffline] = useState("hidden");
    const [closed, setclosed] = useState("hidden");




    let onlineFunction = (e) =>{
       settabText(e.target.textContent);

       setonline("");
       setchatStart("hidden");
       setoffline("hidden");
       setclosed("hidden");

    }

    let chatStartFunction = (e) =>{
      settabText(e.target.textContent);

       setonline("hidden");
       setchatStart("");
       setoffline("hidden");
       setclosed("hidden");

    }

    let offlineFunction = (e) =>{
      settabText(e.target.textContent);

      setonline("hidden");
      setchatStart("hidden");
      setoffline("");
      setclosed("hidden");

    }

    let closedFunction = (e) =>{
      settabText(e.target.textContent);

      setonline("hidden");
      setchatStart("hidden");
      setoffline("hidden");
      setclosed("");

    }





    // chat start
     const [title, settitle] = useState("Hello");
     const [textText, settextText] = useState("What can we help you today?");
     const [buttonText, setbuttonText] = useState("Send message");



    //  offline

    const [offlineTextContent, setofflineTextContent] = useState("We are currently closed. We'll get back to you as soon as possible an employee can answer. Please give me your Email address so that we can reach you.")


    //

    let showOnlineInChatClicked = () =>{
      settabText("Online");


       setonline("");
       setchatStart("hidden");
       setoffline("hidden");
       setclosed("hidden");

    }


    // add message
    const [inputData, setinputData] = useState("");
    const [items, setitems] = useState(["This is new message from my side"]);
    let addItem = (e) =>{

      if(inputData == ""){

      }

      else{
        if(e.key === 'Enter'){
          setitems([...items, inputData]);
          
          setinputData("");



          

            setTimeout(() => {
              
       

            let node = e.target.parentNode.parentNode.parentNode.childNodes[0];
          

            node.scroll({ top: node.scrollHeight, behavior: 'smooth' });
               
            }, 1);

        }
      }
      
    
    }


    let sendMessage = (e) =>{
    if(inputData == ""){

    }

    else{
      

      setitems([...items, inputData]);
      setinputData("");
     
          

           setTimeout(() => {
              
            let node2 = e.target.parentNode.parentNode.parentNode.parentNode.childNodes[0];
            node2.scroll({ top: node2.scrollHeight, behavior: 'smooth' });
 
 
             
            }, 1);

    
     

    }
    }

    
    const [gradients, setgradients] = useState("");

    const [toggle, setToggle] = useState(0);
    return (

<div className="pb-20">

<div className="pl-10 mb-10">
<div className="font-bold opacity-80 text-2xl mt-7">Chat Setting</div>

<Link to="/settings" className="flex mt-3 items-center gap-2 opacity-70 cursor-pointer"><svg class="svg-icon" style={{width: "20px"}} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M248.661333 298.666667l108.202667 108.202666L296.533333 467.2 85.333333 256l211.2-211.2 60.330667 60.330667L248.661333 213.333333H554.666667a341.333333 341.333333 0 1 1 0 682.666667H170.666667v-85.333333h384a256 256 0 1 0 0-512H248.661333z"  /></svg> <span className="text-lg">Back</span></Link>       


</div>

<div className="grid chatSettingGrid w-full">


<div> 
<div className="w-full relative  transparentHeight py-14">
<img src={transparentImage} alt="" className="absolute top-0 left-0 w-full h-full" />

<div className={online}>
<div className={`z-50 relative overflow-hidden`} >
            <div className={`mainChat rounded-lg mx-auto overflow-hidden`} style={{boxShadow: "2px 2px 14px 0px rgba(0,0,0,0.18)"}}>
               <div className={`text-white flex items-center justify-between px-5 pt-4 pb-4 ${gradients}`} style={{backgroundColor: buttonBackgrounColor}}>
                   <div className="flex items-center gap-2">
                       <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80" alt="profile" className={`w-11 h-11 rounded-full object-cover ${profileImage}`} />
                       <div>
                       <div className="opacity-80 text-base">Chat with</div>
                       <div className="font-bold">Martin</div>
                       </div>
                   </div>

                   <div className="flex items-center gap-4">
                     <i class="far fa-smile text-xl text-gray-700  cursor-pointer px-2 py-1 rounded-sm bg-gray-300"></i>
                     <i class="far fa-frown text-xl text-gray-700  cursor-pointer px-2 py-1 rounded-sm bg-gray-300"></i>
                   </div>

               </div>


<div className="chatMessagesCont bg-white w-full">
<div className="chatMessages px-5 pt-4 pb-2 overflow-y-auto  h-full w-full flex flex-col">
   <div  className="actualMessage px-3 py-3   bg-gray-200 rounded text-gray-700" style={{fontSize: '13px', width:"fit-content"}}>{firstMessage}</div>

<div className="flex justify-end">
<div  className={`actualMessage px-3 py-3   bg-blue-500 rounded text-white text-sm ${gradients} mt-6`}  style={{fontSize: '13px', width:"fit-content", backgroundColor: buttonBackgrounColor}}>Can you help me, with install?</div>

</div>

   <div  className="actualMessage px-3 py-3   bg-gray-200 rounded text-gray-700 text-sm mt-6"  style={{fontSize: '13px', width:"fit-content"}}>Example message from another side</div>

   <div className="flex justify-end">

   <div  className={`actualMessage px-3 py-3   bg-blue-500 rounded text-white text-sm float-right mt-6 ${gradients}`}  style={{fontSize: '13px', width:"fit-content", backgroundColor: buttonBackgrounColor}}>Example message from my side</div>
</div>


{
  items.map((currle) =>{
    return(
      <div className="flex justify-end">
<div  className={`actualMessage px-3 py-3   bg-blue-500 rounded text-white text-sm float-right mt-6 ${gradients}`} style={{fontSize: '13px', width:"fit-content", backgroundColor: buttonBackgrounColor}}>{currle}</div>
</div>
    )
  })
}


</div>

<div className="bottomWidget rounded-lg bg-white  w-full pt-3 pb-3 px-5">
<div className="flex items-center gap-2">
<input type="text" value={inputData} onChange={(e) => setinputData(e.target.value)} onKeyDown={addItem}  placeholder="Enter your message" className="w-full h-10 pl-3  text-sm text-gray-700 flex items-center mb-3  border-gray-300 rounded-lg"/>

<div className="flex items-center gap-2 transform -translate-y-1">
<i class="far fa-paperclip text-xl opacity-50 hover:opacity-75 transition-colors cursor-pointer"></i>
<i class="far fa-grin text-2xl opacity-50 hover:opacity-75 transition-colors cursor-pointer"></i>
<i class="far fa-paper-plane text-xl opacity-50 hover:opacity-75 transition-colors cursor-pointer" onClick={sendMessage}></i>
</div>

</div>
<div className="flex items-center justify-center text-center">

<div><span className="opacity-50 mx-auto w-fit text-sm">Powered by</span>  <img src={logo} alt="logo" className='w-[15px] inline'/></div>


</div>

</div>
</div>
</div>







            </div>

</div>






{/* chat start */}
<div className={`relative z-10 ${chatStart}`}>
<div className="rounded-lg bg-white mx-auto relative overflow-hidden" style={{width: "330px", height: "495px", boxShadow: "2px 2px 14px 0px rgba(0,0,0,0.18)"}}>
<div className={`px-10 py-7 w-full ${gradients}`} style={{backgroundColor: buttonBackgrounColor}}>
<div className={`text-white font-medium text-2xl mb-3 `}>{title}</div>
<div className="text-white opacity-90">{textText}</div>
<button className={`px-4 rounded-md mt-4 py-3 text-white border-2 border-white ${gradients}`} style={{backgroundColor: buttonBackgrounColor, boxShadow: "2px 2px 14px 0px rgba(0,0,0,0.18)"}} onClick={showOnlineInChatClicked}>{buttonText}</button>
</div>

<div className=" w-full flex items-end justify-center pb-5" style={{height: "305px"}}>
<div><span className="opacity-50 text-sm">Powered by</span> <span className="font-bold text-sm opacity-90">LoChat</span></div>
</div>


</div>
</div>




{/* closed */}
<div className={`relative z-10 h-full ${closed}`}>
  <div className={`flex items-end   h-full ${widgetPosition}`} >
    

<div className={`flex items-center gap-5 px-5 transform translate-y-5 ${widgetRow}`}>

<div className="bg-white rounded-xl transform translate-y-2 px-5 py-5" style={{boxShadow: "2px 2px 14px 0px rgba(0,0,0,0.18)"}}><span className="opacity-90" onClick={showOnlineInChatClicked}>{widgetText}</span></div>
<div className={`flex  items-center justify-center rounded-full w-20 h-20 float-right mt-3 cursor-pointer transition-colors ${gradients}`} style={{backgroundColor: buttonBackgrounColor}} onClick={showOnlineInChatClicked}><i class="fas fa-comment-dots text-white text-4xl"></i></div>

</div>
  </div>
</div>







{/* offline */}

<div className={`relative z-10 ${offline}`}>
<div className="rounded-lg  flex items-center justify-center bg-white mx-auto relative overflow-hidden" style={{width: "330px", height: "495px", boxShadow: "2px 2px 14px 0px rgba(0,0,0,0.18)"}}>
<div className="flex flex-col px-7 items-center justify-center text-center">
<p className="text-black opacity-80 font-bold">{offlineTextContent}</p>
<input type="text" placeholder="Enter your Email address" className="w-full border-none rounded-lg mt-7 h-14" style={{boxShadow: "2px 2px 14px 0px rgba(0,0,0,0.18)"}}/>
<button className={`w-full h-14 rounded-lg text-white mt-5 font-bold text-lg ${gradients}`} style={{backgroundColor: buttonBackgrounColor}}>Send</button>
</div>


<div className="absolute bottom-0 left-0 pb-5 flex items-center justify-center w-full ">
<div><span className="opacity-50 text-sm">Powered by</span> <span className="font-bold text-sm opacity-90">LoChat</span></div>

</div>




</div>
</div>
















</div>



<div className="ml-14 relative  mt-14  px-4 py-2 w-fit inline-block rounded-lg cursor-pointer border border-gray-200 text-base" onClick={dropDownFunction}>
 <div className="flex items-center gap-5" >
 <span className="opacity-75">{tabText}</span>
  <i class="far fa-angle-down text-lg opacity-75"></i>
 </div>

 <div className={`px-4 py-2 flex flex-col gap-1 rounded-lg border border-gray-200 text-base absolute top-12 bg-white left-0 w-full ${dropDown}`}>
<div className="opacity-75 w-full cursor-pointer" onClick={onlineFunction}>Online</div>
<div className="opacity-75 w-full cursor-pointer" onClick={chatStartFunction}>Chat Start</div>
<div className="opacity-75 w-full cursor-pointer" onClick={offlineFunction}>Offline</div>
<div className="opacity-75 w-full cursor-pointer" onClick={closedFunction}>Closed</div>

 </div>
</div>


</div>

















<div >
{/* 2nd */}
<div className="text-black opacity-80 mt-10 font-bold " style={{fontSize: "20px"}}>Style your widget</div>
<p>Customize appearance of your widget</p>
<div className="rightSideGrid items-center grid pr-10 mt-4">
 
<div className="text-black opacity-75 font-bold " style={{fontSize: "16px"}}>Color</div>
<div className="w-full relative  border  h-10 px-2  text-sm text-gray-700 gap-2 flex items-center justify-start  border-gray-300 rounded-lg ">



  <div className={`${toggle == 1 ? "gradientOverlayGg" : "alrighthidden"} w-7 h-7 flex items-center justify-center rounded  cursor-pointer relative overflow-hidden template1 `} onClick={()=> {setgradients("template1"), setToggle(1)}}><div className={`absolute lastWhiteOverlay top-0 left-0 w-full h-full  rounded  flex items-center justify-center `} ><i class="far fa-check text-white"></i></div></div>
  <div className={`${toggle == 2 ? "gradientOverlayGg" : "alrighthidden"} w-7 h-7 flex items-center justify-center rounded  cursor-pointer relative overflow-hidden template2 `}  onClick={()=> {setgradients("template2"), setToggle(2)}}><div className={`absolute lastWhiteOverlay top-0 left-0 w-full h-full  rounded  flex items-center justify-center `} ><i class="far fa-check text-white"></i></div></div>
  <div className={`${toggle == 3 ? "gradientOverlayGg" : "alrighthidden"} w-7 h-7 flex items-center justify-center rounded  cursor-pointer relative overflow-hidden template3 `}  onClick={()=> {setgradients("template3"), setToggle(3)}}><div className={`absolute lastWhiteOverlay top-0 left-0 w-full h-full  rounded  flex items-center justify-center `}><i class="far fa-check text-white"></i></div></div>
  <div className={`${toggle == 4 ? "gradientOverlayGg" : "alrighthidden"} w-7 h-7 flex items-center justify-center rounded  cursor-pointer relative overflow-hidden template4`}  onClick={()=> {setgradients("template4"), setToggle(4)}}><div className={`absolute lastWhiteOverlay top-0 left-0 w-full h-full  rounded  flex items-center justify-center `} ><i class="far fa-check text-white"></i></div></div>
  <div className={`${toggle == 5 ? "gradientOverlayGg" : "alrighthidden"} w-7 h-7 flex items-center justify-center rounded  cursor-pointer relative overflow-hidden template5`}  onClick={()=> {setgradients("template5"), setToggle(5)}}><div className={`absolute lastWhiteOverlay top-0 left-0 w-full h-full  rounded  flex items-center justify-center `} ><i class="far fa-check text-white"></i></div></div>


  <label htmlFor="buttonBackground" className={`${toggle == 0 ? "gradientOverlayGg" : "alrighthidden"} w-7 h-7 relative rounded  cursor-pointer`}  style={{background: buttonBackgrounColor}}><div className="absolute lastWhiteOverlay top-0 left-0 w-full h-full  rounded  flex items-center justify-center"><i class="far fa-check text-white"></i></div></label>

<label htmlFor="buttonBackground" className="  rounded  cursor-pointer" ><div className="w-7  rounded bg-gray-400 h-7 flex items-center justify-center"><i class="far fa-plus text-white"></i></div></label>




<input type="color" className="absolute bottom-0 left-0 opacity-0 invisible" value={buttonBackgrounColor} name="buttonBackground" id="buttonBackground" onChange={e => {setbuttonBackgrounColor(e.target.value), setgradients(""), setToggle(0)}} />

         </div>
</div>






<div className="rightSideGrid items-center grid pr-10 mt-7">
<div className="text-black opacity-75 font-bold " style={{fontSize: "16px"}}>Widget Symbol</div>

<div className="flex items-center gap-5">
<div className="text-base opacity-60">Left</div>



<div className={`w-fit ${widgetPosition}`} onClick={changeWidgetPosition}>
<Toggle bg="bg-blue-700" border="border-blue-700" value="justify-end"  />
</div>


<div className="text-base opacity-60">Right</div>
</div>

</div>







<div className="rightSideGrid items-center grid pr-10 mt-7">
<div className="text-black opacity-75 font-bold " style={{fontSize: "16px"}}>Profile Image</div>

<div className="flex items-center gap-7">
<div className="text-base opacity-60">Off</div>



<div className={`w-fit`} onClick={changeprofileImage}>
<Toggle bg="bg-blue-700" border="border-blue-700" value="justify-end"  />
</div>


<div className="text-base opacity-60">On</div>
</div>

</div>


<div className="rightSideGrid items-center grid pr-10 mt-7">
<div className="text-black opacity-75 font-bold " style={{fontSize: "16px"}}>New Message sound</div>

<div className="flex items-center gap-7">
<div className="text-base opacity-60">Off</div>



<div className={`w-fit`} onClick={changeprofileImage}>
<Toggle bg="bg-blue-700" border="border-blue-700" value="justify-end"  />
</div>


<div className="text-base opacity-60">On</div>
</div>

</div>







<div className="text-black opacity-80 mt-10 font-bold " style={{fontSize: "19px"}}>Online Message</div>
<p>create the firts message your customers see.</p>



<div className="rightSideGrid items-center grid pr-10 mt-5">
<div className="text-black opacity-75 font-bold " style={{fontSize: "16px"}}>First Message</div>
<input type="text" value={firstMessage} placeholder="Enter your message" onChange={(e) => setfirstMessage(e.target.value)}  className="w-full h-10 pl-3  text-sm text-gray-700 flex items-center   border-gray-300 rounded-lg"/>
</div>



<div className="rightSideGrid items-center grid pr-10 mt-7">
<div className="text-black opacity-75 font-bold " style={{fontSize: "16px"}}>Widget Text</div>
<input type="text" value={widgetText} placeholder="Enter widget text" onChange={(e) => setwidgetText(e.target.value)}  className="w-full h-10 pl-3  text-sm text-gray-700 flex items-center   border-gray-300 rounded-lg"/>
</div>


<div className="text-black opacity-80 mt-20 font-bold " style={{fontSize: "19px"}}>Offline</div>
<p>create a form for your customers</p>

<div className="rightSideGrid  grid pr-10 mt-5">
<div className="text-black opacity-75 font-bold " style={{fontSize: "16px"}}>Offline Text</div>
<textarea type="text" value={offlineTextContent} onChange={(e)=> setofflineTextContent(e.target.value)} placeholder="Enter offline text" className="w-full h-32 resize-none pl-3  text-sm text-gray-700 flex items-center   border-gray-300 rounded-lg "></textarea>
</div>



<div className="text-black opacity-80 mt-16 font-bold " style={{fontSize: "19px"}}>Chat Start</div>
<p>Say hello, hi to customers</p>
<div className="rightSideGrid items-center grid pr-10 mt-7">
<div className="text-black opacity-75 font-bold " style={{fontSize: "16px"}}>Company logo</div>

<div className="flex items-center gap-7">




<div className={`w-fit`} onClick={changeprofileImage}>
<Toggle bg="bg-blue-400" border="border-blue-400" value="justify-end"  />
</div>
</div>

</div>

<div className="rightSideGrid items-center grid pr-10 mt-5">
<div className="text-black opacity-75 font-bold " style={{fontSize: "16px"}}>Title</div>
<input type="text" value={title} onChange={(e) => settitle(e.target.value)} placeholder="Enter your title" className="w-full h-10 pl-3  text-sm text-gray-700 flex items-center   border-gray-300 rounded-lg"/>
</div>

<div className="rightSideGrid items-center grid pr-10 mt-5">
<div className="text-black opacity-75 font-bold " style={{fontSize: "16px"}}>Text</div>
<input type="text" value={textText} onChange={(e) => settextText(e.target.value)} placeholder="Enter your text" className="w-full h-10 pl-3  text-sm text-gray-700 flex items-center   border-gray-300 rounded-lg"/>
</div>


<div className="rightSideGrid items-center grid pr-10 mt-5">
<div className="text-black opacity-75 font-bold " style={{fontSize: "16px"}}>Button</div>
<input type="text" value={buttonText} onChange={(e) => setbuttonText(e.target.value)} placeholder="Enter button text" className="w-full h-10 pl-3  text-sm text-gray-700 flex items-center   border-gray-300 rounded-lg"/>
</div>













</div>













</div>
</div>



    );
};

export default SettingsChatdesign;
