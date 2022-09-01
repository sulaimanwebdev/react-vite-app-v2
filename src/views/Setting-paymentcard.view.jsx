
import { Link } from "react-router-dom";
import SettingsTabs from "../components/SettingsTabs";
import PremiumMonthly from '../components/premium-monthly/index';
import EnterpriseMonthly from '../components/exterprise-monthly/index';
import { useState } from "react";

import PremiumYearly from '../components/premium-yearly/index';
import EnterpriseYearly from '../components/exterprise-yearly/index';




const PaymentCard = () => {

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

      setmonthlyPlan("block");
      setyearlyPlan("hidden");

    }
 
   if(toggleMenu == "justify-start"){
      settoggleborder("border-blue-400");
      settoggleBg('bg-blue-400');
      settoggleMenu('justify-end');

      setmonthlyPlan("hidden");
      setyearlyPlan("block");

    }

 
 
  }

  return (
    <div className="px-10">
      <SettingsTabs />

      <section >
      <div className="flex items-center mt-16 mb-20 gap-40 ">
      <h3 className="text-xl font-bold  text-gray-800 ">
        Select your Subscription
        </h3>



        <div className="flex items-center justify-center gap-3">
          <div onClick={toggleFunction} className={`w-14 border-2  rounded-full px-0.5 py-0.5 flex cursor-pointer transition ${toggleMenu} ${toggleborder}`}>
      <div className={`w-6 h-6 rounded-full cursor-pointer transition ${toggleBg}`}></div>
    </div>

    <div className="text-lg  text-gray-700">Annual plan 2 months free</div>



        </div>




      </div>

<div className={monthlyPlan}>
<PremiumMonthly/>

<EnterpriseMonthly/>


</div>



<div className={yearlyPlan}>
  
<PremiumYearly/>

<EnterpriseYearly/>

</div>


      </section>









    </div>
  );
};

export default PaymentCard;
