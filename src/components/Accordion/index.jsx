import { useState } from "react";
import {CgChevronDown} from "react-icons/cg"

const Accordion = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const contentHidden = !isOpen ? "hidden" : "";

  return (
    <div className="py-4 border-b border-gray-200">
      <div onClick={() => setIsOpen((x) => !x)} className="flex justify-between cursor-pointer items-center pr-2.5">
        <div className="text-sm">{title}</div>
        <CgChevronDown className={`text-xl transform transition ${isOpen ? "rotate-180" : ""}`} />
      </div>

      <div className={`${contentHidden} mt-4`}>{children}</div>
    </div>
  );
};

export default Accordion
