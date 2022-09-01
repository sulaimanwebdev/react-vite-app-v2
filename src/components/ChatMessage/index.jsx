const MessageStyle = {
  base: "w-1/2",
  right: "my-message-gradient",
  left: "other-person-message-gradient mr-2",
  new: "w-200 rounded-xl py-2.5 px-4"
};

const ContainerStyle = {
  left: "flex justify-start pr-8",
  right: "flex justify-end pl-8",
};

const ChatMessage = ({ side = "left", message, user, time }) => {
  return (
    <div className={ContainerStyle[side]}>
      <div className={`${MessageStyle.base}`}>
        <div className="flex">
            <h6 className=" mb-2 text-blue-500">{user}</h6>
            <div>
            <span className="opacity-80 text-xs ml-2">{time}</span>
            </div>
          </div>
           <div className={`${MessageStyle[side]} ${MessageStyle.new}`} >
           <p>{message}</p>
           </div>
      </div>
    </div>
  );
};

export default ChatMessage
