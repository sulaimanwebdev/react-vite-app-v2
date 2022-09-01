import ChatInbox from "../components/ChatInbox";
import { CgMoreVerticalAlt, CgTrash, CgUser } from "react-icons/cg";
import { FiStar } from "react-icons/fi";
import AboutChatDrawer from "../components/AboutChat";
import { CgSmile, CgInfo } from "react-icons/cg";
import { GrAttachment } from "react-icons/gr";
import { FiSend, FiMessageSquare, FiMail } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTag, AiOutlineTwitter } from "react-icons/ai";
import whatsappICon from "../assets/images/logo/whatsapp.png";
import mailchimpIcon from "../assets/images/logo/mailchimp.png";
import stripeIcon from "../assets/images/logo/stripe.png";
import googlemeetIcon from "../assets/images/logo/google-meet.png";
import zoomIcon from "../assets/images/logo/zoom.png";
import calendlyIcon from "../assets/images/logo/calendly.png";
import pipedriveIcon from "../assets/images/logo/pipedrive.png";
import hubspotIcon from "../assets/images/logo/hubspot.png";
import shopifyIcon from "../assets/images/logo/shopify.png";

import logo from "../assets/icons/new-icons/Icon.svg";



import Button from "../components/Button";

import Dropdown from "../components/Dropdown"



import { useDisclousure } from "../utils/hooks/useDisclousure";
import ChatTabs from "../components/ChatTabs";
import { useState } from "react";
import Chat from "../components/Chat";

import FacebookChat from '../components/FacebookChat/index';
import TwitterChat from '../components/TwitterChat/index';
import WhatsappChat from "../components/WhatsappChat";
import MailchimpChat from "../components/MailchimpChat";
import StripeChat from "../components/StripeChat";
import GooglemeetChat from "../components/GooglemeetChat";
import ZoomChat from "../components/ZoomChat";
import CalendlyChat from "../components/CalendlyChat";
import PipedriveChat from '../components/PipedriveChat.jsx';
import HubspotChat from "../components/HubspotChat";
import ShopifyChat from "../components/ShopifyChat";
import NormalChat from "../components/NormalChat";



const messages = [
  {
    date: "Yesterday",
    messages: [
      {
        user: "example@beispiel.com",
        message: "Hello",
        time: "09:42",
        side: "left",
      },
      {
        user: "Mike",
        message: "How I Can help you?",
        time: "09:37",
        side: "right",
      },
      {
        user: "example@beispiel.com",
        message: "Where I can found the FAQ?",
        time: "09:42",
        side: "left",
      },
      {
        user: "Mike",
        message: "Go to the Landingpage, loren Input placeholder",
        time: "09:37",
        side: "right",
      },
     
    ],
  },
];

