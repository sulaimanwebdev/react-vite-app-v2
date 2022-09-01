import Icons from "./Icons";
import Power from "../../assets/icons/power";
import logo from "../../assets/icons/new-icons/Icon.svg";
import { Link } from "react-router-dom";



const Sidebar = () => {
  return (
    <aside className="w-20 border-r border-gray-100 flex-shrink-0 flex items-center flex-col pb-6 py-8 gap-10">
      <Link to="/" className="">
        <img src={logo} alt="logo" className='w-[20px]'/>
      </Link>
      <Icons />

      <div className="flex flex-grow"></div>
      <Power className="opacity-50 hover:opacity-100 hover:text-red-500 fill-current w-5" />
    </aside>
  );
};

export default Sidebar;
