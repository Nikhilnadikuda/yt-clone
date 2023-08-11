import React from 'react'
import SidebarItem from './SidebarItem'
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const Sidebar = () => {
  return (
    <div className='sidebar-menu-container'>
        <SidebarItem active={false} title="Home" Icon={HomeIcon}/>
        <SidebarItem title="Subscription" Icon={SubscriptionsIcon}/>
        <SidebarItem title="Trending" Icon={WhatshotIcon}/>
        <hr />
        <SidebarItem title="Library" Icon={VideoLibraryIcon}/>
        <SidebarItem title="History" Icon={HistoryIcon}/>
        <SidebarItem title="Your Videos" Icon={OndemandVideoIcon}/>
        <SidebarItem title="Watch Later" Icon={WatchLaterIcon}/>
        <SidebarItem title="Liked videos" Icon={ThumbUpIcon}/>
        <SidebarItem title="Show more" Icon={ExpandMoreIcon}/>
    </div>
  )
}

export default Sidebar