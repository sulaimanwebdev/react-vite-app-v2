import React, {useState} from 'react'

const CreateBanner = () => {
    const [title, settitle] = useState('Last minutes for iPhone 12 pro sale');
    const [body, setbody] = useState('It is valid until 13.4.2021');
    const [button, setbutton] = useState('View');
    const [url, seturl] = useState('https://react-vite-app.vercel.app/');
    const [contWidth, setcontWidth] = useState("");
    const [mxAuto, setmxAuto] = useState("");
    const [activeBTNDesktop, setactiveBTNDesktop] = useState("text-blue-600");
    const [activeBTNMobile, setactiveBTNMobile] = useState("");
    const [desktopOpacity, setdesktopOpacity] = useState('');
    const [mobileOpacity, setmobileOpacity] = useState('opacity-40');
    const [rounded, setrounded] = useState("");
    const [activeTabWindow1, setactiveTabWindow1] = useState('');
    const [activeTabWindow2, setactiveTabWindow2] = useState('opacity-50');
    const [settings, setsettings] = useState('');
    const [styles, setstyles] = useState('hidden');
    const [activeButtonSettings, setactiveButtonSettings] = useState('bg-blue-200 transition-colors hover:bg-blue-300');
    const [activeButtonStyles, setactiveButtonStyles] = useState("");
    const [fontColor, setfontColor] = useState("#ffffff");
    const [buttonTextColor, setbuttonTextColor] = useState("#5A9EAA");
    const [buttonBackgrounColor, setbuttonBackgrounColor] = useState("#ffffff");
    const [fontSize, setfontSize] = useState("16px");




    const [color, setColor] = useState('#5A9EAA');



    let titleInput = (e) =>{
        settitle(e.target.value)
    }

    let bodyInput = (e) =>{
        setbody(e.target.value)
        
    }


    let buttonInput = (e) =>{
        setbutton(e.target.value)
    }

    let urlInput = (e) =>{
        seturl(e.target.value)
    }

    let changeToMobile = () =>{
        setcontWidth('widthOfContainer');
        setmxAuto('mx-auto');
        setactiveBTNDesktop('');
        setactiveBTNMobile('text-blue-600');
        setdesktopOpacity('opacity-40');
        setmobileOpacity('');

    }

    let changeToDesktop = () =>{
        setcontWidth('');
        setmxAuto('');
        setactiveBTNDesktop('text-blue-600');
        setactiveBTNMobile('');
        setdesktopOpacity('');
        setmobileOpacity('opacity-40');


    }

    let roundedFuntionMA = () =>{
        setrounded('mt-3 mx-3 rounded overflow-hidden ggg');
        setactiveTabWindow1('opacity-50');
        setactiveTabWindow2('');
    }

    let roundedFuntionMR = () =>{
        setrounded('');
        setactiveTabWindow1('');
        setactiveTabWindow2('opacity-50');


    }

    let changeBodyColor = (e) =>{
        setColor(e.target.value)

    }

    let stylesFunction = () =>{
        setsettings('hidden')
        setstyles('');
        setactiveButtonSettings('')
        setactiveButtonStyles('bg-blue-200 transition-colors hover:bg-blue-300')
    }


    let settingsFunction = () =>{
        setsettings('')
        setstyles('hidden');
        setactiveButtonSettings('bg-blue-200 transition-colors hover:bg-blue-300')
        setactiveButtonStyles('')
    }


    return (
  <div className="bg-gray-100 w-full min-h-screen pb-10">
            <div className="bg-white py-4 flex items-center justify-end gap-5 createBannerBar">
            <button className="">Cancel</button>
            <button className="py-2 px-5 rounded-md text-white font-bold bg-blue-500 transition-colors hover:bg-blue-600">Save</button>


            </div>

        <div className="champaignMaxWidth  w-full mainCreateBannerbg grid gap-10 ">

     
    {/* left */}
       <div>
           <div className="flex items-center justify-center mt-10 gap-5 mb-5">
                     <button onClick={changeToDesktop} className={`bg-white px-3 text-sm py-2  font-medium rounded-md transition relative transform hover:-translate-y-1 ${activeBTNDesktop}`}><span className={`flex items-center gap-2  ${desktopOpacity}`}><i class="fal fa-desktop text-xs" style={{transform: "translateY(1px)"}}></i> Desktop</span></button>
                     <button onClick={changeToMobile} className={`bg-white px-3 text-sm py-2 rounded-md transition relative transform   hover:-translate-y-1 ${activeBTNMobile}`}><span className={`flex items-center gap-2 ${mobileOpacity}`}><i class="fal fa-mobile"></i> Mobile</span></button>

           </div>

           <div className={` mx-auto overflow-hidden rounded-xl bannerCont  ${contWidth}`}>
             <div className="bannerTop w-full py-3 px-3 bg-gray-200 flex items-center gap-2">
             <div className="flex items-center gap-2 w-full justify-between">

                 <div className="flex dotss items-center gap-2">
                 <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                 <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                 <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                 </div>
             <div className="w-full h-5 topbarChildern max-w-2xl rounded bg-gray-300"></div>


             </div>
             </div>

             <div className={`actualBanner relative block ${rounded}`}>
                 <div className="flex items-center colsClass flex-wrap text-center gap-4 justify-between px-5 py-5 w-full" style={{backgroundColor: color}}>
                     <div className="font-bold  titletext " style={{color: fontColor, fontSize: `${fontSize}px`}}>{title} <span className="text-xm opacity-90 ml-5 font-normal">{body}</span></div>
                     <div className={`flex items-center gap-10 flex-wrap ${mxAuto}`}>
            <a href={url} className="py-2 px-6 rounded-md  font-bold bg-white transition-colors" style={{color: buttonTextColor, backgroundColor: buttonBackgrounColor}}>{button}</a>
            <i class="fal fa-times cursor-pointer text-2xl text-white"></i>
                     </div>
                 </div>
             </div>


        </div>

       </div>









           {/* right */}
        <div className="mt-10">
            <div className="bg-white w-full flex items-center justify-between rounded px-5 py-4 mb-5">
                    <div>
                        <div className="text-sm opacity-50 mb-2">GENERAL</div>
                        <div className="font-bold opacity-70">Countdown Template</div>
                    </div>

                    <div className="rounded-full w-10 h-10 cursor-pointer flex items-center justify-center bg-blue-100 transition-colors hover:bg-blue-200">
           <i class="fal fa-pen cursor-pointer text-blue-700"></i>

                    </div>
            </div>

           {/* left */}
            <div className="bg-white w-full px-5 py-4 rounded overflow-hidden relative">
             <div className="font-bold opacity-70 text-lg mb-5">Form</div>
             <div className="flex items-center gap-7">
                 <div className={`w-24 h-20 overflow-hidden bg-blue-100 selectDiv cursor-pointer relative rounded-lg ${activeTabWindow1}`} onClick={roundedFuntionMR}><div className="w-full mt-1  py-2 bg-blue-400"></div></div>
                 <div className={`w-24 h-20 overflow-hidden  bg-blue-100 selectDiv cursor-pointer relative rounded-lg px-1 pt-1 ${activeTabWindow2}`} onClick={roundedFuntionMA}><div className="w-full mt-1  rounded py-2 bg-blue-400"></div></div>

             </div>

             <div className="flex items-center gap-3 mt-7 mb-5">
             <input type="checkbox" id="checkbox" name="checkbox" className="outline-0 rounded-sm cursor-pointer"/>
                 <label for="checkbox" className="opacity-70 text-sm cursor-pointer">Keep this message in place on scroll</label>

             </div>
             <div className="border absolute w-full top-52 left-0 bg-gray-300"></div>

             <div className="grid grid-cols-2 gap-2 mt-8">
            <button className={`py-2 text-base  rounded-md text-blue-600 font-bold ${activeButtonSettings}`} onClick={settingsFunction}>Settings</button>
            <button className={`py-2 text-base  rounded-md text-blue-600 font-bold bg-white transition-colors ${activeButtonStyles}`} onClick={stylesFunction}>Style</button>

             </div>


{/* main */}
               <div>
              <div className={`settings ${settings}`}>
              <div className="text-sm opacity-50 mb-3 mt-5">MESSAGE</div>
             <div className="font-bold opacity-70 text-sm mb-1">Title</div>
             <input className="border-gray-300 w-full rounded text-sm mb-4"  type="text" placeholder="Enter your title" value={title} onChange={titleInput}/>


             <div className="font-bold opacity-70 text-sm mb-1">Body</div>
             <input className="border-gray-300 w-full rounded text-sm" type="text" placeholder="Enter your body text" value={body} onChange={bodyInput}/>


             <div className="border absolute w-full border-222 left-0 bg-gray-300"></div>
                




             <div className="text-sm opacity-50 mb-3 mt-10">Button</div>
             <div className="font-bold opacity-70 text-sm mb-1">Title</div>
             <input className="border-gray-300 w-full rounded text-sm mb-4" type="text" placeholder="Enter your title" value={button} onChange={buttonInput}  />


             <div className="font-bold opacity-70 text-sm mb-1">URL</div>

            <div className="relative">
             <i class="far fa-link absolute opacity-75 bottom-3 left-3"></i>

            <input className=" border-gray-300  w-full pl-9  rounded text-sm" type="text" placeholder="Enter your URL" value={url} onChange={urlInput}/>
            </div>


             <div className="border absolute w-full border-222 left-0 bg-gray-300"></div>
               
              </div>













        <div className={`styles ${styles}`}>


        <div className="font-bold opacity-70 text-sm mb-2 mt-4">Title</div>
          <select className="rounded-lg border border-gray-200 text-sm w-full cursor-pointer">
          <option>Arial</option>
          <option>Poppins</option>
          </select>

          <div className="flex items-center w-full mt-1 relative">
          <select className="rounded-lg border border-r-0  border-gray-200 text-sm w-full cursor-pointer" style={{borderTopRightRadius: "0", borderBottomRightRadius: "0"}}>
          <option>Bold</option>
          <option>Normal</option>
          </select>
          <i class="far fa-text-size  absolute right-14 bottom-3 opacity-75 text-xs"></i>
          <input type="number" placeholder="16" value={fontSize} onChange={(e) => setfontSize(e.target.value)} className="w-20 text-sm rounded-lg pl-8 border-gray-200" style={{borderTopLeftRadius: "0", borderBottomLeftRadius: "0"}}/>
          </div>


          <div className="relative  rounded-lg mt-1  flex items-center gap-4">
          <label htmlFor="font-color" className="absolute border border-gray-200 rounded left-2 cursor-pointer" style={{bottom: "5px"}}><div className="w-7  rounded h-7" style={{backgroundColor: fontColor}}></div></label>

<input type="text" value={fontColor} onChange={(e) => setfontColor(e.target.value)} className="w-full h-10 pl-14  text-sm text-gray-700 flex items-center   border-gray-300 rounded-lg"/>

<input type="color" className="absolute bottom-10 left-0 opacity-0 invisible" value={fontColor} name="font-color" id="font-color" onChange={e => setfontColor(e.target.value)} />

          <label htmlFor="font-color" className="absolute right-3 text-xl opacity-75  cursor-pointer" style={{bottom:"6px"}}><i class="fal fa-angle-down "></i></label>
          
          </div>
          <div className="border absolute w-full left-0 bg-gray-300" style={{top: "450px"}}></div>




          <div className="font-bold mt-10 opacity-70 text-sm mb-2">Background</div>

          <div className="w-full relative ">
                <label htmlFor="color" className="absolute border border-gray-200 rounded  left-2 cursor-pointer" style={{bottom: "5px"}}><div className="w-7  rounded h-7" style={{backgroundColor: color}}></div></label>

                <input type="text" value={color} onChange={changeBodyColor} className="w-full h-10 pl-14  text-sm text-gray-700 flex items-center   border-gray-300 rounded-lg"/>

                <input type="color" className="absolute bottom-10 left-0 opacity-0 invisible" value={color} name="color" id="color" onChange={e => setColor(e.target.value)} />
                <label htmlFor="color" className="absolute right-3 text-xl opacity-75  cursor-pointer" style={{bottom:"6px"}}><i class="fal fa-angle-down "></i></label>

         </div>


         <div className="border absolute w-full left-0 bg-gray-300" style={{top: "560px"}}></div>
  
          <div className="font-normal mt-10 opacity-70 text-base mb-1 ">Button</div>

          <div className="font-bold  opacity-70 text-sm mb-2">Font-Color</div>
          <div className="relative  rounded-lg mt-1  flex items-center gap-4">
          <label htmlFor="buttonFont-color" className="absolute border border-gray-200 rounded  left-2 cursor-pointer" style={{bottom: "5px"}}><div className="w-7  rounded h-7" style={{backgroundColor: buttonTextColor}}></div></label>

<input type="text" value={buttonTextColor} onChange={(e) => setbuttonTextColor(e.target.value)} className="w-full h-10 pl-14  text-sm text-gray-700 flex items-center   border-gray-300 rounded-lg"/>

<input type="color" className="absolute bottom-10 left-0 opacity-0 invisible" value={buttonTextColor} name="buttonFont-color" id="buttonFont-color" onChange={e => setbuttonTextColor(e.target.value)} />

          <label htmlFor="buttonFont-color" className="absolute right-3 text-xl opacity-75  cursor-pointer" style={{bottom:"6px"}}><i class="fal fa-angle-down "></i></label>
          
          </div>


          <div className="font-bold mt-5 opacity-70 text-sm mb-2">Background-Color</div>
          <div className="relative  rounded-lg mt-1  flex items-center gap-4">
          <label htmlFor="buttonBackground" className="absolute border border-gray-200 rounded  left-2 cursor-pointer" style={{bottom: "5px"}}><div className="w-7  rounded h-7" style={{backgroundColor: buttonBackgrounColor}}></div></label>

<input type="text" value={buttonBackgrounColor} onChange={(e) => setbuttonBackgrounColor(e.target.value)}  className="w-full h-10 pl-14  text-sm text-gray-700 flex items-center   border-gray-300 rounded-lg"/>

<input type="color" className="absolute bottom-10 left-0 opacity-0 invisible" value={buttonBackgrounColor} name="buttonBackground" id="buttonBackground" onChange={e => setbuttonBackgrounColor(e.target.value)} />

          <label htmlFor="buttonBackground" className="absolute right-3 text-xl opacity-75  cursor-pointer" style={{bottom:"6px"}}><i class="fal fa-angle-down "></i></label>
          
          </div>

           
















        </div>
























               </div>






            </div>




        </div>
    




            
        </div>

        </div>
    )
}

export default CreateBanner
