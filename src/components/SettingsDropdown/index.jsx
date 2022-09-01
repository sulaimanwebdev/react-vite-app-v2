import { CgChevronDown } from "react-icons/cg";

const SettingsDropdown = ({ children, title }) => {
  return (
    <div className="group relative z-50">
      <div className="font-semibold cursor-pointer text-xl text-gray-800 relative flex items-center gap-4">
        {title}
        <CgChevronDown className="text-xl mt-1" />
      </div>

      <div className="group-hover:flex hidden rounded-2xl absolute top-6 pl-5 pr-32 whitespace-nowrap py-5 bg-white shadow-lg text-sm font-normal opacity-90 flex-col gap-3">
        {children}
      </div>
    </div>
  );
};

export default SettingsDropdown;
