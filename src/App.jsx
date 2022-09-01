import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ChatView from "./views/Chat.view";
import Contacts from "./views/Contacts.view";
import Analytic from "./views/Analytic.view";
import Home from "./views/Home.view";
import SettingsAccount from "./views/Settings-account.view";
import Online_Offline from "./views/Online_Offline";
import SettingsInstall from "./views/Settings-install.view";
import SettingsEmail from "./views/Settings-email.view";
import SettingsChatdesign from "./views/Settings-chatdesign.view";
import PaymentCard from "./views/Setting-paymentcard.view";
import PaymentCheckout from "./views/Setting-paymentcheckout.view";
import Chatbot from "./views/Chatbot.view";
import ChatBotEditor from './views/Chat-bot-editor';


import BillingHistory from "./views/Settings-billing-history.view";
import BillingInformation from "./views/Settings-billing.view";
import IntegrationView from "./views/Settings-integration.view";
import NotificationsSettings from "./views/Settings-notifications.view";
import PauseDeleteAccount from "./views/Settings-pause.view";
import SavedMessages from "./views/Settings-SavedMessages.view";
import SettingsSubscription from "./views/Settings-subscription";
import Settings from "./views/Settings.view";
import TeamMember from "./views/Settings-teamMember.view"
import ChatWidget from "./components/ChatWidget/index";
import Champaign from "./views/Champaign";
import BannerTemplate from "./views/Banner-template";
import CreateBanner from "./views/Create-banner";

// CHAT CHAMPAIGN
import ChatChampaign from "./views/ChatChampaign";
import ChatBanner from "./views/ChatBanner";
import ChatCreateBanner from "./views/ChatCreateBanner";


// CALENDAR

import Calendar from "./views/Calendar.view";















function App() {
  return (
    <div>
      <ChatWidget/>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/chat" element={<ChatView />} />
            <Route path="/champaign" element={<Champaign />} />
            <Route path="/banner-template" element={<BannerTemplate />} />
            <Route path="/create-banner" element={<CreateBanner />} />
            <Route path="/analytics" element={<Analytic />} />

            
            <Route path="/calendar" element={<Calendar />} />

            <Route path="/settings/team-member" element={<TeamMember />} />


 
                  


           
            

            {/* Setting */}
            <Route path="/settings" element={<Settings />} />
            <Route
              path="/settings/notifications"
              element={<NotificationsSettings />}
            />
            <Route path="/settings/account" element={<SettingsAccount />} />
            <Route path="/settings/online_offline_time" element={<Online_Offline />} />

            <Route
              path="/settings/subscription"
              element={<SettingsSubscription />}
            />
             <Route
              path="/settings/install"
              element={<SettingsInstall />}
            />
            <Route
              path="/settings/email"
              element={<SettingsEmail />}
            />
            <Route
              path="/settings/chatdesign"
              element={<SettingsChatdesign />}
            />
            <Route
              path="/settings/billing/history"
              element={<BillingHistory />}
            />
            <Route
              path="/settings/saved-messages"
              element={<SavedMessages />}
            />
            <Route
              path="/settings/pause-account"
              element={<PauseDeleteAccount />}
            />

            <Route
              path="/setting/paymentcard"
              element={<PaymentCard />}
            />
            <Route
              path="/setting/paymentcheckout"
              element={<PaymentCheckout />}
            />
          
             <Route
              path="/chatbot"
              element={<Chatbot />}
             />

             {/* CHAT CHAMPAING */}
             

             <Route
              path="/chat-champaign"
              element={<ChatChampaign />}
             />

             <Route
              path="/chat-banner-template"
              element={<ChatBanner />}
             />


            <Route
              path="/chat-create-banner"
              element={<ChatCreateBanner />}
             />



            <Route
              path="/chatbot-editor"
              element={<ChatBotEditor />}
             />





            
            <Route path="/settings/integration" element={<IntegrationView />} />
            <Route path="/settings/billing" element={<BillingInformation />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
