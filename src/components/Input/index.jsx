const Input = ({ className, placeholder, props }) => { 
  return <input className="w-full py-3 px-4 rounded-lg border border-gray-300" placeholder={placeholder} {...props} />;
};

export default Input;
