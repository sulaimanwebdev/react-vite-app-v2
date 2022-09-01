import React, {useState} from 'react'
import { Link } from "react-router-dom";
import facebook from '../assets/images/social/facebook-logo.png';
import facebookOutline from '../assets/images/social/facebook (1).png';
import instagramOutline from '../assets/images/social/instagram (1).png';
import instagram from '../assets/images/social/instagram.png';
import linkedin from '../assets/images/social/linkedin.png';
import twitter from '../assets/images/social/twitter.png';
import youtube from '../assets/images/social/youtube.png';
import vimeo from '../assets/images/social/vimeo.png';
import tumblr from '../assets/images/social/tumblr.png';
import twitchLogo from '../assets/images/social/twitch.png';
import airbnb from '../assets/images/social/airbnb.png';
import behance from '../assets/images/social/behance.png';
import xing from '../assets/images/social/xing.png';
import dribbble from '../assets/images/social/dribble.png';
import soundcloud from '../assets/images/social/soundcloud.png';


// outline images
import linkedinOutline from '../assets/images/social/linkedin (1).png';
import twitterOutline from '../assets/images/social/twitter (1).png';
import youtubeOutline from '../assets/images/social/youtube (1).png';
import vimeoOutline from '../assets/images/social/vimeo1.png';
import tumblrOutline from '../assets/images/social/tumblr (1).png';
import twitchOutline from '../assets/images/social/twitch (1).png';
import airbnbOutline from '../assets/images/social/airbnb1.png';
import behanceOutline from '../assets/images/social/behance (1).png';
import xingOutline from '../assets/images/social/xing11.png';
import dribbbleOutline from '../assets/images/social/dribbble.png';
import soundcloudOutline from '../assets/images/social/soundcloud (1).png';



import logo from "../assets/icons/new-icons/Icon.svg";
import Button from "../components/Button";

















