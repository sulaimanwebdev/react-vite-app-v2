
import Button from "../Button";
import Visa from "../../assets/icons/visa-card.svg";



const BillingMethod = ({ data }) => {


  return (
    <>
    <div>
   
        {data.map((row) => (
     <div className="flex justify-between my-4 w-11/12 border border-gray-300 rounded-lg py-2 px-4">
     <div className="flex gap-5">
     <img src={Visa} className="w-14" alt="" />
     <p className="text-gray-500 text-lg mt-2">{row.cardNumber}</p>
     <p className="text-gray-500 mt-2 text-lg">{row.expires}</p>
     </div>
     <Button>Edit</Button>
   </div>
))}
      
    </div>



</>
  );
};

export default BillingMethod;
