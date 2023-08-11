import React from 'react'
import './Sidebar.css'
const SidebarItem = ({active,title,Icon}) => {
  return (
    <div className={`sidebar-item ${active && "active"}`}>
        <Icon className="menu-icon"/>
        <div className="sidebar-title">
            {title}
        </div>
    </div>
  )
}

export default SidebarItem