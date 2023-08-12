import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircleOutlined";
import "./VideoCard.css";
import logo from '../images/thumb.avif'
const VideoCard = ({ video }) => {
  const { title, views, channel, timestamp, image } = video;
  return (
    <div className="video-card">
      <img src={image} alt="" className="video-card-thumb" />
      <div className="video-info">
        <AccountCircleIcon className="icons"/>
        <div className="video-text">
          <span>{title}</span>
          <p>{channel}</p>
          <span>
            {views} • {timestamp}
          </span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
