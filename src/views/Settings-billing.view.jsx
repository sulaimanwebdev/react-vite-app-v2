
import SettingsTabs from "../components/SettingsTabs";
import Button from "../components/Button";
import Input from "../components/Input";
import BillingMethod from "../components/BillingMethod";
import React, { useState } from "react";

import PaymentStrip from "../assets/images/payment-strip.png"
import ApplePay from "../assets/icons/apple.svg"
import Paypal from "../assets/icons/paypal-logo.png"
import Google from "../assets/icons/google-logo.png"


const contacts = [
  {
    cardNumber: "Visa xxxx 1234",
    expires: "22/24",
  }
];


const BillingInformation = () => {

  const [showModal, setshowModal] = useState("opacity-0 invisible");

  let modalFunction = () =>{
    setshowModal("opacity-100 visible")
  }
  const [selected, setSelected] = useState("");


  return (
    <div className="px-10">
      <SettingsTabs />

      <h1 className="text-xl font-semibold mt-14">Billing Information</h1>

      <h3 className="text-lg mt-10 mb-2">Your Card</h3>

      <BillingMethod data={contacts} />


      <div onClick={modalFunction} className="flex cursor-pointer mt-8  items-center gap-3 font-normal ">
<button className="text-white bg-blue-600 hover:opacity-70 font-normal block px-10 py-2 rounded-full">Add Billing Method</button>
</div>


{/* POPUP */}


<div className={`fixed top-0 transition mainFixedOverlay w-screen h-screen flex items-center justify-center ${showModal}`}>

<div className="blackOverlay absolute left-0 top-0 w-full h-full" onClick={() => setshowModal('opacity-0 invisible')}></div>

<div className="rounded-lg bg-white whiteBoxSocialMediaIcons py-8 pb-10 px-7 relative z-50">
<div className="flex items-center justify-between">
              <div className="font-bold opacity-70 text-xl">Add Billing Method</div>
              <i class="fal fa-times cursor-pointer text-black opacity-70 text-xl" onClick={() => setshowModal('opacity-0 invisible')}></i>
</div>

<div className="w-1/2"> 
  <img src={PaymentStrip} className="" alt="" />
  </div>

  {/* fields  */}

<div className="flex gap-5">
  <Input placeholder="First Name"/>
  <Input placeholder="Last Name"/>
</div>

<div className="my-3">
  <Input placeholder="Crad Number"/>
</div>

<div className="my-3">
  <Input placeholder="Crad Number"/>
</div>

<div>
  <Button className="w-full bg-cyan-900">Add the Payment Method</Button>
</div>

<div class="relative flex py-5 items-center">
    <div class="flex-grow border-t border-gray-400"></div>
    <span class="flex-shrink mx-4 text-gray-400">OR</span>
    <div class="flex-grow border-t border-gray-400"></div>
</div>


<div className="my-3">
  <Button className="w-full bg-yellow-500"><img src={Paypal} className="w-6" alt="" /><span className="font-bold mt-1 text-black">PayPal</span></Button>
</div>
<div className="my-3">
  <Button className="w-full bg-gray-900"><img src={ApplePay} className="w-6" alt="" /><span className="font-bold mt-1">Pay</span></Button>
</div>
<div className="my-3">
  <Button className="w-full bg-gray-900"><img src={Google} className="w-7" alt="" /><span className="font-bold mt-t-1">Pay</span></Button>
</div>




</div>
   </div>
 </div>



  );
};

export default BillingInformation;
