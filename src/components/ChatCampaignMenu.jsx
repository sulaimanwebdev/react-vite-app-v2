import React from 'react'
import { Link } from "react-router-dom";

const ChatCampaignMenu = () => {
  return (
    <div className="flex items-center justify-end gap-7 mt-10 mb-10">
    <Link to="/chat-champaign">Chat Champaign</Link>
    <Link to="/chat-banner-template">Chat Banner Template</Link>
    <Link to="/chat-create-banner">Chat Create Banner</Link>



   </div>
  )
}

export default ChatCampaignMenu