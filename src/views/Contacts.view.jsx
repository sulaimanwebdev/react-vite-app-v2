import PageTitle from "../components/PageTitle";
import { CgTrashEmpty } from "react-icons/cg";
import Button from "../components/Button";
import ContactTable from "../components/ContactTable";
import {useState} from 'react'


const contacts = [
  {
    name: "Michael Miller",
    email: "m.miller@example.com",
    newsletter: "Subscription",
    browser: "Chrome 91, OS X",
    country: "France",
    phone: null,
    language: "german",
    company: null,
    companySize: null,
  },
  {
    name: "Michael Miller",
    email: "m.miller@example.com",
    newsletter: "Subscription",
    browser: "Chrome 91, OS X",
    country: "France",
    phone: null,
    language: "german",
    company: null,
    companySize: null,
  },
  {
    name: "Michl Miller",
    email: "m.miller@example.com",
    newsletter: "Subscription",
    browser: "Chrome 91, OS X",
    country: "France",
    phone: null,
    language: "german",
    company: null,
    companySize: null,
  },
  {
    name: "Michael Miller",
    email: "m.miller@example.com",
    newsletter: "Subscription",
    browser: "Chrome 91, OS X",
    country: "France",
    phone: null,
    language: "german",
    company: null,
    companySize: null,
  },
];

const Contacts = () => {

  const [dropDown, setdropDown] = useState("hidden")
  return (
    <>
    <div className="w-full">
      <div className="px-10">
        <PageTitle>Contacts</PageTitle>

        <div className="mt-6 flex justify-between w-full">
          <div className=" flex gap-14">
            <input
              className={`border border-gray-200 rounded-2xl py-2 text-sm pl-6 pr-4 w-96`}
              placeholder="Search"
            />

            <div className="flex gap-5">
              <Button variant="ghost">
                <CgTrashEmpty /> Export
              </Button>
              <Button variant="ghost">
                <CgTrashEmpty /> Delete
              </Button>
            </div>
          </div>

          <div 
          
          onClick={(e) => {
            if(dropDown === "hidden"){
              setdropDown("flex")

            }
            
            else{
            setdropDown("hidden")

            }
          }}

          
          className="flex cursor-pointer  border rounded-lg px-4 py-2  items-center gap-8 font-normal ">
<span className="text-base  cursor-pointer">Filter</span>
<svg xmlns="http://www.w3.org/2000/svg" className="opacity-50  cursor-pointer" width="12px" viewBox="0 0 384 512"><path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"/></svg>


</div>
        </div>

        <ContactTable data={contacts} />
      </div>
    </div>













   {/* filter dropdown */}
 


    <div className={`h-auto absolute top-36 rounded-lg px-4 py-3  right-5 shadow-2xl bg-white flex-col gap-3 ${dropDown}`} style={{width:"190px"}}>


<div className="flex items-center gap-4">
<input type="checkbox" name="Name" id="Name" className="rounded w-4 h-4  cursor-pointer" />
<label htmlFor="Name" className="opacity-80  cursor-pointer">Name</label>
</div>



<div className="flex items-center gap-4">
<input type="checkbox" name="Email" id="Email" className="rounded w-4 h-4  cursor-pointer" />
<label htmlFor="Email" className="opacity-80  cursor-pointer">Email</label>
</div>




<div className="flex items-center gap-4">
<input type="checkbox" name="Newsletter" id="Newsletter" className="rounded w-4 h-4  cursor-pointer" />
<label htmlFor="Newsletter" className="opacity-80  cursor-pointer">Newsletter</label>
</div>




<div className="flex items-center gap-4">
<input type="checkbox" name="Survey" id="Survey" className="rounded w-4 h-4  cursor-pointer" />
<label htmlFor="Survey" className="opacity-80  cursor-pointer">Survey</label>
</div>




<div className="flex items-center gap-4">
<input type="checkbox" name="Pages" id="Pages" className="rounded w-4 h-4  cursor-pointer" />
<label htmlFor="Pages" className="opacity-80  cursor-pointer">Pages</label>
</div>





<div className="flex items-center gap-4">
<input type="checkbox" name="Browser" id="Browser" className="rounded w-4 h-4  cursor-pointer" />
<label htmlFor="Browser" className="opacity-80  cursor-pointer">Browser</label>
</div>




<div className="flex items-center gap-4">
<input type="checkbox" name="Country" id="Country" className="rounded w-4 h-4  cursor-pointer" />
<label htmlFor="Country" className="opacity-80  cursor-pointer">Country</label>
</div>




<div className="flex items-center gap-4">
<input type="checkbox" name="Phone" id="Phone" className="rounded w-4 h-4  cursor-pointer" />
<label htmlFor="Phone" className="opacity-80  cursor-pointer">Phone</label>
</div>



<div className="flex items-center gap-4">
<input type="checkbox" name="Language" id="Language" className="rounded w-4 h-4  cursor-pointer" />
<label htmlFor="Language" className="opacity-80  cursor-pointer">Language</label>
</div>




<div className="flex items-center gap-4">
<input type="checkbox" name="Company" id="Company" className="rounded w-4 h-4  cursor-pointer" />
<label htmlFor="Company" className="opacity-80  cursor-pointer">Company</label>
</div>



<div className="flex items-center gap-4">
<input type="checkbox" name="Company Size" id="Company Size" className="rounded w-4 h-4  cursor-pointer" />
<label htmlFor="Company Size" className="opacity-80  cursor-pointer">Company Size</label>
</div>


<div className="flex items-center gap-4"    onClick={(e) => {
            if(dropDown === "hidden"){
              setdropDown("flex")

            }
            
            else{
            setdropDown("hidden")

            }
          }}>
{/* <input type="checkbox" name="Company Size" id="Company Size" className="rounded w-4 h-4  cursor-pointer" /> */}
<label htmlFor="" className="opacity-80  cursor-pointer">X</label>
</div>






</div>




</>
  );
};

export default Contacts;
