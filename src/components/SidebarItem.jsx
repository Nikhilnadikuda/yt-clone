import React from 'react'
import './Sidebar.css'
import '../App.css'
const SidebarItem = ({active,title,Icon,iconsize}) => {
  return (
    <div className={`sidebar-item ${title==""?"plus":title}${active?"active":""}`}>
        <Icon className="menu-icon" style={title==""?{fontSize:"40px",border:"1px"}:{}}/>
        <div className="sidebar-title">
            {title}
        </div>
    </div>
  )
}

export default SidebarItem