import Avatar from "../components/Avatar";
import Button from "../components/Button";
import Input from "../components/Input";
import PageTitle from "../components/PageTitle";
import SettingsTabs from "../components/SettingsTabs";

import Checkbox from "../assets/icons/new-icons/checkbox.svg";
import googleLogo from "../assets/icons/google-logo.png";
import fbLogo from "../assets/icons/fb-logo.png";

const SettingsAccount = () => {
  return (
    <div className="px-10">
      <SettingsTabs />

      <h3 className="text-xl font-bold mt-16 text-gray-800">Account</h3>

      <div className="mt-8 flex gap-20">
        <Avatar />

        <div>
          <div className="text-xl text-gray-800">Upload a profile image</div>
          <p className="text-sm text-gray-600">
            The image need a size for 400x400 pixel
          </p>
          <Button className="mt-4" variant = "outline">Edit</Button>
        </div>
        <Avatar />
        <div>
          <div className="text-xl text-gray-800">Upload a company logo</div>
          <p className="text-sm text-gray-600">
          The image need a size for 400x400 pixel
          </p>
          <Button className="mt-4">Upload</Button>
        </div>
      </div>

      

      <section className="border-b-2 border-gray-200 mb-16 pb-16">
        <h3 className="text-xl font-bold mt-16 text-gray-800 mb-8">
          Profil Informationen
        </h3>

        <form className="w-7/12 flex flex-col gap-4 ">
          <div className="flex items-center">
            <label className="w-96 text-gray-800 text-lg">Name</label>
            <Input placeholder="Name"></Input>
          </div>

          <div className="flex items-center">
            <label className="w-96 text-gray-800 text-lg">
              Company/Organization
            </label>
            <Input placeholder="ABC"></Input>
          </div>

          <div className="flex items-center">
            <label className="w-96 text-gray-800 text-lg">Address</label>
            <div className="grid grid-cols-2 gap-4 w-full">
              <Input placeholder="Billing Address"></Input>
              <Input placeholder="City"></Input>
            </div>
          </div>

          <div className="flex items-center">
            <label className="w-96 text-gray-800 text-lg"></label>
            <div className="grid grid-cols-2 gap-4 w-full">
              <Input placeholder="Country"></Input>
              <Input placeholder="ZIP Code"></Input>
            </div>
          </div>

          <div className="flex items-center">
            <label className="w-96 text-gray-800 text-lg">Phone</label>
            <Input placeholder="No phone number provided"></Input>
          </div>

          <div className="flex items-center">
            <label className="w-96 text-gray-800 text-lg">Email</label>
            <Input placeholder="m.miller@example.com"></Input>
          </div>

          <div>
            <Button variant="disabled">Save</Button>
          </div>
        </form>
      </section>


      <section className="mt-16 border-b-2 border-gray-200 mb-16 pb-16">
        <h3 className="text-xl font-bold mt-16 text-gray-800 mb-8">
          Connect Login
        </h3>

        <div className="flex justify-between w-3/5">
          <p className="text-lg flex gap-2">
            <span>Login with</span>  <img src={googleLogo} className="w-8 h-8" /> <span>Google</span></p>
          <p className="text-lg font-semibold flex gap-2 mr-8 text-emerald-400"> <img src={Checkbox} className="w-4" />Active</p>
         </div>

         <div className="flex justify-between w-3/5 mt-8">
          <p className="text-lg flex gap-2">
            <span>Login with</span>  <img src={fbLogo} className="w-6 h-6" /> <span>Facebook</span></p>
          <p className="text-lg flex gap-2"><Button className="">Connect</Button></p>
         </div>

        </section>


      <section className="mt-16 border-b-2 border-gray-200 mb-16 pb-16">
        <h3 className="text-xl font-bold mt-16 text-gray-800 mb-8">
          Change Password
        </h3>

        <form className="w-7/12 flex flex-col gap-4 ">
          <div className="flex items-center">
            <label className="w-96 text-gray-800 text-lg">Password</label>
            <Input placeholder="**********"></Input>
          </div>

          <div className="flex items-center">
            <label className="w-96 text-gray-800 text-lg">New Password</label>
            <Input placeholder=""></Input>
          </div>

          <div className="flex items-center">
            <label className="w-96 text-gray-800 text-lg">
              Confirm Password
            </label>
            <Input placeholder=""></Input>
          </div>

          <div>
            <Button variant="disabled">Save</Button>
          </div>
        </form>
      </section>



      <section className="pb-16 w-full">
        <div className="w-full">
          <label className="w-100 mb-4 inline-block text-gray-800 text-lg font-bold">
            2-Factor authentication
            
            <label for="default-toggle" class="ml-5 mb-1 align-middle inline-flex relative  cursor-pointer">
  <input type="checkbox" value="" id="default-toggle2" class="sr-only peer2" />
  <div class="w-11 h-6 bg-gray-200 peer2-focus:outline-none rounded-full peer2 dark:bg-gray-700 peer2-checked:after:translate-x-full peer2-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer2-checked:bg-blue-600"></div>
</label>
</label>
          <div className="">
            <span>For 2-Factory-Autenticvication us your Phone Number For 2-Factory-Autenticvication us your Phone Number</span>
            <Button variant="gray" className="rounded-xl w-auto mt-4">
              Setup primary method
            </Button>
          </div>
        </div>



        <div className="w-full mt-10">
          <label className="w-100 mb-4 inline-block text-gray-800 text-lg font-bold">
            Backup
            
            <label for="default-toggle" class="ml-5 mb-1 align-middle inline-flex relative  cursor-pointer">
  <input type="checkbox" value="" id="default-toggle" class="sr-only peer" />
  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
</label>
</label>
          <div className="">
            <span>For 2-Factory-Autenticvication us your Phone Number For 2-Factory-Autenticvication us your Phone Number</span>
            <Button variant="disabled" className="rounded-xl w-auto mt-4">
              Setup primary method
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SettingsAccount;