const ChatView = () => {



    const [category, setcategory] = useState('')

    const [toggle, settoggle] = useState('')




  const [inboxTab, setInboxTab] = useState("Alle");


  const [selectMessages, setselectMessages] = useState('hidden');

  const [showModal, setshowModal] = useState("opacity-0 invisible")



  return (
    <>
    <div className="flex h-screen overflow-hidden">
      <section className="w-96 border-r border-blue-50 pt-4 flex-shrink-0">
        <div className="px-8">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold ">Inbox</h2>
          
            <p className="text-sm">All conversation</p>
          </div>
          <input
            type="text"
            placeholder="Search"
            className="w-full py-2 text-sm rounded-xl mt-4 border-gray-200 mb-14"
          />
        </div>
        <div className="flex border-b border-blue-50 pb-2 px-8 gap-4">
          <ChatTabs
            isActive={inboxTab === "Alle"}
            onClick={() => setInboxTab("Alle")}
          >
            Alle
          </ChatTabs>
          <ChatTabs
            isActive={inboxTab === "Ungelesen"}
            onClick={() => setInboxTab("Ungelesen")}
            amount={3}
          >
            Ungelesen
          </ChatTabs>
          <ChatTabs
            isActive={inboxTab === "Markiert"}
            onClick={() => setInboxTab("Markiert")}
          >
            Markiert
          </ChatTabs>
        </div>
        <ChatInbox
          name="example@beispiel.com"
          lastMessage="Thank you"
          lastMessageDate="1m"
          numberOfMessages="2"
          active
          marked
        />

        <ChatInbox
          name="martin@beispiel.com"
          lastMessage="Where I can found the..."
          lastMessageDate="1m"
          numberOfMessages="1"
          marked
        />

        <ChatInbox
          name="jhon@beispiel.com"
          lastMessage="Where I can found the..."
          lastMessageDate="1m"
        />

        <ChatInbox
          name="michael@beispiel.com"
          lastMessage="Hello, where are you?"
          lastMessageDate="1m"
        />
      </section>

      <section className="w-full px-10 pb-20 h-screen overflow-hidden  flex flex-col">
        <div className="flex justify-end gap-3 py-8">
        <img src={shopifyIcon} alt="icon" className="w-7 cursor-pointer " onClick={()=> setcategory('shopify')} />
        <img src={hubspotIcon} alt="icon" className="w-7 cursor-pointer ml-3" onClick={()=> setcategory('hubspot')} />
        <img src={pipedriveIcon} alt="icon" className="w-7 cursor-pointer ml-3" onClick={()=> setcategory('pipedrive')} />
        <img src={calendlyIcon} alt="icon" className="w-7 cursor-pointer ml-3" onClick={()=> setcategory('calendly')} />
        <img src={zoomIcon} alt="icon" className="w-7 cursor-pointer ml-3" onClick={()=> setcategory('zoom')} />
        <img src={googlemeetIcon} alt="icon" className="w-7 cursor-pointer ml-3" onClick={()=> setcategory('googlemeet')} />
        <img src={stripeIcon} alt="icon" className="w-7 cursor-pointer ml-3" onClick={()=> setcategory('stripe')} />
        <img src={mailchimpIcon} alt="icon" className="w-7 cursor-pointer ml-3" onClick={()=> setcategory('mailchimp')} />
          <FiStar className="text-2xl opacity-30 cursor-pointer hover:opacity-100" />
          <CgUser className="text-2xl opacity-30 cursor-pointer hover:opacity-100" />
          <CgTrash className="text-2xl opacity-30 cursor-pointer hover:opacity-100" />
          <CgMoreVerticalAlt
            className="text-2xl opacity-30 cursor-pointer hover:opacity-100"
            onClick={()=> setcategory('normalChat')}
          />
        </div>

        <Chat 
        messages={messages}
        categoryValue={category}
        
        
        />
        

        <div className="flex items-center gap-2 absolute bottom-6 transform translate-x-28 ml-6" >
            <div className="opacity-50">Reply</div>
            <FiMessageSquare className="text-lg text-blue-500 cursor-pointer" onClick={() => setselectMessages('block')} />
            <FiMail className="text-lg opacity-50 hover:opacity-100 cursor-pointer" onClick={()=> setshowModal('opacity-100 visible')} />
            {/* <FaFacebookF className="text-lg opacity-50 hover:opacity-100 cursor-pointer" onClick={()=> setcategory('facebook')}  />
            <AiOutlineTwitter className="text-2xl opacity-50 hover:opacity-100 cursor-pointer"   onClick={()=> setcategory('twitter')}/>
            <img src={whatsappICon} alt="icon" className="w-7 cursor-pointer" onClick={()=> setcategory('whatsapp')} /> */}
  
          </div>
         


          














          <div className={ `w-full bg-white sticky bottom-6 border-b-2 left-0 z-20 border-t-2 ${selectMessages}`}>
	<div className="flex items-center justify-between px-4 py-4">
		<div className='font-bold text-xl opacity-80'>Gespeicherte Nachrichten</div> <i class="fal fa-times cursor-pointer text-black opacity-70 text-2xl" onClick={()=> setselectMessages('hidden')}></i> </div>
	<div className=" w-full h-48 overflow-y-scroll px-4 ">
		<p className='opacity-80 mb-5 cursor-pointer'>Hello there, What can we help you?</p>
		<p className='opacity-80 mb-5 cursor-pointer'>Hi,let me check your message</p>
		<p className='opacity-80 mb-5 cursor-pointer'>Hi,let me check your message</p>
		<p className='opacity-80 mb-5 cursor-pointer'>Can we send your email?</p>
		<p className='opacity-80 mb-5 cursor-pointer'>Hello there, What can we help you?</p>
		<p className='opacity-80 mb-5 cursor-pointer'>Hi,let me check your message</p>
		<p className='opacity-80 mb-5 cursor-pointer'>Hi,let me check your message</p>
		<p className='opacity-80 mb-5 cursor-pointer'>Can we send your email?</p>
		<p className='opacity-80 mb-5 cursor-pointer'>Hello there, What can we help you?</p>
	</div>
</div>











        
      </section>

     
    <FacebookChat category={category} setcategory={setcategory} />

    <TwitterChat category={category} setcategory={setcategory}  />

    <WhatsappChat category={category} setcategory={setcategory}  />

    <MailchimpChat category={category} setcategory={setcategory}  />

    <StripeChat category={category} setcategory={setcategory}  />
    
    <GooglemeetChat category={category} setcategory={setcategory}  />

    <ZoomChat category={category} setcategory={setcategory}  />

    <CalendlyChat category={category} setcategory={setcategory}  />

    <PipedriveChat category={category} setcategory={setcategory}  />

    <HubspotChat category={category} setcategory={setcategory}  />

    <ShopifyChat category={category} setcategory={setcategory}  />

    <NormalChat category={category} setcategory={setcategory}  />

























      
    </div>




    <div className={`fixed left-0 top-0  mainFixedOverlay w-screen h-screen flex items-center justify-center ${showModal}`}>
        <div className="blackOverlay absolute left-0 top-0 w-full h-full" onClick={() => setshowModal('opacity-0 invisible')}></div>
        <div className="rounded-lg bg-white ChatWhiteBox py-5 pb-6 px-7 relative z-50">
          <div className="flex items-center justify-between">
              <div className="font-bold opacity-80 text-xl">Send Email</div>
              <i class="fal fa-times cursor-pointer text-black opacity-70 text-2xl" onClick={() => setshowModal('opacity-0 invisible')}></i>
          </div>

          <div className=" mt-5">
             
          <div className="font-bold opacity-80 text-lg">Subject</div>
          <input type="text" className='border-b-2 border-l-0 border-r-0 border-t-0 outline-0 mt-2 w-full' placeholder="New Email Header" />



            <div className="flex items-center mt-5">
            <i class="fas fa-bold cursor-pointer text-xl opacity-60 hover:opacity-80 transition mr-4"></i>
            <i class="fas fa-italic cursor-pointer text-xl opacity-60 hover:opacity-80 transition mr-4"></i>
            <i class="fas fa-underline cursor-pointer text-xl opacity-60 hover:opacity-80 transition mr-3 pr-3 border-r-2 border-gray-600"></i>
            <i class="far fa-align-left cursor-pointer text-xl opacity-60 hover:opacity-80 transition  mr-3 pr-3 border-r-2 border-gray-600"></i>
            <i class="far fa-image cursor-pointer text-xl opacity-60 hover:opacity-80 transition mr-4"></i>
            <i class="far fa-link cursor-pointer text-xl opacity-60 hover:opacity-80 transition  mr-3 pr-3 border-r-2 border-gray-600"></i>
            <i class="far fa-hashtag cursor-pointer text-xl opacity-60 hover:opacity-80 transition"></i>
            <span className="text-gray-500 ml-3">{`{...}`}</span>
            </div>


            <textarea className='bg-gray-200 border-none mt-3 w-full h-36 resize-none' placeholder='Type your Message'></textarea>


          <div className="text-center max-w-md mx-auto">


                  <div className="flex gap-2 justify-center items-center text-2xl font-bold mt-5 ">
                   <div><img className="w-6" src={logo} alt="" /></div>
                    <div>FOURCHAT</div>
                  </div>





                  <div className='mt-2'><i class="far fa-copyright opacity-70"></i> <span className='font-semibold opacity-70'>Company Name Inc. 2022, All Rights reserved.</span></div>
                  <div className="opacity-70 mt-1">543 Yates Street, Victoria, BC V8W1K8, Canada</div>
                  <div className='text-sm mt-2'><span className='opacity-70'>Powered by</span>
                   <img className="w-3 ml-2 inline" src={logo} alt="" />
                  <span class="font-bold text-sm ml-1">FOURCHAT</span>
                  </div>
                    


                    <div className="flex items-center justify-center gap-6 mt-10">
<Button className="" variant="solid">Senden</Button>
                    <button className=" px-1  text-gray-400 font-bold  transition-colors border-b-2 border-gray-400 hover:text-gray-500 hover:border-gray-500">Zuruck</button>

                    </div>
          </div>







          </div>









        </div>
    </div>



</>
  );
};

export default ChatView;