const styles = {
  base: "flex items-center justify-center gap-2",
  variants: {
    ghost: "text-gray-400 hover:opacity-50 font-semibold",
    solid: "text-white bg-blue-600 hover:opacity-70 font-normal block px-10 py-2 rounded-full",
    outline: "text-blue-500 hover:bg-blue-700 hover:text-white border border-blue-500 font-semibold block px-10 py-2 rounded-full",
    disabled: "text-gray-500 bg-gray-100 cursor-not-allowed font-normal block px-10 py-2 rounded-lg disabled:bg-gray-100 disabled:text-gray-300",
    gray: "text-black bg-gray-200 cursor-not-allowed font-normal block px-10 py-2 rounded-lg",
  },
};

const Button = ({ children, className = "", variant = "solid", ...props }) => {
  return (
    <button type="button" className={`${styles.base} ${styles.variants[variant]} ${className}`} disabled={true} {...props}>
      {children}
    </button>
  );
};

export default Button