import { CgClose, CgSmile } from "react-icons/cg";
import icon from "../../assets/images/logo/twitter.png";
import { FiUser, FiMail } from "react-icons/fi";
import { BiWorld } from "react-icons/bi";
import { IoLanguage } from "react-icons/io5";
import { BsPhone } from "react-icons/bs";
import { GrLanguage } from "react-icons/gr";
import Accordion from "../Accordion";

const drawerStyle = {
  base: "flex flex-col flex-shrink-0 transition pr-8 overflow-y-auto",
  active: "w-72",
  inactive: "w-0 hidden",
};

const TwitterChat = ({
  category,
  setcategory,

}) => {

  return (
    <>
    <section
      className={category === "twitter" ? "w-72 flex flex-col flex-shrink-0 transition pr-8 overflow-y-auto" : "hidden"}
    >
      <div className="flex justify-between w-full py-8 items-center ">
        <h3 className="text-md font-bold opacity-70">Twitter</h3>
        <CgClose onClick={()=> setcategory('')} className="text-lg cursor-pointer" />
      </div>
      <div className="border-b border-gray-200 pb-5">
        <div className="flex gap-7 text-gray-300 text-sm items-center mb-4">
          From: <img src={icon} className="w-10" />
        </div>
        <div className="flex items-center gap-5 text-sm mb-2">
          <FiUser className="opacity-50" />
          Twitter
        </div>

        <div className="flex items-center gap-5 text-sm mb-2">
          <FiMail className="opacity-50" />
         asdasd
        </div>

        <div className="flex items-center gap-5 text-sm">
          <BsPhone className="opacity-50" />
         12341234
        </div>
      </div>

      <div className="border-b border-gray-200 py-5">
        <div className="flex items-center gap-5 text-sm mb-2">
          <IoLanguage className="opacity-50" />
         123434141234
        </div>

        <div className="flex items-center gap-5 text-sm mb-2">
          <BiWorld className="opacity-50" />
          12341234
        </div>

        <div className="flex items-center gap-5 text-sm">
          <GrLanguage className="opacity-50" />
        123412341234
        </div>
      </div>

      <div className="border-b border-gray-200 py-5">
        <div className="grid grid-cols-2 gap-2 mb-0">
          <div className="text-sm text-gray-400">Newsletter:</div>
          <div className="text-sm">asdasdasd</div>
          <div className="text-sm text-gray-400">Survey:</div>
          <div className="font-semibold"><CgSmile className="text-green-300 text-md" /></div>
        </div>

        <span className="text-xs opacity-20">
          Ask the customer again for a feedback
        </span>
      </div>

      <Accordion title="Company Details">
        <div className="grid grid-cols-2 gap-2">
          <div className="text-sm text-gray-400">Company:</div>

          <div className="text-sm">ABC</div>

          <div className="text-sm text-gray-400">Company Size:</div>

          <div className="text-sm">1-10</div>
        </div>
      </Accordion>

      <Accordion title="Viewed Pages">
        <div className="flex justify-between text-xs opacity-30">
          <div>12.10.2021 10:43a.m</div>
          <div>5 min</div>
        </div>
        <div className="text-xs mt-0.5 mb-2">
          <div>https://example.com/index/fsdafa/</div>
        </div>
        <div className="flex justify-between text-xs opacity-30">
          <div>12.10.2021 10:43a.m</div>
          <div>5 min</div>
        </div>
        <div className="text-xs mt-0.5">
          <div>https://example.com/index/fsdafa/</div>
        </div>
      </Accordion>
    </section>




    </>
  );
};

export default TwitterChat;
