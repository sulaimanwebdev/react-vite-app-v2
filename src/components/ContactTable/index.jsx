import { useTable, useRowSelect, useState } from "react";
import { CgSmileMouthOpen } from "react-icons/cg";
import france from "../../assets/icons/new-icons/france.png";

const ContactTable = ({ data }) => {

  const [showModal, setshowModal] = useState("opacity-0 invisible");

  let modalFunction = () =>{
    setshowModal("opacity-100 visible")
  }
  return (
    <>
    <div className="overflow-x-auto pb-4 pl-1">
      <table className="w-full overflow-x-scroll mt-16 table">
        <thead className="border-b-8 border-transparent">
          <tr className="pb-0">
            <th className="pr-8 ml-0 w-20 ">
              <input type="checkbox" className="rounded" />
            </th>
            <th className="w-52 pr-20">Name</th>
            <th className="w-52 pr-20">Email</th>
            <th className="w-52 pr-20">Newsletter</th>
            <th className="w-52 pr-20">Survey</th>
            <th className="w-52 pr-20">Viewed Pages</th>
            <th className="w-52 pr-20">Browser</th>
            <th className="w-52 pr-20">Country</th>
            <th className="w-52 pr-20">Phone</th>
            <th className="w-52 pr-20">Language</th>
            <th className="w-52 pr-20">Company</th>
            <th className="w-52 pr-20">Company Size</th>
          </tr>
        </thead>
        {data.map((row) => (
          <tr className="py-4 border-b border-gray-300">
            <td className="py-6">
              <input type="checkbox" className="rounded" />
            </td>
            <td>{row.name === null ? "----" : row.name}</td>
            <td>{row.email === null ? "----" : row.email}</td>
            <td>
              <select value={row.newsletter} className="border-none">
                <option value="Subscription">Subscription</option>
                <option value="unsubscription">unsubscription</option>
              </select>
            </td>
            <td className=" h-full text-xl pt-5">
            😃
            </td>
            <td>
            <div onClick={modalFunction} className="flex cursor-pointer  items-center gap-3 font-normal ">
<button className="text-base">Viewed</button>
{/* <svg xmlns="http://www.w3.org/2000/svg" className="opacity-50" width="12px" viewBox="0 0 384 512"><path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"/></svg> */}

</div>
            </td>
            <td>{row.browser === null ? "----" : row.browser}</td>
            <td className='flex items-center transfrom translate-y-5 gap-2'> {row.country === null ? "----" : <img src={france} className='w-[30px]' />} {row.country === null ? "----" : row.country}</td>
            <td>{row.phone === null ? "----" : row.phone}</td>
            <td>{row.language === null ? "----" : row.language}</td>
            <td>{row.company === null ? "----" : row.company}</td>
            <td>{row.companySize === null ? "----" : row.companySize}</td>
          </tr>
        ))}
      </table>
    </div>









{/* POPUP */}


<div className={`fixed  top-0 transition mainFixedOverlay w-screen h-screen flex items-center justify-center ${showModal}`}>

<div className="blackOverlay absolute left-0 top-0 w-full h-full" onClick={() => setshowModal('opacity-0 invisible')}></div>

<div className="rounded-lg bg-white whiteBoxSocialMediaIcons py-8 pb-10 px-7 relative z-50">
<div className="flex items-center justify-between">
              <div className="font-bold opacity-70 text-xl">Viewed</div>
              <i class="fal fa-times cursor-pointer text-black opacity-70 text-xl" onClick={() => setshowModal('opacity-0 invisible')}></i>
</div>



<div className="flex items-center gap-16 mt-6 mb-8">
<div className="font-bold opacity-70 text-base">From</div>

<div className=" opacity-90 text-base">Michael Miler</div>

</div>




<div className="border-b-2 border-gray-300 pb-1 w-full grid grid-cols-2">
  <div className="flex gap-5 ">
  <div>12.10.2021</div>
  <div>10:43 AM</div>
  </div>



  <div className="grid" style={{gridTemplateColumns: "200px 120px"}}>
  <div className="break-words">https://example.com/home/</div>
  <div  className="flex justify-end">12 min</div>
  </div>



</div>



<div className="border-b-2 border-gray-300 mt-5 pb-1 grid grid-cols-2">
  <div className="flex gap-5 ">
  <div>12.10.2021</div>
  <div>9:43 AM</div>
  </div>



  <div className="grid" style={{gridTemplateColumns: "200px 120px"}}>
  <div class="break-words">https://example.com/contact/234234234.html</div>
  <div className="flex justify-end">5 min</div>
  </div>



</div>










</div>

</div>


</>
  );
};

export default ContactTable;
