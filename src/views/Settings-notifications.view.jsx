import Input from "../components/Input";
import SettingsTabs from "../components/SettingsTabs";
import Toggle from "../components/Toggle";
import BookAlt from "../assets/icons/book-alt.svg";
import Button from "../components/Button";

const NotificationsSettings = () => {
  return (
    <div className="px-10">
      <SettingsTabs />

      <section className="pb-16 border-b border-gray-300">
        <h3 className="text-xl font-bold mt-16 text-gray-800">Notification</h3>
        <p><a href="#" className="text-blue-600" target="_blank" rel="noopener noreferrer"><img src={BookAlt} alt="icon" className="w-4 inline cursor-pointer" /> Learn more about notifications</a></p>

        <div className="flex mt-12">

         <div className="w-1/2">
         <label className="text-lg font-semibold text-gray-800">Type</label>
         <p className="text-lg text-gray-700 mb-5 mt-6">New Message</p>
         <p className="text-lg text-gray-700 mb-5">New Request Chat</p>
         <p className="text-lg text-gray-700 mb-5">New Rating</p>
         <p className="text-lg text-gray-700 mb-5">New Visitor</p>
         </div>

         <div className="w-52">
         <label className="text-lg font-semibold  text-gray-800">Mobile App</label>
         <div className="mt-4 mb-2 text-center">
         <Toggle bg="bg-blue-700" border="border-blue-700" value="justify-end" />
         </div>
         <div className="mt-4 mb-2 text-center">
         <Toggle bg="bg-blue-700" border="border-blue-700" value="justify-end" />
         </div>
         <div className="mt-4 mb-2 text-center">
         <Toggle bg="bg-blue-700" border="border-blue-700" value="justify-end" />
         </div>
         <div className="mt-4 mb-2 text-center">
         <Toggle bg="bg-blue-700" border="border-blue-700" value="justify-end" />
         </div>
         </div>

         <div className="w-52">
         <label className="text-lg font-semibold text-gray-800">Web</label>
         <div className="mt-4 mb-2 text-center">
         <Toggle bg="bg-blue-700" border="border-blue-700" value="justify-end" />
         </div>
         <div className="mt-4 mb-2 text-center">
         <Toggle bg="bg-blue-700" border="border-blue-700" value="justify-end" />
         </div>
         <div className="mt-4 mb-2 text-center">
         <Toggle bg="bg-blue-700" border="border-blue-700" value="justify-end" />
         </div>
         <div className="mt-4 mb-2 text-center">
         <Toggle bg="bg-blue-700" border="border-blue-700" value="justify-end" />
         </div>
         </div>

         <div>
         <label className="text-lg font-semibold text-gray-800">Email</label>
         <div className="mt-4 mb-2 text-center">
         <Toggle bg="bg-blue-700" border="border-blue-700" value="justify-end" />
         </div>
         <div className="mt-4 mb-2 text-center">
         <Toggle bg="bg-blue-700" border="border-blue-700" value="justify-end" />
         </div>
         <div className="mt-4 mb-2 text-center">
         <Toggle bg="bg-blue-700" border="border-blue-700" value="justify-end" />
         </div>
         <div className="mt-4 mb-2 text-center">
         <Toggle bg="bg-blue-700" border="border-blue-700" value="justify-end" />
         </div>
         </div>
        </div>
      </section>

      <section className="pb-16  mt-16">
        <h3 className="text-xl font-bold mt-16 text-gray-800 mb-10">
          Send Me a Email Notification
        </h3>
        <div className="flex gap-10 items-center">
          <Toggle bg="bg-blue-700" border="border-blue-700" value="justify-end" />
          <label className="text-lg text-gray-500">Status</label>
        </div>
        <div className="flex items-center gap-12 mt-8">
          <label className="text-lg text-gray-500 whitespace-nowrap">
            Send do
          </label>
          <div className="w-96">
            <Input placeholder="example@example.com"/>
          </div>
          <Button variant="gray">Save</Button>
        </div>
       
      </section>
    </div>
  );
};

export default NotificationsSettings;
