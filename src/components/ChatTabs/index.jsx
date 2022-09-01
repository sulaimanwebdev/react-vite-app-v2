const ChatTabsStyles = {
  base: "text-md cursor-pointer",
  active: "opacity-100",
  inactive: "opacity-50 hover:opacity-80",
};

const ChatTabs = ({ children, isActive, amount, ...props }) => {
  return (
    <div {...props} className="flex items-center gap-2">
      <p
        className={`${ChatTabsStyles.base} ${
          ChatTabsStyles[isActive ? "active" : "inactive"]
        }`}
      >
        {children}
      </p>

      {amount > 0 && (
        <div className="bg-blue-400 rounded-full text-sm text-white w-5 h-5 flex items-center justify-center leading-none">
          {amount}
        </div>
      )}
    </div>
  );
};

export default ChatTabs;
