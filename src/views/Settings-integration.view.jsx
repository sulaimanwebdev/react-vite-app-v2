import Integration from "../components/Integration";
import SettingsTabs from "../components/SettingsTabs";
// logos
import facebook_logo from '../assets/images/logo/facebook.png';
import whatsapp_logo from '../assets/images/logo/whatsapp.png';
import mailchimp_logo from '../assets/images/logo/mailchimp.png';
import shopify_logo from '../assets/images/logo/shopify.png';
import calendly_logo from '../assets/images/logo/calendly.png';
import slack_logo from '../assets/images/logo/slack.png';
import saleforce_logo from '../assets/images/logo/saleforce.png';
import zendesk_logo from '../assets/images/logo/zendesk.png';
import hubspot_logo from '../assets/images/logo/hubspot.png';
import pipedrive_logo from '../assets/images/logo/pipedrive.png';
import microsoft_logo from '../assets/images/logo/microsoft.png';
import outlook_logo from '../assets/images/logo/outlook.png';
import calender_logo from '../assets/images/logo/google-kalendar.png';
import wordpress_logo from '../assets/images/logo/wordpress.png';
import twitter_logo from '../assets/images/logo/twitter.png';
import gmail_logo from '../assets/images/logo/gmail.png';
import freshdesk_logo from '../assets/images/logo/freshdesk.png';
import surveyMonkey_logo from '../assets/images/logo/surveymonkey.png';
import jira_logo from '../assets/images/logo/jira-cloud.png';
import analytics_logo from '../assets/images/logo/analytics.png';
import zapier_logo from '../assets/images/logo/zapier.png';
import stripe_logo from '../assets/images/logo/stripe.png';
import dropbox_logo from '../assets/images/logo/dropbox.png';
import googleDrive_logo from '../assets/images/logo/google-drive.png';
import googleMeet_logo from '../assets/images/logo/google-meet.png';
import zoom_logo from '../assets/images/logo/zoom.png';


const IntegrationView = () => {
  return (
    <div className="px-10">
      <SettingsTabs />

      <h3 className="text-xl font-bold mt-16 text-gray-800 mb-12">
        Your Integrations
      </h3>

      <div className="grid grid-cols-3 gap-20">
        <Integration title="Facebook Messenger" image={facebook_logo} toggle />
        <Integration title="Whatsapp Business" image={whatsapp_logo} toggle />
        <Integration title="Mailchimp" image={mailchimp_logo} toggle />
      </div>

      <h3 className="text-3xl font-bold mt-20 text-gray-800 mb-12">
        Add Integrations
      </h3>

      <h3 className="text-xl font-bold mt-10 text-gray-800 mb-12">Popular</h3>

      <div className="grid grid-cols-3 gap-20">
        <Integration title="Shopify" image={shopify_logo} />
        <Integration title="Calendly" image={calendly_logo}/>
        <Integration title="Slack" image={slack_logo}/>
      </div>

      <h3 className="text-xl font-bold mt-10 text-gray-800 mb-12">CRM</h3>

      <div className="grid grid-cols-3 gap-20">
        <Integration title="Saleforce" image={saleforce_logo}/>
        <Integration title="Zendesk" image={zendesk_logo}/>
        <Integration title="Hubspot" image={hubspot_logo}/>
        <Integration title="Pipedrive" image={pipedrive_logo}/>
        <Integration title="Microsoft Dynamics" image={microsoft_logo} />
      </div>

      <h3 className="text-xl font-bold mt-10 text-gray-800 mb-12">Leads</h3>

      <div className="grid grid-cols-3 gap-20">
        <Integration title="Outlook" image={outlook_logo}/>
        <Integration title="Calendly" image={calendly_logo}/>
        <Integration title="Google Calendar" image={calender_logo}/>
        <Integration title="Wordpress" image={wordpress_logo}/>
        <Integration title="Shopify" image={shopify_logo}/>
      </div>

      <h3 className="text-xl font-bold mt-10 text-gray-800 mb-12">Conversation</h3>

      <div className="grid grid-cols-3 gap-20">
        <Integration title="Twitter" image={twitter_logo}/>
        <Integration title="Google Mail" image={gmail_logo}/>
        <Integration title="Slack" image={slack_logo}/>
        <Integration title="Freshdesk" image={freshdesk_logo}/>
      </div>

      <h3 className="text-xl font-bold mt-10 text-gray-800 mb-12">Marketing</h3>

      <div className="grid grid-cols-3 gap-20">
        <Integration title="Survey Monkey" image={surveyMonkey_logo}/>
      </div>

      <h3 className="text-xl font-bold mt-10 text-gray-800 mb-12">Tracking and Analytics</h3>

      <div className="grid grid-cols-3 gap-20">
        <Integration title="Jira Cloud" image={jira_logo}/>
        <Integration title="Google Analytics" image={analytics_logo}/>
      </div>

      <h3 className="text-xl font-bold mt-10 text-gray-800 mb-12">Automatic</h3>

      <div className="grid grid-cols-3 gap-20">
        <Integration title="Zapier" image={zapier_logo}/>
        <Integration title="Stripe" image={stripe_logo}/>
      </div>


      <h3 className="text-xl font-bold mt-10 text-gray-800 mb-12">Cloud</h3>

      <div className="grid grid-cols-3 gap-20">
        <Integration title="Dropbox" image={dropbox_logo}/>
        <Integration title="Google Drive" image={googleDrive_logo}/>
      </div>


      <h3 className="text-xl font-bold mt-10 text-gray-800 mb-12">Video Call</h3>

      <div className="grid grid-cols-3 gap-20 mb-20">
        <Integration title="Google Meets" image={googleMeet_logo}/>
        <Integration title="Zoom" image={zoom_logo}/> 
      </div>
    </div>
  );
};

export default IntegrationView;
