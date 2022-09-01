import { useTable, useRowSelect } from "react";
import { CgSmileMouthOpen } from "react-icons/cg";
import Button from "../Button"


const BillingHistoryTable = ({ data }) => {
  return (
    <div className="overflow-x-auto pb-4 pl-1">
      <table className="w-full overflow-x-scroll mt-16 table">
        <thead className="border-b-8 border-transparent">
          <tr className="pb-0 border-b border-gray-200">
            <th className="w-20  text-gray-800">Date</th>
            <th className="w-20  text-gray-800">Number</th>
            <th className="w-20  text-gray-800">Product</th>
            <th className="w-20  text-gray-800">Price</th>
            <th className="w-20  text-gray-800">Invoice</th>
          </tr>
        </thead>
        {data.map((row) => (
          <tr className="py-4 border-b border-gray-200">
            <td className="py-4 text-gray-800">{row.date === null ? "----" : row.date}</td>
            <td className="py-4 text-gray-800">{row.number === null ? "----" : row.number}</td>
            <td className="py-4 text-gray-800">{row.product === null ? "----" : row.product}</td>
            <td className="py-4 text-gray-800">{row.price === null ? "----" : row.price}</td>
            <td className="py-4 text-gray-800"><Button variant="outline">Invoide download (PDF)</Button></td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default BillingHistoryTable;
