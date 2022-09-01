
import SettingsTabs from "../components/SettingsTabs";
import BookIcon from "../assets/icons/book-alt.svg";
import Button from "../components/Button";

const SettingsInstall = () => {
  return (
    <div className="px-10">
      <SettingsTabs />

      <h3 className="text-xl font-bold mt-16 text-gray-800">Install</h3>
      <div> <img src={ BookIcon}  alt="logo" className='w-[15px] inline '/> <a href="#" className="text-blue-600">Learn more about installing on your website</a> </div>

      <details className="install22 pb-5 border-b  hover:cursor-pointer">
              <summary className=" install23 flex justify-between items-center text-summary md:text-sm font-normal text-very-dark-grayish-blue hover:text-soft-red" >
                
               
                <div className="install-drop">
                  <div className="install-drop1"> <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" className="inline"><path fill="#0CBCFF" fill-rule="nonzero" d="M18.8 33.2L9.6 24l9.2-9.2L16 12 4 24l12 12 2.8-2.8zm10.4 0l9.2-9.2-9.2-9.2L32 12l12 12-12 12-2.8-2.8z"></path></svg> JavaScript</div>
                </div>
                 
                </summary>
                
              <div className="answer">
                  <p>Place this code just before the closing /body tag</p>
                  <div className="code-wrap" role="textbox">
                    script src=„//code.lochat.io/wlfbzv0qbuldr5emkm9f1xpop6ieysqu.js“ async/script
                  </div>
                  <div className="">
                      <Button variant="outline">Copy</Button>
                  </div>
              </div>
            </details>


            <details className="install22 pb-5 border-b  hover:cursor-pointer">
              <summary className=" install23 flex justify-between items-center text-summary md:text-sm font-normal text-very-dark-grayish-blue hover:text-soft-red" >
                
                
                <div className="install-drop">
                  <div className="install-drop1"><svg className="inline" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><g fill="none" fill-rule="evenodd"><g fill-rule="nonzero"><path fill="#95BF46" d="M39.785 9.426a.462.462 0 0 0-.417-.388c-.174-.014-3.844-.286-3.844-.286s-2.55-2.53-2.829-2.811c-.28-.28-.827-.195-1.039-.132l-1.426.44c-.852-2.45-2.355-4.702-4.998-4.702-.073 0-.149.003-.224.007C24.256.56 23.325.128 22.521.128c-6.16 0-9.101 7.699-10.024 11.611l-4.31 1.337c-1.336.42-1.378.461-1.554 1.72-.132.953-3.627 27.982-3.627 27.982l27.235 5.103 14.757-3.192s-5.18-35.023-5.213-35.263zm-11.06-2.711l-2.305.713.002-.497c0-1.523-.212-2.749-.551-3.72 1.362.17 2.27 1.72 2.853 3.504zM24.18 3.512c.379.949.625 2.311.625 4.149 0 .094 0 .18-.002.267l-4.759 1.474c.917-3.537 2.634-5.246 4.136-5.89zm-1.83-1.732c.266 0 .534.09.79.267-1.973.928-4.09 3.268-4.983 7.939l-3.762 1.165c1.047-3.563 3.532-9.371 7.955-9.371z"></path><path fill="#5E8E3E" d="M39.368 9.038c-.174-.014-3.844-.286-3.844-.286s-2.55-2.53-2.829-2.811a.699.699 0 0 0-.393-.18l-2.06 42.12 14.756-3.192s-5.18-35.023-5.213-35.263a.462.462 0 0 0-.417-.388"></path><path fill="#FFF" d="M25.232 17.192l-1.82 5.413s-1.594-.851-3.548-.851c-2.865 0-3.01 1.798-3.01 2.25 0 2.473 6.444 3.42 6.444 9.21 0 4.556-2.889 7.489-6.785 7.489-4.675 0-7.066-2.91-7.066-2.91l1.252-4.135s2.458 2.11 4.531 2.11c1.355 0 1.906-1.067 1.906-1.847 0-3.225-5.286-3.368-5.286-8.667 0-4.46 3.2-8.775 9.662-8.775 2.49 0 3.72.713 3.72.713"></path></g></g></svg> Shopify</div>
                </div>
                 
                </summary>
              <div className="answer">
                <p>1. Login to your Shopify panel</p>
                  <p>2. Go to Online Store  Themes Actions drop-down menu under Current Theme  Edit code  theme.liquid</p>
                  <p>3. Place this code just before the /body tag at the end of the theme.liquid script</p>
                    <div className="code-wrap" role="textbox">
                    script src=„//code.lochat.io/wlfbzv0qbuldr5emkm9f1xpop6ieysqu.js“ async/script
                  </div>
                  <div className="">
                      <Button variant="outline">Copy</Button>
                  </div>
              </div>
            </details>


             <details className="install22 pb-5 border-b  hover:cursor-pointer">
              <summary className=" install23 flex justify-between items-center text-summary md:text-sm font-normal text-very-dark-grayish-blue hover:text-soft-red" >
                
               
                <div className="install-drop">
                  <div className="install-drop1"> <svg xmlns="http://www.w3.org/2000/svg" className="inline" width="48" height="48" viewBox="0 0 48 48"><path fill="#464342" fill-rule="nonzero" d="M3.398 23.906c0 8.118 4.718 15.134 11.559 18.458L5.174 15.56a20.431 20.431 0 0 0-1.776 8.346zm34.354-1.035c0-2.534-.91-4.29-1.691-5.656-1.04-1.69-2.014-3.12-2.014-4.81 0-1.884 1.43-3.64 3.444-3.64.09 0 .177.012.266.017a20.433 20.433 0 0 0-13.85-5.384c-7.165 0-13.468 3.676-17.135 9.244.48.015.934.025 1.32.025 2.144 0 5.465-.26 5.465-.26 1.106-.066 1.236 1.558.132 1.69 0 0-1.111.13-2.348.194l7.469 22.215 4.488-13.46-3.195-8.755a37.345 37.345 0 0 1-2.15-.196c-1.106-.064-.976-1.754.129-1.689 0 0 3.387.26 5.402.26 2.145 0 5.466-.26 5.466-.26 1.106-.065 1.236 1.559.131 1.69 0 0-1.113.13-2.347.195l7.411 22.046 2.046-6.836c.887-2.836 1.561-4.874 1.561-6.63zm-13.485 2.83l-6.153 17.88a20.506 20.506 0 0 0 12.604-.327 1.8 1.8 0 0 1-.146-.283l-6.305-17.27zm17.636-11.634c.088.653.138 1.354.138 2.109 0 2.08-.389 4.42-1.56 7.346l-6.264 18.112c6.097-3.556 10.198-10.161 10.198-17.727 0-3.566-.91-6.919-2.512-9.84zM23.907 0C10.725 0 0 10.724 0 23.906 0 37.09 10.725 47.814 23.907 47.814S47.815 37.09 47.815 23.906C47.815 10.724 37.09 0 23.907 0zm0 46.718c-12.577 0-22.81-10.233-22.81-22.812 0-12.577 10.232-22.81 22.81-22.81 12.577 0 22.81 10.233 22.81 22.81 0 12.579-10.233 22.812-22.81 22.812z"></path></svg> WordPress</div>
                </div>
                 
                </summary>
              <div className="answer">
                <p>1. Login to your WordPress admin panel</p>
                <p>2. Go to Appearance  Theme Editor</p>
                <p>3. Under Theme Files (far right), find the Theme Footer (footer.php) and select it</p>
                <p>4. Paste your LoChat code before the /body tag at the bottom</p>
                <p>5. Click Update File to save changes</p>
                <div className="code-wrap" role="textbox">
                    script src=„//code.lochat.com/wlfbzv0qbuldr5emkm9f1xpop6ieysqu.js“ async/script
                  </div>
                  <div className="">
                      <Button variant="outline">Copy</Button>
                  </div>
              </div>
            </details>      

    









    </div>
  );
};

export default SettingsInstall;