import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsIcon from "@mui/icons-material/Notifications";
import logo from "../images/yt-clone-logo.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from "@mui/material";
const Header = (props) => {
  const{openmenu,toggleMenu}=props;
  return (
    <div className="header">
      <div className="header-left">
        {!openmenu && <IconButton className="menu-bar-button">
          <CloseIcon className="menu-bar icons" onClick={toggleMenu}/>
        </IconButton>}
        {openmenu &&
        <IconButton className="menu-bar-button">
          <MenuIcon className="menu-bar icons" onClick={toggleMenu}/>
        </IconButton>
        }
        <img src={logo} alt="img here" className="logo" />
      </div>
      <div className="header-center">
        <input type="text" name="" className="search" placeholder="Search" />
          <SearchIcon className="search-icon icons" />
      </div>
      <div className="header-right">
        <IconButton>
          <VideoCallIcon className="icons" />
        </IconButton>
        <IconButton>
          <NotificationsIcon className="icons" />
        </IconButton>
        <IconButton>
          <AccountCircleIcon className="icons" />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
