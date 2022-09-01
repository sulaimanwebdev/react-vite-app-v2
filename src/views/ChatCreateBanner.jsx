import React, {useState} from 'react'
import banner1 from '../assets/images/images 2.jpeg'
import banner2 from '../assets/images/Download 2.png'
import banner3 from '../assets/images/Download (1).jpeg'
import banner4 from '../assets/images/Download 2.jpeg'
import banner5 from '../assets/images/istockphoto-1144376964-1024x1024.jpeg'
import banner6 from '../assets/images/images.png'
import banner7 from '../assets/images/images (2).jpeg'
import banner8 from '../assets/images/images (1).jpeg'
import canva from '../assets/images/logo/canva.png'
import unsplash from '../assets/images/logo/unsplash.png'




const ChatCreateBanner = () => {
    const [title, settitle] = useState('Up to 80% off, use it now');
    const [button, setbutton] = useState('Show More');
    const [url, seturl] = useState('https://react-vite-app.vercel.app/');
    const [contWidth, setcontWidth] = useState("");
    const [mxAuto, setmxAuto] = useState("");
    const [activeBTNDesktop, setactiveBTNDesktop] = useState("text-blue-600");
    const [activeBTNMobile, setactiveBTNMobile] = useState("");
    const [desktopOpacity, setdesktopOpacity] = useState('');
    const [mobileOpacity, setmobileOpacity] = useState('opacity-40');
    const [rounded, setrounded] = useState("justify-end");
    const [activeTabWindow1, setactiveTabWindow1] = useState('');
    const [activeTabWindow2, setactiveTabWindow2] = useState('opacity-50');
    const [settings, setsettings] = useState('');
    const [styles, setstyles] = useState('hidden');
    const [activeButtonSettings, setactiveButtonSettings] = useState('bg-blue-200 transition-colors hover:bg-blue-300');
    const [activeButtonStyles, setactiveButtonStyles] = useState("");
    const [fontColor, setfontColor] = useState("#303030");
    const [buttonTextColor, setbuttonTextColor] = useState("#2563eb");
    const [buttonBackgrounColor, setbuttonBackgrounColor] = useState("#ffffff");
    const [fontSize, setfontSize] = useState("15px");




    const [color, setColor] = useState('#ffffff');



    let titleInput = (e) =>{
        settitle(e.target.value)
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
        setrounded('justify-start');
        setactiveTabWindow1('opacity-50');
        setactiveTabWindow2('');
    }

    let roundedFuntionMR = () =>{
        setrounded('justify-end');
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










    const [bannerValue, setbannerValue] = useState(banner1);




    // upload image
const [selectedImage, setSelectedImage] = useState();
const [uploadedImage, setuploadedImage] = useState('');
const [defaultBanner, setdefaultBanner] = useState('');




const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
        setuploadedImage('block')
        setdefaultBanner('hidden')
      setSelectedImage(e.target.files[0]);
      
    }
  };







  const [showModal, setshowModal] = useState("opacity-0 invisible")







    return (
        <>
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

           <div className={` mx-auto overflow-hidden rounded-xl ChatbannerCont bg-gray-300 ${contWidth}`}>
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

             






            <div className={`flex items-end pr-12 pl-7 h-full pb-12 ${rounded}`} >
            <div className="bg-white mb-7 relative shadow-md rounded-xl pb-3" style={{width: "260px", backgroundColor: color}}>
           <img src={bannerValue} alt="banner" className={`w-full h-32 rounded-xl object-cover object-center ${defaultBanner}`} />

           {selectedImage && (
            <img
              src={URL.createObjectURL(selectedImage)}
              className={`w-full h-32 rounded-xl object-cover object-center ${uploadedImage}`}
              alt="banner"
            />
          
        )}



           
          <div className=" w-fit  px-3 text-base mt-2 " style={{fontSize: `${fontSize}px`, color: fontColor}}>{title}</div>
          <a href={url} className=" w-fit ml-3 py-2 rounded  px-3 text-base  inline-block" style={{color:buttonTextColor, backgroundColor: buttonBackgrounColor}}>{button}</a>

           <div className={`absolute bottom-2 -right-7 flex items-center justify-center rounded-full w-14 h-14 bg-blue-600 cursor-pointer hover:bg-blue-800 transition-colors`}><i class="fas fa-comment-dots text-white text-2xl"></i></div>
            
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
                 <div className={`w-24 h-20 overflow-hidden flex items-end justify-end bg-blue-100 selectDiv cursor-pointer relative rounded-lg ${activeTabWindow1}`} onClick={roundedFuntionMR}><div className="w-7 mr-1 mb-1 rounded mt-1  py-3 bg-blue-400"></div></div>
                 <div className={`w-24 h-20 overflow-hidden flex items-end justify-start bg-blue-100 selectDiv cursor-pointer relative rounded-lg px-1 pt-1 ${activeTabWindow2}`} onClick={roundedFuntionMA}><div className="w-7 ml-1 mb-1 rounded mt-1  py-3 bg-blue-400"></div></div>

             </div>

             <div className="flex items-center gap-3 mt-7 mb-5">
             <input type="checkbox" id="checkbox" name="checkbox" className="outline-0 rounded-sm cursor-pointer"/>
                 <label for="checkbox" className="opacity-70 text-sm cursor-pointer">Keep this message in place on scroll</label>

             </div>
             <div className="border absolute w-full top-52 left-0 bg-gray-300"></div>

             <div className="grid grid-cols-2 gap-2 mt-8">
            <button className={`py-2 rounded-md text-blue-600 font-bold ${activeButtonSettings}`} onClick={settingsFunction}>Settings</button>
            <button className={`py-2  rounded-md text-blue-600 font-bold bg-white transition-colors ${activeButtonStyles}`} onClick={stylesFunction}>Style</button>

             </div>


{/* main */}
               <div>
              <div className={`settings ${settings}`}>
              <div className="text-sm opacity-50 mb-3 mt-5">MESSAGE</div>
             <div className="font-bold opacity-70 text-sm mb-1">Title</div>
             <input className="border-gray-300 w-full rounded text-sm mb-4"  type="text" placeholder="Enter your title" value={title} onChange={titleInput}/>


 
          <div className="border absolute  w-full left-0 bg-gray-300" style={{top: "395px"}}></div>

                




             <div className="text-sm opacity-50 mb-3 mt-3 ">Button</div>
             <div className="font-bold opacity-70 text-sm mb-1">Title</div>
             <input className="border-gray-300 w-full rounded text-sm mb-4" type="text" placeholder="Enter your title" value={button} onChange={buttonInput}  />


             <div className="font-bold opacity-70 text-sm mb-1">URL</div>

            <div className="relative">
             <i class="far fa-link absolute opacity-75 bottom-3 left-3"></i>

            <input className=" border-gray-300  w-full pl-9  rounded text-sm" type="text" placeholder="Enter your URL" value={url} onChange={urlInput}/>
            </div>





              </div>







        <div className={`styles ${styles}`}>

        <div className="text-sm opacity-50 mb-2 mt-5">IMAGE</div>

<div className="w-full py-2 px-2 border border-gray-300 rounded text-sm text-blue-500 cursor-pointer"  onClick={() => setshowModal('opacity-100 visible')}>Choose a picture of us</div>


<div className="flex items-center justify-between">
    
<label htmlFor="image" className="flex cursor-pointer mt-3 items-center justify-start gap-3"><i class="far fa-image text-2xl opacity-80"></i> <div className="text-xs px-3 bg-gray-200 rounded" style={{paddingTop: "7px", paddingBottom: "7px"}}><div className="opacity-80">Upload your own image</div></div></label>
<input type="file" name="image" id="image" className="hidden" accept="image/*" onChange={imageChange}/>

<div className='flex items-center gap-2 transform translate-y-2'>
              <img src={canva} className='w-5 cursor-pointer' alt="canva" />
              <img src={unsplash} className='w-5 cursor-pointer' alt="canva" />
            </div>

</div>
    


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
          <input type="number" placeholder="15" value={fontSize} onChange={(e) => setfontSize(e.target.value)} className="w-20 text-sm rounded-lg pl-8 border-gray-200" style={{borderTopLeftRadius: "0", borderBottomLeftRadius: "0"}}/>
          </div>


          <div className="relative  rounded-lg mt-1  flex items-center gap-4">
          <label htmlFor="font-color" className="absolute border border-gray-200 rounded left-2 cursor-pointer" style={{bottom: "5px"}}><div className="w-7  rounded h-7" style={{backgroundColor: fontColor}}></div></label>

<input type="text" value={fontColor} onChange={(e) => setfontColor(e.target.value)} className="w-full h-10 pl-14  text-sm text-gray-700 flex items-center   border-gray-300 rounded-lg"/>

<input type="color" className="absolute bottom-10 left-0 opacity-0 invisible" value={fontColor} name="font-color" id="font-color" onChange={e => setfontColor(e.target.value)} />

          <label htmlFor="font-color" className="absolute right-3 text-xl opacity-75  cursor-pointer" style={{bottom:"6px"}}><i class="fal fa-angle-down "></i></label>
          
          </div>
          <div className="border absolute w-full left-0 bg-gray-300" style={{top: "585px"}}></div>




          <div className="font-bold mt-10 opacity-70 text-sm mb-2">Background</div>

          <div className="w-full relative ">
                <label htmlFor="color" className="absolute border border-gray-200 rounded  left-2 cursor-pointer" style={{bottom: "5px"}}><div className="w-7  rounded h-7" style={{backgroundColor: color}}></div></label>

                <input type="text" value={color} onChange={changeBodyColor} className="w-full h-10 pl-14  text-sm text-gray-700 flex items-center   border-gray-300 rounded-lg"/>

                <input type="color" className="absolute bottom-10 left-0 opacity-0 invisible" value={color} name="color" id="color" onChange={e => setColor(e.target.value)} />
                <label htmlFor="color" className="absolute right-3 text-xl opacity-75  cursor-pointer" style={{bottom:"6px"}}><i class="fal fa-angle-down "></i></label>

         </div>


         <div className="border absolute w-full left-0 bg-gray-300" style={{top: "695px"}}></div>
  
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


        <div className={`fixed left-0 top-0  mainFixedOverlay w-screen h-screen flex items-center justify-center ${showModal}`}>
        <div className="blackOverlay absolute left-0 top-0 w-full h-full" onClick={() => setshowModal('opacity-0 invisible')}></div>
        <div className="rounded-lg bg-white whiteBoxChatBannerDesign py-8 pb-10 px-7 relative z-50">
          <div className="flex items-center justify-between">
              <div className="font-bold opacity-70 text-lg">Choose an Image</div>
              <i class="fal fa-times cursor-pointer text-black opacity-70 text-xl" onClick={() => setshowModal('opacity-0 invisible')}></i>
          </div>


          <div className="w-full flex items-center justify-center gap-14 mt-5 mb-8">
              <div className="text-blue-500 cursor-pointer">All</div>
              <div className="opacity-75 cursor-pointer">Sales</div>
              <div className="opacity-75 cursor-pointer">Sign in</div>
              <div className="opacity-75 cursor-pointer">New Post</div>



          </div>

          <div className="grid grid-cols-4 col-gap-14 gap-7 mt-5">


             <div onClick={()=> 
           {
            setbannerValue(banner1)
            setshowModal('opacity-0 invisible')
            setuploadedImage('hidden')
            setdefaultBanner('block')
           }

            
            } className="cursor-pointer" style={{height: "130px"}}> <img src={banner1} alt="banner" className="object-cover w-full h-full position-center rounded-lg" /></div>




             <div 
             
             onClick={()=> 
                {
                 setbannerValue(banner2)
                 setshowModal('opacity-0 invisible')
                 setuploadedImage('hidden')
                 setdefaultBanner('block')
                }
     
                 
                 }

             className="cursor-pointer" style={{height: "130px"}}> <img src={banner2} alt="banner" className="object-cover w-full h-full position-center rounded-lg" /></div>



             <div 

              onClick={()=> 
                {
                 setbannerValue(banner3)
                 setshowModal('opacity-0 invisible')
                 setuploadedImage('hidden')
                 setdefaultBanner('block')
                }
     
                 
                 }
             
             className="cursor-pointer" style={{height: "130px"}}> <img src={banner3} alt="banner" className="object-cover w-full h-full position-center rounded-lg" /></div>





             <div 
             
             onClick={()=> 
                {
                 setbannerValue(banner4)
                 setshowModal('opacity-0 invisible')
                 setuploadedImage('hidden')
                 setdefaultBanner('block')
                }
     
                 
                 }


             className="cursor-pointer" style={{height: "130px"}}> <img src={banner4} alt="banner" className="object-cover w-full h-full position-center rounded-lg" /></div>





             <div 
              onClick={()=> 
                {
                 setbannerValue(banner5)
                 setshowModal('opacity-0 invisible')
                 setuploadedImage('hidden')
                 setdefaultBanner('block')
                }
     
                 
                 }

             className="cursor-pointer" style={{height: "130px"}}> <img src={banner5} alt="banner" className="object-cover w-full h-full position-center rounded-lg" /></div>


             <div 
             
             onClick={()=> 
                {
                 setbannerValue(banner6)
                 setshowModal('opacity-0 invisible')
                 setuploadedImage('hidden')
                 setdefaultBanner('block')
                }
     
                 
                 }
             
             className="cursor-pointer" style={{height: "130px"}}> <img src={banner6} alt="banner" className="object-cover w-full h-full position-center rounded-lg" /></div>



             <div  onClick={()=> 
                {
                 setbannerValue(banner7)
                 setshowModal('opacity-0 invisible')
                 setuploadedImage('hidden')
                 setdefaultBanner('block')
                }
     
                 
                 }
                  className="cursor-pointer" style={{height: "130px"}}> <img src={banner7} alt="banner" className="object-cover w-full h-full position-center rounded-lg" /></div>



             <div  onClick={()=> 
                {
                 setbannerValue(banner8)
                 setshowModal('opacity-0 invisible')
                 setuploadedImage('hidden')
                 setdefaultBanner('block')
                }
     
                 
                 } className="cursor-pointer" style={{height: "130px"}}> <img src={banner8} alt="banner" className="object-cover w-full h-full position-center rounded-lg" /></div>














          </div>









        </div>
    </div>



        </>
        
    )
}

export default ChatCreateBanner