const SettingsEmail = () => {
    const [showModal, setshowModal] = useState("opacity-0 invisible")

    const [title, settitle] = useState('© Company Name Inc, 2021. All Rights Reserverd');
    const [address, setaddress] = useState('543 Yates Street, Victoria, BC V8W1K8, Canada');

    const [facebookUrl, setfacebookUrl] = useState("https://facebook.com/your-link");
    const [instagramUrl, setinstagramUrl] = useState("https://instagram.com/your-link");


    // socials

const [linkedinUrl, setlinkedinUrl] = useState("https://linkedin.com/your-link");
const [twitterUrl, settwitterUrl] = useState("https://twitter.com/your-link");
const [youtubeUrl, setyoutubeUrl] = useState("https://youtube.com/your-link");
const [vimeoUrl, setvimeoUrl] = useState("https://vimeo.com/your-link");
const [tumblrUrl, settumblrUrl] = useState("https://tumblr.com/your-link");
const [twitchUrl, settwitchUrl] = useState("https://twitch.com/your-link");
const [airbnbUrl, setairbnbUrl] = useState("https://airbnb.com/your-link");
const [behanceUrl, setbehanceUrl] = useState("https://behance.com/your-link");
const [xingUrl, setxingUrl] = useState("https://xing.com/your-link");
const [dribbbleUrl, setdribbbleUrl] = useState("https://dribbble.com/your-link");
const [soundcloudUrl, setsoundcloudUrl] = useState("https://soundcloud.com/your-link");








// toggles
const [facebookToggle, setfacebookToggle] = useState("flex");
const [instagramToggle, setinstagramToggle] = useState("flex")
const [likedinToggle, setlikedinToggle] = useState("hidden");
const [twitterToggle, settwitterToggle] = useState("hidden");
const [youtubeToggle, setyoutubeToggle] = useState("hidden");
const [vimeoToggle, setvimeoToggle] = useState("hidden");
const [tumblrToggle, settumblrToggle] = useState("hidden");
const [twitchToggle, settwitchToggle] = useState("hidden");
const [airbnbToggle, setairbnbToggle] = useState("hidden");
const [behanceToggle, setbehanceToggle] = useState("hidden");
const [xingToggle, setxingToggle] = useState("hidden");
const [dribbbleToggle, setdribbbleToggle] = useState("hidden");
const [soundcloudToggle, setsoundcloudToggle] = useState("hidden");




// upload image
const [selectedImage, setSelectedImage] = useState();
const [yourLogoTextToggle, setyourLogoTextToggle] = useState('flex');



const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
        setyourLogoTextToggle('hidden')
      setSelectedImage(e.target.files[0]);
      
    }
  };









    return (
<div className="px-10">

     <div className="font-bold opacity-80 text-2xl mt-7">Email Setting</div>

     <Link to="/settings" className="flex mt-3 items-center gap-2 opacity-70 cursor-pointer"><svg class="svg-icon" style={{width: "20px"}} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M248.661333 298.666667l108.202667 108.202666L296.533333 467.2 85.333333 256l211.2-211.2 60.330667 60.330667L248.661333 213.333333H554.666667a341.333333 341.333333 0 1 1 0 682.666667H170.666667v-85.333333h384a256 256 0 1 0 0-512H248.661333z"  /></svg> <span className="text-lg">Back</span></Link>       



    <div className="grid email-setting-grid gap-16 mt-14">

     <div className="sss1">
          <div className="px-4 pt-3 pb-3 bg-white shadow-md text-center rounded-xl">
          <div className="bg-gray-100 flex flex-col gap-5 px-7 py-5 rounded-b-lg">
              <div className="py-1 bg-gray-300 w-9/12	 rounded-full"></div>
              <div className="py-1 bg-gray-300 w-7/12	 rounded-full"></div>
              <div className="py-1 bg-gray-300 w-6/12	 rounded-full"></div>
              <div className="py-1 bg-gray-300 w-3/12	 rounded-full"></div>
          </div>


          <div className="mt-10">
          <div className={ ` w-full flex items-center justify-center font-bold mx-auto text-center  ${yourLogoTextToggle}`} >Your Branding</div>

              {selectedImage && (
          <div className="w-full flex items-center justify-center ">
            <img
              src={URL.createObjectURL(selectedImage)}
              className="logo object-cover object-center "
              alt="Thumb"
            />
          
          </div>
        )}

              <div className="flex mb-5 mt-5 justify-center items-center flex-wrap gap-3 ">
                  <a href={facebookUrl} className={`w-12 h-12 items-center bg-gray-200 justify-center rounded-full ${facebookToggle}`}><img src={facebookOutline} alt="logo" className="w-5 "/></a> 
                  <a href={instagramUrl} className={`w-12 h-12 flex items-center bg-gray-200 justify-center rounded-full ${instagramToggle}`}><img src={instagramOutline} alt="logo" className="w-5 "/></a> 
                  <a href={linkedinUrl} className={`w-12 h-12 items-center bg-gray-200 justify-center rounded-full ${likedinToggle}`}><img src={linkedinOutline} alt="logo" className="w-5 "/></a> 
                  <a href={twitterUrl} className={`w-12 h-12 flex items-center bg-gray-200 justify-center rounded-full ${twitterToggle}`}><img src={twitterOutline} alt="logo" className="w-5 "/></a> 
                  <a href={youtubeUrl} className={`w-12 h-12 flex items-center bg-gray-200 justify-center rounded-full ${youtubeToggle}`}><img src={youtubeOutline} alt="logo" className="w-5 "/></a> 
                  <a href={vimeoUrl} className={`w-12 h-12 flex items-center bg-gray-200 justify-center rounded-full ${vimeoToggle}`}><img src={vimeoOutline} alt="logo" className="w-5 "/></a> 
                  <a href={tumblrUrl} className={`w-12 h-12 flex items-center bg-gray-200 justify-center rounded-full ${tumblrToggle}`}><img src={tumblrOutline} alt="logo" className="w-5 "/></a> 
                  <a href={twitchUrl} className={`w-12 h-12 flex items-center bg-gray-200 justify-center rounded-full ${twitchToggle}`}><img src={twitchOutline} alt="logo" className="w-5 "/></a> 
                  <a href={airbnbUrl} className={`w-12 h-12 flex items-center bg-gray-200 justify-center rounded-full ${airbnbToggle}`}><img src={airbnbOutline} alt="logo" className="w-5 "/></a> 
                  <a href={behanceUrl} className={`w-12 h-12 flex items-center bg-gray-200 justify-center rounded-full ${behanceToggle}`}><img src={behanceOutline} alt="logo" className="w-5 "/></a> 
                  <a href={xingUrl} className={`w-12 h-12 flex items-center bg-gray-200 justify-center rounded-full ${xingToggle}`}><img src={xingOutline} alt="logo" className="w-5 "/></a> 
                  <a href={dribbbleUrl} className={`w-12 h-12 flex items-center bg-gray-200 justify-center rounded-full ${dribbbleToggle}`}><img src={dribbbleOutline} alt="logo" className="w-5 "/></a> 
                  <a href={soundcloudUrl} className={`w-12 h-12 flex items-center bg-gray-200 justify-center rounded-full ${soundcloudToggle}`}><img src={soundcloudOutline} alt="logo" className="w-5 "/></a> 

             
             
             
             
             
              </div>
              <div className="font-semibold opacity-80 text-sm">{title}</div>
              <div className="mt-2 opacity-60 text-sm">{address}</div>

            <div className="mt-10"><span className="opacity-60 text-xs">Powerd by</span> <img src={logo} alt="logo" className='w-[15px] inline'/></div>
          </div>
          </div>

          
     </div>



    

    <div className="sss2">
        <div className="w-full">
            
            <div className="flex items-center gap-14 mb-12">
                <div className="h-32 w-72 overflow-hidden flex items-center justify-center font-bold bg-gray-200 rounded-lg text-2xl"><span>YOUR LOGO</span></div>
                <div>
                    <div className="text-xl mb-3">Upload your logo</div>
                    <input type="file" name="uploadLogo" id="uploadLogo" className="hidden" accept="image/*" onChange={imageChange}/>
                    <label htmlFor="uploadLogo" className="text-blue-600 underline cursor-pointer"><Button>Upload</Button></label>
                </div>
            </div>

  
       <label className="mb-1 block opacity-80 ">Company Details</label>
       <input className="border-gray-300  w-full rounded-lg h-12 text-sm mb-4"  type="text" placeholder="Company Details" value={title} onChange={(e) => settitle(e.target.value)}/>


        <label className="mb-1 block opacity-80 ">Address Line</label>
        <input className="border-gray-300  w-full rounded-lg h-12 text-sm mb-4"  type="text" placeholder="Company Details" value={address} onChange={(e) => setaddress(e.target.value)}/>
            

       <div className="socialMainCont flex gap-5 flex-col mt-7">
        <label className="font-bold text-lg mb-3 block">Social Media</label>

        <div className={`items-center gap-5 ${facebookToggle}`}>
            <img src={facebook} className="w-10" alt="logo" />
           <div className="flex items-center gap-3 w-full"><input className="border-gray-300  w-full rounded-lg h-12 text-sm "  type="text" placeholder="Company Details" value={facebookUrl} onChange={(e) => setfacebookUrl(e.target.value)}/><i className="fas fa-times-circle text-xl opacity-70 cursor-pointer" onClick={() => setfacebookToggle('hidden')}></i></div>
        </div>


        <div className={`items-center gap-5 ${instagramToggle}`}>
            <img src={instagram} className="w-10" alt="logo" />
            <div className="flex items-center gap-3 w-full"><input className="border-gray-300  w-full rounded-lg h-12 text-sm "  type="text" placeholder="Company Details" value={instagramUrl} onChange={(e) => setinstagramUrl(e.target.value)}/> <i className="fas fa-times-circle text-xl opacity-70 cursor-pointer" onClick={() => setinstagramToggle('hidden')}></i></div>
        </div>




        <div className={`items-center gap-5 ${likedinToggle}`}>
            <img src={linkedin} className="w-10" alt="logo" />
            <div className="flex items-center gap-3 w-full"><input className="border-gray-300  w-full rounded-lg h-12 text-sm "  type="text" placeholder="Company Details" value={linkedinUrl} onChange={(e) => setlinkedinUrl(e.target.value)}/><i className="fas fa-times-circle text-xl opacity-70 cursor-pointer" onClick={() => setlikedinToggle('hidden')}></i></div>
        </div>




        <div className={`items-center gap-5 ${twitterToggle}`}>
            <img src={twitter} className="w-10" alt="logo" />
            <div className="flex items-center gap-3 w-full"><input className="border-gray-300  w-full rounded-lg h-12 text-sm "  type="text" placeholder="Company Details" value={twitterUrl} onChange={(e) => settwitterUrl(e.target.value)}/><i className="fas fa-times-circle text-xl opacity-70 cursor-pointer" onClick={() => settwitterToggle('hidden')}></i></div>
        </div>


        <div className={`items-center gap-5 ${youtubeToggle}`}>
            <img src={youtube} className="w-10" alt="logo" />
            <div className="flex items-center gap-3 w-full"><input className="border-gray-300  w-full rounded-lg h-12 text-sm "  type="text" placeholder="Company Details" value={youtubeUrl} onChange={(e) => setyoutubeUrl(e.target.value)}/><i className="fas fa-times-circle text-xl opacity-70 cursor-pointer" onClick={() => setyoutubeToggle('hidden')}></i></div>
        </div>



        <div className={`items-center gap-5 ${vimeoToggle}`}>
            <img src={vimeo} className="w-10" alt="logo" />
            <div className="flex items-center gap-3 w-full"><input className="border-gray-300  w-full rounded-lg h-12 text-sm "  type="text" placeholder="Company Details" value={vimeoUrl} onChange={(e) => setvimeoUrl(e.target.value)}/><i className="fas fa-times-circle text-xl opacity-70 cursor-pointer" onClick={() => setvimeoToggle('hidden')}></i></div>
        </div>




        <div className={`items-center gap-5 ${tumblrToggle}`}>
            <img src={tumblr} className="w-10" alt="logo" />
            <div className="flex items-center gap-3 w-full"><input className="border-gray-300  w-full rounded-lg h-12 text-sm "  type="text" placeholder="Company Details" value={tumblrUrl} onChange={(e) => settumblrUrl(e.target.value)}/><i className="fas fa-times-circle text-xl opacity-70 cursor-pointer" onClick={() => settumblrToggle('hidden')}></i></div>
        </div>


        <div className={`items-center gap-5 ${twitchToggle}`}>
            <img src={twitchLogo} className="w-10" alt="logo" />
            <div className="flex items-center gap-3 w-full"><input className="border-gray-300  w-full rounded-lg h-12 text-sm "  type="text" placeholder="Company Details" value={twitchUrl} onChange={(e) => settwitchUrl(e.target.value)}/><i className="fas fa-times-circle text-xl opacity-70 cursor-pointer" onClick={() => settwitchToggle('hidden')}></i></div>
        </div>



        <div className={`items-center gap-5 ${airbnbToggle}`}>
            <img src={airbnb} className="w-10" alt="logo" />
            <div className="flex items-center gap-3 w-full"><input className="border-gray-300  w-full rounded-lg h-12 text-sm "  type="text" placeholder="Company Details" value={airbnbUrl} onChange={(e) => setairbnbUrl(e.target.value)}/><i className="fas fa-times-circle text-xl opacity-70 cursor-pointer" onClick={() => setairbnbToggle('hidden')}></i></div>
        </div>




        <div className={`items-center gap-5 ${behanceToggle}`}>
            <img src={behance} className="w-10" alt="logo" />
            <div className="flex items-center gap-3 w-full"><input className="border-gray-300  w-full rounded-lg h-12 text-sm "  type="text" placeholder="Company Details" value={behanceUrl} onChange={(e) => setbehanceUrl(e.target.value)}/><i className="fas fa-times-circle text-xl opacity-70 cursor-pointer" onClick={() => setbehanceToggle('hidden')}></i></div>
        </div>



        <div className={`items-center gap-5 ${xingToggle}`}>
            <img src={xing} className="w-10" alt="logo" />
            <div className="flex items-center gap-3 w-full"><input className="border-gray-300  w-full rounded-lg h-12 text-sm "  type="text" placeholder="Company Details" value={xingUrl} onChange={(e) => setxingUrl(e.target.value)}/><i className="fas fa-times-circle text-xl opacity-70 cursor-pointer" onClick={() => setxingToggle('hidden')}></i></div>
        </div>


        <div className={`items-center gap-5 ${dribbbleToggle}`}>
            <img src={dribbble} className="w-10" alt="logo" />
            <div className="flex items-center gap-3 w-full"><input className="border-gray-300  w-full rounded-lg h-12 text-sm "  type="text" placeholder="Company Details" value={dribbbleUrl} onChange={(e) => setdribbbleUrl(e.target.value)}/><i className="fas fa-times-circle text-xl opacity-70 cursor-pointer" onClick={() => setdribbbleToggle('hidden')}></i></div>
        </div>



        <div className={`items-center gap-5 ${soundcloudToggle}`}>
            <img src={soundcloud} className="w-10" alt="logo" />
            <div className="flex items-center gap-3 w-full"><input className="border-gray-300  w-full rounded-lg h-12 text-sm "  type="text" placeholder="Company Details" value={soundcloudUrl} onChange={(e) => setsoundcloudUrl(e.target.value)}/><i className="fas fa-times-circle text-xl opacity-70 cursor-pointer" onClick={() => setsoundcloudToggle('hidden')}></i></div>
        </div>










{/* social icons */}
       </div>
       <div className="underline font-bold cursor-pointer opacity-70 mt-7" onClick={() => setshowModal('opacity-100 visible')}>Add More Social Media Icons</div>
       <div className="py-3 px-5 rounded-lg bg-blue-500 text-white w-fit inline-block mb-7 mt-5 cursor-pointer transition-colors hover:bg-blue-700">Save</div>














        </div>
    </div>










    </div>
    <div className={`fixed left-0 top-0  mainFixedOverlay w-screen h-screen flex items-center justify-center ${showModal}`}>
        <div className="blackOverlay absolute left-0 top-0 w-full h-full" onClick={() => setshowModal('opacity-0 invisible')}></div>
        <div className="rounded-lg bg-white whiteBoxSocialMediaIcons py-8 pb-10 px-7 relative z-50">
          <div className="flex items-center justify-between">
              <div className="font-bold opacity-70 text-lg">Add Social Media Icons</div>
              <i class="fal fa-times cursor-pointer text-black opacity-70 text-xl" onClick={() => setshowModal('opacity-0 invisible')}></i>
          </div>

          <div className="grid grid-cols-7 col-gap-14 gap-10 flex-wrap mt-5">
              <img src={facebook} alt="logo" className="w-14 cursor-pointer" onClick={() => setfacebookToggle('flex')}/>
              <img src={instagram} alt="logo" className="w-14 cursor-pointer" onClick={() => setinstagramToggle('flex')}/>
              <img src={linkedin} alt="logo" className="w-14 cursor-pointer" onClick={() => setlikedinToggle('flex')}/>
              <img src={twitter} alt="logo" className="w-14 cursor-pointer" onClick={() => settwitterToggle('flex')}/>
              <img src={youtube} alt="logo" className="w-14 cursor-pointer" onClick={() => setyoutubeToggle('flex')}/>
              <img src={vimeo} alt="logo" className="w-14 cursor-pointer" onClick={() => setvimeoToggle('flex')}/>
              <img src={tumblr} alt="logo" className="w-14 cursor-pointer" onClick={() => settumblrToggle('flex')}/>
              <img src={twitchLogo} alt="logo" className="w-14 cursor-pointer" onClick={() => settwitchToggle('flex')}/>
              <img src={airbnb} alt="logo" className="w-14 cursor-pointer" onClick={() => setairbnbToggle('flex')}/>
              <img src={behance} alt="logo" className="w-14 cursor-pointer" onClick={() => setbehanceToggle('flex')}/>
              <img src={xing} alt="logo" className="w-14 cursor-pointer" onClick={() => setxingToggle('flex')}/>
              <img src={dribbble} alt="logo" className="w-14 cursor-pointer" onClick={() => setdribbbleToggle('flex')}/>
              <img src={soundcloud} alt="logo" className="w-14 cursor-pointer" onClick={() => setsoundcloudToggle('flex')}/>













          </div>









        </div>
    </div>






</div>

    );
};

export default SettingsEmail;
