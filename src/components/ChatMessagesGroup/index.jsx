import ChatMessage from "../ChatMessage";

const ChatMessagesGroup = ({ date = "Today", messages }) => {
  return (
    <div>
      <div className="flex justify-center">
        <span className="text-center my-6 text-gray-400 text-sm">{date}</span>
      </div>

      <div>
        {messages.map((item) => (
          <ChatMessage
            message={item.message}
            user={item.user}
            time={item.time}
            side={item.side}
          />
        ))}
      </div>
    </div>
  );
};

export default ChatMessagesGroup;
