import Toggle from "../Toggle";
import Button from "../Button";

const Integration = ({ title,toggle = false, image }) => {
  return (
    <div className="px-4 py-8 bg-white shadow-md  border-2 border-black rounded-xl">

      <img src={image} alt="logo" className="w-14 mb-5 text-left" />
      <div className="font-bold text-lg">{title}</div>
      <div className="mt-6 mb-3 ">Engage with {title} users from LoChat</div>

      {toggle ? (
        <div className="flex justify-center">
          <Toggle />
        </div>
      ) : (
        <a className="text-blue-500 underline cursor-pointer">Read more to connect </a>
      )}
    </div>
  );
};

export default Integration;
