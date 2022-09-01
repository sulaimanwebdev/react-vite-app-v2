import { useState } from "react";

const Toggle2 = ({value, bg, border}) => {
  const [toggleborder, settoggleborder] = useState(border);
  const [toggleBg, settoggleBg] = useState(bg);
  const [toggleMenu, settoggleMenu] = useState(value);
   
  let toggleFunction = () =>{
    if(value == "justify-end"){
      settoggleborder("border-gray-400");
      settoggleBg('bg-gray-400');
      settoggleMenu('justify-start');
    }
 
   if(toggleMenu == "justify-start"){
      settoggleborder("border-blue-700");
      settoggleBg('bg-blue-700');
      settoggleMenu('justify-end');
    }

    if(toggleMenu == "justify-end"){
      settoggleborder("border-gray-400");
      settoggleBg('bg-gray-400');
      settoggleMenu('justify-start');
    }

 
  }
  return (
    <div onClick={toggleFunction} className={`w-10 border-2  rounded-full px-0.5 py-0.5 flex cursor-pointer transition ${toggleMenu} ${toggleborder}`}>
      <div className={`w-4 h-4 rounded-full cursor-pointer transition ${toggleBg}`}></div>
    </div>
  );
};

export default Toggle2;
