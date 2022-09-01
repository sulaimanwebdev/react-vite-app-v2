import Button from "../components/Button";
import SavedMessage from "../components/SavedMessage";
import SettingsTabs from "../components/SettingsTabs";
import BookAlt from "../assets/icons/book-alt.svg";

const messages = [
  { message: "Hello there, What can we help?" },
  { message: "Hello there, What can we help?" },
  { message: "Hello there, What can we help?" },
  { message: "Hello there, What can we help?" },
  { message: "Hello there, What can we help?" },
];

const SavedMessages = () => {
  return (
    <div className="px-10">
      <SettingsTabs />

      <div className="flex justify-between  mt-16 items-center">
        <h3 className="text-xl font-bold text-gray-800">
          Saved Messages
        </h3>

        <Button variant="solid">Add a Message</Button>
      </div>
      <p className="mb-12"><a href="#" className="text-blue-600" target="_blank" rel="noopener noreferrer"><img src={BookAlt} alt="icon" className="w-4 inline cursor-pointer" /> Learn more about saved messages</a></p>

      {messages.map((item) => (
        <SavedMessage message={item.message} />
      ))}
    </div>
  );
};

export default SavedMessages;
