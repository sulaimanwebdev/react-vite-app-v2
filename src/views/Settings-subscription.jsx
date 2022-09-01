import Button from "../components/Button";
import SettingsTabs from "../components/SettingsTabs";
import subImg from "../assets/images/sub.jpg";
import billDetails from "../assets/icons/new-icons/bill-details.jpg";
import Check from "../assets/icons/new-icons/check.svg";
import Visa from "../assets/icons/visa-card.svg";
import CalendarIcon from "../assets/icons/calendar.svg";
import { Link } from "react-router-dom";


const SettingsSubscription = () => {
  return (
    <div className="px-20">
      <SettingsTabs />

      <section >
        <h3 className="text-xl font-bold mt-16 text-gray-800">
          Subscription
        </h3>

        <div className="flex justify-center items-center flex-col">
          <img src={subImg} className="w-1/2" alt="" />
          <div className="mb-5 text-2xl">You have no paid plans</div>
          <div>
          <Link to="/setting/paymentcard" className="text-blue-500 hover:bg-blue-400 hover:text-white border border-blue-500 font-semibold block px-10 py-2 rounded-lg disabled:bg-gray-100 disabled:text-gray-300">View Premium and Enterprice features and pricing</Link>
            
          </div>
        </div>
      </section>







      <section>
        <h3 className="text-xl font-bold mt-16 text-gray-800 mb-3">
          Subscription
        </h3>

        <div className="flex justify-between w-11/12 gap-3">
    
          <div className="border border-gray-200 basis-1/3 rounded-lg">

              <div class="relative overflow-hidden rounded-lg shadow-lg cursor-pointer mb-12">
              <img class="object-cover w-full h-58" src={billDetails} alt="Flower and sky"/>

              <div class="absolute bottom-0 left-0 px-6 py-4">
              <h4 class="mb-3 text-xl font-semibold tracking-tight text-white">PREMIUM</h4>
              <p class="leading-normal text-lg text-gray-100">2 Team Members</p>
              </div>
            </div>
            <div className="flex justify-center my-2">
              <Button className="text-gray-700 font-normal border-gray-500" variant="outline">Upgrade Subscription</Button>
            </div>
            <div className="flex justify-center">
              <Button className="text-gray-400 font-normal border-gray-500" variant="outline">Cancel Subscription</Button>
            </div>

          </div>


          <div className="border border-gray-200 basis-1/3 rounded-lg p-8">
          <h3 className="text-lg font-bold text-gray-800 mb-3">What is included</h3>
          <ul>
            <li className="text-gray-600"><img src={Check} className="w-4 inline mb-2 mt-2" alt="" /> 2000 Email per Month/Member</li>
            <li className="text-gray-600"><img src={Check} className="w-4 inline mb-2 mt-2" alt="" /> Unlimited chats</li>
            <li className="text-gray-600"><img src={Check} className="w-4 inline mb-2 mt-2" alt="" /> Analytics</li>
            <li className="text-gray-600"><img src={Check} className="w-4 inline mb-2 mt-2" alt="" /> Customer Details</li>
            <li className="text-gray-600"><img src={Check} className="w-4 inline mb-2 mt-2" alt="" /> Calendar</li>
            <li className="text-gray-600"><img src={Check} className="w-4 inline mb-2 mt-2" alt="" /> Integrate Zapier, Calendly and more</li>
            <li className="text-gray-600"><img src={Check} className="w-4 inline mb-2 mt-2" alt="" /> Install with js, shopify and wordpress <a href="#" className="text-blue-500">3+ show more</a></li>
            <li className="text-gray-600"><img src={Check} className="w-4 inline mb-2 mt-2" alt="" /> Chatbot</li>
            <li className="text-gray-600"><img src={Check} className="w-4 inline mb-2 mt-2" alt="" /> Chatbot Editor</li>
            <li className="text-gray-600"><img src={Check} className="w-4 inline mb-2 mt-2" alt="" /> Chatbot templates</li>
            <li className="text-gray-600"><img src={Check} className="w-4 inline mb-2 mt-2" alt="" /> and more+++</li>
          </ul>
          </div>
          <div className="border border-gray-200 basis-1/3 rounded-lg p-8">
            <div className="flex gap-2">
            <img src={Visa} className="w-12" alt="" />
            <p className="text-gray-600 mt-2">Visa with last digits ******4543</p>
            </div>
            <div className="flex gap-2">
            <img src={CalendarIcon} className="w-10" alt="" />
            <p className="text-gray-600 mt-2">30$ /Month <br/> Next payment on June 30 2022<br />Monthly Subscription</p>
            </div>

            <Button variant="solid" className="mt-4">Edit Payment</Button>
          </div>


        </div>
      
     


      </section>

      <section className="mb-10">
        <h3 className="text-xl font-bold mt-16 text-gray-800 mb-3">
          Subscription
        </h3>

        <div className="flex justify-between w-11/12 gap-3">
    
          <div className="border border-gray-200 basis-1/3 rounded-lg">

              <div class="relative overflow-hidden rounded-lg shadow-lg cursor-pointer mb-12">
              <img class="object-cover w-full h-58" src={billDetails} alt="Flower and sky"/>

              <div class="absolute bottom-0 left-0 px-6 py-4">
              <h4 class="mb-3 text-xl font-semibold tracking-tight text-white">ENTERPRISE</h4>
              <p class="leading-normal text-lg text-gray-100">2 Team Members</p>
              </div>
            </div>
            <div className="flex justify-center my-2">
              <Button className="text-gray-700 font-normal border-gray-500" variant="outline">Upgrade Subscription</Button>
            </div>
            <div className="flex justify-center">
              <Button className="text-gray-400 font-normal border-gray-500" variant="outline">Cancel Subscription</Button>
            </div>

          </div>


          <div className="border border-gray-200 basis-1/3 rounded-lg p-8">
          <h3 className="text-lg font-bold text-gray-800 mb-3">What is included</h3>
          <ul>
            <li className="text-gray-600"><img src={Check} className="w-4 inline mb-2 mt-2" alt="" /> 2000 Email per Month/Member</li>
            <li className="text-gray-600"><img src={Check} className="w-4 inline mb-2 mt-2" alt="" /> Unlimited chats</li>
            <li className="text-gray-600"><img src={Check} className="w-4 inline mb-2 mt-2" alt="" /> Analytics</li>
            <li className="text-gray-600"><img src={Check} className="w-4 inline mb-2 mt-2" alt="" /> Customer Details</li>
            <li className="text-gray-600"><img src={Check} className="w-4 inline mb-2 mt-2" alt="" /> Calendar</li>
            <li className="text-gray-600"><img src={Check} className="w-4 inline mb-2 mt-2" alt="" /> Integrate Zapier, Calendly and more</li>
            <li className="text-gray-600"><img src={Check} className="w-4 inline mb-2 mt-2" alt="" /> Install with js, shopify and wordpress <a href="#" className="text-blue-500">3+ show more</a></li>
            <li className="text-gray-600"><img src={Check} className="w-4 inline mb-2 mt-2" alt="" /> Chatbot</li>
            <li className="text-gray-600"><img src={Check} className="w-4 inline mb-2 mt-2" alt="" /> Chatbot Editor</li>
            <li className="text-gray-600"><img src={Check} className="w-4 inline mb-2 mt-2" alt="" /> Chatbot templates</li>
            <li className="text-gray-600"><img src={Check} className="w-4 inline mb-2 mt-2" alt="" /> and more+++</li>
          </ul>
          </div>
          <div className="border border-gray-200 basis-1/3 rounded-lg p-8">
            <div className="flex gap-2">
            <img src={Visa} className="w-12" alt="" />
            <p className="text-gray-600 mt-2">Visa with last digits ******4543</p>
            </div>
            <div className="flex gap-2">
            <img src={CalendarIcon} className="w-10" alt="" />
            <p className="text-gray-600 mt-2">3000$ /Year <br/> Next payment on June 30 2022<br />Yearly Subscription</p>
            </div>

            <Button variant="solid" className="mt-4">Edit Payment</Button>
          </div>


        </div>
      
     


      </section>































    </div>
  );
};

export default SettingsSubscription;
