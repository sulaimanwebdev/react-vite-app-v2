import React, { useRef, useState } from "react";
import Avatar from "../components/Avatar";
import Button from "../components/Button";
import Input from "../components/Input";
import PageTitle from "../components/PageTitle";
import SettingsTabs from "../components/SettingsTabs";
import BookAlt from "../assets/icons/book-alt.svg"; 

const Onlin_Offline = () => {
const [colors, setcolors] = useState("px-4 border-2 border-gray-300 border-r-0  cursor-pointer font-bold py-2 text-white bg-green-400")

const [saturday, setsaturday] = useState("px-4 border-2 border-gray-300 border-r-0 text-gray-500  cursor-pointer font-bold py-2");

const [sunday, setsunday] = useState("px-4 border-2 border-gray-300  cursor-pointer font-bold py-2 text-gray-500");


  const parentRef = useRef();

  const [elements, setelements] = useState([]);
  

  const createNewDiv = () => {
   // parentRef.current.appendChild(document.createElement("div"));
    let newElementsArr = [...elements];
    const newElement = React.createElement('div', {key: 'ele'+ new Date().getTime()},
    
    <div className="flex items-center gap-10 mainFlexx  mt-10 relative">

<div className="flex items-center" style={{gap: '90px'}}>
  <div>Days</div>
  <div className="flex select-none">
  <div className={`${colors}`} onClick={daysFunction}>M</div>
  <div className={`${colors}`} onClick={daysFunction}>T</div>
  <div className={`${colors}`} onClick={daysFunction}>W</div>
  <div className={`${colors}`} onClick={daysFunction}>T</div>
  <div className={`${colors}`} onClick={daysFunction}>F</div>
  <div className={saturday} onClick={daysFunctionSaturday}>S</div>
  <div className={sunday} onClick={daysFunctionSunday}>S</div>
</div>


</div>



<div className="flex items-center dropDownGap gap-5">

<div>From</div>

<select className="rounded-lg cursor-pointer border border-gray-200 text-sm">
<option>00:00</option><option>00:30</option><option>01:00</option><option>01:30</option><option>02:00</option><option>02:30</option><option>03:00</option><option>03:30</option><option>04:00</option><option>04:30</option><option>05:00</option><option>05:30</option><option>06:00</option><option>06:30</option><option>07:00</option><option>07:30</option><option>08:00</option><option>08:30</option><option>09:00</option><option>09:30</option><option>10:00</option><option>10:30</option><option>11:00</option><option>11:30</option><option>12:00</option><option>12:30</option><option>13:00</option><option>13:30</option><option>14:00</option><option>14:30</option><option>15:00</option><option>15:30</option><option>16:00</option><option>16:30</option><option>17:00</option><option>17:30</option><option>18:00</option><option>18:30</option><option>19:00</option><option>19:30</option><option>20:00</option><option>20:30</option><option>21:00</option><option>021:30</option><option>22:00</option><option>22:30</option><option>23:00</option><option>23:30</option><option>24:00</option>


          </select>



</div>




<div className="flex items-center dropDownGap2 gap-5">

<div>To</div>

<select className="rounded-lg cursor-pointer border border-gray-200 text-sm">
<option>00:00</option><option>00:30</option><option>01:00</option><option>01:30</option><option>02:00</option><option>02:30</option><option>03:00</option><option>03:30</option><option>04:00</option><option>04:30</option><option>05:00</option><option>05:30</option><option>06:00</option><option>06:30</option><option>07:00</option><option>07:30</option><option>08:00</option><option>08:30</option><option>09:00</option><option>09:30</option><option>10:00</option><option>10:30</option><option>11:00</option><option>11:30</option><option>12:00</option><option>12:30</option><option>13:00</option><option>13:30</option><option>14:00</option><option>14:30</option><option>15:00</option><option>15:30</option><option>16:00</option><option>16:30</option><option>17:00</option><option>17:30</option><option>18:00</option><option>18:30</option><option>19:00</option><option>19:30</option><option>20:00</option><option>20:30</option><option>21:00</option><option>021:30</option><option>22:00</option><option>22:30</option><option>23:00</option><option>23:30</option><option>24:00</option>

          </select>
          <i class="fas fa-times-circle text-lg cursor-pointer opacity-80 closeIcon" onClick={removeItem}></i>
</div>









</div>
    
    
    
    
    ,);
    
    setelements(elements => [...elements,newElement]);

  };



  let removeItem = (e) =>{
   e.target.parentNode.parentNode.remove();
  }

  let daysFunction = (e) =>{
    if(e.target.className == "px-4 border-2 border-gray-300 border-r-0  cursor-pointer font-bold py-2 text-gray-500 bg-white"){
    e.target.className = "px-4 border-2 border-gray-300 border-r-0  cursor-pointer font-bold py-2 text-white bg-green-400"
    }

    else{
    e.target.className = "px-4 border-2 border-gray-300 border-r-0  cursor-pointer font-bold py-2 text-gray-500 bg-white"

    }



  }


  let daysFunctionSaturday = (e) =>{
if(e.target.className == "px-4 border-2 border-gray-300 border-r-0 text-gray-500  cursor-pointer font-bold py-2"){
  e.target.className = "px-4 border-2 border-gray-300 border-r-0 text-white  cursor-pointer font-bold py-2 bg-green-400";
}
else{
  e.target.className = "px-4 border-2 border-gray-300 border-r-0 text-gray-500  cursor-pointer font-bold py-2";

}
  }

  let daysFunctionSunday = (e) =>{
    if(e.target.className == "px-4 border-2 border-gray-300  cursor-pointer font-bold py-2 text-gray-500"){
      e.target.className = "px-4 border-2 border-gray-300  cursor-pointer font-bold py-2 text-white bg-green-400";
    }
    else{
      e.target.className = "px-4 border-2 border-gray-300  cursor-pointer font-bold py-2 text-gray-500";
    
    }
  }

  return (
    <div className="px-10">
      <SettingsTabs/>
<div className="flex mt-10 justify-between w-4/5">
<div className="font-bold text-xl opacity-75 relative z-10">Online and Offline Times</div>
<p className=""><a href="#" className="text-blue-600" target="_blank" rel="noopener noreferrer"><img src={BookAlt} alt="icon" className="w-4 inline cursor-pointer" /> Learn more about Online and offline times</a></p>
</div>
     
      <p className="mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Minima optio animi sit porro et quis provident? Alias, eligendi modi!.</p>

      <div className="flex px-4 py-1 items-center gap-2  rounded-full border-gray-400" style={{width: "fit-content", borderWidth: '1px'}}>
        <span className="w-2 h-2 rounded-full bg-green-300"></span>
        <span className="text-sm">Online</span>
      </div>


<div className="opacity-80 mt-7">Status detection</div>

<div className="flex items-center gap-12 mb-5 mt-10 relative">
<div className="opacity-80">Time zone:</div>

<select className="rounded-lg cursor-pointer border border-gray-200 text-sm">
            <option>Europe/Lodon</option>
            <option>Asia/Karachi</option>
            <option>North America/Washington</option>


            

          </select>



</div>



{/* ads */}
<div className="flex items-center gap-10 mainFlexx  mt-10 relative">

<div className="flex items-center" style={{gap: '90px'}}>
  <div>Days</div>
  <div className="flex select-none">
  <div className={`${colors}`} onClick={daysFunction}>M</div>
  <div className={`${colors}`} onClick={daysFunction}>T</div>
  <div className={`${colors}`} onClick={daysFunction}>W</div>
  <div className={`${colors}`} onClick={daysFunction}>T</div>
  <div className={`${colors}`} onClick={daysFunction}>F</div>
  <div className={saturday} onClick={daysFunctionSaturday}>S</div>
  <div className={sunday} onClick={daysFunctionSunday}>S</div>
</div>

</div>



<div className="flex items-center dropDownGap gap-5">

<div>From</div>

<select className="rounded-lg cursor-pointer border border-gray-200 text-sm">
<option>00:00</option><option>00:30</option><option>01:00</option><option>01:30</option><option>02:00</option><option>02:30</option><option>03:00</option><option>03:30</option><option>04:00</option><option>04:30</option><option>05:00</option><option>05:30</option><option>06:00</option><option>06:30</option><option>07:00</option><option>07:30</option><option>08:00</option><option>08:30</option><option>09:00</option><option>09:30</option><option>10:00</option><option>10:30</option><option>11:00</option><option>11:30</option><option>12:00</option><option>12:30</option><option>13:00</option><option>13:30</option><option>14:00</option><option>14:30</option><option>15:00</option><option>15:30</option><option>16:00</option><option>16:30</option><option>17:00</option><option>17:30</option><option>18:00</option><option>18:30</option><option>19:00</option><option>19:30</option><option>20:00</option><option>20:30</option><option>21:00</option><option>021:30</option><option>22:00</option><option>22:30</option><option>23:00</option><option>23:30</option><option>24:00</option>


          </select>



</div>




<div className="flex items-center dropDownGap2 gap-5">

<div>To</div>

<select className="rounded-lg cursor-pointer border border-gray-200 text-sm">
<option>00:00</option><option>00:30</option><option>01:00</option><option>01:30</option><option>02:00</option><option>02:30</option><option>03:00</option><option>03:30</option><option>04:00</option><option>04:30</option><option>05:00</option><option>05:30</option><option>06:00</option><option>06:30</option><option>07:00</option><option>07:30</option><option>08:00</option><option>08:30</option><option>09:00</option><option>09:30</option><option>10:00</option><option>10:30</option><option>11:00</option><option>11:30</option><option>12:00</option><option>12:30</option><option>13:00</option><option>13:30</option><option>14:00</option><option>14:30</option><option>15:00</option><option>15:30</option><option>16:00</option><option>16:30</option><option>17:00</option><option>17:30</option><option>18:00</option><option>18:30</option><option>19:00</option><option>19:30</option><option>20:00</option><option>20:30</option><option>21:00</option><option>021:30</option><option>22:00</option><option>22:30</option><option>23:00</option><option>23:30</option><option>24:00</option>

          </select>
          <i class="fas fa-times-circle text-lg cursor-pointer opacity-80 closeIcon" onClick={removeItem}></i>
</div>









</div>
<div >
{
        elements
      }
</div>

<button onClick={createNewDiv} ref={parentRef} className="flex items-center gap-1 border-b-2 border-gray-300 hover:border-gray-400 text-gray-700 mt-8  border-0 outline-0 bg-white" style={{marginBottom: '170px'}}><i class="fal fa-plus text-sm"></i> <span className="text-base">Add more availability date & times</span></button>
      



















     
      
    </div>
  );
};

export default Onlin_Offline;
