import Button from "../components/Button";
import SettingsTabs from "../components/SettingsTabs";
import BookAlt from "../assets/icons/book-alt.svg";

const PauseDeleteAccount = () => {
  return (
    <div className="px-10">
      <SettingsTabs />

      <h3 className="text-xl font-bold mt-16 text-gray-800">
        Pause or delete account
      </h3>
      <p><a href="#" className="text-blue-600" target="_blank" rel="noopener noreferrer"><img src={BookAlt} alt="icon" className="w-4 inline cursor-pointer" /> Learn more about notifications</a></p>
      <div className="flex flex-col gap-16 mt-16">
        <label className="flex items-center gap-10">
          <input className="w-6 h-6" type="radio" name="pause" checked />

          <div className="text-gray-700">
            <div className="text-xl">
              Temporarily pause billing for my premium subscription
            </div>
            <div classNAme="">
              Sending will be disabled if your account is paused. Everything
              else will still be available.
            </div>
          </div>
        </label>

        <label className="flex items-center gap-10">
          <input className="w-6 h-6" type="radio" name="pause" />

          <div className="text-gray-700">
            <div className="text-xl">Permanently delete this account</div>
            <div classNAme="">
              The account will then no longer be available and all data in the
              account will be permanently deleted.
            </div>
          </div>
        </label>

        <div>
          <Button variant="gray">Save</Button>
        </div>
      </div>
    </div>
  );
};

export default PauseDeleteAccount;
