import { Link } from "react-router-dom";
import PageTitle from "../PageTitle";
import SettingsDropdown from "../SettingsDropdown";

const SettingsTabs = () => {
  return (
    <div>
      <PageTitle>Settings</PageTitle>

      <nav className=" w-full mt-6 border-b-2 border-gray-200 py-4">
        <div className="flex justify-between w-10/12">
          <div className="font-semibold text-xl text-gray-800">
            <Link to="/settings/">Overview</Link>
          </div>

          <SettingsDropdown title="Account">
            <Link to="/settings/account">Account Information</Link>
            <Link to="/settings/team-member">Team Member</Link>
            <Link to="/settings/notifications">Notification</Link>
            <Link to="/settings/pause-account">Pause or delete account</Link>
          </SettingsDropdown>

          <SettingsDropdown title="Billing">
            <Link to="/settings/subscription">Subscription details</Link>
            <Link to="/settings/billing">Biling Information</Link>
            <Link to="/settings/billing/history">Billing history</Link>
          </SettingsDropdown>

          <SettingsDropdown title="Extra">
            <Link to="/settings/online_offline_time">Online & Offline Time</Link>
            <Link to="/settings/saved-messages">Saved Message</Link>
            <Link to="/settings/notification">API Document</Link>
          </SettingsDropdown>

          <SettingsDropdown title="Chat">
            <Link to="/settings/chatdesign">Chat Setting</Link>
            <Link to="/settings/team-member">Chatbot Setting</Link>
            <Link to="/settings/email">Email Setting</Link>
            <Link to="/settings/install">Install</Link>
          </SettingsDropdown>

          <div className="font-semibold text-xl text-gray-800">
            <Link to="/settings/integration">Integration</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SettingsTabs;
