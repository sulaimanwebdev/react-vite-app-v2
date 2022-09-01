import { AiFillStar } from "react-icons/ai";
const ChatInbox = ({
  name,
  lastMessage,
  lastMessageDate,
  numberOfMessages,
  active,
  marked,
}) => {
  return (
    <div
      className={`w-full pl-6 pr-8 relative py-4 border-b border-blue-50 flex gap-5 ${
        active ? "bg-blue-500 text-white" : "hover:bg-gray-50"
      }`}

    
        
      
    >

      <div className='flex  items-center relative justify-center bg-blue-300 rounded-full w-14 h-14'>
       <span className='text-white uppercase text-lg'>{name.charAt(0)}</span>
       <div className={numberOfMessages >= 1 ? "absolute -bottom-1 flex items-center justify-center w-6 h-6 bg-blue-300 text-white rounded-full -right-1" : "absolute -bottom-1 flex items-center justify-center w-6 h-6 bg-white text-black  rounded-full -right-1"}><i class="fas fa-comment-dots text-sm"></i></div>
      </div>
      <div>
        <h6 className="font-semibold mb-2">{name}</h6>
        <p className="text-sm opacity-80">{lastMessage}</p>
      </div>

      <div className="flex items-end  absolute top-5 right-5 flex-col">
        <p className="text-xs mb-1">{lastMessageDate}</p>
        <div className="flex gap-2">
          {numberOfMessages && (
            <div
              className={`h-4 w-4 rounded-full text-xs ${
                !active ? "bg-blue-500 text-white" : "text-black bg-white"
              } text-center`}
            >
              <p>{numberOfMessages}</p>
            </div>
          )}
          {marked && <AiFillStar className="text-lg text-yellow-400" />}
        </div>
      </div>
    </div>
  );
};

export default ChatInbox;
