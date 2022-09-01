import React, {useState} from 'react'
import { Link } from "react-router-dom";

const index = () => {


  
const [price, setprice] = useState("€ 40");




let members = (e) =>{
 if(e.target.value == "02 Team members"){
  setprice("€ 40")
 }


 if(e.target.value == "03 Team members"){
  setprice("€ 60")
 }



 if(e.target.value == "04 Team members"){
  setprice("€ 80")
 }




 if(e.target.value == "05 Team members"){
  setprice("€ 100")
 }



 if(e.target.value == "06 Team members"){
  setprice("€ 120")
 }



 if(e.target.value == "07 Team members"){
  setprice("€ 140")
 }



 if(e.target.value == "08 Team members"){
  setprice("€ 160")
 }



 if(e.target.value == "09 Team members"){
  setprice("€ 180")
 }


 if(e.target.value == "10 Team members"){
  setprice("€ 200")
 }



 
 if(e.target.value == "11 Team members"){
  setprice("€ 220")
 }



 
 if(e.target.value == "12 Team members"){
  setprice("€ 240")
 }



 
 if(e.target.value == "13 Team members"){
  setprice("€ 260")
 }




 
 if(e.target.value == "14 Team members"){
  setprice("€ 280")
 }



 
 if(e.target.value == "15 Team members"){
  setprice("€ 300")
 }


 
 if(e.target.value == "16 Team members"){
  setprice("€ 320")
 }



 
 if(e.target.value == "17 Team members"){
  setprice("€ 340")
 }



 
 if(e.target.value == "18 Team members"){
  setprice("€ 360")
 }





 
 if(e.target.value == "19 Team members"){
  setprice("€ 380")
 }



 if(e.target.value == "20 Team members"){
  setprice("€ 400")
 }




 
 if(e.target.value == "21 Team members"){
  setprice("€ 420")
 }



 
 if(e.target.value == "22 Team members"){
  setprice("€ 440")
 }



 
 if(e.target.value == "23 Team members"){
  setprice("€ 460")
 }




 
 if(e.target.value == "24 Team members"){
  setprice("€ 480")
 }



 
 if(e.target.value == "25 Team members"){
  setprice("€ 500")
 }




 
 if(e.target.value == "26 Team members"){
  setprice("€ 520")
 }




 
 if(e.target.value == "27 Team members"){
  setprice("€ 540")
 }



 
 if(e.target.value == "28 Team members"){
  setprice("€ 560")
 }



 
 if(e.target.value == "29 Team members"){
  setprice("€ 580")
 }


 if(e.target.value == "30 Team members"){
  setprice("€ 600")
 }



 if(e.target.value == "31 Team members"){
  setprice("€ 620")
 }




 
 if(e.target.value == "32 Team members"){
  setprice("€ 640")
 }



 
 if(e.target.value == "33 Team members"){
  setprice("€ 660")
 }



 if(e.target.value == "34 Team members"){
  setprice("€ 680")
 }



 
 if(e.target.value == "35 Team members"){
  setprice("€ 700")
 }



 
 if(e.target.value == "36 Team members"){
  setprice("€ 720")
 }

  
 if(e.target.value == "37 Team members"){
  setprice("€ 740")
 }



  
 if(e.target.value == "38 Team members"){
  setprice("€ 760")
 }



   
 if(e.target.value == "39 Team members"){
  setprice("€ 780")
 }


  
 if(e.target.value == "39 Team members"){
  setprice("€ 800")
 }



 if(e.target.value == "40 Team members"){
  setprice("€ 820")
 }








 
 
}




  return (
    <>

<details class="install22 pb-5 border-b  hover:cursor-pointer">
    <summary className=" paydrop1 flex justify-between items-center text-summary md:text-sm font-normal text-very-dark-grayish-blue hover:text-soft-red" >
    <div className="pay-drop-full">


<div className="pay-drop flex items-center">

<div className="flex flex-col">
<div className="mb-2 pay-drop2">Enterprice</div>
  <select className="py-2 pay-drop-sel border border-gray-200 mr-6 focus:outline-none" onChange={members}>
    <option>02 Team members</option>
    <option>03 Team members</option>
    <option>04 Team members</option>
    <option>05 Team members</option>
    <option>06 Team members</option>
    <option>07 Team members</option>
    <option>08 Team members</option>
    <option>09 Team members</option>
    <option>10 Team members</option>
    <option>11 Team members</option>
    <option>12 Team members</option>
    <option>13 Team members</option>
    <option>14 Team members</option>
    <option>15 Team members</option>
    <option>16 Team members</option>
    <option>17 Team members</option>
    <option>18 Team members</option>
    <option>19 Team members</option>
    <option>20 Team members</option>
    <option>21 Team members</option>
    <option>22 Team members</option>
    <option>23 Team members</option>
    <option>24 Team members</option>
    <option>25 Team members</option>
    <option>26 Team members</option>
    <option>27 Team members</option>
    <option>28 Team members</option>
    <option>29 Team members</option>
    <option>30 Team members</option>
    <option>31 Team members</option>
    <option>32 Team members</option>
    <option>33 Team members</option>
    <option>34 Team members</option>
    <option>35 Team members</option>
    <option>36 Team members</option>
    <option>37 Team members</option>
    <option>38 Team members</option>
    <option>39 Team members</option>
    <option>40 Team members</option>
   </select>
<div className="flex items-center gap-3 font-normal transform translate-y-7">
<span className="text-base">Show the Enterprise features</span>
<svg xmlns="http://www.w3.org/2000/svg" width="14px" viewBox="0 0 384 512"><path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"/></svg>

</div>
   
</div>

   
   <div className="pay-drop-price transform translate-y-3 translate-x-24">
    <div>
    <span className=" text-3xl mr-2">{price}</span>
    <span className="pay-drop-price2">/mo.</span>
    </div>
    <div className="text-base font-normal mt-1">20€ per Seat</div>
</div>
</div>


<div className="">
      <Link to="/setting/paymentcheckout" className="pay-drop-button">Add to Order</Link> 
   </div>
</div>
        </summary>
      <div class="answer-pay">
        <div className="subi bg-white dark:bg-gray-800 px-6 py-8 lg:flex-shrink-1 lg:p-12">
          
          
          <div className="mt-8">
            <div className="flex items-center">
              <h4 className="subi7 flex-shrink-0 pr-4 bg-white dark:bg-gray-800 text-sm leading-5 tracking-wider font-semibold uppercase text-indigo-600">
                What's included
              </h4>
              <div className="flex-1 border-t-2 border-gray-200">
              </div>
            </div>
            <ul className="mt-8 lg:grid lg:grid-cols-2 lg:col-gap-8 lg:row-gap-5">
              

              <li className="flex items-start lg:col-span-1">
                <div className="flex-shrink-0">
                <svg className="h-6 w-6 mr-2"  fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6 text-indigo-800 dark:text-white font-bold">
                  <path d="M5 13l4 4L19 7">
                  </path>
              </svg>
                </div>
                <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                  Unlimited Chats
                </p>
              </li>
              <li className="flex items-start lg:col-span-1">
                <div className="flex-shrink-0">
                <svg className="h-6 w-6 mr-2"  fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6 text-indigo-800 dark:text-white font-bold">
                  <path d="M5 13l4 4L19 7">
                  </path>
              </svg>
                </div>
                <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                  2.000 Email per month
                </p>
              </li>
              <li className="flex items-start lg:col-span-1">
                <div className="flex-shrink-0">
                <svg className="h-6 w-6 mr-2"  fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6 text-indigo-800 dark:text-white font-bold">
                  <path d="M5 13l4 4L19 7">
                  </path>
              </svg>
                </div>
                <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                  Anaylitics
                </p>
              </li>
              <li className="flex items-start lg:col-span-1">
                <div className="flex-shrink-0">
                <svg className="h-6 w-6 mr-2"  fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6 text-indigo-800 dark:text-white font-bold">
                  <path d="M5 13l4 4L19 7">
                  </path>
              </svg>
                </div>
                <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                  Customer Details
                </p>
              </li>
              <li className="flex items-start lg:col-span-1">
                <div className="flex-shrink-0">
                <svg className="h-6 w-6 mr-2"  fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6 text-indigo-800 dark:text-white font-bold">
                  <path d="M5 13l4 4L19 7">
                  </path>
              </svg>
                </div>
                <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                  Advanced Customer Details
                </p>
              </li>
              <li className="flex items-start lg:col-span-1">
                <div className="flex-shrink-0">
                <svg className="h-6 w-6 mr-2"  fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6 text-indigo-800 dark:text-white font-bold">
                  <path d="M5 13l4 4L19 7">
                  </path>
              </svg>
                </div>
                <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                  Calendar
                </p>
              </li>
              
              <li className="flex items-start lg:col-span-1">
                <div className="flex-shrink-0">
                <svg className="h-6 w-6 mr-2"  fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6 text-indigo-800 dark:text-white font-bold">
                  <path d="M5 13l4 4L19 7">
                  </path>
              </svg>
                </div>
                <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                  Integrate Zapier, Calendly and more
                </p>
              </li>
              <li className="flex items-start lg:col-span-1">
                <div className="flex-shrink-0">
                <svg className="h-6 w-6 mr-2"  fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6 text-indigo-800 dark:text-white font-bold">
                  <path d="M5 13l4 4L19 7">
                  </path>
              </svg>
                </div>
                <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                  Install with JS, Shopify and Wordpress
                </p>
              </li>
              <li className="flex items-start lg:col-span-1">
                <div className="flex-shrink-0">
                <svg className="h-6 w-6 mr-2"  fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6 text-indigo-800 dark:text-white font-bold">
                  <path d="M5 13l4 4L19 7">
                  </path>
              </svg>
                </div>
                <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                  Chatbot
                </p>
              </li>
              <li className="flex items-start lg:col-span-1">
                <div className="flex-shrink-0">
                <svg className="h-6 w-6 mr-2"  fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6 text-indigo-800 dark:text-white font-bold">
                  <path d="M5 13l4 4L19 7">
                  </path>
              </svg>
                </div>
                <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                  Chatbot Editor
                </p>
              </li>
              <li className="flex items-start lg:col-span-1">
                <div className="flex-shrink-0">
                <svg className="h-6 w-6 mr-2" width={6} height={6} fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6 text-indigo-800 dark:text-white font-bold">
                  <path d="M5 13l4 4L19 7">
                  </path>
              </svg>
                </div>
                <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                  Chatbot Templates
                </p>
              </li>
              <li className="flex items-start lg:col-span-1">
                <div className="flex-shrink-0">
                <svg className="h-6 w-6 mr-2" width={6} height={6} fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6 text-indigo-800 dark:text-white font-bold">
                  <path d="M5 13l4 4L19 7">
                  </path>
              </svg>
                </div>
                <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                  Remove Branding
                </p>
              </li>
              <li className="flex items-start lg:col-span-1">
                <div className="flex-shrink-0">
                <svg className="h-6 w-6 mr-2" width={6} height={6} fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6 text-indigo-800 dark:text-white font-bold">
                  <path d="M5 13l4 4L19 7">
                  </path>
              </svg>
                </div>
                <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                  Banner champaign
                </p>
              </li>
              <li className="flex items-start lg:col-span-1">
                <div className="flex-shrink-0">
                <svg className="h-6 w-6 mr-2" width={6} height={6} fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6 text-indigo-800 dark:text-white font-bold">
                  <path d="M5 13l4 4L19 7">
                  </path>
              </svg>
                </div>
                <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                  Banner champaign Editor
                </p>
              </li>
              <li className="flex items-start lg:col-span-1">
                <div className="flex-shrink-0">
                <svg className="h-6 w-6 mr-2" width={6} height={6} fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6 text-indigo-800 dark:text-white font-bold">
                  <path d="M5 13l4 4L19 7">
                  </path>
              </svg>
                </div>
                <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                  Banner champaign Templates
                </p>
              </li>
              <li className="flex items-start lg:col-span-1">
                <div className="flex-shrink-0">
                <svg className="h-6 w-6 mr-2" width={6} height={6} fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6 text-indigo-800 dark:text-white font-bold">
                  <path d="M5 13l4 4L19 7">
                  </path>
              </svg>
                </div>
                <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                  Chat champaign 
                </p>
              </li>
              <li className="flex items-start lg:col-span-1">
                <div className="flex-shrink-0">
                <svg className="h-6 w-6 mr-2" width={6} height={6} fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6 text-indigo-800 dark:text-white font-bold">
                  <path d="M5 13l4 4L19 7">
                  </path>
              </svg>
                </div>
                <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                  Chat champaign Editor
                </p>
              </li>
              <li className="flex items-start lg:col-span-1">
                <div className="flex-shrink-0">
                <svg className="h-6 w-6 mr-2" width={6} height={6} fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6 text-indigo-800 dark:text-white font-bold">
                  <path d="M5 13l4 4L19 7">
                  </path>
              </svg>
                </div>
                <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                  Chat champaign Templates
                </p>
              </li>
              
            </ul>
          </div>
          
           
          
          
        </div>
      </div>
    </details>
    </>
  )
}

export default index