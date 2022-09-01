import {useState} from 'react'
import  '../App.css';
import Mike from "../assets/images/mike.jpg";
import Bill from "../assets/images/bill.jpg";
import Ratings from "../components/Ratings"
const Analytics = () => {

     const [dropDown1, setdropDown1] = useState("invisible opacity-0 transform -translate-y-5");

     const [dropdownValue1, setdropdownValue1] = useState("28.10.2021 - 03.11.2021");

     const [Today, setToday] = useState("Today");
     const [Yesterday, setYesterday] = useState("Yesterday");
     const [Week, setWeek] = useState("Week");
     const [Month, setMonth] = useState("Month");
     const [Year, setYear] = useState("Year");






     let showDropDown = () =>{
       if(dropDown1 == "invisible opacity-0 transform -translate-y-5"){
        setdropDown1("visible opacity-100 transform translate-y-2");
       }

       else{
        setdropDown1("invisible opacity-0 transform -translate-y-5");

       }
     }













     const [dropDown2, setdropDown2] = useState("invisible opacity-0 transform -translate-y-5");

     const [dropdownValue2, setdropdownValue2] = useState("28.10.2021 - 03.11.2021");

     const [Today2, setToday2] = useState("Today");
     const [Yesterday2, setYesterday2] = useState("Yesterday");
     const [Week2, setWeek2] = useState("Week");
     const [Month2, setMonth2] = useState("Month");
     const [Year2, setYear2] = useState("Year");






     let showDropDown2 = () =>{
       if(dropDown2 == "invisible opacity-0 transform -translate-y-5"){
        setdropDown2("visible opacity-100 transform translate-y-2");
       }

       else{
        setdropDown2("invisible opacity-0 transform -translate-y-5");

       }
     }





    //  busiest period colors
    const [color1, setcolor1] = useState('#D0EBFD');
    const [color2, setcolor2] = useState('#AEDFFF');
    const [color3, setcolor3] = useState('#71BFF1');
    const [color4, setcolor4] = useState('#3197D6');
    const [color5, setcolor5] = useState('#237AB3');
    const [color6, setcolor6] = useState('#1F5E89');
    const [color7, setcolor7] = useState('#1F5E89');
    const [color8, setcolor8] = useState('#143D57');







     const [allConversationDropdown, setallConversationDropdown] = useState('hidden');





  

    return (
      <div className="px-24">


        <div className="text-2xl font-bold mt-7 mb-4">Analytics</div>
        <div
          onClick={()=>{

            allConversationDropdown === "hidden" ? setallConversationDropdown("flex") : setallConversationDropdown("hidden")
              
          }}
        className="flex items-center max-w-[278px] z-10 gap-2 relative cursor-pointer mb-10">

          <div className={`absolute top-[32px]  flex-col gap-2 rounded-md -right-[35px] px-3 py-2 border border-gray-300 bg-white ${allConversationDropdown}`}>
             <div className="flex items-center gap-5 w-full">
               <div className="w-[24px] h-[24px] rounded-md bg-[#28CFED]"></div>
               <div className='opacity-60'>All Conversation</div>
             </div>

             <div className="flex items-center gap-5 w-full">
               <img src={Mike} alt="Mike"  className='w-6 rounded'/>
               <div className='opacity-60'>Mike</div>
             </div>


             <div className="flex items-center gap-5 w-full">
             <img src={Bill} alt="Bill"  className='w-6 rounded'/>
               <div className='opacity-60'>Bill</div>
             </div>

          </div>


          
          <span className="opacity-70">All Conversation</span><i className="far fa-caret-circle-down text-lg opacity-70"></i></div>
 



        <div className="font-bold text-xl opacity-70 mb-5">Conversations last 24 hours</div>

        <div className="grid grid-cols-3 gap-x-5 lg:gap-x-10 xl:gap-x-20 gap-y-5 mb-16">
        {/* New Conversation */}
            <div className="border-2  border-gray-300 rounded-xl px-5 py-3">
              <div className="font-bold opacity-70 mb-7">New Conversations</div>
              <div className="flex items-center gap-3 mb-7">
                <div className="font-bold text-3xl opacity-80">225</div>
                <div className="flex items-center gap-1 bg-[#d9ffdb] rounded-full px-3 py-1 text-[#3aab40] "><span className='text-lg'>+</span>2%</div>
              </div>
            </div>



              {/* New Customers */}
              <div className="border-2  border-gray-300 rounded-xl px-5 py-3">
              <div className="font-bold opacity-70 mb-7">New Customers</div>
              <div className="flex items-center gap-3 mb-7">
                <div className="font-bold text-3xl opacity-80">189</div>
                <div className="flex items-center gap-1 bg-[#d9ffdb] rounded-full px-3 py-1 text-[#3aab40] "><span className='text-lg'>+</span>5%</div>
              </div>
            </div>




            
              {/* New Customers */}
              <div className="border-2  border-gray-300 rounded-xl px-5 py-3">
              <div className="font-bold opacity-70 mb-7">Open Conversations</div>
              <div className="flex items-center gap-3 mb-7">
                <div className="font-bold text-3xl opacity-80">96</div>
                <div className="flex items-center gap-1 bg-[#ffd4d4] rounded-full px-3 py-1 text-[#ed4a4a] "><span className='text-lg transform -translate-y-[2px]'>-</span>4%</div>
              </div>
            </div>




               {/* Closed Customers */}
               <div className="border-2  border-gray-300 rounded-xl px-5 py-3">
              <div className="font-bold opacity-70 mb-7">Closed Conversations</div>
              <div className="flex items-center gap-3 mb-7">
                <div className="font-bold text-3xl opacity-80">64</div>
                <div className="flex items-center gap-1 bg-[#ffd4d4] rounded-full px-3 py-1 text-[#ed4a4a] "><span className='text-lg transform -translate-y-[2px]'>-</span>2%</div>
              </div>
            </div>






            
              {/* New Rating */}
              <div className="border-2  border-gray-300 rounded-xl px-5 py-3">
              <div className="font-bold opacity-70 mb-7">New Ratings</div>
              <div className="flex items-center gap-3 mb-7">
                <div className="font-bold text-3xl opacity-80">231</div>
                <div className="flex items-center gap-1 bg-[#d9ffdb] rounded-full px-3 py-1 text-[#3aab40] "><span className='text-lg'>+</span>35%</div>
              </div>
            </div>




               
              {/* Champagne Clicks */}
              <div className="border-2  border-gray-300 rounded-xl px-5 py-3">
              <div className="font-bold opacity-70 mb-7">Champagne Clicks</div>
              <div className="flex items-center gap-3 mb-7">
                <div className="font-bold text-3xl opacity-80">134</div>
                <div className="flex items-center gap-1 bg-[#d9ffdb] rounded-full px-3 py-1 text-[#3aab40] "><span className='text-lg'>+</span>7%</div>
              </div>
            </div>






        </div>








          {/* busiest period for conversations */}
        <div className="font-bold text-xl opacity-70 mb-2">Busiest Period For Conversations</div>
        <div className="mb-10"><span className="opacity-70">Busiest period time</span> <span className='font-bold opacity-60'>Mo</span> <span className="opacity-70">at</span> <span className='font-bold opacity-60'>12 - 3 PM</span> <span className='opacity-70'>and</span> <span className='font-bold opacity-60'>We, Th</span> <span className='opacity-70'>at</span> <span className='font-bold opacity-60'>12 - 3 PM</span>  </div>

      
       <div className="flex gap-5">
         <div className='transform translate-y-[31px]'>
           <div className="text-lg opacity-60 h-[58px] flex mb-[2px] items-center justify-center">Mo</div>
           <div className="text-lg opacity-60 h-[58px] flex mb-[2px] items-center justify-center">Tu</div>
           <div className="text-lg opacity-60 h-[58px] flex mb-[2px] items-center justify-center">We</div>
           <div className="text-lg opacity-60 h-[58px] flex mb-[2px] items-center justify-center">Th</div>
           <div className="text-lg opacity-60 h-[58px] flex mb-[2px] items-center justify-center">Th</div>
           <div className="text-lg opacity-60 h-[58px] flex mb-[2px] items-center justify-center">Sa</div>
           <div className="text-lg opacity-60 h-[58px] flex items-center justify-center">Su</div>
         </div>
         <div className="grid grid-cols-8 gap-[2px] w-full">

           {/* time */}
         <div className="flex items-center justify-center opacity-70 text-lg">12-3a</div>
         <div className="flex items-center justify-center opacity-70 text-lg">3-6a</div>
         <div className="flex items-center justify-center opacity-70 text-lg">6-9a</div>
         <div className="flex items-center justify-center opacity-70 text-lg">9a-12p</div>
         <div className="flex items-center justify-center opacity-70 text-lg">12-3p</div>
         <div className="flex items-center justify-center opacity-70 text-lg">6-3p</div>
         <div className="flex items-center justify-center opacity-70 text-lg">6-9p</div>
         <div className="flex items-center justify-center opacity-70 text-lg">9p-12a</div>


         <div className="h-[58px]" style={{background: color4}}></div>
         <div className="h-[58px]" style={{background: color7}}></div>
         <div className="h-[58px]" style={{background: color2}}></div>
         <div className="h-[58px]" style={{background: color4}}></div>
         <div className="h-[58px]" style={{background: color4}}></div>
         <div className="h-[58px]" style={{background: color8}}></div>
         <div className="h-[58px]" style={{background: color4}}></div>
         <div className="h-[58px]" style={{background: color4}}></div>
         <div className="h-[58px]" style={{background: color1}}></div>
         <div className="h-[58px]" style={{background: color4}}></div>
         <div className="h-[58px]" style={{background: color4}}></div>
         <div className="h-[58px]" style={{background: color4}}></div>
         <div className="h-[58px]" style={{background: color4}}></div>
         <div className="h-[58px]" style={{background: color6}}></div>
         <div className="h-[58px]" style={{background: color4}}></div>
         <div className="h-[58px]" style={{background: color4}}></div>
         <div className="h-[58px]" style={{background: color8}}></div>
         <div className="h-[58px]" style={{background: color5}}></div>
         <div className="h-[58px]" style={{background: color4}}></div>
         <div className="h-[58px]" style={{background: color6}}></div>
         <div className="h-[58px]" style={{background: color4}}></div>
         <div className="h-[58px]" style={{background: color2}}></div>
         <div className="h-[58px]" style={{background: color1}}></div>
         <div className="h-[58px]" style={{background: color7}}></div>
         <div className="h-[58px]" style={{background: color4}}></div>
         <div className="h-[58px]" style={{background: color4}}></div>
         <div className="h-[58px]" style={{background: color4}}></div>
         <div className="h-[58px]" style={{background: color7}}></div>
         <div className="h-[58px]" style={{background: color3}}></div>
         <div className="h-[58px]" style={{background: color7}}></div>
         <div className="h-[58px]" style={{background: color8}}></div>
         <div className="h-[58px]" style={{background: color4}}></div>
         <div className="h-[58px]" style={{background: color4}}></div>
         <div className="h-[58px]" style={{background: color4}}></div>
         <div className="h-[58px]" style={{background: color4}}></div>
         <div className="h-[58px]" style={{background: color7}}></div>
         <div className="h-[58px]" style={{background: color3}}></div>
         <div className="h-[58px]" style={{background: color7}}></div>
         <div className="h-[58px]" style={{background: color8}}></div>
         <div className="h-[58px]" style={{background: color4}}></div>
         <div className="h-[58px]" style={{background: color4}}></div>
         <div className="h-[58px]" style={{background: color4}}></div>
         <div className="h-[58px]" style={{background: color4}}></div>
         <div className="h-[58px]" style={{background: color7}}></div>
         <div className="h-[58px]" style={{background: color3}}></div>
         <div className="h-[58px]" style={{background: color7}}></div>
         <div className="h-[58px]" style={{background: color8}}></div>
         <div className="h-[58px]" style={{background: color4}}></div> 
         <div className="h-[58px]" style={{background: color4}}></div>
         <div className="h-[58px]" style={{background: color4}}></div>
         <div className="h-[58px]" style={{background: color4}}></div>
         <div className="h-[58px]" style={{background: color7}}></div>
         <div className="h-[58px]" style={{background: color3}}></div>
         <div className="h-[58px]" style={{background: color7}}></div>
         <div className="h-[58px]" style={{background: color8}}></div>
         <div className="h-[58px]" style={{background: color4}}></div>               
        </div>
       </div>


       <div className="mb-24 mt-12 flex items-center gap-7 transform translate-x-[44px]">
         <div className='text-lg opacity-70'>Quietest</div>
          <div className="flex items-center gap-[3px]">
            <div className="w-[30px] h-[30px]" style={{background: color1}}></div>
            <div className="w-[30px] h-[30px]" style={{background: color2}}></div>
            <div className="w-[30px] h-[30px]" style={{background: color2}}></div>
            <div className="w-[30px] h-[30px]" style={{background: color2}}></div>
            <div className="w-[30px] h-[30px]" style={{background: color5}}></div>
            <div className="w-[30px] h-[30px]" style={{background: color6}}></div>
            <div className="w-[30px] h-[30px]" style={{background: color7}}></div>
            <div className="w-[30px] h-[30px]" style={{background: color8}}></div>
          </div>
         <div className='text-lg opacity-70'>Busiest</div>
       </div>



           










        {/* GRAPH ONE */}

<div className="border-2  mb-14 border-gray-300 rounded-xl px-8 pb-12 pt-7">
  <div className="flex items-center justify-between mb-5 relative">
   <div className="text-xl font-bold opacity-75">Inbox</div>
    <div className="relative px-3 cursor-pointer py-2 flex items-center justify-start gap-4 rounded-lg  bg-[#F7F7F7]"  style={{width: "227px"}} onClick={showDropDown}><i class="far fa-calendar-alt text-lg opacity-75"></i><span className="opacity-70 font-semibold" style={{fontSize: "15px"}}>{dropdownValue1}</span></div>
    
    <div className={`pt-2 pb-1 z-50 transition overflow-hidden absolute right-0 top-full bg-white shadow-md rounded-lg border border-gray-300 flex items-start justify-start flex-col ${dropDown1}`} style={{width: "227px"}}>
    <div onClick={()=> {setdropdownValue1(Today)}} className="px-3 py-1 w-full cursor-pointer flex bg-white items-center justify-start gap-4"><i class="far fa-calendar-alt text-lg opacity-75"></i><span className="opacity-70 font-semibold" style={{fontSize: "15px"}}>{Today}</span></div>
    <div onClick={()=> {setdropdownValue1(Yesterday)}} className="px-3 py-1 w-full cursor-pointer flex bg-white items-center justify-start gap-4"><i class="far fa-calendar-alt text-lg opacity-75"></i><span className="opacity-70 font-semibold" style={{fontSize: "15px"}}>{Yesterday}</span></div>
    <div onClick={()=> {setdropdownValue1(Week)}} className="px-3 py-1 w-full cursor-pointer flex bg-white items-center justify-start gap-4"  ><i class="far fa-calendar-alt text-lg opacity-75"></i><span className="opacity-70 font-semibold" style={{fontSize: "15px"}}>{Week}</span></div>
    <div onClick={()=> {setdropdownValue1(Month)}} className="px-3 py-1 w-full cursor-pointer flex bg-white items-center justify-start gap-4"  ><i class="far fa-calendar-alt text-lg opacity-75"></i><span className="opacity-70 font-semibold" style={{fontSize: "15px"}}>{Month}</span></div>
    <div onClick={()=> {setdropdownValue1(Year)}} className="px-3 py-1 w-full cursor-pointer flex bg-white items-center justify-start gap-4"  ><i class="far fa-calendar-alt text-lg opacity-75"></i><span className="opacity-70 font-semibold" style={{fontSize: "15px"}}>{Year}</span></div>
    </div>
    
  </div>


  {/* MAIN GRAPH */}

<div className="w-full"></div>

<div className="graphGrid grid">

  <div className="flex items-center justify-between flex-col pb-2">
    <div className="opacity-80">60</div>
    <div className="opacity-80">50</div>
    <div className="opacity-80">40</div>
    <div className="opacity-80">30</div>
    <div className="opacity-80">20</div>
    <div className="opacity-80">10</div>
    <div className="opacity-80">0</div>
  </div>







{/* GRAPH LINES */}
<div className="graphLinesGrid grid border-b-2 relative border-gray-300 pb-2">
  <div className="graph-parent w-fit flex items-end gap-1 relative z-[90] transform translate-x-4">
        <div className="w-[27px] rounded bg-[#D1EFFE]" style={{height: "170px"}}></div>
        <div className="w-[27px] rounded bg-[#23A9FF]" style={{height: "200px"}}></div>



      {/* on hover information starts */}
        <div className="bg-white hidden hover-information-graph absolute top-[20px]  left-0 border rounded border-gray-300 px-3 py-3 w-fit">
          <div className="font-bold opacity-80 mb-2">Oct 31, 2022</div>
          <div className="flex items-center gap-7">
   <div className="flex items-center gap-5">
     <div className="w-3 h-3 rounded-full bg-[#23A9FF]"></div>
     <div className="opacity-70  font-bold">45</div>
   </div>

   <div className="opacity-70">Chats</div>
 </div>

 <div className="flex items-center gap-7 mt-1">
   <div className="flex items-center gap-5">
     <div className="w-3 h-3 rounded-full bg-[#D1EFFE]"></div>
     <div className="opacity-70  font-bold">23</div>
   </div>

   <div className="opacity-70">Customers</div>
 </div>

        </div>

      {/* on hover information ends */}







  </div>


  <div className="graph-parent w-fit flex items-end gap-1 relative z-[80] transform translate-x-4">
        <div className="w-[27px] rounded bg-[#D1EFFE]" style={{height: "120px"}}></div>
        <div className="w-[27px] rounded bg-[#23A9FF]" style={{height: "180px"}}></div>

         

      {/* on hover information starts */}
        <div className="bg-white hidden hover-information-graph absolute top-[30px]  left-0 border rounded border-gray-300 px-3 py-3 w-fit">
          <div className="font-bold opacity-80 mb-2">Oct 31, 2022</div>
          <div className="flex items-center gap-7">
   <div className="flex items-center gap-5">
     <div className="w-3 h-3 rounded-full bg-[#23A9FF]"></div>
     <div className="opacity-70  font-bold">45</div>
   </div>

   <div className="opacity-70">Chats</div>
 </div>

 <div className="flex items-center gap-7 mt-1">
   <div className="flex items-center gap-5">
     <div className="w-3 h-3 rounded-full bg-[#D1EFFE]"></div>
     <div className="opacity-70  font-bold">23</div>
   </div>

   <div className="opacity-70">Customers</div>
 </div>

        </div>

      {/* on hover information ends */}




  </div>



  <div className="graph-parent w-fit flex items-end gap-1 relative z-[70] transform translate-x-4">
        <div className="w-[27px] rounded bg-[#D1EFFE]" style={{height: "120px"}}></div>
        <div className="w-[27px] rounded bg-[#23A9FF]" style={{height: "150px"}}></div>

         

      {/* on hover information starts */}
        <div className="bg-white hidden hover-information-graph absolute top-[100px]  left-0 border rounded border-gray-300 px-3 py-3 w-fit">
          <div className="font-bold opacity-80 mb-2">Oct 31, 2022</div>
          <div className="flex items-center gap-7">
   <div className="flex items-center gap-5">
     <div className="w-3 h-3 rounded-full bg-[#23A9FF]"></div>
     <div className="opacity-70  font-bold">45</div>
   </div>

   <div className="opacity-70">Chats</div>
 </div>

 <div className="flex items-center gap-7 mt-1">
   <div className="flex items-center gap-5">
     <div className="w-3 h-3 rounded-full bg-[#D1EFFE]"></div>
     <div className="opacity-70  font-bold">23</div>
   </div>

   <div className="opacity-70">Customers</div>
 </div>

        </div>

      {/* on hover information ends */}




  </div>




  <div className="graph-parent w-fit flex items-end gap-1 relative z-[60] transform translate-x-4">
        <div className="w-[27px] rounded bg-[#D1EFFE]" style={{height: "230px"}}></div>
        <div className="w-[27px] rounded bg-[#23A9FF]" style={{height: "250px"}}></div>

         

      {/* on hover information starts */}
        <div className="bg-white hidden hover-information-graph absolute top-[60px]  left-0 border rounded border-gray-300 px-3 py-3 w-fit">
          <div className="font-bold opacity-80 mb-2">Oct 31, 2022</div>
          <div className="flex items-center gap-7">
   <div className="flex items-center gap-5">
     <div className="w-3 h-3 rounded-full bg-[#23A9FF]"></div>
     <div className="opacity-70  font-bold">45</div>
   </div>

   <div className="opacity-70">Chats</div>
 </div>

 <div className="flex items-center gap-7 mt-1">
   <div className="flex items-center gap-5">
     <div className="w-3 h-3 rounded-full bg-[#D1EFFE]"></div>
     <div className="opacity-70  font-bold">23</div>
   </div>

   <div className="opacity-70">Customers</div>
 </div>

        </div>

      {/* on hover information ends */}




  </div>





  <div className="graph-parent w-fit flex items-end gap-1 relative z-[50] transform translate-x-4">
        <div className="w-[27px] rounded bg-[#D1EFFE]" style={{height: "80px"}}></div>
        <div className="w-[27px] rounded bg-[#23A9FF]" style={{height: "160px"}}></div>

         

      {/* on hover information starts */}
        <div className="bg-white hidden hover-information-graph absolute top-[100px]  left-0 border rounded border-gray-300 px-3 py-3 w-fit">
          <div className="font-bold opacity-80 mb-2">Oct 31, 2022</div>
          <div className="flex items-center gap-7">
   <div className="flex items-center gap-5">
     <div className="w-3 h-3 rounded-full bg-[#23A9FF]"></div>
     <div className="opacity-70  font-bold">45</div>
   </div>

   <div className="opacity-70">Chats</div>
 </div>

 <div className="flex items-center gap-7 mt-1">
   <div className="flex items-center gap-5">
     <div className="w-3 h-3 rounded-full bg-[#D1EFFE]"></div>
     <div className="opacity-70  font-bold">23</div>
   </div>

   <div className="opacity-70">Customers</div>
 </div>

        </div>

      {/* on hover information ends */}




  </div>





  <div className="graph-parent w-fit flex items-end gap-1 relative z-[40] transform translate-x-4">
        <div className="w-[27px] rounded bg-[#D1EFFE]" style={{height: "190px"}}></div>
        <div className="w-[27px] rounded bg-[#23A9FF]" style={{height: "200px"}}></div>

         

      {/* on hover information starts */}
        <div className="bg-white hidden hover-information-graph absolute top-[100px]  left-0 border rounded border-gray-300 px-3 py-3 w-fit">
          <div className="font-bold opacity-80 mb-2">Oct 31, 2022</div>
          <div className="flex items-center gap-7">
   <div className="flex items-center gap-5">
     <div className="w-3 h-3 rounded-full bg-[#23A9FF]"></div>
     <div className="opacity-70  font-bold">45</div>
   </div>

   <div className="opacity-70">Chats</div>
 </div>

 <div className="flex items-center gap-7 mt-1">
   <div className="flex items-center gap-5">
     <div className="w-3 h-3 rounded-full bg-[#D1EFFE]"></div>
     <div className="opacity-70  font-bold">23</div>
   </div>

   <div className="opacity-70">Customers</div>
 </div>

        </div>

      {/* on hover information ends */}




  </div>




  <div className="graph-parent w-fit flex items-end gap-1 relative z-[30] transform translate-x-4">
        <div className="w-[27px] rounded bg-[#D1EFFE]" style={{height: "190px"}}></div>
        <div className="w-[27px] rounded bg-[#23A9FF]" style={{height: "200px"}}></div>

         

      {/* on hover information starts */}
        <div className="bg-white hidden hover-information-graph absolute top-[100px]  left-0 border rounded border-gray-300 px-3 py-3 w-fit">
          <div className="font-bold opacity-80 mb-2">Oct 31, 2022</div>
          <div className="flex items-center gap-7">
   <div className="flex items-center gap-5">
     <div className="w-3 h-3 rounded-full bg-[#23A9FF]"></div>
     <div className="opacity-70  font-bold">45</div>
   </div>

   <div className="opacity-70">Chats</div>
 </div>

 <div className="flex items-center gap-7 mt-1">
   <div className="flex items-center gap-5">
     <div className="w-3 h-3 rounded-full bg-[#D1EFFE]"></div>
     <div className="opacity-70  font-bold">23</div>
   </div>

   <div className="opacity-70">Customers</div>
 </div>

        </div>

      {/* on hover information ends */}




  </div>






  <div className="graph-parent w-fit flex items-end gap-1 relative z-[20] transform translate-x-4">
        <div className="w-[27px] rounded bg-[#D1EFFE]" style={{height: "120px"}}></div>
        <div className="w-[27px] rounded bg-[#23A9FF]" style={{height: "150px"}}></div>

         

      {/* on hover information starts */}
        <div className="bg-white hidden hover-information-graph absolute top-[100px]  left-0 border rounded border-gray-300 px-3 py-3 w-fit">
          <div className="font-bold opacity-80 mb-2">Oct 31, 2022</div>
          <div className="flex items-center gap-7">
   <div className="flex items-center gap-5">
     <div className="w-3 h-3 rounded-full bg-[#23A9FF]"></div>
     <div className="opacity-70  font-bold">45</div>
   </div>

   <div className="opacity-70">Chats</div>
 </div>

 <div className="flex items-center gap-7 mt-1">
   <div className="flex items-center gap-5">
     <div className="w-3 h-3 rounded-full bg-[#D1EFFE]"></div>
     <div className="opacity-70  font-bold">23</div>
   </div>

   <div className="opacity-70">Customers</div>
 </div>

        </div>

      {/* on hover information ends */}




  </div>


{/* dashed lines */}
<div className="absolute left-0 w-full border-dashed border border-gray-400" style={{top: "10px"}}></div>
<div className="absolute left-0 w-full border-dashed border border-gray-400" style={{top: "60px"}}></div>
<div className="absolute left-0 w-full border-dashed border border-gray-400" style={{top: "115px"}}></div>
<div className="absolute left-0 w-full border-dashed border border-gray-400" style={{top: "165px"}}></div>
<div className="absolute left-0 w-full border-dashed border border-gray-400" style={{top: "215px"}}></div>
<div className="absolute left-0 w-full border-dashed border border-gray-400" style={{top: "270px"}}></div>










{/* dates */}

<div className="w-full absolute -bottom-10 left-0 graphLinesGrid grid  transform translate-x-4">
<div className="opacity-80">Oct 28</div>
<div className="opacity-80">Oct 29</div>
<div className="opacity-80">Oct 30</div>
<div className="opacity-80">Oct 31</div>
<div className="opacity-80">Nov 01</div>
<div className="opacity-80">Nov 02</div>
<div className="opacity-80">Nov 03</div>
<div className="opacity-80">Nov 04</div>

</div>



</div>






</div>





<div className="flex items-center gap-20 mt-20 ml-24">
 <div className="flex items-center gap-14">
   <div className="flex items-center gap-5">
     <div className="w-3 h-3 rounded-full bg-[#23A9FF]"></div>
     <div className="opacity-80">Chats</div>
   </div>

   <div className="opacity-80 font-bold">424</div>
 </div>





 <div className="flex items-center gap-14">
   <div className="flex items-center gap-5">
     <div className="w-3 h-3 rounded-full bg-[#D1EFFE]"></div>
     <div className="opacity-80">Customers</div>
   </div>

   <div className="opacity-80 font-bold">345</div>
 </div>










</div>



</div>





















<div className="border-2  mb-20 border-gray-300 rounded-xl px-8 pb-12 pt-7">
  <div className="flex items-center justify-between mb-5 relative">
   <div className="text-xl font-bold opacity-75">Chatbot</div>
    <div className="relative px-3 cursor-pointer py-2 flex bg-[#F7F7F7] items-center justify-start gap-4 rounded-lg"  style={{width: "227px"}} onClick={showDropDown2}><i class="far fa-calendar-alt text-lg opacity-75"></i><span className="opacity-70 font-semibold" style={{fontSize: "15px"}}>{dropdownValue2}</span></div>
    
    <div className={`pt-2 pb-1 z-50 transition overflow-hidden absolute right-0 top-full bg-white shadow-md rounded-lg border border-gray-300 flex items-start justify-start flex-col ${dropDown2}`} style={{width: "227px"}}>
    <div onClick={()=> {setdropdownValue2(Today2)}} className="px-3 py-1 w-full cursor-pointer flex bg-white items-center justify-start gap-4"><i class="far fa-calendar-alt text-lg opacity-75"></i><span className="opacity-70 font-semibold" style={{fontSize: "15px"}}>{Today2}</span></div>
    <div onClick={()=> {setdropdownValue2(Yesterday2)}} className="px-3 py-1 w-full cursor-pointer flex bg-white items-center justify-start gap-4"><i class="far fa-calendar-alt text-lg opacity-75"></i><span className="opacity-70 font-semibold" style={{fontSize: "15px"}}>{Yesterday2}</span></div>
    <div onClick={()=> {setdropdownValue2(Week2)}} className="px-3 py-1 w-full cursor-pointer flex bg-white items-center justify-start gap-4"  ><i class="far fa-calendar-alt text-lg opacity-75"></i><span className="opacity-70 font-semibold" style={{fontSize: "15px"}}>{Week2}</span></div>
    <div onClick={()=> {setdropdownValue2(Month2)}} className="px-3 py-1 w-full cursor-pointer flex bg-white items-center justify-start gap-4"  ><i class="far fa-calendar-alt text-lg opacity-75"></i><span className="opacity-70 font-semibold" style={{fontSize: "15px"}}>{Month2}</span></div>
    <div onClick={()=> {setdropdownValue2(Year2)}} className="px-3 py-1 w-full cursor-pointer flex bg-white items-center justify-start gap-4"  ><i class="far fa-calendar-alt text-lg opacity-75"></i><span className="opacity-70 font-semibold" style={{fontSize: "15px"}}>{Year2}</span></div>
    </div>
    
  </div>


  {/* MAIN GRAPH */}

  <div className="w-full"></div>

<div className="graphGrid grid">

  <div className="flex items-center justify-between flex-col pb-2">
    <div className="opacity-80">60</div>
    <div className="opacity-80">50</div>
    <div className="opacity-80">40</div>
    <div className="opacity-80">30</div>
    <div className="opacity-80">20</div>
    <div className="opacity-80">10</div>
    <div className="opacity-80">0</div>
  </div>







{/* GRAPH LINES */}
<div className="graphLinesGrid grid border-b-2 relative border-gray-300 pb-2">
  <div className="graph-parent w-fit flex items-end gap-1 relative z-[90] transform translate-x-4">
        <div className="w-[27px] rounded bg-[#93A6C9]" style={{height: "170px"}}></div>
        <div className="w-[27px] rounded bg-[#0052ED]" style={{height: "200px"}}></div>



      {/* on hover information starts */}
        <div className="bg-white hidden hover-information-graph absolute top-[20px]  left-0 border rounded border-gray-300 px-3 py-3 w-fit">
          <div className="font-bold opacity-80 mb-2">Oct 31, 2022</div>
          <div className="flex items-center gap-7">
   <div className="flex items-center gap-5">
     <div className="w-3 h-3 rounded-full bg-[#0052ED]"></div>
     <div className="opacity-70  font-bold">45</div>
   </div>

   <div className="opacity-70">Chats</div>
 </div>

 <div className="flex items-center gap-7 mt-1">
   <div className="flex items-center gap-5">
     <div className="w-3 h-3 rounded-full bg-[#93A6C9]"></div>
     <div className="opacity-70  font-bold">23</div>
   </div>

   <div className="opacity-70">Customers</div>
 </div>

        </div>

      {/* on hover information ends */}







  </div>


  <div className="graph-parent w-fit flex items-end gap-1 relative z-[80] transform translate-x-4">
        <div className="w-[27px] rounded bg-[#93A6C9]" style={{height: "120px"}}></div>
        <div className="w-[27px] rounded bg-[#0052ED]" style={{height: "180px"}}></div>

         

      {/* on hover information starts */}
        <div className="bg-white hidden hover-information-graph absolute top-[30px]  left-0 border rounded border-gray-300 px-3 py-3 w-fit">
          <div className="font-bold opacity-80 mb-2">Oct 31, 2022</div>
          <div className="flex items-center gap-7">
   <div className="flex items-center gap-5">
     <div className="w-3 h-3 rounded-full bg-[#0052ED]"></div>
     <div className="opacity-70  font-bold">45</div>
   </div>

   <div className="opacity-70">Chats</div>
 </div>

 <div className="flex items-center gap-7 mt-1">
   <div className="flex items-center gap-5">
     <div className="w-3 h-3 rounded-full bg-[#93A6C9]"></div>
     <div className="opacity-70  font-bold">23</div>
   </div>

   <div className="opacity-70">Customers</div>
 </div>

        </div>

      {/* on hover information ends */}




  </div>



  <div className="graph-parent w-fit flex items-end gap-1 relative z-[70] transform translate-x-4">
        <div className="w-[27px] rounded bg-[#93A6C9]" style={{height: "120px"}}></div>
        <div className="w-[27px] rounded bg-[#0052ED]" style={{height: "150px"}}></div>

         

      {/* on hover information starts */}
        <div className="bg-white hidden hover-information-graph absolute top-[100px]  left-0 border rounded border-gray-300 px-3 py-3 w-fit">
          <div className="font-bold opacity-80 mb-2">Oct 31, 2022</div>
          <div className="flex items-center gap-7">
   <div className="flex items-center gap-5">
     <div className="w-3 h-3 rounded-full bg-[#0052ED]"></div>
     <div className="opacity-70  font-bold">45</div>
   </div>

   <div className="opacity-70">Chats</div>
 </div>

 <div className="flex items-center gap-7 mt-1">
   <div className="flex items-center gap-5">
     <div className="w-3 h-3 rounded-full bg-[#93A6C9]"></div>
     <div className="opacity-70  font-bold">23</div>
   </div>

   <div className="opacity-70">Customers</div>
 </div>

        </div>

      {/* on hover information ends */}




  </div>




  <div className="graph-parent w-fit flex items-end gap-1 relative z-[60] transform translate-x-4">
        <div className="w-[27px] rounded bg-[#93A6C9]" style={{height: "230px"}}></div>
        <div className="w-[27px] rounded bg-[#0052ED]" style={{height: "250px"}}></div>

         

      {/* on hover information starts */}
        <div className="bg-white hidden hover-information-graph absolute top-[60px]  left-0 border rounded border-gray-300 px-3 py-3 w-fit">
          <div className="font-bold opacity-80 mb-2">Oct 31, 2022</div>
          <div className="flex items-center gap-7">
   <div className="flex items-center gap-5">
     <div className="w-3 h-3 rounded-full bg-[#0052ED]"></div>
     <div className="opacity-70  font-bold">45</div>
   </div>

   <div className="opacity-70">Chats</div>
 </div>

 <div className="flex items-center gap-7 mt-1">
   <div className="flex items-center gap-5">
     <div className="w-3 h-3 rounded-full bg-[#93A6C9]"></div>
     <div className="opacity-70  font-bold">23</div>
   </div>

   <div className="opacity-70">Customers</div>
 </div>

        </div>

      {/* on hover information ends */}




  </div>





  <div className="graph-parent w-fit flex items-end gap-1 relative z-[50] transform translate-x-4">
        <div className="w-[27px] rounded bg-[#93A6C9]" style={{height: "80px"}}></div>
        <div className="w-[27px] rounded bg-[#0052ED]" style={{height: "160px"}}></div>

         

      {/* on hover information starts */}
        <div className="bg-white hidden hover-information-graph absolute top-[100px]  left-0 border rounded border-gray-300 px-3 py-3 w-fit">
          <div className="font-bold opacity-80 mb-2">Oct 31, 2022</div>
          <div className="flex items-center gap-7">
   <div className="flex items-center gap-5">
     <div className="w-3 h-3 rounded-full bg-[#0052ED]"></div>
     <div className="opacity-70  font-bold">45</div>
   </div>

   <div className="opacity-70">Chats</div>
 </div>

 <div className="flex items-center gap-7 mt-1">
   <div className="flex items-center gap-5">
     <div className="w-3 h-3 rounded-full bg-[#93A6C9]"></div>
     <div className="opacity-70  font-bold">23</div>
   </div>

   <div className="opacity-70">Customers</div>
 </div>

        </div>

      {/* on hover information ends */}




  </div>





  <div className="graph-parent w-fit flex items-end gap-1 relative z-[40] transform translate-x-4">
        <div className="w-[27px] rounded bg-[#93A6C9]" style={{height: "190px"}}></div>
        <div className="w-[27px] rounded bg-[#0052ED]" style={{height: "200px"}}></div>

         

      {/* on hover information starts */}
        <div className="bg-white hidden hover-information-graph absolute top-[100px]  left-0 border rounded border-gray-300 px-3 py-3 w-fit">
          <div className="font-bold opacity-80 mb-2">Oct 31, 2022</div>
          <div className="flex items-center gap-7">
   <div className="flex items-center gap-5">
     <div className="w-3 h-3 rounded-full bg-[#0052ED]"></div>
     <div className="opacity-70  font-bold">45</div>
   </div>

   <div className="opacity-70">Chats</div>
 </div>

 <div className="flex items-center gap-7 mt-1">
   <div className="flex items-center gap-5">
     <div className="w-3 h-3 rounded-full bg-[#93A6C9]"></div>
     <div className="opacity-70  font-bold">23</div>
   </div>

   <div className="opacity-70">Customers</div>
 </div>

        </div>

      {/* on hover information ends */}




  </div>




  <div className="graph-parent w-fit flex items-end gap-1 relative z-[30] transform translate-x-4">
        <div className="w-[27px] rounded bg-[#93A6C9]" style={{height: "190px"}}></div>
        <div className="w-[27px] rounded bg-[#0052ED]" style={{height: "200px"}}></div>

         

      {/* on hover information starts */}
        <div className="bg-white hidden hover-information-graph absolute top-[100px]  left-0 border rounded border-gray-300 px-3 py-3 w-fit">
          <div className="font-bold opacity-80 mb-2">Oct 31, 2022</div>
          <div className="flex items-center gap-7">
   <div className="flex items-center gap-5">
     <div className="w-3 h-3 rounded-full bg-[#0052ED]"></div>
     <div className="opacity-70  font-bold">45</div>
   </div>

   <div className="opacity-70">Chats</div>
 </div>

 <div className="flex items-center gap-7 mt-1">
   <div className="flex items-center gap-5">
     <div className="w-3 h-3 rounded-full bg-[#93A6C9]"></div>
     <div className="opacity-70  font-bold">23</div>
   </div>

   <div className="opacity-70">Customers</div>
 </div>

        </div>

      {/* on hover information ends */}




  </div>






  <div className="graph-parent w-fit flex items-end gap-1 relative z-[20] transform translate-x-4">
        <div className="w-[27px] rounded bg-[#93A6C9]" style={{height: "120px"}}></div>
        <div className="w-[27px] rounded bg-[#0052ED]" style={{height: "150px"}}></div>

         

      {/* on hover information starts */}
        <div className="bg-white hidden hover-information-graph absolute top-[100px]  left-0 border rounded border-gray-300 px-3 py-3 w-fit">
          <div className="font-bold opacity-80 mb-2">Oct 31, 2022</div>
          <div className="flex items-center gap-7">
   <div className="flex items-center gap-5">
     <div className="w-3 h-3 rounded-full bg-[#0052ED]"></div>
     <div className="opacity-70  font-bold">45</div>
   </div>

   <div className="opacity-70">Chats</div>
 </div>

 <div className="flex items-center gap-7 mt-1">
   <div className="flex items-center gap-5">
     <div className="w-3 h-3 rounded-full bg-[#93A6C9]"></div>
     <div className="opacity-70  font-bold">23</div>
   </div>

   <div className="opacity-70">Customers</div>
 </div>

        </div>

      {/* on hover information ends */}




  </div>


{/* dashed lines */}
<div className="absolute left-0 w-full border-dashed border border-gray-400" style={{top: "10px"}}></div>
<div className="absolute left-0 w-full border-dashed border border-gray-400" style={{top: "60px"}}></div>
<div className="absolute left-0 w-full border-dashed border border-gray-400" style={{top: "115px"}}></div>
<div className="absolute left-0 w-full border-dashed border border-gray-400" style={{top: "165px"}}></div>
<div className="absolute left-0 w-full border-dashed border border-gray-400" style={{top: "215px"}}></div>
<div className="absolute left-0 w-full border-dashed border border-gray-400" style={{top: "270px"}}></div>










{/* dates */}

<div className="w-full absolute -bottom-10 left-0 graphLinesGrid grid  transform translate-x-4">
<div className="opacity-80">Oct 28</div>
<div className="opacity-80">Oct 29</div>
<div className="opacity-80">Oct 30</div>
<div className="opacity-80">Oct 31</div>
<div className="opacity-80">Nov 01</div>
<div className="opacity-80">Nov 02</div>
<div className="opacity-80">Nov 03</div>
<div className="opacity-80">Nov 04</div>

</div>


</div>






</div>




<div className="flex items-center gap-20 mt-20 ml-24">
 <div className="flex items-center gap-14">
   <div className="flex items-center gap-5">
     <div className="w-3 h-3 rounded-full bg-[#0052ED]"></div>
     <div className="opacity-80">Active Bots</div>
   </div>

   <div className="opacity-80 font-bold">42</div>
 </div>





 <div className="flex items-center gap-14">
   <div className="flex items-center gap-5">
     <div className="w-3 h-3 rounded-full bg-[#93A6C9]"></div>
     <div className="opacity-80">Customers</div>
   </div>

   <div className="opacity-80 font-bold">23</div>
 </div>






</div>







</div>

<Ratings></Ratings>

    </div>



  )
}






export default Analytics




