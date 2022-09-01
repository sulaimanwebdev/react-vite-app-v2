import React from 'react'
import { Link } from "react-router-dom";

const ChampaignMenu = () => {
    return (
        <div className="flex items-center justify-end gap-7 mt-10 mb-10">
        <Link to="/champaign">Champaign</Link>
        <Link to="/banner-template">Banner Template</Link>
        <Link to="/create-banner">Create Banner</Link>



       </div>
    )
}

export default ChampaignMenu