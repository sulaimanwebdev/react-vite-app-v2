import {useState} from 'react'


const Dropdown = ({ children, className = "", variant = "solid", ...props }) => {

    const [dropDown, setdropDown] = useState("hidden")
    return (
      <>
      <div className="w-full">
 
  
            <div 
            
            onClick={(e) => {
              if(dropDown === "hidden"){
                setdropDown("flex")
  
              }
              
              else{
              setdropDown("hidden")
  
              }
            }}
  
            
            className="flex cursor-pointer  border rounded-lg  py-2  items-center font-normal ">
  <span className="text-base  cursor-pointer">Filter</span>
  <svg xmlns="http://www.w3.org/2000/svg" className="opacity-50  cursor-pointer" width="12px" viewBox="0 0 384 512"><path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"/></svg></div>
         
  
  
  
  
  
  
  
  
  
  
  
  
     {/* filter dropdown */}
   
  
  
      <div className={`h-auto absolute bottom-0  rounded-lg px-4  py-3 left-0 shadow-2xl bg-white flex-col gap-3 ${dropDown}`} style={{width:"1000px"}}>
  
  
  <div className="flex items-center gap-4">
  <input type="checkbox" name="Name" id="Name" className="rounded w-4 h-4  cursor-pointer" />
  <label htmlFor="Name" className="opacity-80  cursor-pointer">{children}</label>
  </div>
  
  
  
  <div className="flex items-center gap-4">
  <input type="checkbox" name="Email" id="Email" className="rounded w-4 h-4  cursor-pointer" />
  <label htmlFor="Email" className="opacity-80  cursor-pointer">Email</label>
  </div>
  
  
  
  
  <div className="flex items-center gap-4">
  <input type="checkbox" name="Newsletter" id="Newsletter" className="rounded w-4 h-4  cursor-pointer" />
  <label htmlFor="Newsletter" className="opacity-80  cursor-pointer">Newsletter</label>
  </div>
  
  
  
  
  <div className="flex items-center gap-4">
  <input type="checkbox" name="Survey" id="Survey" className="rounded w-4 h-4  cursor-pointer" />
  <label htmlFor="Survey" className="opacity-80  cursor-pointer">Survey</label>
  </div>
  
  
  
  
  <div className="flex items-center gap-4">
  <input type="checkbox" name="Pages" id="Pages" className="rounded w-4 h-4  cursor-pointer" />
  <label htmlFor="Pages" className="opacity-80  cursor-pointer">Pages</label>
  </div>
  
  
  
  
  
  <div className="flex items-center gap-4">
  <input type="checkbox" name="Browser" id="Browser" className="rounded w-4 h-4  cursor-pointer" />
  <label htmlFor="Browser" className="opacity-80  cursor-pointer">Browser</label>
  </div>
  
  
  
  
  <div className="flex items-center gap-4">
  <input type="checkbox" name="Country" id="Country" className="rounded w-4 h-4  cursor-pointer" />
  <label htmlFor="Country" className="opacity-80  cursor-pointer">Country</label>
  </div>
  
  
  
  
  <div className="flex items-center gap-4">
  <input type="checkbox" name="Phone" id="Phone" className="rounded w-4 h-4  cursor-pointer" />
  <label htmlFor="Phone" className="opacity-80  cursor-pointer">Phone</label>
  </div>
  
  
  
  <div className="flex items-center gap-4">
  <input type="checkbox" name="Language" id="Language" className="rounded w-4 h-4  cursor-pointer" />
  <label htmlFor="Language" className="opacity-80  cursor-pointer">Language</label>
  </div>
  
  
  
  
  <div className="flex items-center gap-4">
  <input type="checkbox" name="Company" id="Company" className="rounded w-4 h-4  cursor-pointer" />
  <label htmlFor="Company" className="opacity-80  cursor-pointer">Company</label>
  </div>
  
  
  
  <div className="flex items-center gap-4">
  <input type="checkbox" name="Company Size" id="Company Size" className="rounded w-4 h-4  cursor-pointer" />
  <label htmlFor="Company Size" className="opacity-80  cursor-pointer">Company Size</label>
  </div>
  
  
  <div className="flex items-center gap-4"    onClick={(e) => {
              if(dropDown === "hidden"){
                setdropDown("flex")
  
              }
              
              else{
              setdropDown("hidden")
  
              }
            }}>
  {/* <input type="checkbox" name="Company Size" id="Company Size" className="rounded w-4 h-4  cursor-pointer" /> */}
  <label htmlFor="" className="opacity-80  cursor-pointer">X</label>
  </div>
  
  
  
  </div>
  </div>
  
  
  
  
  </>
    );
  };
  
  export default Dropdown;