import PageTitle from "../components/PageTitle";
import SettingsTabs from "../components/SettingsTabs";
import BookAlt from "../assets/icons/book-alt.svg"; 
import Button from "../components/Button";
import Members from "../components/TeamMembers";
import Input from "../components/Input";


import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";




const contacts = [
  {
    name: "MiKe",
    email: "m.miller1@example.com",
    role : "Admin",
    status : 'online',
    lastActive : "Now",
    img : "https://previews.dropbox.com/p/thumb/ABnowixTPVBvn9JwKof2i3lJub9se7HarVTizQ-n2JB6Gmagt5gv3Bfn9swqUgYTEr2nI96BMleNyb5JGWajQxKs3JhpnJJfMA4MPhqodapeKMghe7X8_QUgKrs_XNa-wfxJ6rU5IN45r7tDdnr-4gy-Ny4JuuOXJXm93Z7g3ac5Y-46pfBnYb7kO67jZNhA9W5ry7F7kbsUdVtFEBIJxX9cTU7UpL8P7dQnFNvk0DN6F6seGG8JUtJax0FmidsnoamkcAmdwErdzrsntGqdB1ynZ4s0cb5KukY586r6bh6ak5zA2kaNRUTpe9hOIYjVhlK4THpLmXt3uyYjLsBCXxZ3ZPLhYL0TuwURXHK3_-rNSLAvDhR8V8ysZ1ON5uSmdy0/p.jpeg",
    language : "German"
  },
  {
    name: "Bill Gates",
    email: "m.mille2@example.com",
    role : "Editor",
    status : 'offline',
    lastActive : "May 20 2022",
    img : "https://previews.dropbox.com/p/thumb/ABln2DingRZH8u06t6YACj5cT8d8bhLT3MeoSRT-ROmu2GjhoXrNkb6r_FZx-kMvQE4i0PmUeBXAQLuaTkkDidzDItB5eRmA5hx_7i6ftnr1ximZxjkWATh2iuhyOIbKz05W5eBNNncOvX2wGjuV2REZryHRDWMsFLMtj3HI8BanSoksxdU3hJYi1McLw2-plwUPoOGO09hTEwdKXTZbThUrPjTtSzKgcewi9iEc-93dYnlbhX-_dohXj1Tq-SGKioHgPbq7qBnlkfkRXu6LyaBWJsIWWvY4M6LDK9X8WJGSf_K9jRQN2-8WaOo93G_Cba35rtVksprRhwwOShClK55OEwjfLDow1LccHonGcRO7sJ0TarNUaO7P33THT3py9TlF8muuz7d47NrqWXqMAUAk6niY5xigYySw25BDwItf3073-Iuu2oE9cbA8ZD3ytwk/p.jpeg",
    language: "English"
  },
  {
    name: "Michael Miller",
    email: "m.mille4r@example.com",
    role : "Support",
    status : 'offline',
    lastActive : "May 20 2022",
    img : "https://previews.dropbox.com/p/thumb/ABln2DingRZH8u06t6YACj5cT8d8bhLT3MeoSRT-ROmu2GjhoXrNkb6r_FZx-kMvQE4i0PmUeBXAQLuaTkkDidzDItB5eRmA5hx_7i6ftnr1ximZxjkWATh2iuhyOIbKz05W5eBNNncOvX2wGjuV2REZryHRDWMsFLMtj3HI8BanSoksxdU3hJYi1McLw2-plwUPoOGO09hTEwdKXTZbThUrPjTtSzKgcewi9iEc-93dYnlbhX-_dohXj1Tq-SGKioHgPbq7qBnlkfkRXu6LyaBWJsIWWvY4M6LDK9X8WJGSf_K9jRQN2-8WaOo93G_Cba35rtVksprRhwwOShClK55OEwjfLDow1LccHonGcRO7sJ0TarNUaO7P33THT3py9TlF8muuz7d47NrqWXqMAUAk6niY5xigYySw25BDwItf3073-Iuu2oE9cbA8ZD3ytwk/p.jpeg",
    language : 'All'
  }
];





const TeamMember = () => {
  const [showModal, setshowModal] = useState("opacity-0 invisible");

  let modalFunction = () =>{
    setshowModal("opacity-100 visible")
  }
  const [selected, setSelected] = useState("");
  return (
    <div className="px-10">
      <SettingsTabs />


      <div className="flex mt-10 justify-between w-11/12">
        <div>
<div className="font-bold text-xl opacity-75 relative z-10">Team Member</div>
<p className=""><a href="#" className="text-blue-600" target="_blank" rel="noopener noreferrer"><img src={BookAlt} alt="icon" className="w-4 inline cursor-pointer" /> Learn more about adding new team members</a></p>
</div>

<div onClick={modalFunction} className="flex cursor-pointer  items-center gap-3 font-normal ">
<button className="text-white bg-blue-600 hover:opacity-70 font-normal block px-10 py-2 rounded-full">Add a Team Member</button>
</div>

</div>

<Members data={contacts} />

{/* POPUP */}


<div className={`fixed  top-0 transition mainFixedOverlay w-screen h-screen flex items-center justify-center ${showModal}`}>

<div className="blackOverlay absolute left-0 top-0 w-full h-full" onClick={() => setshowModal('opacity-0 invisible')}></div>

<div className="rounded-lg bg-white whiteBoxSocialMediaIcons py-8 pb-10 px-7 relative z-50">
<div className="flex items-center justify-between">
              <div className="font-bold opacity-70 text-xl">Team Member</div>
              <i class="fal fa-times cursor-pointer text-black opacity-70 text-xl" onClick={() => setshowModal('opacity-0 invisible')}></i>
</div>

        <form className="">
            <div className="my-3">
              <Input placeholder="Name"></Input>
            </div>
            <div className="my-3">
              <Input placeholder="Name"></Input>
            </div>
            <div className="my-3">
              <p className=" mb-2">Role</p>
            <select className="rounded-lg cursor-pointer border border-gray-400 w-full">
              <option value="Admin">Admin</option>
              <option value="Editor">Editor</option>
              <option value="Support">Support</option>
            </select>
            </div>
            <ReactFlagsSelect className="my-3" placeholder="Select Language" />

            <div className="flex justify-end">
              <Button variant="disabled">Cancel</Button>
              <Button>save</Button>
            </div>
      
        </form>

</div>
   </div>
 </div>





  );
};



export default TeamMember;
