import React from 'react'
import SidebarItem from './SidebarItem'
import HomeIcon from '@mui/icons-material/HomeOutlined';
import SubscriptionsIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryIcon from '@mui/icons-material/HistoryOutlined';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLaterOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUpOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMoreOutlined';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import { Link } from 'react-router-dom';
const Sidebar = ({ openmenu }) => {
  return (
    <div className={`sidebar-menu-container ${openmenu ? "open" : "close"}`}>
      <Link to="/" className='item-link'>
        <SidebarItem active={false} title="Home" Icon={HomeIcon} />
      </Link>
      <Link to="/feed/shorts" className='item-link'>
        <SidebarItem title="Shorts" Icon={SubscriptionsIcon} />
      </Link>
      <Link to="/create" className="item-link">
        <SidebarItem title="" Icon={ControlPointOutlinedIcon} iconsize={"40px"} className="plus-icon" />
      </Link>
      <Link to="/subscribers" className='item-link'>
        <SidebarItem title="Subs" Icon={SubscriptionsIcon} />
      </Link>
      <hr className='line' />
      <Link to="/library" className="item-link">
        <SidebarItem title="Library" Icon={VideoLibraryIcon} />
      </Link>
      <Link to="/history" className="item-link">
        <SidebarItem title="History" Icon={HistoryIcon} />
      </Link>
      <Link to="/videos" className="item-link">
        <SidebarItem title="Your Videos" Icon={OndemandVideoIcon} />
      </Link>
      <Link to="/wlater" className="item-link">
        <SidebarItem title="Watch Later" Icon={WatchLaterIcon} />
      </Link>
      <Link to="/liked" className="item-link">
        <SidebarItem title="Liked videos" Icon={ThumbUpIcon} />
      </Link>
      <SidebarItem title="Show more" Icon={ExpandMoreIcon} />
    </div>
  )
}

export default Sidebar

