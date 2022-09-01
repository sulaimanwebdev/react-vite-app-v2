import { useTable, useRowSelect, useState } from "react";
import { CgSmileMouthOpen } from "react-icons/cg";
import Pencil from "../../assets/icons/new-icons/pencil.svg";
import Bin from "../../assets/icons/bin.svg";

const styles = {
    status: "border px-3 py-1 rounded-full",
    StatusVariants: {
      online: "border-2 border-teal-400",
      offline: "border-2 border-orange-400",
    },
    pill : "px-3 py-1 rounded-full text-sm text-white",
    PillVariants: {
        Admin: "bg-orange-400",
        Editor: "bg-blue-600",
        Support: "bg-blue-400",
        Language : 'bg-gray-400',
      },
  };

const Members = ({ data }) => {


  return (
    <>
    <div className=" pb-4 pl-1">
      <table className="w-full overflow-x-scroll mt-16 table">
        <thead className="border-b-8 border-transparent">
          <tr className="pb-0">
            <th className="w-54 pr-20">Name</th>
            <th className="w-52 pr-20">Role</th>
            <th className="w-52 pr-20">Status</th>
            <th className="w-52 pr-20">Last Active</th>
            <th className="w-52 pr-20"></th>
          </tr>
        </thead>
        {data.map((row) => (
          <tr className="py-4 border-b border-gray-200">
            <td className="">
                <div className="flex gap-4 my-3">
                <img src={row.img === null ? "----" : row.img } alt="Member Image"  className='w-10 h-10 rounded-full'/>
                <div>
                    <div className="font-semibold">{row.name === null ? "----" : row.name}</div>
                    <p className="opacity-70">{row.email === null ? "----" : row.email}</p>
                </div>
                </div>
            </td>
            <td>
                <span className={`${styles.pill} ${styles.PillVariants[row.role]}`}>{row.role}</span>
                <span className={`${styles.pill} ${styles.PillVariants['Language']}`}>{row.language}</span>
            </td>
            <td className="">
              
                <span className={`${styles.status} ${styles.StatusVariants[row.status]}`} >{row.status === null ? "----" : row.status}</span>
            </td>
            <td>{row.lastActive === null ? "----" : row.lastActive}</td>
            <td><img src={Pencil} alt="icon" className="w-4 inline cursor-pointer" /> <img src={Bin} alt="icon" className="w-4 ml-3 inline cursor-pointer" /></td>
          </tr>
        ))}
      </table>
    </div>



</>
  );
};

export default Members;
