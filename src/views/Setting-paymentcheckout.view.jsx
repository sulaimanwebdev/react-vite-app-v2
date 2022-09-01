
import { Link } from "react-router-dom";
import { useState } from "react";
import PaypalLogo from '../assets/icons/paypal-logo.png';
import apple from '../assets/icons/apple.svg';
import googleLogo from '../assets/icons/google-logo.png';



const PaymentCheckout = () => {


  const [toggleborder, settoggleborder] = useState("border-gray-400");
  const [toggleBg, settoggleBg] = useState("bg-gray-400");
  const [toggleMenu, settoggleMenu] = useState("justify-start");



  const [monthlyPlan, setmonthlyPlan] = useState("block");
  const [yearlyPlan, setyearlyPlan] = useState("hidden");


   

  let toggleFunction = () =>{
    if(toggleMenu == "justify-end"){
      settoggleborder("border-gray-400");
      settoggleBg('bg-gray-400');
      settoggleMenu('justify-start');

    }
 
   if(toggleMenu == "justify-start"){
      settoggleborder("border-blue-400");
      settoggleBg('bg-blue-400');
      settoggleMenu('justify-end');


    }

 
 
  }


  return (
    <div className="px-10">
      

      <section >
        <h3 className="text-xl font-bold mt-16 text-gray-800 mb-10">
        Checkout
        </h3>
</section>
        <section>
        <div className="relative ">
        <div className="pricing-box max-w-lg mx-auto rounded-lg   lg:max-w-none lg:flex">
          <div className="subi bg-white dark:bg-gray-800 px-6 lg:flex-shrink-1 lg:p-12">
            
            
            <div>
              
              
            <div className="price-price">
            <div className="pb-10">
            <p classname="mb-10 italic">If you have a promo code, please enter it in the box below</p>
            <div className="justify-center mt-5">
              <form action="" method="POST">
                  <div className="flex items-center w-full h-13 pl-3 bg-white bg-gray-100 border rounded-full">
                    <input type="coupon" name="code" id="coupon" placeholder="Apply coupon" value="90off"
                            className="w-full bg-gray-100 outline-none appearance-none focus:outline-none active:outline-none"/>
                      <button type="submit" class="text-sm flex items-center px-3 py-1 text-white bg-gray-800 rounded-full outline-none md:px-4 hover:bg-gray-700 focus:outline-none active:outline-none">
                        <svg aria-hidden="true" data-prefix="fas" data-icon="gift" class="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm256 32h160c17.7 0 32-14.3 32-32V320H288v160zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40z"/></svg>
                        <span className="font-medium">Apply Promo</span>
                      </button>
                  </div>
              </form>
            </div>
          </div>
  
  <div className="text2">
    <p className="noooo3"  style={{fontWeight: '700'}}>
    Card Payment Details
    </p>
   


<div className="rounded-md border-gray-300 h-12 overflow-hidden w-full border-2 card-details-grid grid">

<input type="number" placeholder="Card number" className="h-full border-none rounded-md text-black focus:outline-none focus:border-none focus:ring-0" />

<input type="number" placeholder="MM/YY" className="h-full border-none rounded-md text-black focus:outline-none focus:border-none focus:ring-0" />

<input type="number" placeholder="CVC" className="h-full border-none rounded-md text-black focus:outline-none focus:border-none focus:ring-0" />




</div>






  </div>
  <div className="text2 mt-10">
    <div className="checkout-pp-promo3 flex mb-5">
                <div className="checkout-pp33">
                <span>Billing Details </span>
                </div>
                <span className="checkout-pp43">Edit</span>
            </div>
      <div>
    <span className="check-details">Mike Miller</span>
    <br></br>
    <span className="check-details">543 Yates Street</span>
    <br></br>
    <span className="check-details">30420 Victoria</span>
    <br></br>
    <span className="check-details">Canada</span>
    
        
        
      </div>
    </div>
    
  </div>


              
            </div>
          </div>
          <div className="pay-subi2 py-8 px-6 bg-gray-50 dark:bg-gray-700 lg:flex-shrink-0 lg:flex lg:flex-col lg:p-12">
            <div className="flex items-center mb-5 justify-between">
            <span className="text-xl font-bold">
              Premium
            </span>

            <div className="flex items-center justify-center gap-3">
          <div onClick={toggleFunction} className={`w-12 border-2  rounded-full px-0.5 py-0.5 flex cursor-pointer transition ${toggleMenu} ${toggleborder}`}>
      <div className={`w-5 h-5 rounded-full cursor-pointer transition ${toggleBg}`}></div>
    </div>

    <div className="text-base  text-gray-700">Annual plan 2 months free</div>



        </div>

            </div>
           
            <div className="border-t-2 border-gray-200"></div>
            <div className="subi1">
            <div className="subi4 mb-14 mt-5">
              <span>Subscription</span>
              </div>
            </div>
            <div className="checkout-pp-promo flex mb-3">
                <span className="checkout-pp3">Yearly</span>
                <span className="checkout-pp4">€ 300</span>
            </div>
            <div className="checkout-pp-promo flex mb-5">
                <div className="checkout-pp3">
                <span>Promo Code </span>
                </div>
                <span className="checkout-pp4">€ 270</span>
            </div>
            <div className="border-t-2 border-gray-200"></div>
            
            <div className="checkout-pp-promo flex mb-5 mt-5">
              <span className="checkout-pp3">TOTAL (incl. Tax)</span>
              <span className="checkout-pp4">€ 270</span>
              </div>
              <div className="mt-6">
                <button className=" mb-5 fGBCqm1 eKtyxp1">Buy now</button>


                <div className="grid Orgrid my-2">
                  <div className="bg-gray-400 linesOr"></div>
                  <div className="bg-[#f3f3f3] mx-auto actualOr">Or</div>
                  <div className="bg-gray-400 linesOr"></div>

                </div>


                <button className="form-group-bottom fGBCqm1 eKtyxp">
                    <img src={PaypalLogo} alt="PayPal" />
                    <span className="font-bold opacity-80 ml-2">Paypal</span>
                </button>

                <button className="bg-gray-900 rounded mb-3 mt-1 px-[20px] py-4 text-white flex items-center justify-center w-full">
                    <span className="font-bold  flex items-center gap-2">Buy with <img src={apple} className="w-4 apple-logo" alt="apple" /> Pay</span>
                </button>


                <button className="bg-gray-900 mt-1 rounded  px-[20px] py-3 text-white flex items-center justify-center w-full">
                    <span className="font-bold  flex items-center gap-2">Buy with <img src={googleLogo} className="w-7 apple-logo" alt="apple" /> Pay</span>
                </button>



                
            </div>
            </div>
            
            
          </div>
        </div>
     




       </section>









    </div>
  );
};

export default PaymentCheckout;
