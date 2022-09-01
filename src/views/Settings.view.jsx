import PageTitle from "../components/PageTitle";
import SettingsTabs from "../components/SettingsTabs";

const Settings = () => {
  return (
    <div className="px-10">
      <SettingsTabs />


      
      <h3 className="text-3xl font-semibold mt-10 text-gray-800">Welcome, James</h3>


      <div className="card w-full">
              <div className="card-section items-center flex">

                <div className="card-left flex h-12  min-w-0 items-center">
                
                <span className="card-text text-base leading-5 text-gray-800">Your current subscription</span>
                </div>
                <div className="card-right flex ml-auto w-2/5 justify-end">
                 <button className="card-right-margin text-white text-base">View Details<i class="fas fa-arrow-right"></i></button> 
                </div>
              </div>
                <div className="card-header text-lg font-light text-gray-800 mb-5 flex">
                  <h2>Product</h2>
                  <span>PREMIUM</span>
                </div>
                <div className="card-header text-lg font-light text-gray-800 mb-5 flex">
                  <p>Your subscription is active to 30 May 2022, then you can only use the Free plan.</p>
                </div>
               
            </div>
    
    
    
    
    </div>
  );
};

export default Settings;
