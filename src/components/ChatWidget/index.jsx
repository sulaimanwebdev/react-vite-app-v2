import InputEmoji from 'react-input-emoji'
import {useState} from 'react';

const ChatWidget = () => {

  const [ text, setText ] = useState('')

       function handleOnEnter (text) {
         console.log('enter', text)
       }


    const [mainChatWindowState, setmainChatWindowState] = useState('');
    const [messageBtn, setmessageBtn] = useState('');
    const [closeBtn, setcloseBtn] = useState('hidden');



    let messageBTNFunction = () =>{
        setmainChatWindowState('showWindow')
        setmessageBtn('hideMessageBtn');
        setcloseBtn('');
    }

    let closeBTNFunction = () =>{
        setmainChatWindowState('')
        setcloseBtn('hidden');
        setmessageBtn('');

    }

    return (
        <> 
        <div className={`chatWindowPaCont absolute right-5 opacity-0  z-50 transition ${mainChatWindowState}`}>
            <div className={`mainChat overflow-hidden rounded-lg`} >
               <div className="topSec text-white flex items-center justify-between px-5 pt-4 pb-4">
                   <div className="flex items-center gap-2">
                       <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80" alt="profile" className="w-11 h-11 rounded-full object-cover " />
                       <div>
                       <div className="opacity-80 text-base">Chat with</div>
                       <div className="font-bold">Martin</div>
                       </div>
                   </div>

                   <div>
                   <i class="fad fa-bars text-2xl text-white cursor-pointer"></i>
                   </div>

               </div>


<div className="chatMessagesCont bg-white w-full">
<div className="chatMessages px-5 pt-4 pb-2 overflow-y-auto h-full w-full">
   <div className="actualMessage px-3 py-3 w-fit inline-block bg-gray-200 rounded text-gray-700" style={{fontSize: '13px'}}>Hello, how can we help you?</div>

   <div className="actualMessage px-3 py-3 w-fit inline-block bg-blue-500 rounded text-white text-sm float-right mt-6"  style={{fontSize: '13px'}}>Can you help me, with install?</div>


   <div className="actualMessage px-3 py-3 w-fit inline-block bg-gray-200 rounded text-gray-700 text-sm mt-6"  style={{fontSize: '13px'}}>Example message from another side</div>


   <div className="actualMessage px-3 py-3 w-fit inline-block bg-blue-500 rounded text-white text-sm float-right mt-6"  style={{fontSize: '13px'}}>Example message from my side</div>



<div className="actualMessage px-3 py-3 w-fit inline-block bg-blue-500 rounded text-white text-sm float-right mt-6" style={{fontSize: '13px'}}>Example message from my side</div>

</div>

<div className="bottomWidget rounded-lg bg-white  w-full pt-3 pb-3 px-5">
  <InputEmoji
           value={text}
           onChange={setText}
           cleanOnEnter
           onEnter={handleOnEnter}
           placeholder="Your Message"
         />
<div className="grid grid-cols-2">
<div className="flex items-center gap-5">
<i class="far fa-paperclip text-xl opacity-50 hover:opacity-75 transition-colors cursor-pointer"></i>
</div>

<div><span className="opacity-50 text-sm">Powered by</span> <span className="font-bold text-sm opacity-90">LoChat</span></div>


</div>

</div>

</div>







            </div>


           
        </div>
        <div className=" absolute bottom-5 right-5 z-50 w-fit chatIcon">
           <div onClick={messageBTNFunction} className={`flex  items-center justify-center rounded-full w-16 h-16 float-right mt-3 bg-blue-600 cursor-pointer hover:bg-blue-800 transition-colors ${messageBtn}`}><i class="fas fa-comment-dots text-white text-3xl"></i></div>
            <div onClick={closeBTNFunction} className={`flex  items-center justify-center rounded-full w-16 h-16 float-right mt-3 bg-blue-600 cursor-pointer hover:bg-blue-800 transition-colors ${closeBtn}`}><i class="fal fa-times text-white text-3xl"></i></div>
           </div>
        </>
    )
}

export default ChatWidget
