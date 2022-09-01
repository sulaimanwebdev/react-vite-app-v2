import PageTitle from "../components/PageTitle";
import whatsappICon from "../assets/icons/book-alt.svg";
import msCalendar from "../assets/images/logo/ms-calendar.png";
import googleCalendar from "../assets/images/logo/google-kalendar.png";
import Button from "../components/Button";


const Calendar = () => {
  return (
    <div className="px-24">
           <PageTitle>Calendar</PageTitle>    
           <div className="">
            <h4 className="text-2xl font-semibold mt-24">Connect your Calendar</h4>
            <div className="text-lg">
                  <p>Choose which calendar you want to connect us to. if there are new meetings or other<br /> entries, they will be display in calendar <a href="#" className="text-blue-600" target="_blank" rel="noopener noreferrer"><img src={whatsappICon} alt="icon" className="w-4 inline cursor-pointer" />
                   &nbsp;Learn more about adding a calendar</a>
                  </p>
                </div>
           </div>


{/* cards */}

         
     <div className="grid grid-cols-5 gap-6 mt-8">



          {/* Microsoft calendar */}
          <div className="shadow-lg  border-gray-300 rounded-xl px-5 py-5 text-center">
              <img src={googleCalendar} alt="ms-calendar" className="w-16 inline cursor-pointer" />
                <div className="font-bold text-md mt-3">Google Calendar</div>
                <div className="flex justify-center">
                <Button className="mt-3 w-24">Connect</Button>
                </div>
              </div>


              {/* Microsoft calendar */}
              <div className="shadow-lg  border-gray-300 rounded-xl px-5 py-5 text-center">
              <img src={msCalendar} alt="ms-calendar" className="w-16 inline cursor-pointer" />
                <div className="font-bold text-md mt-3">Microsoft Calendar</div>
                <div className="flex justify-center">
                <Button className="mt-3 w-24">Connect</Button>
                </div>
              </div>


      </div>

</div>
  );
};

export default Calendar;
