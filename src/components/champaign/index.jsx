import Toggle2 from "../Toggle/Toggle-small";
import Toggle from "../Toggle";
import React, { useState } from "react";
import Pencil from "../../assets/icons/new-icons/pencil.svg";
import Bin from "../../assets/icons/bin.svg";


import TabsRender from "../Tabs";

const Champaigns = ({ data }) => {
  const [showModal, setshowModal] = useState("opacity-0 invisible");

  let modalFunction = () =>{
    setshowModal("opacity-100 visible")
  }
  const [selected, setSelected] = useState("");
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
    <div>
   
        {data.map((row) => (


<div className="flex border-b border-gray-200 py-3">
<div className="opacity-80 basis-1/3 font-semibold text-black">{row.title}</div>
<div className="opacity-60 fontSizeChamp basis-1/3">{row.type}</div>

<div className="flex basis-1/3">

   <div className="opacity-60 basis-1/3">{row.views}</div>
   <div className="opacity-60 basis-1/3">{row.clicked}</div>
   <div className="basis-1/3 flex gap-8">
    <Toggle bg="bg-blue-400" border="border-blue-400" value="justify-end"  />

    <button class="relative dropdown:block" role="navigation" aria-haspopup="true">
    <span className="mt-1">&#x22EE;</span>
  {/* <!-- 2) will transform this ul in a block when focused --> */}
  <ul class="absolute bg-white z-10 rounded-lg p-6 text-left shadow-2xl right-0 hidden w-50" aria-label="submenu">
    <li className="my-1 opacity-70"><img src={Pencil} alt="" className="w-4 my-1 inline" /> Edit</li>
    <li className="my-1 ml-5 opacity-70">Test</li>
    <li className="my-1 ml-5 opacity-70">
    <div onClick={modalFunction} className="cursor-pointer  items-center font-normal ">
<span className="">Analytic</span>
</div>
    </li>
    <li className="flex gap-7 my-1 ml-5 opacity-70"> <div>Status</div> <Toggle2 bg="bg-blue-400" className="w-5 h-5" border="border-blue-400" value="justify-end"  /></li>
    <li className="my-1 ml-5 opacity-70">Dubziere</li>
    <li className="my-1 opacity-70"><img src={Bin} alt="" className="w-4 inline" /> Lubstre</li>
  </ul>
</button>
   </div>
</div>



</div>

))}




<div className={`fixed  top-0 transition mainFixedOverlay w-screen h-screen flex items-center justify-center ${showModal}`}>

<div className="blackOverlay absolute left-0 top-0 w-full h-full" onClick={() => setshowModal('opacity-0 invisible')}></div>

<div className="rounded-lg bg-white w-2/3 py-8 pb-10 px-10 relative z-50">
<div className="flex items-center justify-between">
             <div>
              <div className="font-bold opacity-70 text-xl">Champaign</div>
              <p>Black Friday for 70% sale</p>
              </div>
              <i class="fal fa-times cursor-pointer text-black opacity-70 text-xl" onClick={() => setshowModal('opacity-0 invisible')}></i>
</div>


{/* tabs */}
          
<TabsRender></TabsRender>



</div>
</div>

    </div>



</>
  );
};

export default Champaigns;
