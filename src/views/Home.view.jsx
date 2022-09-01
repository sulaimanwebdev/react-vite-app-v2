import Toggle from "../components/Toggle";
import PageTitle from "../components/PageTitle";


import Mike from "../assets/images/mike.jpg";
import Bill from "../assets/images/bill.jpg";
import manPh from "../assets/images/manPh.jpg";
import playButton from "../assets/images/playButton.png";
import appStore from "../assets/images/appstore.jpg";

import externalLink from "../assets/icons/extLink.svg";

// import the component
import ReactSpeedometer from "react-d3-speedometer"



const Home = () => {

  // document.body.classList.add("hello")

   return (
     
  
       

   <div className="flex min-h-full bg-gray-100">
    <div className="basis-2/3 bg-white rounded-tr-3xl pl-14">
    <PageTitle>Dashboard</PageTitle>   
    <div className="text-2xl font-semibold mt-10 mb-10">Hello Mike</div>


    <div className="grid grid-cols-4">

      <div>
        <div className="text-lg font-semibold">New Conversations</div>
        <div  className="text-3xl font-bold mt-4">283  <img src={externalLink} alt="icon" className="w-5 ml-2 mb-2 cursor-pointer inline" /></div>
      </div>

      <div>
        <div className="text-lg font-semibold">New Leads</div>
        <div  className="text-3xl font-bold mt-4">283  <img src={externalLink} alt="icon" className="w-5 ml-2 mb-2 cursor-pointer inline" /></div>
      </div>

      <div>
        <div className="text-lg font-semibold">Visitor to your page</div>
        <div  className="text-3xl font-bold mt-4">283  <img src={externalLink} alt="icon" className="w-5 ml-2 mb-2 cursor-pointer inline" /></div>
      </div>

      <div>
        <div className="text-lg font-semibold">More Conversations</div>
        <div style={{
            width: "150px",
            height: "70px",
            background: "#EFEFEF"
          }}>
            <ReactSpeedometer
              fluidWidth={true}
              minValue={1}
              maxValue={10}
              value={4}
              needleColor="steelblue"
            />
          </div>
      </div>
      </div>


      <div className="grid grid-cols-2 inline-block h-80 content-end">

        <div>
        <div className="text-xl font-semibold text-blue-600">News <img src={externalLink} alt="icon" className="w-5 ml-2 mb-2 cursor-pointer inline" /></div>
        <p className="text-md">Read all product and feature News</p>
        </div>

        <div>
        <div className="text-xl font-semibold text-blue-600">News <img src={externalLink} alt="icon" className="w-5 ml-2 mb-2 cursor-pointer inline" /></div>
        <p className="text-md">Read all product and feature News</p>
        </div>

        <div>
        <div className="text-xl font-semibold text-blue-600 mt-5">News <img src={externalLink} alt="icon" className="w-5 ml-2 mb-2 cursor-pointer inline" /></div>
        <p className="text-md">Read all product and feature News</p>
        </div>


      </div>


    </div>


    <div className="basis-1/3 pl-12 pt-12">
      <div className="grid grid-cols-2">
        <div className="text-lg font-semibold">Switch to dark theme</div>
        <Toggle bg="bg-blue-700" border="border-blue-700" value="justify-end"  />
      </div>

      <div className="text-lg font-semibold mt-10 mb-3">Your Subscription</div>

      <div className="text-3xl font-semibold">Premium</div>
      <div className="text-xl font-semibold">7 team members</div>
      <div>
          <img src={Bill} alt="Bill"  className='w-8 h-8 rounded-full inline mr-1'/>
          <img src={Mike} alt="Bill"  className='w-8 h-8 rounded-full inline mr-1'/>
          <img src={Bill} alt="Bill"  className='w-8 h-8 rounded-full inline mr-1'/>
          <img src={Mike} alt="Bill"  className='w-8 h-8 rounded-full inline mr-1'/>
      </div>

      <div className=" font-semibold mt-4">Subscription information</div>
      <div className="text-gray-500">Next payemnt on june 2022</div>

      <div class="relative overflow-hidden rounded-lg shadow-lg cursor-pointer w-1/2 mt-10">
	<img class="object-cover height-44 w-full" src={manPh} alt="Flower and sky"/>

	<div class="absolute top-0 left-0 px-6 py-4">
	  <h4 class="mb-3 text-2xl font-semibold text-black">Download the App today!</h4>
	</div>
  <div className="absolute bottom-2 right-2">
    <img class="w-24 mb-2" src={playButton} alt="App Store"/>
    <img class="w-24" src={appStore} alt="Play store"/>
    </div>
  </div>
    </div>



   </div>

       

  
 )
}





export default Home
